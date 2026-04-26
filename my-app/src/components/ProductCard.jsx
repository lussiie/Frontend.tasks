export default function ProductCard({ product, onMove }) {
  return (
    <div className="col-md-4 my-4">
      <div className="card shadow-sm h-100">

        <img
          src={product.picture}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt={product.title}
        />

        <div className="card-body d-flex flex-column">

          <h5 className="card-title">{product.title}</h5>

          <p className="text-danger fw-bold">
            {product.price} USD
          </p>

          <button
            onClick={() => onMove(product)}
            className="btn btn-dark mt-auto"
          >
            Add to basket
          </button>

        </div>
      </div>
    </div>
  )
}