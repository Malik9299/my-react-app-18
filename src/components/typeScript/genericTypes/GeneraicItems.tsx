import React, { Fragment } from "react";

interface ItemProps<TItem> {
  items: TItem[];
  renderItems: (item: TItem) => React.ReactNode;
}

export const GeneraicItems = <TItem,>(props: ItemProps<TItem>) => {
  return (
    <Fragment>
      <div>GeneraicItems</div>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{props.renderItems(item)}</li>
        ))}
      </ul>
    </Fragment>
  );
};
