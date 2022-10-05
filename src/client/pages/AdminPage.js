import React, { Component } from "react";
import { fetchAdmins } from "../actions";
import { connect } from "react-redux";
import requireAuth from "../Components/HOC/requireAuth";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <h3>Protected List of Admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { admins: state.admins };
};

// function loadData(store) {
//  return store.dispatch(fetchAdmins());   //manually dispatching action to get data in server
// }

export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
};
