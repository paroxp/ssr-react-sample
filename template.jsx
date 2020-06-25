const { renderToStaticMarkup } = require('react-dom/server');

export function render(page, config = {}) {
  const title = config.title || 'Server Side Rendering - Sample';

  return `<!doctype html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <header><h1>${title}</h1></header>
      <main>
        ${renderToStaticMarkup(page)}
      </main>
      <footer><p><small>Copyright ${new Date().getFullYear()}</small></p></footer>
    </body>
    </html>`;
}
