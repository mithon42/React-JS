import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="py-2 px-3 w-full rounded-md outline-none border focus:border-[#92579c] font-medium"
    />
  );
};

const registerPage = () => {
  return (
    <div className="flex justify-center items-center bg-[#723b7a] h-[100vh]">
      <form className="bg_color p-7 rounded-md w-96">
        <h2 className="mb-5 text-center text-2xl font-semibold">
          Register Now
        </h2>
        <div className="flex flex-col gap-5">
          <InputField type="text" placeholder="Username" />
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <button
            type="submit"
            className="bg-[#ffd500] font-semibold py-3 px-8  rounded-md w-fit mx-auto"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default registerPage;
