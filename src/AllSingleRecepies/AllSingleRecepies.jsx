import React from 'react';
// Initialization for ES Users
import { FaRegHeart } from "react-icons/fa";
import {
  Ripple,
  initTE,
} from "tw-elements";
  
  initTE({ Ripple });
  
const AllSingleRecepies = ({each}) => {
    const {recipe_name,ingredients,cooking_method,rating   } = each;
    console.log(ingredients)
    let ingredientsComma =  ingredients.toString();
    return (
        <div>
            <div className='my-6'>
            <div
  className="block rounded-lg bg-neutral-100 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div className="p-6">
    <h5
      className="mb-4 md:text-2xl text-lg font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
      {recipe_name}
    </h5>
   
    <p className="mb-4 mt-5 leading-relaxed text-sm  md:text-base font-semibold text-neutral-600 dark:text-neutral-200">
    Ingredients: <span className='font-medium'>{ingredientsComma}</span>
    </p>
    <p className="mb-4 leading-relaxed text-sm  md:text-base font-semibold text-neutral-600 dark:text-neutral-200">
    Cooking Method: <span className='font-medium'>{cooking_method}</span>
    </p>
    <p className="mb-4 leading-relaxed text-sm  md:text-base font-semibold text-neutral-600 dark:text-neutral-200">
    Rating: <span className='font-medium'>{rating}</span>
    </p>
    <button
      type="button"
      className="rounded bg-orange-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      <div className='flex items-center gap-x-2'><p>Favourite</p><FaRegHeart/> </div>
    </button>
  </div>
</div>
            </div>
        </div>
    );
};

export default AllSingleRecepies;