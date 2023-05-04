import React from "react";

const ChefBanner = ({ chefinfo }) => {
  const { id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes, bio } = chefinfo;
  return (
    <div>
      <div className="py-6">
        <div className="bg-cover bg-center relative ">
          <div className="h-96">
            <img className="w-full h-full rounded-lg object-cover" src={chef_picture} alt="Chef" />
          </div>
          <div className="absolute space-y-7 w-full h-full bottom-0">
            <div className="bg-black bg-opacity-40 h-full md:flex items-center justify-between gap-x-14 md:gap-x-0 p-10 rounded-lg">
              <div className="md:ml-16 ml-8 md:space-y-8 space-y-3">
                <p className="md:text-xl text-lg font-medium text-white md:mt-3">
                  Your <span className="md:text-xl text-sm font-medium text-orange-500">Chef</span>
                </p>
                <p className="text-white md:text-4xl text-2xl text-left font-semibold tracking-widest">{chef_name}</p>
                <p className="text-white md:text-xl text-base text-left font-medium">{bio}</p>
                <p className="text-white md:text-xl text-base text-left font-normal">
                  <p>
                    Years of experience: <span>{years_of_experience}</span>
                  </p>
                  <p>
                    Numbers of recipes: <span>{number_of_recipes}</span>
                  </p>
                  <p className="md:mb-5">
                    Likes: <span>{likes}</span>
                  </p>
                </p>
              </div>
              <div className="mr-10 hidden md:block">
                <div className="md:h-60 md:w-60 h-48 w-48">
                  <img className="w-full h-full rounded-lg object-cover" src={chef_picture} alt="Chef" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
