import React from "react";

function Emir(props) {
  console.log(props);

  return (
    <div>
      <div>{props.searchParams.user}</div>
      <div>{props.searchParams.email}</div>
    </div>
  );
}

export default Emir;
