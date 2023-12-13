import React from "react";

export default function Button(props) {
  return (
    <button className='text-white w-[200px] h-[45px] rounded-full font-medium bg-brandColor'>
      {props.text}
    </button>
  );
}
