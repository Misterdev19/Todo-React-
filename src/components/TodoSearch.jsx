import React from "react";
import { Input } from "reactstrap";

export function TodoSearch({ searchValue, setSearchValue , todoFilter }) {
    const onSearchValueChange = (event) => {
        // console.log(event.target.value + '='+ todoFilter)
        setSearchValue(event.target.value);
    }

    return (
        <div>
            <Input
                bsSize="md"
                placeholder="New task"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    );
}