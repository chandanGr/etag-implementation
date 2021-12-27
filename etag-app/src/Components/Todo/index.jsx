import React from "react";

const Todos = ({ todos, addTodo }) => {
  console.count("Todo");
  return (
    <>
      <h2>My Todos</h2>
      {todos && todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default React.memo(Todos);