import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Collapse, Dropdown, initTE } from "tw-elements";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Pdf from "../PDF/Pdf";

initTE({ Collapse, Dropdown });

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const submitLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const dawnlaodPdf = () => {};

  return (
    <>
      <div>
        <nav className="flex-no-wrap rounded-lg mt-4 mb-6 relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 p-5">
          <div className="flex w-full flex-wrap items-center justify-between p-3 ">
            <div className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1">
              <Link
                to={"/"}
                className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                href="#"
              >
                <img
                  src="https://thumbs.dreamstime.com/b/italian-restaurant-logo-design-authentic-traditional-continental-food-label-vector-illustration-white-background-italian-119566316.jpg"
                  alt=""
                  loading="lazy"
                  className="h-10 w-10 mx-auto md:mr-4"
                />
              </Link>

              <div className="mr-auto flex flex-col pl-0 lg:flex-row items-center justify-between w-full">
                <Link to={"/"}>
                  <div className="mb-4 lg:mb-0 lg:pr-2 " data-te-nav-item-ref>
                    <p className="text-black text-4xl font-bold cursor-pointer">IOR</p>
                  </div>
                </Link>

                <div className="flex items-center justify-between space-x-3">
                  <div className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <ActiveLink
                      to={"/"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                    >
                      Home
                    </ActiveLink>
                  </div>
                  <div className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <ActiveLink
                      to={"/blogs"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                    >
                      Blogs
                    </ActiveLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center mx-auto gap-x-6 my-4 ml-7">
              <Link to={"/register"}>
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                >
                  Sign Up
                </button>
              </Link>

              {user ? (
                <div id="sideed" className="flex gap-4">
                  <button
                    onClick={submitLogout}
                    type="button"
                    className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                  >
                    Log Out
                  </button>

                  <div className="relative">
                    <Link
                      className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                      id="dropdownMenuButton2"
                      role="button"
                    >
                      {user && (
                        <span data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                          <img
                            data-tooltip-target="tooltip-default"
                            src={user.photoURL}
                            className="rounded-full w-10 h-10"
                            alt=""
                            loading="lazy"
                          />
                        </span>
                      )}
                    </Link>
                    <Tooltip id="my-tooltip" />
                  </div>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button
                    type="button"
                    className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                  >
                    Log In
                  </button>
                </Link>
              )}
              
            </div>
            <div className="mx-auto">
              <PDFDownloadLink document={<Pdf></Pdf>} fileName="Form">
                <button className=" rounded-full mx-3 bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">PDF</button>
              </PDFDownloadLink>
            </div>
          
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
