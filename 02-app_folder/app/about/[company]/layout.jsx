import React from "react";

function layout({ children }) {
  return (
    <div>
      <h2>This is dynamic route layout!</h2>
      {children}
    </div>
  );
}

export default layout;
