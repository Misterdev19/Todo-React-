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
                <p className="lead ">{props.text}</p>
            </td>
            <td>
                <div className="text-center ">
                    {(props.st) ? <span class="rounded-pill badge bg-success">Completed</span> :
                        <span class="rounded-pill badge bg-danger">not completed</span>}
                </div>
            </td>
            <td>
                <div className="text-center ">
                    <Button color="warning me-3" size="sm" ><FaRegTrashAlt /></Button>
                    <Button color="primary" size="sm"  > <FaCheckSquare /></Button>
                </div>
            </td>
        </tr>
    );
}