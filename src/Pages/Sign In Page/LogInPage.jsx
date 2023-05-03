import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
// Initialization for ES Users
import { Link } from 'react-router-dom';
import { Input, Ripple, initTE } from "tw-elements";

initTE({ Input, Ripple });

const LogInPage = () => {
  return (
    <div>
      <div>
        <section className="h-screen">
          <div className="h-full">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>

              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <form>
                  <div className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="mb-0 mr-4 text-lg">Sign in with</p>

                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="mx-1 h-9 w-9 rounded-full bg-black uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                    >
                      <div className="flex items-center justify-center"><FaGoogle/></div>
                    </button>

                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="mx-1 h-9 w-9 rounded-full bg-orange-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                    >
                      <div className="flex items-center justify-center"><FaGithub/></div>
                    </button>

                    
                  </div>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
                  </div>

                  <div className="relative mb-6">
                  <label
                    htmlFor="UserEmail"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-sm font-medium text-gray-800"> Email </span>

                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Your email"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </label>
                </div>

                <div className="relative mb-6">
                  <label
                    htmlFor="UserPassword"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-sm font-medium text-gray-800"> Password </span>

                    <input
                      type="password"
                      id="UserPassword"
                      placeholder="Password"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </label>
                </div>

                  <div className="text-center lg:text-left mt-6">
                    <button
                      type="button"
                      className="inline-block rounded bg-black px-7 pb-2.5 pt-3 my-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out "
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Login
                    </button>

                    <p className="mb-0 mt-2 py-3 text-sm font-semibold">
                      Don't have an account?
                      <Link
                        to={"/register"}
                        className="text-orange-600 transition duration-150 ease-in-out hover:text-orange-400 focus:text-orange-400 active:text-orange-500 pl-2"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogInPage;
