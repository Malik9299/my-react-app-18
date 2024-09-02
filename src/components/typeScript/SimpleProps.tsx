import { FC, Fragment } from "react";

interface Data {
  id: number;
  designation: string;
}

interface Props {
  name: string;
  age?: number;
  data?: Data[];
}

const SimpleProps: FC<Props> = ({ name, age = 38, data }) => {
  return (
    <Fragment>
      <h3>Simple Props</h3>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      {data ? (
        <div>
          <strong>Data</strong>
          <div></div>
          {data.map((item) => (
            <div key={item.id}>
              {item.id} : {item.designation}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <strong>Data</strong>
          <div>No Data</div>
        </div>
      )}
    </Fragment>
  );
};

export default SimpleProps;
