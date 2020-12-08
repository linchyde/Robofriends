import React from "react";
// The purpose of scroll is creating a scrollable box to contain the users inside and it keeps the search bar always on the window
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
