import Pagination from "@material-ui/lab/Pagination";

export const Paginator = ({
  count,
  currentPage,
  filteredProducts,
  handleClick,
}) =>
  filteredProducts.length > 10 && (
    <Pagination
      count={count}
      page={currentPage}
      onChange={handleClick}
      variant="outlined"
      color="primary"
    />
  );
