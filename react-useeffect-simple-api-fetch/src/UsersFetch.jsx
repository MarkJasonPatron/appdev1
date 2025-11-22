import { useEffect, useState } from "react";

function TodoList() {
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component first loads
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then(response => response.json())
      .then(data => {
        setName(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []); // empty array → run once on component mount
   if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Name and Email</h2>
      <ul>
        {name.map(u => (
          <li key={u.id}>
            <p>
                {u.name}, <br/>
                {u.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

