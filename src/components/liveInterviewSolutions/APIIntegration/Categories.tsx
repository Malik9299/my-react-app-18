import { FC, Fragment, useState, CSSProperties } from "react";
import { useCategories } from "../../../hooks/useCategory";

const style: { [key: string]: CSSProperties } = {
  category: {
    display: "flex",
  },
  eachCategory: {
    padding: "10px",
    backgroundColor: "#395c51",
    margin: "10px",
    minWidth: "75px",
    textAlign: "center",
    borderRadius: "5px",
  },
  activeCategory: {
    cursor: "pointer",
  },
};

interface Sorter {
  id: number | null;
  name: string;
}

interface CategoriesProps {
  setSortBy: React.Dispatch<React.SetStateAction<Sorter>>;
}

const Categories: FC<CategoriesProps> = ({ setSortBy }) => {
  const { data: cats, isLoading, error } = useCategories();
  const [activeId, setActiveId] = useState<number | null>(null);
  //   const [sortBy, setSortBy] = useState<number | null>(null);

  const handleClick = (id: number, name: string) => {
    // console.log(`Log ===> ${id}`);
    setSortBy({ id: id, name: name });
  };

  if (isLoading) {
    return (
      <Fragment>
        <div>Categories</div>
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
      <h4>Categories</h4>
      <div id="categories" style={style.category}>
        {cats
          ? cats.map((cat) => (
              <a
                onClick={() => handleClick(cat.id, cat.name)}
                onMouseEnter={() => setActiveId(cat.id)}
                onMouseLeave={() => setActiveId(null)}
                style={{
                  ...style.eachCategory,
                  ...(activeId == cat.id ? style.activeCategory : {}),
                }}
                key={cat.id}
              >
                {cat.name}
              </a>
            ))
          : "No Data"}
      </div>
    </Fragment>
  );
};
export default Categories;
