const React = require("react");
// const Header = require('./Header');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>TOLYA</title>
      </head>
      <body>
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};
