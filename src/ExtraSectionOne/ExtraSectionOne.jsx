import React from "react";

const ExtraSectionOne = () => {
  return (
    <div className="gap-y-8">
        <div className="text-center p-6 py-10">
        <p className="md:text-xl text-sm font-medium text-orange-500">Our Tranding</p>
          <p className="md:text-3xl text-2xl font-medium text-zinc-800">Special Dishes</p>
        </div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://images.pexels.com/photos/16614145/pexels-photo-16614145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="absolute inset-0 h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="md:text-xl text-sm font-medium text-orange-500">Italiano</h2>
                <h2 className="md:text-3xl text-2xl font-medium text-zinc-800">Pizza!</h2>

                <p className="my-4 max-w-lg text-gray-700 pt-4">
                  If you're travelling to our Baia dei Mori Beachclub on Sardinia's east coast, be sure to try the
                  island's favourite pizza topping: aubergine. As a common, local vegetable, aubergines add a delicious
                  health kick to what we typically consider a luxury meal - who knew pizza could fit so well into your
                  active lifestyle. We did warn you that your taste buds were about to go crazy!
                </p>
                <p className="md:text-3xl text-2xl font-medium text-zinc-800">3.5 ITL</p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-orange-600 bg-orange-600 px-12 py-2 text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500 text-base font-normal"
                >
                  Book A Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          {/* <div className="flex flex-row-reverse"> */}
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="absolute inset-0 h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="md:text-xl text-sm font-medium text-orange-500">Italiano</h2>
                <h2 className="md:text-3xl text-2xl font-medium text-zinc-800">Pasta!</h2>

                <p className="my-4 max-w-lg text-gray-700 pt-4">
                  Try one of the rarest pasta dishes
                  around by heading to the picturesque island of Sardinia, home to our Baia dei Mori Beachclub and
                  malloreddus alla campidanese – a unique gnocchi-like pasta served in a rich tomato, sausage and
                  saffron sauce.
                </p>
                <p className="md:text-3xl text-2xl font-medium text-zinc-800">2.99 ITL</p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-orange-600 bg-orange-600 px-12 py-2 text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500 text-base font-normal"
                >
                  Book A Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSectionOne;
