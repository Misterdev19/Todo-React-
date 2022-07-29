import React  from "react";
import { Input } from "reactstrap";

export function TodoSearch (){

     const  onSearchValueChange = (event)=>{
          console.log(event.target.value);
     }
    return  (
        <div>
        <Input
            bsSize="md"
            placeholder="New task"
            onChange={onSearchValueChange}
        />
        </div>
    );
}