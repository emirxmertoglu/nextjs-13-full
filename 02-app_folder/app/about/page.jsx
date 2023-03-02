import React from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function About(props) {
  await delay(3000);
  console.log(props);

  return <div>This is about page</div>;
}

export default About;
