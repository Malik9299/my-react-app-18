import { FC } from "react";

type ButtonProps<T> = {
  label: string;
  value: T;
  onClick: (value: T) => void;
};

const GenericButton = <T,>({ label, value, onClick }: ButtonProps<T>) => {
  return <button onClick={() => onClick(value)}>{label}</button>;
};

// const GenericButton1 =
//   <T,>(): FC<ButtonProps<T>> =>
//   ({ label, value, onClick }: ButtonProps<T>) => {
//     return <button onClick={() => onClick(value)}>{label}</button>;
//   };

// const GenericButton2 = <T,>({ label, value, onClick }: ButtonProps<T>) => {
//   return <button onClick={() => onClick(value)}>{label}</button>;
// };

export default GenericButton;
