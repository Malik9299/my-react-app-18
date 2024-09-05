import { Fragment } from "react";

const Hoisting = () => {
  const jsxCode = `
  console.log(myVar); // Output: undefined
  var myVar = 10;
  `;
  const jsxCode1 = `console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;`;
  const functionHoisting = `sayHello(); // Output: "Hello"

function sayHello() {
    console.log("Hello");
}
`;
  const arrowFunctionHoisting = `console.log(sayHello); // Output: undefined
var sayHello = function() {
    console.log("Hello");
};
`;
  return (
    <Fragment>
      <h2>Hoisting</h2>
      <p>
        Hoisting in JavaScript is a behavior in which variable and function
        declarations are moved, or "hoisted," to the top of their containing
        scope (either global or function scope) before code execution. This
        means that you can use variables and functions before they are declared
        in the code, without getting a reference error.
      </p>
      <div>
        <strong>Key Points:</strong>
      </div>
      <div>
        <h3>1. Variable Hoisting:</h3>
        <p>
          Variables declared using var are hoisted to the top of their scope and
          initialized with undefined.
        </p>
        <p>
          However, variables declared with let and const are hoisted as well but
          are not initialized. Accessing them before their declaration will
          result in a ReferenceError because they are in a "temporal dead zone."
        </p>
        <div className="jsxCode">
          <strong className="example">Example</strong>
          <pre>
            <code>{jsxCode}</code>
          </pre>
        </div>
        <div className="jsxCode">
          <strong className="example">Example</strong>
          <pre>
            <code>{jsxCode1}</code>
          </pre>
        </div>
      </div>
      <div>
        <h3>2. Function Hoisting:</h3>
        <p>
          Function declarations are hoisted with their entire definition. This
          allows you to call a function before it appears in the code.
        </p>
        <div className="jsxCode">
          <strong className="example">Example</strong>
          <pre>
            <code>{functionHoisting}</code>
          </pre>
        </div>
      </div>
      <div>
        <h3>Function Expressions and Arrow Functions:</h3>
        <p>
          f a function is defined using a function expression or an arrow
          function, only the variable declaration is hoisted, not the function
          definition. As a result, you cannot invoke the function before it is
          defined.
        </p>
        <div className="jsxCode">
          <strong className="example">Example</strong>
          <pre>
            <code>{arrowFunctionHoisting}</code>
          </pre>
        </div>
      </div>
      <div>
        <strong>Summary:</strong>
        <p>
          Hoisting allows you to reference variables and functions before they
          are formally declared in the code. However, the behavior differs
          depending on whether you're using var, let, const, or functions.
        </p>
      </div>
    </Fragment>
  );
};

export default Hoisting;
