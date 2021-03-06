import React from "react";
import Component from "./component.jsx";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import service from "../../../services/tasks.js";

class AddContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit() => " + this.state.content);
    service
      .create({ label: this.state.content })
      .then(() => console.log("normalement c'est envoyé "))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <h1>Nouvelle Tache</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Tache
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Description tache"
                value={this.state.content}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                Cette tache sera ajouté dans la base de données.
              </Form.Text>
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AddContainer;
