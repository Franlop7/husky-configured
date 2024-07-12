import { useState, useEffect } from 'react';
interface User {
  id: number;
  name: string;
  email: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
