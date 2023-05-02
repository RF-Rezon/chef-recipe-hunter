import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <div className="bg-cover bg-center relative">
          <img className="w-full"
            src="https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Chef"
          />
          <div className="absolute space-y-7 w-full h-full bottom-0">
            <div className="bg-black bg-opacity-40 h-full flex flex-col justify-center md:space-y-8 space-y-5 p-10">
                <p className="text-white md:text-base text-sm text-left font-medium tracking-wide">WIDE OPTIONS OF CHOICE</p>
                <p className="text-white md:text-6xl text-2xl text-left font-semibold">Delicious Recipes</p>
                <p className="text-white md:text-2xl text-base text-left font-medium">
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                  especially in the workplace. That’s why it’s crucial that, as women.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
