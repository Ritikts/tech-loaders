import React from "react";
import "./Company.css";
import company from "../img/Company-animate.gif";
import "./FontFace.css";
import "./Variable.css";
import fingerprint from "../img/fingerprint.gif";
import telephone from "../img/telephone.gif";
import deal from "../img/deal.gif";

const Company = () => {
  return (
    <>
      <section className="w-full grid place-items-center mt-16 ">
        <div className="grid grid-cols-2 place-items-center w-11/12 gap-x-40">
          <div>
            <h3 className="font-medium mb-7 h3">
              // DISCOVER OUR <span className="company relative">COMPANY</span>
            </h3>
            <h1 className="mb-7 h1">
              Bringing New IT Business Solutions And Ideas
            </h1>
            <p className="font-medium p">
              Empowering businesses & helping them to grow globally across the
              world with the help of top class planned marketing system & best
              ever mobile & web applications , we are here to provide you & your
              sales an online boost.
            </p>
          </div>
          <div className=" flex w-full justify-end">
            <img src={company} alt="Person with VR" className="" />
          </div>
        </div>
        <div className="grid grid-cols-3 w-9/12 mt-9 features">
          <div className="feature grid place-items-center">
            <img src={fingerprint} alt="" className=" w-5/12" />
            <h3>
              <span className="relative business">Data </span>
              Protection
            </h3>
          </div>
          <div className="feature grid place-items-center">
            <img src={telephone} alt="" className=" w-5/12" />
            <h3>
              <span className="relative support">24/7 </span>
              Support
            </h3>
          </div>
          <div className="feature grid place-items-center">
            <img src={deal} alt="" className=" w-5/12" />
            <h3>
              <span className="relative deal">Business </span>
              Deal
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
export default Company;
