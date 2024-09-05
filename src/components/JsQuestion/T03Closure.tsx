import { Fragment } from "react";

const T03Closure = () => {
  const closureEx0 = `
  function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVariable); // Accesses \`outerVariable\` from the outer function
    }
    
    return innerFunction;
}

const closureFunction = outerFunction(); 
// outerFunction has executed, but innerFunction still has access to outerVariable
closureFunction(); // Logs: "I am outside!"

  `;
  const closureEx1 = `
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

  // childFunction();
  return childFunction;
  //   do not call the child function, just return
};

const result = parentFunction();
result();

result(); // second time called

// Output:

// x =>  1
// myValue =>  2
// x += 5:==> 6
// myValue += 1:==> 3

// Second time called result
// x += 5:==> 11
// myValue += 1:==> 4

// last value of x =  11 `;

  const closureEx2 = `
const privateCounter = (() => {
  let count = 0;
  console.log(\`Initial value of count: \${count}\`);
  return () => {
    count += 1;
    console.log(\`Incremented value of count: \${count}\`);
  };
})();
// This Immediately Invoked Function Expression(IIFE) and called itself

privateCounter(); //closure

privateCounter(); //closure

privateCounter(); //closure

Output:
nitial value of count: 0
Incremented value of count: 1
Incremented value of count: 2
Incremented value of count: 3
Incremented value of count: 4
`;

  const closureEx3 = `
const credits = ((num) => {
  let credits = num;
  console.log(\`Initial value of credits: \${credits}\`);
  return () => {
    credits -= 1;
    if (credits > 0)
      console.log(\`Playing game, \${credits} credit(s) remaining\`);
    if (credits <= 0) console.log("Not enohgh credits");
  };
})(3);
credits();
credits();
credits();
credits();
credits();
credits();

Output:

Initial value of credits: 3
Playing game, 2 credit(s) remaining
Playing game, 1 credit(s) remaining
Not enohgh credits
Not enohgh credits
Not enohgh credits
Not enohgh credits
`;

  return (
    <Fragment>
      <h2>Closure</h2>
      <p>
        A closure in JavaScript is a feature where a function retains access to
        its lexical scope even after the function has finished executing. This
        means that a function can "remember" the environment in which it was
        created, including variables and parameters.
      </p>
      <p>
        When a function is defined inside another function, it gets access to
        the outer function's variables and parameters. Even after the outer
        function has executed, the inner function can still access these
        variables. This behavior is known as a closure.
      </p>

      <div className="jsxCode">
        <strong className="example">Example</strong>
        <pre>
          <code>{closureEx0}</code>
        </pre>
      </div>

      <p>
        A closure is a function having access to the parent scope, even after
        the parent function has closed.
      </p>
      <p>There are 2 parst of above defination</p>
      <p>
        A closure is a function having access to the parent scope, this part is
        lexical scope
      </p>
      <p>
        Even after the parent function has closed this above part is the key
        point of closure
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
            <code>{closureEx1}</code>
          </pre>
        </div>

        <div className="jsxCode">
          <strong className="example">Example</strong>
          <pre>
            <code>{closureEx2}</code>
          </pre>
        </div>

        <div className="jsxCode">
          <strong className="example">Example</strong>
          <pre>
            <code>{closureEx3}</code>
          </pre>
        </div>
      </div>
    </Fragment>
  );
};

export default T03Closure;
