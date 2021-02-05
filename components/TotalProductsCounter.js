
export const TotalProductsCounter = ({totalProducts}) => 
  <>
    {totalProducts.length > 0 && <p>Total products: {totalProducts.length}</p>}
  </>
