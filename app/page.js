"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    let allUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    allUsers = await allUsers.json();
    setLoading(false);
    setUsers(allUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRowClicked = (data) => {
    console.log("data:", data);
  };

  return (
    <div className="row-center">
      {Loading ? (
        "loading user lists..."
      ) : (
        <table id="customers">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>

          {users.map((data) => (
            <tr
              className="pointer"
              key={data.id}
              onClick={() => handleRowClicked(data)}
            >
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
