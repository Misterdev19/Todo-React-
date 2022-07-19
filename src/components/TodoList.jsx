import React from "react";
import {ListGroup} from "reactstrap"
import { Button } from "react-bootstrap";

export function TodoList(props) {
    return (
        <ListGroup>
                {props.children}
        </ListGroup>

    );
}