import React, { useContext } from "react";

const Card = ({ id, image, name, description, price, buttonName, action }) => {
  return (
    <div className="border border-gray-400 rounded-lg">
      <div className="relative w-full overflow-hidden rounded-md group bg-grey-500 min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none ">
        <button
          className="absolute hidden h-10 text-white bg-purple-500 border rounded-md outline-none hover:bg-purple-800 group-hover:block w-36 inset-y-2/4 inset-x-1/4"
          onClick={() => action({ id, image, name, description, price })}
        >
          {buttonName}
        </button>
        <img
          src={image}
          className="object-cover object-center w-full h-full hover:cursor-pointer lg:w-full lg:h-full"
        />
      </div>

      <div className="flex justify-between p-2 mt-4">
        <div>
          <h3 className="text-gray-700 text-md">
            <span aria-hidden="true" className="" />
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
};

export default Card;
