import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <div className="text-center p-6 py-10">
          <p className="md:text-4xl text-2xl font-semibold text-black bg-orange-500 w-full md:py-8 py-2 rounded-sm">Blogs</p>
        </div>
        <div className="my-10">
          <div className="px-3 py-5">
            <p className="md:text-3xl text-2xl font-medium  text-orange-500">
              What is the differences between uncontrolled and controlled components?
            </p>
            <p className="md:text-xl text-sm font-medium mt-2 text-zinc-800">
              In React, a controlled component is a component that is controlled by React state, while an uncontrolled
              component is a component that maintains its own internal state. A controlled component receives its
              current value and an update callback via props, and the parent component manages the state of the
              component. When the user interacts with the component, the parent component updates the state, which in
              turn updates the component's value. An uncontrolled component, maintains its own internal state, and when
              the user interacts with the component, it updates its own state, which in turn updates the component's
              value.
            </p>
          </div>
          <div className="px-3 py-5">
            <p className="md:text-3xl text-2xl font-medium my-2 text-orange-500">
            How to validate React props using PropTypes?
            </p>
            <p className="md:text-xl text-sm font-medium text-zinc-800">To validate React props using PropTypes, we need to follow these steps: 1.Import PropTypes at the top of your React component file, 2. Define the expected data type for each prop in our component using PropTypes and last 3. Add the PropTypes validation to oue component's function or class declaration.</p>
          </div>
         
          <div className="px-3 py-5">
            <p className="md:text-3xl text-2xl font-medium my-2  text-orange-500">
            Tell us the difference between nodejs and express js.
            </p>
            <p className="md:text-xl text-sm font-medium text-zinc-800">Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
          </div>
          <div className="px-3 py-5">
            <p className="md:text-3xl text-2xl font-medium  my-2 text-orange-500">
            What is a custom hook, and why will you create a custom hook?
            </p>
            <p className="md:text-xl text-sm font-medium text-zinc-800">Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
