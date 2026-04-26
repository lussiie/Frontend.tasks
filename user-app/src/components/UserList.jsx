export default function UserList({ users, onDelete }) {
  return (
    <div>
      <h2>User List</h2>

      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>

          <button onClick={() => onDelete(user.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  )
}