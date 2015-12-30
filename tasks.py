import os.path as op
from mako.template import Template
from mako.lookup import TemplateLookup
import bottle
from invoke import run, task
from pathlib2 import Path


SITE = '/static-site-js-boilerplate/'
IMPORTS = [
    'from filters import markdown, rst'
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
    return generate(file_)


@task
def serve():
    from livereload import Server
    from livereload.watcher import Watcher
    watcher = Watcher()
    watcher.watch('site', ignore=lambda p: p.endswith('.babel'))
    watcher.watch('templates')
    server = Server(app, watcher)
    server.serve(port=8000)


@task
def build():
    clean()
    buildjs()
    for src in Path('site').rglob('*?.*'):
        dest = Path('build') / src.relative_to('site')
        # The sourcemap files are useless in production.
        if dest.suffix == '.map':
            continue
        print dest
        copy_or_generate(src, dest)


@task
def clean():
    if op.isdir('build'):
        run('rm -rf build/*')


@task
def buildjs():
    run('webpack --progress --colors --optimize-minimize')


@task
def watchjs():
    run('webpack --progress --colors -d --watch')


@task
def publish():
    build()
    run('ghp-import -n -p build')


def get_file(path):
    result = op.join('site', path)
    if op.isfile(result):
        return result
    if op.isdir(result) and op.isfile(op.join(result, 'index.html')):
        return op.join(result, 'index.html')
    return 'site/404.html'


def generate(path):
    template = Template(open(path).read(), lookup=lookup, imports=IMPORTS)
    return template.render(site=SITE)


def copy_or_generate(src, dest):
    import shutil
    if not dest.exists():
        dest.parent.mkdir(parents=True, exist_ok=True)
    if src.suffix == '.html':
        with dest.open('w') as fp:
            fp.write(generate(str(src)))
    else:
        shutil.copy(str(src), str(dest))
