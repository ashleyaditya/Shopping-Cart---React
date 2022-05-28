import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartProvider } from "../../utils/CartContext";
import Card from "../../components/Card";

export default function Products() {
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
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {loading ? (
          <h1 className="text-2xl text-center"> Loading..</h1>
        ) : (
          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {!!products.length &&
              products.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  buttonName="Add to Cart"
                  action={(product) => addProduct(product)}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
