/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users'; //type_declaration
var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/users');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/current_user');

                        case 2:
                            res = _context2.sent;


                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get('/admins');

                        case 2:
                            res = _context3.sent;


                            dispatch({
                                type: FETCH_ADMINS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import { Route } from "react-router-dom";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(18);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UserListPage = __webpack_require__(19);

var _UserListPage2 = _interopRequireDefault(_UserListPage);

var _AdminPage = __webpack_require__(26);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _NotFoundPage = __webpack_require__(24);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _UserListPage2.default, {
    path: "/users"
  }), _extends({}, _AdminPage2.default, {
    path: "/admins"
  }), _extends({}, _NotFoundPage2.default)]
})];

// export default () => {
//     return (
//         // <div>
//         //     <Route exact path="/" component={Home} />
//         //     <Route exact path="/users" component={UserList} />

//         // </div>

//     );
// };

// IMP :- **We will replace above routes code instead with an array of objets for server side data loading also

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _createStore = __webpack_require__(9);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(2);

var _expressHttpProxy = __webpack_require__(15);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(20);

var _renderer2 = _interopRequireDefault(_renderer);

var _express = __webpack_require__(23);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from "react";
// import { renderToString } from "react-dom/server";
// import Home from "./client/Components/Home";

// ** Above Code is commneted coz we created a renderer.js file to return html string for minizming improts an spliting logic

//ALL LATES ES2015 IMPORTS ABOVE REPLACING CONST ONE'S
var app = (0, _express2.default)(); //[ ROOT FILE for our application on the server ]

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


app.use("/api", (0, _expressHttpProxy2.default)("http://react-ssr-api.herokuapp.com", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000";
    return opts;
  }
}));

app.use(_express2.default.static("public")); //this tells express to treat that public directory ass a static or public for browser

//creating a root route for handling all pages

app.get("*", function (req, res) {
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
  var store = (0, _createStore2.default)(req);

  // some logic to initalize and load data into the store
  // matchRoutes Returns an array of matched routes.

  //all loadData functions will have refeence to the server redux store
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    //WE ARE DOING MAP HERE FOR VIDEO 84 ERROR API SOLUTION

    // if promise if for handling null values above
    if (promise) {
      return new Promise(function (resolve, reject) {
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
  Promise.all(promises).then(function () {
    //define context obj for 404 handling
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    console.log(context);
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
app.listen(3000, function () {
  console.log("port 3000 listening");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(10);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(12);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create server store file
// it will be slightly diff than client
// it will need some way to detect initial data load

// thunk for async action creators
exports.default = function (req) {

  var axiosInstance = _axios2.default.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
}; //createStore is used to create store and applymiddleware is used to hook up with any middleware in our application

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _userReducer = __webpack_require__(13);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _authReducers = __webpack_require__(14);

var _authReducers2 = _interopRequireDefault(_authReducers);

var _adminsReducer = __webpack_require__(25);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// file to combine all our different reducers together
exports.default = (0, _redux.combineReducers)({
    users: _userReducer2.default,
    auth: _authReducers2.default,
    admins: _adminsReducer2.default
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

var _Header = __webpack_require__(17);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var auth = _ref.auth;

  console.log("my auth staus", auth);

  var authButton = auth ? _react2.default.createElement(
    "a",
    { href: "/api/logout" },
    "Logout"
  ) // used anchor here because these request are outside react app
  : _react2.default.createElement(
    "a",
    { href: "/api/auth/google" },
    "Login"
  );

  return _react2.default.createElement(
    "nav",
    null,
    _react2.default.createElement(
      "div",
      { className: "nav-wrapper" },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/", className: "brand-logo" },
        "React SSR"
      ),
      _react2.default.createElement(
        "ul",
        { className: "right" },
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/users" },
            "Users"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/admins" },
            "Admins"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          authButton
        )
      )
    )
  );
};
function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//react app

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    { className: 'center-align', style: { marginTop: '200px' } },
    _react2.default.createElement(
      'h3',
      null,
      'Welcome'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Check out these awesome features'
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
  }

  _createClass(UserList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: "renderUsers",
    value: function renderUsers() {
      return this.props.users.map(function (user) {
        return _react2.default.createElement(
          "li",
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: "head",
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          "title",
          null,
          this.props.users.length + " Users Loaded"
        ),
        _react2.default.createElement("meta", { property: "og:title", content: "Users App" })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        this.head(),
        "UserList:",
        _react2.default.createElement(
          "ul",
          null,
          this.renderUsers()
        )
      );
    }
  }]);

  return UserList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { users: state.users };
};

function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)()); //manually dispatching action to get data in server
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UserList)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//provides the store to all the connected components in our application
// renderRoutes takes an arry of route objects and convert them into normal route components  and returns them
//a file for returning html string in index.js file

exports.default = function (req, store, context) {
  // <Routes /> WE will replace this with a helper function to use array of obj routes now

  var content = (0, _server.renderToString)(
  // context is req prop or it will not render anything if not present
  // location to telll which compoennt to render based on router
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  )); // turning components into string

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "\n    <html>\n      <head>\n      " + helmet.title.toString() + "\n      " + helmet.meta.toString() + "\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>  \n        <script> \n        window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n    ";
}; // used for routing
// used for ssr routing

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 404 page handling in server
function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;


  staticContext.notFound = true;

  return _react2.default.createElement(
    'h1',
    null,
    'NotFoundPage'
  );
}

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _requireAuth = __webpack_require__(27);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: "renderAdmins",
    value: function renderAdmins() {
      return this.props.admins.map(function (admin) {
        return _react2.default.createElement(
          "li",
          { key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h3",
          null,
          "Protected List of Admins"
        ),
        _react2.default.createElement(
          "ul",
          null,
          this.renderAdmins()
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { admins: state.admins };
};

// function loadData(store) {
//  return store.dispatch(fetchAdmins());   //manually dispatching action to get data in server
// }

exports.default = {
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _actions.fetchAdmins)());
  },
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage))
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Require Auth compoennt for handling video 84 error solution 3

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: "render",
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
          case null:
            return _react2.default.createElement(
              "div",
              null,
              "Loading..."
            );
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);