import React, { Component } from "react";
import { fetchUsers } from "../actions";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        UserList:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

function loadData(store) {
  return store.dispatch(fetchUsers()); //manually dispatching action to get data in server
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UserList),
};
