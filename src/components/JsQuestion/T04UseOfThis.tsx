import { Fragment } from "react";

const T04UseOfThis = () => {
  const liveInterviewExample = `
  var length = 10;

function fn() {
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1, 3);

Output: 
10
3

Expnain:

The Function Call:

obj.method(fn, 1, 3);

First call: fn();
When fn() is called directly like this, this refers to the global object (window in browsers), because the function is not invoked as a method of any object.
Since this.length in the global scope refers to the global length variable (which is 10), it logs 10.

Second call: arguments[0]();
arguments[0] is the first argument passed to method, which is fn.
When arguments[0]() is called, this refers to the arguments object because functions invoked via arguments have the this context of the arguments obje

The arguments object in this case has a length property (which represents the number of arguments passed to the function).
arguments.length is 3 (since we passed fn, 1, and 3).
So this.length refers to 3, and it logs 3.

  `;

  return (
    <Fragment>
      <h2>Use Of This</h2>
      <p>What will be the output of below</p>

      <div className="jsxCode">
        <strong className="example">Live Interview Example</strong>
        <pre>
          <code>{liveInterviewExample}</code>
        </pre>
      </div>
    </Fragment>
  );
};

export default T04UseOfThis;
