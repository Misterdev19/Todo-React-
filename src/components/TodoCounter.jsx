import React  from "react";

export function TodoCounter ({total , completed}){
    let countTodo =  completed.length;
    return (
        <h3 className="display-6">Has Complete  {countTodo} of {total} task</h3>
    )
}