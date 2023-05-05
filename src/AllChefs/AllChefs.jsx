import React from "react";
import { Link } from "react-router-dom";

const AllChefs = ({ eachChefData }) => {
  const { id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = eachChefData;
  return (
    <div>
      <div className=" rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        
          <div className="h-96">
            
            <img className="rounded-t-lg h-full w-full object-cover" src={chef_picture} alt="A Chef Picture" />
            
          </div>
        
        <div className="p-6">
          <h5 className="text-2xl font-medium text-gray-900 py-3">{chef_name}</h5>
          <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
            Years of experience: <span>{years_of_experience}</span>
          </p>
          <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
            Numbers of recipes: <span>{number_of_recipes}</span>
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Likes: <span>{likes}</span>
          </p>
          <Link to={`/${id}`}>
            <button
              type="button"
              className="inline-block rounded bg-zinc-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-zinc-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-zinc-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-zinc-900 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mb-2"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllChefs;
