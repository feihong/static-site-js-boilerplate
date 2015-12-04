import os.path as op
import urlparse
from mako.template import Template
from mako.lookup import TemplateLookup
import bottle
from livereload import Server
from livereload.watcher import Watcher


SITE = '/javascript-examples/'


lookup = TemplateLookup(directories=['templates'])

app = bottle.Bottle()

@app.route('/')
def index():
    return '<a href="%s">Go to site</a>' % SITE

@app.route(SITE)
@app.route(SITE + '<path:path>')
def generate(path=''):
    file_ = get_file(path)

    if not file_.endswith('.html'):
        return bottle.static_file(path, root='site')

    template = Template(open(file_).read(), lookup=lookup)
    return template.render(site=SITE)


def get_file(path):
    result = op.join('site', path)
    if op.isfile(result):
        return result

    if op.isdir(result) and op.isfile(op.join(result, 'index.html')):
        return op.join(result, 'index.html')

    return 'site/404.html'

if __name__ == '__main__':
    # bottle.debug(True)
    # bottle.run(app, host='localhost', port=8000, reloader=True)
    watcher = Watcher()
    watcher.watch('site', ignore=lambda p: p.endswith('.babel'))
    server = Server(app, watcher)
    server.serve(port=8000)
