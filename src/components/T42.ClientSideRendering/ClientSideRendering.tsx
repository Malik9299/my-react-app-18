import { Fragment } from "react";

const ClientSideRendering = () => {
  console.log("Component Rendering");
  return (
    <Fragment>
      <div>ClientSideRendering</div>
      <p>
        React is a library for creating Single Page Application (SPAs). In SPAs
        when the client make a request, the server send a single HTML page to
        the browser. This HTML page often contains a div tag and a refernece to
        a javascript file. You can view in Network tab in Chrome browser in
        response. The call is localhost. There will be an empty div tag{" "}
        <div id="root"></div> and a refernce to the bundle.js. This js file
        contains everything for your application to run, including the react
        library itself and your application code. It is downloaded when the HTML
        file is parrsed. The downloaded javascript code then generate the HTML
        on your computer and inserts it into the dom under the root div element
        and you see the UI in the browser. You can view the HTML in the dom
        inspector, but not in the view source option.
      </p>
    </Fragment>
  );
};

export default ClientSideRendering;
