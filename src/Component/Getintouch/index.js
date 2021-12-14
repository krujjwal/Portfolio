import React from "react";

export default function Getintouch() {
  return (
    <div className="text-secondary w-screen h-screen flex  justify-center bg-primary" id="getintouch">
      <div className="flex flex-col items-center gap-y-12 justify-center w-8/12 ">

        <p className="text-6xl ">Getintouch</p>

        <p className="w-1/2">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!</p>

          <a href="mailto:kumar.ujjwal125@gmail.com">


          <button className='border border-green text-xl mt-6 p-2 font-bold' >Contact US</button>
          </a>
      </div>
    </div>
  );
}
