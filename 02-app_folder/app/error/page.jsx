import React from "react";

function TestErrorPage({ searchParams }) {
  if (searchParams?.error === "true") {
    throw new Error("This is a test error message");
  }

  return <div>TestErrorPage</div>;
}

export default TestErrorPage;
