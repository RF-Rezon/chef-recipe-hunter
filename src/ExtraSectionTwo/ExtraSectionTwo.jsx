import React from "react";

const ExtraSectionTwo = () => {
  return (
    <div>
      <div>
        <div className="container px-6 mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="text-center p-6 py-10">
              <p className="md:text-xl text-sm font-medium text-orange-500">Some Of Our</p>
              <p className="md:text-3xl text-2xl font-medium text-zinc-800">Happy Customer Reviews</p>
            </div>

            <div className="mt-16">
                <div className="flex mb-12 md:mb-0">
                  <div className=" w-2/12">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                      className="w-full shadow-lg rounded-lg mb-6"
                      alt=""
                    />
                  </div>
                  <div className=" w-10/12 pl-4 md:pl-6">
                    <p className="font-semibold mb-3">Marta Dolores</p>
                    <p className="text-gray-600 italic">
                    "I visited the restaurant with my boyfriend last weekend and we had an amazing time! The atmosphere was cozy and the service was excellent. The menu had a good variety of options, but what really stood out were the flavors in the dishes. Every bite was bursting with deliciousness. I highly recommend this place for a fun night out or a date!"
                    </p>
                  </div>
                </div>
                <div className="flex mb-12 md:mb-0">
                  <div className=" w-2/12">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                      className="w-full shadow-lg rounded-lg mb-6"
                      alt=""
                    />
                  </div>
                  <div className=" w-10/12 pl-4 md:pl-6">
                    <p className="font-semibold mb-3">Valeria Groove</p>
                    <p className="text-gray-600 italic">
                    "I'm a foodie and I have to say, this restaurant blew me away. The presentation of the dishes was artistic and the taste was even better. I tried a few different things on the menu and each dish was perfectly executed. I especially appreciated the attention to detail in the plating. The restaurant has a classy vibe and the staff were knowledgeable about the menu. I would definitely come back here again."
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-2/12">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                      className="w-full shadow-lg rounded-lg mb-6"
                      alt=""
                    />
                  </div>
                  <div className=" w-10/12 pl-4 md:pl-6">
                    <p className="font-semibold mb-3">Antonia Velez</p>
                    <p className="text-gray-600 italic">
                    "As a vegan, it's not always easy finding good places to eat out, but this restaurant exceeded my expectations. They had a separate vegan menu with plenty of options to choose from, which was great. I ordered the vegan pasta dish and it was one of the best I've ever had. The staff were also really friendly and accommodating. I left feeling satisfied and happy with my experience."
                    </p>
                  </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
