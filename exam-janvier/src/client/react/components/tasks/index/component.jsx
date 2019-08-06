import React from "react";
import { Container, ListGroup, Button, Form } from "react-bootstrap";

const Component = ({ tasks, handleDelete }) => {
  return (
    <Container>
      <h1>Tasks</h1>
      <Form>
        {tasks.map(task => (
          <ListGroup.Item as="li" action key={task._id}>
            {task.content}
            <Button
              onClick={()=> handleDelete(task._id)}
              variant="primary"
              type="submit"
              style={{ float: "right" }}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </Form>
    </Container>
  );
};

export default Component;