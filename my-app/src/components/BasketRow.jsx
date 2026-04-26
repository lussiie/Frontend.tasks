export default function BasketRow({ item, increase, decrease, remove }) {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.price} USD</td>
      <td>{item.quantity}</td>
      <td>{item.price * item.quantity} USD</td>

      <td>
        <button onClick={() => increase(item.id)} className="btn btn-success mx-1">+</button>

        <button onClick={() => decrease(item.id)} className="btn btn-dark mx-1">-</button>

        <button onClick={() => remove(item.id)} className="btn btn-danger mx-1">x</button>
      </td>
    </tr>
  )
}
