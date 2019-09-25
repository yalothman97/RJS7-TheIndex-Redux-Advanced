import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

import fetchAllAuthors from "./redux/actions/";

class App extends Component {
  state = {
    authors: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const authors = await this.fetchAllAuthors();
      this.setState({
        authors: authors,
        loading: false
      });
    } catch (err) {
      console.error(err);
    }
  }

  getView = () => {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route
            path="/authors/"
            render={props => (
              <AuthorsList {...props} authors={this.state.authors} />
            )}
          />
        </Switch>
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllAuthors: res => dispatch(fetchAllAuthors(res))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
