import { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import { CartProvider } from "../utils/CartContext";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Cart", href: "/cart" },
];

export default function Navbar() {
  const { cart } = useContext(CartProvider);
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {/* {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </Link>
              ))} */}

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
                <span className="bg-red-500 px-2 h-4 w-4 rounded-full">
                  {cart.length}
                </span>
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
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
