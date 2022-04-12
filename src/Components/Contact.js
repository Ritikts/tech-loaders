import React from "react";
import "./css/Contact.css";
import "./css/FontFace.css";
import "./css/Variable.css";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="font-medium mb-7  h3">
            <span className="relative contact"> // CONTACT US</span>
          </h1>
          <p className="mb-7 h1">GET IN TOUCH WITH US</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex  gap-2 items-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6485 0.351306C18.543 0.246363 18.4098 0.173705 18.2645 0.141874C18.1192 0.110043 17.9678 0.120362 17.8282 0.171619L0.640656 6.42162C0.492428 6.47784 0.364812 6.57783 0.274759 6.7083C0.184705 6.83877 0.136475 6.99355 0.136475 7.15209C0.136475 7.31062 0.184705 7.4654 0.274759 7.59587C0.364812 7.72634 0.492428 7.82633 0.640656 7.88256L7.35159 10.5622L12.3047 5.59349L13.4063 6.69506L8.42972 11.6716L11.1172 18.3826C11.1751 18.5279 11.2753 18.6525 11.4049 18.7403C11.5344 18.8281 11.6873 18.8749 11.8438 18.8747C12.0017 18.8715 12.1549 18.8205 12.2832 18.7285C12.4115 18.6364 12.5089 18.5076 12.5625 18.3591L18.8125 1.17162C18.8658 1.0334 18.8786 0.882892 18.8496 0.737653C18.8205 0.592413 18.7508 0.458423 18.6485 0.351306Z"
                    fill="#F6F6EB"
                  />
                </svg>
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">contact@techloaders.in</a>
              <p className="leading-normal my-5">
                Bhopal
                <br />
                Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
