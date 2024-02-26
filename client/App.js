import React from "react";
import Body from './Body.js';
import ReactDOM from "react-dom/client";

const App = () => {
  
  return (
    <React.Fragment>
      <Body/>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);