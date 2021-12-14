import React, { useState } from "react";
// import LOGO from '../../utils/imagedata/constant'

export default function About() {
  const [skillData, setskillData] = useState([
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "jQuery",
    "ES6",
    "REACT",
    "MATERIALUI",
    "TAILWIND CSS",
  ]);

  return (
    <div id="about">
      <div className="text-secondary h-auto md:h-screen  bg-primary flex items-start justify-center">
        <div className=" w-4/5 md:w-8/12 flex flex-col gap-x-48">
          <div className="flex flex-col w-100 ">
            <p className="text-3xl my-12 text-center md:text-left">About</p>
          </div>

          <div className="w-full flex flex-col-reverse md:flex-row gap-16">
            <div className="w-auto md:w-3/5 flex flex-col leading-7 gap-8">
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML And CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients. I also recently launched a
                course that covers everything you need to build a web app with
                the Spotify API using Node And React.
              </p>

              <div className="grid grid-cols-2 gap-y-2">
                {skillData.map((e) => (
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#64ffda"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                    <p>{e}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-72 h-72 bg-primary border-4 border-green">

                <div>
                  <img src="/Assets/Free_Sample_By_Wix copy.jpeg" alt="profile pic"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
