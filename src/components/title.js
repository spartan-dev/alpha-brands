import React from "react";

const Title = ({ text, id, sans }) => {
  return (
    <h3 id={id}
      className={`${sans ? 'font-opensans text-xl' : 'font-poppins text-2xl'} md:text-brandmd lg:text-distributors font-bold leading-9 tracking-title text-black`}>
      {text}
    </h3>
  );
};

export default Title;