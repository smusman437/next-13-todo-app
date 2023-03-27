import React from "react";

const fetchTodo = async (id) => {
  let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
};

const fetchUser = async (id) => {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
};

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  const trimmedTodos = todos.splice(0, 10);
  return trimmedTodos.map((todo) => ({ id: todo.id.toString() }));
}

const Todo = async ({ params }) => {
  const { id } = params;
  const todo = await fetchTodo(id);
  const user = await fetchUser(todo.userId);
  return (
    <div className="row-center">
      <div className="card">
        <h3>Todo: {todo.id}</h3>
        <div style={{ marginTop: "10px" }}>
          Title: <span>{todo.title}</span>{" "}
        </div>
        <div style={{ marginTop: "5px" }}>
          Description: <span>{todo.description}</span>
        </div>
        <div style={{ marginTop: "5px" }}>
          Completed: <span>{todo.isComplete ? "Yes" : "No"}</span>
        </div>
        <h3>User Info</h3>
        <div style={{ marginTop: "5px" }}>
          Name: <span>{user.name}</span>
        </div>
        <div style={{ marginTop: "5px" }}>
          UserName: <span>{user.username}</span>
        </div>
        <div style={{ marginTop: "5px" }}>
          email: <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
