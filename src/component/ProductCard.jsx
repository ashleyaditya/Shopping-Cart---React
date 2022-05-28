import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartProvider } from "../utils/CartContext";
import Card from "./Card";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
// More products...
// ];

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addProduct } = useContext(CartProvider);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://628b75837886bbbb37b8ad1a.mockapi.io/products"
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleaddClick = (product) => addProduct(product);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2> */}

        {loading ? (
          <h1> Loading..</h1>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {!!products.length &&
              products.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  btn="Add to Cart"
                  handleFunction={handleaddClick}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
