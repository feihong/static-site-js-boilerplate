import os
import os.path as op
import shutil
from subprocess import Popen, PIPE
from mako.template import Template
from mako.lookup import TemplateLookup
import bottle
from livereload import Server
from livereload.watcher import Watcher
from invoke import run, task


SITE = '/javascript-examples/'
IMPORTS = [
    'from markdown2 import markdown',
    'from docutils.core import publish_parts; rst = lambda s: publish_parts(s, writer_name="html")["html_body"]'
]

lookup = TemplateLookup(directories=['templates'])

app = bottle.Bottle()

if SITE != '/':
    @app.route('/')
    def index():
        return '<a href="%s">Go to site</a>' % SITE


@app.route(SITE)
@app.route(SITE + '<path:path>')
def page(path=''):
    file_ = get_file(path)
    if not file_.endswith('.html'):
        return bottle.static_file(path, root='site')
    template = Template(open(file_).read(), lookup=lookup, imports=IMPORTS)
    return template.render(site=SITE)


@task
def serve():
    # bottle.debug(True)
    # bottle.run(app, host='localhost', port=8000, reloader=True)
    watcher = Watcher()
    watcher.watch('site', ignore=lambda p: p.endswith('.babel'))
    watcher.watch('templates')
    server = Server(app, watcher)
    server.serve(port=8000)


@task
def build():
    for root, dirs, files in os.walk('site'):
        for file_ in files:
            print op.join(root, file_)


@task
def buildjs(name):
    if name == 'lib':
        run("""browserify \
          -r lodash -r underscore.string \
          -r react -r react-dom \
          -o site/js/lib-bundle.js
        """)
    else:
        run("""browserify --debug --no-bundle-external --extension=.babel \
          site/%(name)s/app.babel \
          -o site/%(name)s/bundle.js \
          -t [ babelify --extensions .babel --presets [ es2015 react ] ]
        """ % {'name': name})


@task
def watchjs(name):
    pass


def get_file(path):
    result = op.join('site', path)
    if op.isfile(result):
        return result
    if op.isdir(result) and op.isfile(op.join(result, 'index.html')):
        return op.join(result, 'index.html')
    return 'site/404.html'
