import { FC, Fragment, useState, CSSProperties } from "react";
import { useProducts } from "../../../hooks/useProducts";

const style: { [key: string]: CSSProperties } = {
  category: {
    // display: "flex",
  },
  eachProducts: {
    padding: "20px",
    backgroundColor: "rgb(23 75 76)",
    margin: "20px",
    maxWidth: "300px",
    textAlign: "center",
    borderRadius: "5px",
  },
  activeCategory: {
    // backgroundColor: "#63d8b0",
    // cursor: "pointer",
  },
};

interface Products {
  sortBy: { id: number | null; name: string };
}

const Products: FC<Products> = ({ sortBy }) => {
  const { data: productsData, isLoading, error } = useProducts();
  const [activeId, setActiveId] = useState<number | null>(null);

  const sorteProductsData = productsData?.sort(
    (a, b) => a.category.id - b.category.id
  );

  console.log("Data ===> ", sorteProductsData);

  // const sortedData = productsData.sort((a, b) => a.category.id - b.category.id);

  // console.log("Data ===> ", sortedData);

  // const groupedData = productsData.reduce((acc, item) => {
  //   const categoryId = item.category.id;
  //   if (!acc[categoryId]) {
  //     acc[categoryId] = [];
  //   }
  //   acc[categoryId].push(item);
  //   return acc;
  // }, {} as { [key: number]: typeof productsData });

  // Get sorted category ids
  // const sortedCategoryIds = Object.keys(groupedData).sort(
  //   (a, b) => Number(a) - Number(b)
  // );

  // console.log("sortedCategoryIds ===> ", sortedCategoryIds);
  if (isLoading) {
    return (
      <Fragment>
        <div>Products</div>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (error) {
    return (
      <Fragment>
        <div>Error: {error}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h4>Products</h4>
      <div id="categories" style={style.category}>
        {sorteProductsData
          ? sorteProductsData.map((product) => (
              <Fragment>
                <div> {product.category.name}</div>
                <div
                  onMouseEnter={() => setActiveId(product.id)}
                  onMouseLeave={() => setActiveId(null)}
                  style={{
                    ...style.eachProducts,
                    ...(activeId == product.id ? style.activeCategory : {}),
                  }}
                  key={product.id}
                >
                  {product.title}
                </div>
              </Fragment>
            ))
          : "No Data"}
      </div>
    </Fragment>
  );
};
export default Products;
