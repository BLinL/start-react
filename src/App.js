import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { ToDoAdd } from "./TodoAdd";


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

export default App;
