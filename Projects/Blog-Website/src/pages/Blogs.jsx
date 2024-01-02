import React from "react";
import BlogPages from "../components/BlogPages";

const Blogs = () => {
  return (
    <div>
      <div className="px-4 py-40 bg-black text-white text-center">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 font-poppins">
          Blogs Page
        </h2>
      </div>

      {/* All blog Container */}
      <div className="max-w-7xl mx-auto">
        <BlogPages/>
      </div>
    </div>
  );
};

export default Blogs;
