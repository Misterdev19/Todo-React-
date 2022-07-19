import React from "react";
import { Button } from "react-bootstrap";
import {FaPlusSquare } from "react-icons/fa";


export function CreatTodoButton() {
    return (
        <div>
            <Button
                color="success"
            >
               <FaPlusSquare/>
            </Button>
        </div>
    );
}