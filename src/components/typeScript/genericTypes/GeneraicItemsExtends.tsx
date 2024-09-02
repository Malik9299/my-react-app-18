import { Fragment } from "react";

interface ItemProps<TItem> {
  items: TItem[];
}

export const GeneraicItemsExtends = <
  TItem extends { id: number; name: string }
>(
  props: ItemProps<TItem>
) => {
  return (
    <Fragment>
      <div>GeneraicItems with Extends</div>
      <ul>
        {props.items.map((item, index) => (
          <li key={item.id}>
            {item.id}: {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
