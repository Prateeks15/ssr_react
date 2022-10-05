//[ ROOT FILE for our application on the server ]

// [ SOME IMP POINTS
// 1. Turn compoennts to html so that we can send them to browser is by using ReactDom

//  2. ReactDom is used to mount our react application to user browser
// 3. RENDER =>> its is mounted using render function on ReatDOM i.e Creates an instance of a bunch of components and mounts them into DOM node.
// 4. RenderToString =>>> Above thing is also possible through another function renderToString i.e Renders a bunch of components one time and produces a string out of all the Htmls.

// 5. PROBlem=>> if you will do node src/inde.js in terminal without webpack file will get below error: -----because node don't know jsx

// Error with above problem ==>>>
//SyntaxError: Unexpected token '<'
// at wrapSafe (internal/modules/cjs/loader.js:988:16)
// at Module._compile (internal/modules/cjs/loader.js:1036:27)
// at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
// at Module.load (internal/modules/cjs/loader.js:937:32)
// at Function.Module._load (internal/modules/cjs/loader.js:778:12)
// at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
// at internal/main/run_main_module.js:17:47

// 6. RUN the bundle.js file by node build/bundle.js it will run first ssr project in 3000 port

// {
// PROBLEM AND SOL FOR SSR IN REACT

// PROB 1.  JSX on the server
//SOL 1 =>> Run webpack on all of our server side code, then execute the resulting bundle

// PROB 2. Need to turn components into HTML,
// SOL 2. =>> USE the 'react-dom/server with libraries 'renderToString' function.

// }

// Universal JS:- The same code runs on the server and the browser i.e use same module code o every file but we are currently using import 7 const ie different code in diff files
// Isomorphic JS:- The same code runs on the server and the browser

// {

// const express = require('express');

// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;  //using const in import is because to work 2015 esmodules with common js modules.
// const Home = require('./client/Components/Home').default;

// WE WILL CONVERT ALL ABOVE IMPORT FROM COMMONJS INTO ES1015 MODERN IMPORT BELOW BECAUSE NOW WE ARE USING WEBPACK AND BABEL TO HANDLE JS FILES

// }
import "babel-polyfill";
import createStore from "./helper/createStore";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import renderer from "./helper/renderer";
import express from "express";
// import React from "react";
// import { renderToString } from "react-dom/server";
// import Home from "./client/Components/Home";

// ** Above Code is commneted coz we created a renderer.js file to return html string for minizming improts an spliting logic

//ALL LATES ES2015 IMPORTS ABOVE REPLACING CONST ONE'S
const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

app.use(express.static("public")); //this tells express to treat that public directory ass a static or public for browser

//creating a root route for handling all pages

app.get("*", (req, res) => {
  // 1. code here is an attempt to render home compoennt as a string and then send result to users browser

  // 2. using jsx in node js server in below code ... but nodejs doesn't know how to work with jsx so we will have to work this code in some way node js could learn running this code.
  // 3. to solve this we will use webpack and babel which will convert jsx into normal js then node will run that bundled js file into browser.
  // const content = renderToString(<Home />); // turning components into string

  // const html = `
  // <html>
  //   <head></head>
  //   <body>
  //     <div id="root">${content}</div>
  //     <script src="bundle.js"></script>
  //   </body>
  // </html>
  // `;

  // ** ABOVE CODE IS COMMENTED IN VIDEO 25 because we created renderer.js function minimizing imports here and calling html string function

  //we are doing above thing so that user will see same const content value but
  // we are also oing to tell user browser that they need to go back to our server
  // attempt to download this client bundle to work with events on client side
  const store = createStore(req);

  // some logic to initalize and load data into the store
  // matchRoutes Returns an array of matched routes.

  //all loadData functions will have refeence to the server redux store
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      //WE ARE DOING MAP HERE FOR VIDEO 84 ERROR API SOLUTION

      // if promise if for handling null values above
      if (promise) {
        return new Promise((resolve, reject) => {
          // we will always resolve inner promise
          promise.then(resolve).catch(resolve);
        });
      }
    });

  //   // WE ARE DOING below THIS HANDLING DUE TO THIS ERROR BELOW
  //   //UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
  //   //(node:16272) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

  // SOLUTION NUMBER 1 :- WHICH IS NOT RECOMMENDED i.e making a catch then res.send some message

  // .catch(() => {
  //   res.send("Something Went Wrong");   // This will come if js would e disabled in browser i.e fully express file will get rendered
  // });

  // SOLUTION NUMBER 2 :- WHICH IS ALSO NOT RECOMMENDED in video 82 and 83 i.e render content if api fails or success in both cases send html.

  // const render = () => {
  //   //define context obj for 404 handling
  //   const context = {};
  //   const content = renderer(req, store, context);

  //   if (context.notFound) {
  //     //error 404 page and error handling
  //     res.status(404);
  //   }
  //   res.send(content);
  // };

  // Promise.all(promises).then(render).catch(render);

  //SOLUTION 3 BEST APPROCH RECOMMENDED ONE
  // wrapping a promise we get in another promise in const promise match Routes by applying map function in video 84
  // creating a Reuire Auth HOC for handling at client side
  Promise.all(promises).then(() => {
    //define context obj for 404 handling
    const context = {};
    const content = renderer(req, store, context);
  console.log(context)
    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      //error 404 page and error handling
      res.status(404);
    }
    res.send(content);
  });
});

// app should listen to port 3000
app.listen(3000, () => {
  console.log("port 3000 listening");
});
