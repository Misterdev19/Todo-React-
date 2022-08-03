import React from "react";
import { Button } from "reactstrap";
import { FaCheckSquare, FaRegTrashAlt } from 'react-icons/fa';

export function TodoItem(props) {

    const OnCompleteTask =()=>{
        alert("Task complete"+ props.text);
    }
    const OnDeleteTask=()=>{
        alert("Task "+ props.text+ " deleted");

    }
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
                    {(props.st) ? <span className="rounded-pill badge bg-success">Completed</span> :
                        <span className="rounded-pill badge bg-danger">not completed</span>}
                </div>
            </td>
            <td>
                <div className="text-center ">
                    <Button color="warning me-3" size="sm"   onClick={OnDeleteTask} ><FaRegTrashAlt /></Button>
                    <Button color="primary" size="sm" onClick={OnCompleteTask} > <FaCheckSquare /></Button>
                </div>
            </td>
        </tr>
    );
}