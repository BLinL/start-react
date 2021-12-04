import Button from '@material-ui/core/Button';
import React, { useState } from "react";


export function ToDoAdd(props) {
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (
        <div>
            <input placeholder="add todo item" onChange={handleChange.bind(this)}></input>
            <Button variant="contained" onClick={() => props.addItem(input)}>add</Button>
        </div>
    );
}