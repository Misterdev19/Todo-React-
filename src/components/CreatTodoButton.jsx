import React from "react";
import { Button } from "react-bootstrap";
import {FaPlusSquare } from "react-icons/fa";


export function CreatTodoButton() {
    const CreateTask =(smg)=>{
       alert(smg);
    }
    return (
        <div>
            <Button
                color="success"
                onClick={ ()=> CreateTask("Success")}
            >
               <FaPlusSquare/>
            </Button>
        </div>
    );
}