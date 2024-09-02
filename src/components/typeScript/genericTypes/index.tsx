import { FC, Fragment } from "react";
import GenericButton from "./GenericButton";
import StringOrNumber from "./StringOrNumber";
import GenericTypes from "./GenericTypes";
import { GeneraicItemsExtends } from "./GeneraicItemsExtends";
import { GeneraicItems } from "./GeneraicItems";

const AllAboutGeneric: FC = () => {
  const numbers = [1, 2, 3];
  const strings = ["a", "b", "c"];
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];
  return (
    <Fragment>
      <div>
        <StringOrNumber numbers={numbers} />
        <StringOrNumber numbers={strings} />
        <GenericTypes numbers={numbers} />
        <GenericTypes numbers={strings} />
      </div>
      <div>
        <h3>Generic Button Example</h3>
        <GenericButton
          label="Click me"
          value={42}
          onClick={(val) => console.log(val)}
        />
        <GenericButton
          label="Click me"
          value="55"
          onClick={(val) => console.log(val)}
        />
        <GenericButton
          label="Click me"
          value={false}
          onClick={(val) => console.log(val)}
        />
      </div>
      <div>
        <GeneraicItemsExtends items={items} />
        <GeneraicItems
          items={items}
          renderItems={(item) => (
            <>
              {item.id}: {item.name}
            </>
          )}
        />
      </div>
    </Fragment>
  );
};

export default AllAboutGeneric;
