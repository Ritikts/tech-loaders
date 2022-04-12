import React from "react";
import "./css/Blog.css";
import "./css/FontFace.css";
import "./css/Variable.css";
import Hackathon from "../img/Hackathon.gif";
import Trading from "../img/Trading.gif";
import SEO from "../img/SEO.gif";

const Blog = () => {
  return (
    <>
      <section className="w-full grid place-items-center mt-24">
        <div className=" w-11/12 grid grid-cols-2">
          <div>
            <h3 className="font-medium mb-7 h3">
              // LATEST BLOG
              <span className="relative post "> POST</span>
            </h3>
            <h1 className="mb-7 h1">Read our latest insights.</h1>
          </div>
          <div className="relative">
            <button className="view-all inline-flex items-center absolute right-0 bottom-7">View All <svg
            className="arrow"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg></button>
          </div>
        </div>

        <div className=" grid-cols-3 grid w-11/12 mt-5">
          <div>
            <img src={SEO} className="w-10/12 blog-img" />
          </div>
          <div className="">
            <img src={Trading} className="w-10/12 blog-img" />
          </div>
          <div className="relative">
            <img src={Hackathon} className="w-10/12 blog-img " />
          </div>
          <div>
            <h3 className="blog-title text-base mt-8">SEO</h3>
            <h1 className="text-lg font-semibold mt-1 title-name">
              How To Rank Your Website On
              <br /> Google's First Page!
            </h1>
            <button className="text-base inline-flex items-center mt-4 readmore relative">
              READ MORE
              <svg
                className="arrow"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div>
          <h3 className="blog-title text-base mt-8">TRADING</h3>
          <h1 className="text-lg font-semibold mt-1 title-name">
          How To Trade Like A Pro?
          </h1>
          <button className="text-base inline-flex items-center mt-4 readmore relative">
            READ MORE
            <svg
              className="arrow"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </div>
          <div>
          <h3 className="blog-title text-base mt-8">HACKATHON</h3>
          <h1 className="text-lg font-semibold mt-1 title-name">
          What Do You Mean By Hackathon?
          </h1>
          <button className="text-base inline-flex items-center mt-4 readmore relative">
            READ MORE
            <svg
              className="arrow"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
