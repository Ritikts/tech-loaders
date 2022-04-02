import React from "react";
import "./css/FontFace.css";
import "./css/Variable.css";
import features from "../img/features.gif";
import "./css/Features.css";

const Features = () => {
  return (
    <>
      <section className="w-full grid place-items-center mt-16">
        <div className="grid grid-cols-2 place-items-center w-11/12 gap-x-40">
          <div>
            <h3 className="font-medium mb-7 h3">
              // WHY<span className="choose-us  relative"> CHOOSE US</span>
            </h3>
            <h1 className="mb-7 h1">
              Some Of Reason To Choose Our IT Solutions
            </h1>
            <p className="font-medium p">
              <ol>
                <li>Customers Satisfaction Over The Work</li>
                <li>Amazing Offers On Maintenance Services</li>
                <li>24x7 Call Support</li>
                <li>Direct Contact With Developers & Marketers</li>
                <li>Regular Analytics</li>
                <li>Economic Feeseability</li>
                <li>Instant Resolve Of Your Queries</li>
              </ol>
            </p>
          </div>
          <div className=" flex w-full justify-end">
            <img src={features} alt="Person with VR" className="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
