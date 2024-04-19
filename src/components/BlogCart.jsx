import React from "react";
import { Link } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg";

const BlogCart = ({ blog }) => {
  //   console.log(blog);
  const { published_timestamp, title, description, cover_image, id } = blog;
  return (
    <Link
      to={"/blogs/${id}"}
      className="max-w-sm mx-auto group transition border-2 border-primary hover:border-secondary  hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        // src="https://source.unsplash.com/random/480x360?1"
        src={cover_image || placeHolderImg}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600">
          {/* {published_timestamp} */}
          {new Date(published_timestamp).toLocaleDateString()}
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCart;
