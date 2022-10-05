//a file for returning html string in index.js file

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom"; // used for ssr routing
import { renderRoutes } from "react-router-config"; // renderRoutes takes an arry of route objects and convert them into normal route components  and returns them
import Routes from "../client/Routes"; // used for routing
import { Provider } from "react-redux"; //provides the store to all the connected components in our application
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";


export default (req, store, context) => {
  // <Routes /> WE will replace this with a helper function to use array of obj routes now

  const content = renderToString(
    // context is req prop or it will not render anything if not present
    // location to telll which compoennt to render based on router
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  ); // turning components into string

  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>  
        <script> 
        window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
};
