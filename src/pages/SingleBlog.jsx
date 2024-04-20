import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const blggg = useLoaderData();
  return (
    <div>
      <h1>Single blog data</h1>
    </div>
  );
};

export default SingleBlog;

//start from part-4 --- 5 min
