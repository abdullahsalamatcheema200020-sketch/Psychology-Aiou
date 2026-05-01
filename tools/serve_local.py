from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os

ROOT = Path(__file__).resolve().parent.parent
os.chdir(ROOT)

class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.pdf': 'application/pdf',
        '.svg': 'image/svg+xml',
    }

if __name__ == '__main__':
    port = 8000
    server = ThreadingHTTPServer(('0.0.0.0', port), Handler)
    print(f'Serving AIOU study site at http://localhost:{port}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nServer stopped.')
