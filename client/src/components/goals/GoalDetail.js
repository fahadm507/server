import React from "react";

export const GoalDetail = props => {
  return (
    <div className="row">
      <h1 className="left">{props.goal.title}</h1>
      <span class="right">Add a subgoal</span>
    </div>
  );
};
