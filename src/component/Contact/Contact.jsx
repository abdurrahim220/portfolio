import React from "react";
import Lottie from "lottie-react";
import image from "../../assets/contact";
const Contact = () => {
  return (
    <div id="contact">
      <div className="text-center text-4xl font-semibold py-10">Contact Me</div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Let's talk!
            </h2>
            <div className="">You can contact me through email</div>
          </div>
          <Lottie animationData={image} />;
        </div>
        <div className="border-2 rounded-md p-5 border-[#1669d6]">
          <form novalidate="" className="space-y-6">
            <div>
              <label for="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded "
              />
            </div>
            <div>
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded "
              />
            </div>
            <div>
              <label for="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded "
              ></textarea>
            </div>

            <button
              className="px-6 py-2.5 text-black rounded-lg bg-green-300 hover:bg-green-400 inline-flex items-center"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-black"
              ></svg>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
