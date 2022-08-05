import React from "react";
import { Button } from "reactstrap";
import { FaCheckSquare, FaRegTrashAlt } from 'react-icons/fa';

export function TodoItem(props) {
    return (
        <tr>
            <td>
                {props.id}
            </td>
            <td>
                <p className="lead ">{(props.st) ? <spam><del>{props.text}</del></spam> : <spam>{props.text}</spam>}</p>
            </td>
            <td>
                <div className="text-center ">
                    {(props.st) ? <span className="rounded-pill badge bg-success">Completed</span> :
                        <span className="rounded-pill badge bg-danger">not completed</span>}
                </div>
            </td>
            <td>
                <div className="text-center ">
                    <Button color="warning me-3" size="sm" onClick={props.onDelete} ><FaRegTrashAlt /></Button>
                    <Button color="primary" size="sm" onClick={props.onComplete} > <FaCheckSquare /></Button>
                </div>
            </td>
        </tr>
    );
}