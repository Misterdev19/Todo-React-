import React  from "react";
import { Input } from "reactstrap";

export function TodoSearch (){
    return  (
        <div>
        <Input
            bsSize="md"
            placeholder="New task"
        />
        </div>
    );
}