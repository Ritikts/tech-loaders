import React from "react";
import "./css/Services.css";
import "./css/FontFace.css";
import "./css/Variable.css";
import Service from "../img/Services.svg";

const Services = () => {
  return (
    <>
      <section className="w-full grid place-items-center services mt-24">
        <div className="w-11/12 all-service p-24">
          <div className="grid grid-cols-2 -mt-16">
            <div className="g grid place-items-center">
              <img
                src={Service}
                alt="Two People Handshaking"
                className="relative z-2"
              />
            </div>
            <div className="service-info p-16">
              <h3 className="mb-7 relative">
                // WHAT WE <span className="offer">OFFER</span>
              </h3>
              <h1 className="mb-7">Business Solution</h1>
              <p>
                We provide many top level services mentioned below! Our main
                motive is to collaborate with you and to provide you the bestcss/
                one we have.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center  justify-center gap-x-44 ">
            <div className="service-list text-xl w-64 h-32 rounded-t-2xl rounded-b-2xl font-medium grid place-items-center text-center mob">
              MOBILE APPLICATION DEVELOPMENT
            </div>
            <div className="service-list text-xl w-64 h-32 rounded-t-2xl rounded-b-2xl font-medium grid place-items-center text-center web">
              WEBSITE BUILDING
            </div>
            <div className="service-list text-xl w-64 h-32 rounded-t-2xl rounded-b-2xl font-medium grid place-items-center text-center soft">
              SOFTWARE <br />
              DEVELOPMENT
            </div>
          </div>
          <div className="flex w-full items-center  justify-center gap-x-20 mt-16 ">
            <div className="service-list text-xl w-64 h-32 rounded-t-2xl rounded-b-2xl font-medium grid place-items-center text-center deals">
              IT BUSINESS DEALS
            </div>
            <div className="service-list text-xl w-64 h-32 rounded-t-2xl rounded-b-2xl font-medium grid place-items-center text-center mark">
              MARKETING AND EXPORSURE
            </div>
            <div className="service-list text-xl w-64 h-32 rounded-t-2xl rounded-b-2xl font-medium grid place-items-center text-center seo">
              SEARCH ENGINE OPTIMIZATION
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
