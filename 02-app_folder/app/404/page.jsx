import { notFound } from "next/navigation";
import React from "react";

function NotFoundTestPage({ searchParams }) {
  if (searchParams.test === "true") {
    notFound();
  }

  return <div>NotFoundTestPage</div>;
}

export default NotFoundTestPage;
