import { useState } from "react"
import UserList from "./components/UserList.jsx"
import AddUser from "./components/AddUser.jsx"

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Lusine", email: "lusineaghababyan@mail.com" }
  ])

  const addUser = (user) => {
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id))
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User List App</h1>

      <AddUser onAdd={addUser} />

      <UserList users={users} onDelete={deleteUser} />
    </div>
  )
}