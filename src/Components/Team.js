import React from "react";
import "./FontFace.css";
import "./Variable.css";
import "./Team.css";

const Team = () => {
  return (
    <>
      <section className="w-full grid place-items-center mt-16">
        <div className=" w-11/12 text-center">
          <h3 className="font-medium mb-7 h3">
            <span className="team relative">// TEAM</span>
          </h3>
          <h1 className="mb-7 h1">MEET OUR EXPERTS</h1>
        </div>
        <div className="grid grid-cols-3 gap-x-56 members mt-8">
          <div>
            <div className="member w-64 h-64 bg-white"></div>
            <div className="mt-6">
              <h1 className="text-center font-normal name">Rishi Malviya</h1>
              <h2 className="text-center font-normal post">
                Founder, CEO & <br /> Managing Director
              </h2>
            </div>
          </div>
          <div>
            <div className="member w-64 h-64 bg-white"></div>
            <div className="mt-6">
              <h1 className="text-center font-normal name">Jinesh Nagori</h1>
              <h2 className="text-center font-normal post">
                Chief Technical Officer <br /> & Senior Developer
              </h2>
            </div>
          </div>
          <div>
            <div className="member w-64 h-64 bg-white"></div>
            <div className="mt-6">
              <h1 className="text-center font-normal name">Ritik Singh</h1>
              <h2 className="text-center font-normal post">
                Development Officer <br /> & Product Manager
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-56 members mt-16  place-items-center ">
          <div>
            <div className="member w-64 h-64 bg-white"></div>
            <div className="mt-6">
              <h1 className="text-center font-normal name">Ajay Solanki</h1>
              <h2 className="text-center font-normal post">
                Management & HR Head
              </h2>
            </div>
          </div>
          <div className="">
            <div className="member w-64 h-64 bg-white"></div>
            <div className="mt-6">
              <h1 className="text-center font-normal name">Sakshi Sharma</h1>
              <h2 className="text-center font-normal post">
                Cheif Operating Officer
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Team;
