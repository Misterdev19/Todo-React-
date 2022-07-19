import React from "react";
import {ListGroupItem , Button} from "reactstrap";
import { FaCheckSquare , FaRegTrashAlt } from 'react-icons/fa';

export function TodoItem(props) {
    return (
        <ListGroupItem>
            <p> <Button color="danger" size="sm"><FaRegTrashAlt/></Button> {props.text} <Button color="success" size="sm"> <FaCheckSquare/></Button> </p>
        </ListGroupItem>
    );
}