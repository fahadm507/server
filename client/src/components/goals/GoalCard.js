import React, { Component } from "react";

class GoalCard extends Component {
  state = {
    activeGoal: {}
  };

  handleClick = (e, goal) => {
    e.preventDefault();
    this.props.handleGoalDetail(goal);
    this.setState(state => {
      return { activeGoal: goal };
    });
  };

  render() {
    const { goal } = this.props;
    const { activeGoal } = this.state;

    const elem = document.querySelector(".active-goal");

    if (elem) elem.classList.toggle("active-goal");

    return (
      <li
        id={`goal-${goal.id}`}
        className={`collection-item avatar ${
          goal.id === this.state.activeGoal.id ? "active-goal" : ""
        }`}
      >
        <a href="#" onClick={e => this.handleClick(e, goal)}>
          <i className="material-icons circle">attach_money</i>
          <span className="title">{goal.title}</span>
        </a>
      </li>
    );
  }
}

export default GoalCard;
