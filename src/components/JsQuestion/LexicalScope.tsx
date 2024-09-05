import { Fragment } from "react";

const LexicalScope = () => {
  const jsxCode = `
 // global
let x = 1;

const parentFunction = () => {
  // local scope
  let myValue = 2;
  console.log("x => ", x);
  console.log("myValue => ", myValue);

  const childFunction = () => {
    console.log("x += 5:==>", (x += 5));
    console.log("myValue += 1:==>", (myValue += 1));
    // The child function has access to the values of its parent function and the global scope
    // This is lexical scope
  };

  //   Call of child function in the parent function
  childFunction();
};

parentFunction();

// Output
// x =>  1
// myValue =>  2
// x += 5:==> 6
// myValue += 1:==> 3
// This all procedure is not a closure, it is the example of lexical scope

  `;

  return (
    <Fragment>
      <h2>Lexical Scope</h2>
      <p>
        Lexical scope defines how veriable names are resolved in nested function
      </p>
      <p>
        If we have a child function with in a parent function, the child
        function has access to the scope of a parent function and has access to
        the global scope Means Nested (child) function have access to the scope
        of their parent functions
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
      </div>
    </Fragment>
  );
};

export default LexicalScope;
