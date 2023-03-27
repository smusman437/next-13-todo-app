"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Table = ({ columns, lists }) => {
  const router = useRouter();
  const handleRowClicked = (row) => {
    router.push(`/todos/${row.id}`);
    console.log("row:", row);
  };
  return (
    <table id="customers">
      <tr>
        {columns.map((col) => (
          <th key={col.value}>{col.label}</th>
        ))}
      </tr>

      {lists.map((data) => (
        <tr
          className="pointer"
          key={data.id}
          onClick={() => handleRowClicked(data)}
        >
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.completed ? "Yes" : "No"}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
