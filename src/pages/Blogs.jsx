import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLoaderData } from "react-router-dom";
import BlogCart from "../components/BlogCart";

const Blogs = () => {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch(`https://dev.to/api/articles?per_page=10`)
  //     .then((res) => res.json())
  //     // .then((data) => console.log(data));
  //     .then((data) => setBlogs(data));
  // }, []);
  // console.log(blogs);

  const blogs = useLoaderData();
  console.log(blogs);

  return (
    // <div>
    //   {/* <div className="h-16">
    //     <Navbar></Navbar>
    //   </div> */}
    //   <h1>This is a blog pages</h1>
    // </div>
    //API------------https://developers.forem.com/api/v1#tag/articles/operation/getArticles
    <section className="dark:bg-gray-100 py-5 dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={blogs[0].cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogs[0].title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {new Date(blogs[0].published_at).toLocaleDateString()}
            </span>
            <p>{blogs[0].description}</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blg) => (
            <BlogCart key={blg.id} blog={blg}></BlogCart>
          ))}
          {/* <BlogCart></BlogCart>
          <BlogCart></BlogCart>
          <BlogCart></BlogCart>
          <BlogCart></BlogCart>
          <BlogCart></BlogCart>
          <BlogCart></BlogCart> */}
          {/* <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              // src="https://source.unsplash.com/random/480x360?1"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 21, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://source.unsplash.com/random/480x360?2"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 22, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://source.unsplash.com/random/480x360?3"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 23, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://source.unsplash.com/random/480x360?4"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 24, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://source.unsplash.com/random/480x360?5"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 25, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://source.unsplash.com/random/480x360?6"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 26, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
