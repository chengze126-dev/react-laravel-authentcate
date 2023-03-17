import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                <div className="mb-10 text-center md:mb-16">Register</div>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color
                                         placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        error
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color
                                         placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        error
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    />
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        error
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password Confirmation"
                      className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    />
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        error
                      </span>
                    </div>
                  </div>
                  <div className="mb-10">
                    <button
                      type="submit"
                      className="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div
                  className="
                mb-2
                inline-block
                text-base text-[#adadad]
                hover:text-primary 
              "
                >
                  <span>Already a member? </span>
                  <Link to="/login" className="hover:underline">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
