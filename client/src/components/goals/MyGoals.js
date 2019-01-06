import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import M from "materialize-css";
import GoalCard from "./GoalCard";

import { GoalDetail } from "./GoalDetail";

import "./MyGoals.css";

class MyGoals extends Component {
  state = {
    current: null
  };
  componentDidMount() {
    console.log("My goals component mounted");
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, { preventScrolling: false });
    instances[0].open();
  }

  handleGoalDetail = goal => {
    console.log("about to render goal details ", goal);
    this.setState({ current: goal });
  };

  render() {
    const goalList = this.props.goals.map((goal, index) => (
      <GoalCard
        goal={goal}
        key={index}
        handleGoalDetail={this.handleGoalDetail}
      />
    ));

    return (
      <div>
        <div>
          <ul
            id="slide-out"
            className="sidenav sidenav-fixed collection with-header"
          >
            <li className="collection-header row">
              <h4 className="left">My Goals</h4>
              <span className="right">
                <Link
                  to="/goals/new"
                  class="btn-floating btn-medium waves-effect waves-light red"
                >
                  <i class="material-icons">add</i>
                </Link>
              </span>
            </li>

            {goalList}
          </ul>
          <a
            href="#"
            data-target="slide-out"
            className="sidenav-trigger hide-on-large-only"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>
        {this.state.current && (
          <React.Fragment>
            <GoalDetail goal={this.state.current} />
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default MyGoals;
