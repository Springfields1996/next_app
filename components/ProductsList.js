import { ProductCard } from "./ProductCard";

export const ProductsList = ({ chosenProducts }) =>
    chosenProducts.length ? (
        <ul>
          {chosenProducts.map((product) => (
            <li key={product.code}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Sorry, we've not found this product...</div>
        );
