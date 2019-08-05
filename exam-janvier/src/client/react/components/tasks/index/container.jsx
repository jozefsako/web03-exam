import React from "react";
import Component from "./component.jsx";
import service from "../../../services/tasks";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }

    componentDidMount() {
        service.retrieveAll();
    }

    componentDidUpdate() {
        this.setState({ tasks: o });
    }

    render() {
        return (
            <Component
                tasks={this.state.tasks}
            />
        );
    }
}

export default Container;