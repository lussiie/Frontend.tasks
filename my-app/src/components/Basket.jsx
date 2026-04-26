import BasketRow from "./BasketRow"

export default function Basket({ basket, increase, decrease, remove }) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>quantity</th>
          <th>subtotal</th>
          <th>actions</th>
        </tr>
      </thead>

      <tbody>
        {basket.map(item => (
          <BasketRow
            key={item.id}
            item={item}
            increase={increase}
            decrease={decrease}
            remove={remove}
          />
        ))}
      </tbody>
    </table>
  )
}