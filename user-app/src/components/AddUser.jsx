import { useState } from "react"

export default function AddUser({ onAdd }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email) return

    onAdd({
      id: Date.now(),
      name,
      email
    })

    setName("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button>Add</button>
    </form>
  )
}