import React from "react";
import { currency, getProducts } from "./products";

const HomeContent = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a>{product.name}</a>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;