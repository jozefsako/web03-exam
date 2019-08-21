import React from "react";
import Component from "./component.jsx";
import service from "./../../../services/tasks";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id_task) {
    console.log("handleDelete()");
    service
      .destroy(id_task)
      .then(() => {
        this.fetchTasks();
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchTasks() {
    console.log("fetchTasks()");
    service
      .retrieveAll()
      .then(response => {
        this.setState({ tasks: response });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <Component tasks={this.state.tasks} handleDelete={this.handleDelete} />
    );
  }
}

export default Container;
