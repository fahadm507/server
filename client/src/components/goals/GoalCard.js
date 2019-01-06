import React, { Component } from "react";

class GoalCard extends Component {
  handleClick = (e, goal) => {
    e.preventDefault();
    this.props.handleGoalDetail(goal);
  };
  render() {
    const { goal } = this.props;
    return (
      <li class="collection-item avatar">
        <a href="#" onClick={e => this.handleClick(e, goal)}>
          <i class="material-icons circle">attach_money</i>
          <span class="title">
            <div>{goal.title}</div>
          </span>
          <br />
          <p>
            Days Left:
            <i className="badge"> 87</i>
          </p>
        </a>
      </li>
    );
  }
}

export default GoalCard;
