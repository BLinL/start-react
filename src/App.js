import React, { useState } from "react";

const myList = [
  { id: 0, state: false, text: "吃饭" },
  { id: 1, state: false, text: "睡觉" },
];

//父组件
function App() {
  const [list, setLists] = useState(myList);

  function handleState(id) {
    const newList = list.map(item => {
      if (item.id === id) {
        item.state = !item.state;
      }
      return item;
    });

    setLists(newList);
  }

  function addTodoItem(item) {
    setLists([{
      id: list.length,
      state: false,
      text: item.replace(/<[^>]*>/ig, '')
    }, ...list]);
  }

  return (
    <div>
      <h1>hello react</h1>
      <ToDoAdd addItem={addTodoItem} />
      <TodoItemList list={list}
        handleState={handleState}
      />
    </div>
  );
}

function ToDoAdd(props) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <div>
      <input placeholder="add todo item" onChange={handleChange.bind(this)}></input>
      <button onClick={() => props.addItem(input)}>add</button>
    </div>
  );
}

function TodoItemList(props) {
  return (
    <div>
      {
        props.list.map(item => <TodoItem text={item.text} // 列表
          state={item.state}
          key={item.id}
          id={item.id}
          handleState={props.handleState}
        ></TodoItem>)
      }
    </div>
  );
}


function TodoItem(props) {
  return (
    <div>
      <input type="checkbox"
        onClick={() => props.handleState(props.id)}
        checked={props.state}>
      </input>
      {props.state  // 条件渲染
        ? <del>{props.text}</del> 
        : <span>{props.text}</span>
      }
    </div>
  );
}

export default App;
