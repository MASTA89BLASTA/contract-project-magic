const React = require("react");
// const Header = require('./Header');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
