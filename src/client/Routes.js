import React from "react";
// import { Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...UserListPage,
        path: "/users",
      },
      {
        ...AdminPage,
        path: "/admins",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

// export default () => {
//     return (
//         // <div>
//         //     <Route exact path="/" component={Home} />
//         //     <Route exact path="/users" component={UserList} />

//         // </div>

//     );
// };

// IMP :- **We will replace above routes code instead with an array of objets for server side data loading also
