import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./dashboard/dashboard";
import TasksIndex from "./tasks/index/container.jsx";
import AddTasksIndex from "./tasks/index/AddContainer.jsx";

function RouterOutlet({}) {
  return (
    <React.Fragment>
      <React.Fragment>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/tasks" component={TasksIndex} />
        <Route exact path="/addTask" component={AddTasksIndex} />
      </React.Fragment>
    </React.Fragment>
  );
}

export default RouterOutlet;
