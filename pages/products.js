import { useState, useMemo} from "react";
import { MainLayout } from "../components/MainLayout";
import { Header } from "../components/Header";
import { ProductsList } from "../components/ProductsList";
import { SearchForm } from "../components/SearchForm";
import { Paginator } from "../components/Paginator";
import {TotalProductsCounter} from "../components/TotalProductsCounter"
import styles from "../styles/Home.module.css";

const PRODUCTS_PER_PAGE = 10;

const Home = ({ products, ctx }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState("");

  const filteredProducts = useMemo(() =>
      products.filter(({ productName }) =>
        productName.toLowerCase().includes(filterQuery.toLowerCase())
      ),
    [filterQuery]
  );

  const chosenProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [currentPage, filteredProducts]);

  console.log(ctx);

  const countOfPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handleClickPaginator = (_, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const handleClickForm = ({ target: { value } }) => {
    setFilterQuery(value.toLowerCase());
    setCurrentPage(1);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
  };

  return (
    <MainLayout className={styles.container}>
      <Header />
      <SearchForm
        filterQuery={filterQuery}
        handleSubmit={handleSubmitForm}
        handleClick={handleClickForm}
      />
      <TotalProductsCounter totalProducts={filteredProducts}/>
      <ProductsList chosenProducts={chosenProducts} />
      <Paginator
        currentPage={currentPage}
        count={countOfPages}
        filteredProducts={filteredProducts}
        handleClick={handleClickPaginator}
      />
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/traa/apiplp/master/db.json"
  );
  const { pageItems } = await res.json();
  return { props: { products: pageItems} };
}

export default Home;
