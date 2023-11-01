const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponent(
  component,
  props,
  { doctype } = { doctype: true },
) {
  const reactElement = React.createElement(component, {
    ...props,
    ...this.app.locals, // передастся все, что лежит в app.locals (title, user...)
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  return doctype ? `<!DOCTYPE html>${html}` : html;
}

// добавляем в объект res функцию renderComponent, мы будем вызывать эту функцию дальше в роутах
function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;
