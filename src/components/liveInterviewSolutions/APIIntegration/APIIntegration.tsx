import { useState } from "react";

import { Fragment } from "react/jsx-runtime";
import Categories from "./Categories";
import Products from "./Products";

interface Sorter {
  id: number | null;
  name: string;
}

const APIIntegration = () => {
  //   const [sortBy, setSortBy] = useState<number | null>(null);

  const [sortBy, setSortBy] = useState<Sorter>({
    id: null,
    name: "abc",
  });

  console.log(`sortBy ===> ${sortBy.name}`);

  return (
    <Fragment>
      <h3>2. API Integration</h3>
      <Categories setSortBy={setSortBy} />
      <Products sortBy={sortBy} />
    </Fragment>
  );
};
export default APIIntegration;
