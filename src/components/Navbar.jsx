import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../utils/CartContext";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Cart", href: "/cart" },
];

export default function Navbar() {
  const { cart } = useContext(CartProvider);

  const totalAmount = cart.reduce(
    (total, num) => total + parseInt(num.price),
    0
  );
  console.log(totalAmount);
  return (
    <header className="bg-indigo-600">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-10"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link
                to={"/"}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {"Home"}
              </Link>
              <Link
                to={"/cart"}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Cart{" "}
                <span className="w-4 h-4 px-2 bg-red-500 rounded-full">
                  {cart.length}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center ml-10 space-x-4">
            <a
              href="#"
              className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
            >
              Sign in
            </a>
            <h1 className="text-xl text-center text-white"> ${totalAmount}</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
