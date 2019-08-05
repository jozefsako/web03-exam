import React from "react";
import { Container, ListGroup } from 'react-bootstrap';


const Component = ({ tasks }) => {
    return (
        <Container>
            <h1>Tasks</h1>
            <ListGroup>
                {
                    tasks.map((task, i) => (
                        <ListGroup.item key={i}>
                            <p id={task.id}>{task.content}</p>
                        </ListGroup.item>
                    ))
                }
            </ListGroup>
        </Container>
    )
}

export default Component;