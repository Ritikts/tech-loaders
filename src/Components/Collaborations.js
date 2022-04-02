import React from "react";
import "./css/FontFace.css";
import "./css/Variable.css";
import "./css/Collaborations.css";
import IITBOMBAY from "../img/IIT BOMBAY.png";
import SovaSkills from "../img/Sova Skills Pvt Ltd.png";
import BlackEye from "../img/Black Eye Technologies Pvt Ltd.png";
import LoadTheCode from "../img/Load The Code.png";
import BetaProgrammer from "../img/Beta Programmer.png";
import StartupIndia from "../img/Startup India.png";
import OrientalGroupOfColleges from "../img/Oriental Group Of Colleges.png";
import ClickBank from "../img/Click Bank.png";
import LNCTGroupOfColleges from "../img/LNCT Group Of Colleges.png";
import JVZoo from "../img/JVZoo.png";
import Warrior from "../img/Warrior+.png";
import DigiStore24 from "../img/Digi Store 24.png";
import BadaBusiness from "../img/Bada Business Pvt Ltd.png";
import MSME from "../img/MSME.png";

const Collaborations = () => {
  return (
    <>
      <section className="w-full grid place-items-center mt-16">
        <div className=" w-11/12">
          <h3 className="font-medium mb-7 h3">
            // OUR BEST
            <span className="relative collaborations "> COLLABORATIONS</span>
          </h3>
          <h1 className="mb-7 h1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </div>
        <div className="grid grid-cols-5 collab-list">
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={IITBOMBAY} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={SovaSkills} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={BlackEye} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={LoadTheCode} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={BetaProgrammer} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={OrientalGroupOfColleges} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={ClickBank} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={StartupIndia} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={LNCTGroupOfColleges} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={JVZoo} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={Warrior} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={DigiStore24} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={BadaBusiness} className="w-7/12" />
          </div>
          <div className="collab-list-name grid place-items-center text-lg relative">
            <img src={MSME} className="w-7/12" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaborations;
