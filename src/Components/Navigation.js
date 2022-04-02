import React from "react";
import "./Naviagtion.css";
import vr from "../img/vr.png";
import "./FontFace.css";
import "./Variable.css";
import TypeWriterEffect from "react-typewriter-effect";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-11/12 relative z-1">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0 mt-3">
            <svg
              width="46"
              height="32"
              viewBox="0 0 46 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.8885 0.769897C23.2052 0.769897 23.7328 29.8388 23.7328 29.8388C23.7328 29.8388 24.0825 1.72145 24.0825 2.06491V30.5553C24.0825 30.8988 45.9993 31.2281 45.7754 31.471C45.5515 31.7139 23.2052 31.8503 22.8885 31.8503C22.5719 31.8503 22.2682 31.7139 22.0443 31.471C21.8204 31.2281 21.6946 30.8988 21.6946 30.5553V2.06491C21.6946 1.72145 -0.222209 1.39206 0.0017041 1.1492C0.225617 0.906336 22.5719 0.769897 22.8885 0.769897ZM18.1126 5.94997C18.4293 5.94997 18.733 24.0174 18.9569 24.2603C19.1808 24.5031 19.3066 6.90152 19.3066 7.24498V25.3752C19.3066 25.7187 19.1808 26.0481 18.9569 26.2909C18.733 26.5338 18.4293 26.6702 18.1126 26.6702C17.796 26.6702 17.4923 26.5338 17.2684 26.2909C17.0445 26.0481 16.9187 25.7187 16.9187 25.3752V7.24498C16.9187 6.90152 17.0445 6.57213 17.2684 6.32927C17.4923 6.08641 17.796 5.94997 18.1126 5.94997ZM27.6644 5.94997C27.9811 5.94997 28.2848 24.0174 28.5087 24.2603C28.7326 24.5031 28.8584 6.90152 28.8584 7.24498V25.3752C28.8584 25.7187 28.7326 26.0481 28.5087 26.2909C28.2848 26.5338 27.9811 26.6702 27.6644 26.6702C27.3478 26.6702 27.0441 26.5338 26.8202 26.2909C26.5962 26.0481 26.4705 25.7187 26.4705 25.3752V7.24498C26.4705 6.90152 26.5962 6.57213 26.8202 6.32927C27.0441 6.08641 27.3478 5.94997 27.6644 5.94997ZM13.3368 9.83502C13.6534 9.83502 13.9571 20.7301 14.181 20.9729C14.4049 21.2158 14.5307 10.7866 14.5307 11.13V21.4902C14.5307 21.8336 14.4049 22.163 14.181 22.4059C13.9571 22.6488 13.6534 22.7852 13.3368 22.7852C13.0201 22.7852 12.7164 22.6488 12.4925 22.4059C12.2686 22.163 12.1428 21.8336 12.1428 21.4902V11.13C12.1428 10.7866 12.2686 10.4572 12.4925 10.2143C12.7164 9.97146 13.0201 9.83502 13.3368 9.83502ZM32.4403 9.83502C32.757 9.83502 33.0607 20.7301 33.2846 20.9729C33.5085 21.2158 33.6343 10.7866 33.6343 11.13V21.4902C33.6343 21.8336 33.5085 22.163 33.2846 22.4059C33.0607 22.6488 32.757 22.7852 32.4403 22.7852C32.1237 22.7852 31.82 22.6488 31.596 22.4059C31.3721 22.163 31.2463 21.8336 31.2463 21.4902V11.13C31.2463 10.7866 31.3721 10.4572 31.596 10.2143C31.82 9.97146 32.1237 9.83502 32.4403 9.83502ZM8.56087 12.4251C8.87753 12.4251 9.18122 18.5385 9.40513 18.7814C9.62905 19.0242 9.75484 13.3766 9.75484 13.7201V18.9001C9.75484 19.2436 9.62905 19.573 9.40513 19.8159C9.18122 20.0587 8.87753 20.1952 8.56087 20.1952C8.24421 20.1952 7.94052 20.0587 7.7166 19.8159C7.49269 19.573 7.3669 19.2436 7.3669 18.9001V13.7201C7.3669 13.3766 7.49269 13.0472 7.7166 12.8044C7.94052 12.5615 8.24421 12.4251 8.56087 12.4251ZM37.2162 12.4251C37.5329 12.4251 37.8366 18.5385 38.0605 18.7814C38.2844 19.0242 38.4102 13.3766 38.4102 13.7201V18.9001C38.4102 19.2436 38.2844 19.573 38.0605 19.8159C37.8366 20.0587 37.5329 20.1952 37.2162 20.1952C36.8995 20.1952 36.5958 20.0587 36.3719 19.8159C36.148 19.573 36.0222 19.2436 36.0222 18.9001V13.7201C36.0222 13.3766 36.148 13.0472 36.3719 12.8044C36.5958 12.5615 36.8995 12.4251 37.2162 12.4251Z"
                fill="#F6F6EB"
              />
            </svg>
            <span className="ml-3 text-xl title-tl">TECH LOADERS</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-200 font-normal mx-8 nav-link">
              Home
            </a>
            <a className="mr-5 hover:text-gray-200 font-normal mx-8 nav-link">
              About
            </a>
            <a className="mr-5 hover:text-gray-200 font-normal mx-8 nav-link">
              Services
            </a>
            <a className="mr-5 hover:text-gray-200 font-normal mx-8 nav-link">
              Contact Us
            </a>
          </nav>
          <button className="login-btn inline-flex items-center bg-gray-100 border-0 p-2 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0 font-medium">
            Log In
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <section className="grid grid-cols-1 place-items-center absolute top-48 w-full font-Hanson ">
          <div className="w-11/12">
            <div className="bar mb-8 w-28 h-1.5 rounded-3xl "></div>
            <h1 className="font-bold text-7xl flex mb-4 our-work">
              We&nbsp;
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Hanson",
                  color: "#F6F6EB",
                  fontSize: "1em",
                }}
                startDelay={2000}
                cursorColor="#F6F6EB"
                multiText={["Execute", "Analyse", "Give Results"]}
                loop={true}
                nextTextDelay={1000}
                typeSpeed={30}
              />
            </h1>
            <p className="mb-8 text-xl tagline">
              Create A Virtual Platform For Your Business <br /> At An Instant
            </p>
            <button className="get-a-tech-fact-btn inline-flex items-center bg-gray-100 border-0 p-2 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-base md:mt-0 font-medium">
              Get a Tech Fact
            </button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navigation;
