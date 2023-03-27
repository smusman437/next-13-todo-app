import Table from "./table";

const fetchTodos = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  return res.json();
};

const columns = [
  { label: "Id", value: "id" },
  { label: "Title", value: "title" },
  { label: "isComplete", value: "isComplete" },
];

const Todo = async () => {
  const todos = await fetchTodos();

  return (
    <div className="row-center">
      <Table columns={columns} lists={todos} />
    </div>
  );
};

export default Todo;
