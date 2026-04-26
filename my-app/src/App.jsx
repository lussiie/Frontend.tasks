import { useState, useEffect } from "react"
import ProductCard from "./components/ProductCard"
import Basket from "./components/Basket"

export default function App() {
  const [products] = useState([
    { id: 101, title: "Design", price: 27, picture: "https://m.media-amazon.com/images/I/81gDywN3JFL._AC_UF894,1000_QL80_.jpg" },
    { id: 102, title: "Poetry", price: 21, picture: "https://m.media-amazon.com/images/I/91Mzoi3Z+RL._UF1000,1000_QL80_.jpg" },
    { id: 103, title: "Business", price: 47, picture: "https://i5.walmartimages.com/seo/DK-Big-Ideas-The-Business-Book-Big-Ideas-Simply-Explained-Paperback-9781465475886_a2601568-2767-4cc9-86b7-cbf3b1aa0a38.edd822cd8e88252ab8712dd4e14d4f43.jpeg" },
    { id: 104, title: "Literature", price: 17, picture: "https://images.booksense.com/images/015/491/9781465491015.jpg" },
    { id: 105, title: "Politics", price: 22, picture: "https://bookazine.com.hk/cdn/shop/products/ed07d7fa693fc323bddb394e163b257a.jpg?v=1589031076" },
    { id: 106, title: "Economics", price: 21, picture: "https://booksandyou.in/cdn/shop/files/TheEconomicsBook_1.webp?v=1732795447" },
    { id: 107, title: "JavaScript Guide", price: 237, picture: "https://www.oreilly.com/covers/urn:orm:book:9781491952016/300w/" },
  ])

  
  const [basket, setBasket] = useState(() => {
    const saved = localStorage.getItem("basket")
    return saved ? JSON.parse(saved) : []
  })

  
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))
  }, [basket])

  
  const handleMove = (product) => {
    setBasket(prev => {
      const found = prev.find(item => item.id === product.id)

      if (found) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  
  const increase = (id) => {
    setBasket(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decrease = (id) => {
    setBasket(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const remove = (id) => {
    setBasket(prev => prev.filter(item => item.id !== id))
  }
  const total = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="container my-5">
      <h1 className="display-2 text-info">Bookshop</h1>

      <div className="row">

        <div className="col-md-7">
          <h2>Products</h2>

          <div className="row">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onMove={handleMove}
              />
            ))}
          </div>
        </div>

        <div className="col-md-5">
          <h2>Basket</h2>

          <h3 className="text-success">
            Total: {total} USD
          </h3>

          <Basket
            basket={basket}
            increase={increase}
            decrease={decrease}
            remove={remove}
          />
        </div>

      </div>
    </div>
  )
}