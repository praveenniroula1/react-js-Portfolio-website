import React from "react";

const Footer = () => {
  const handleOnTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer container ">
      <div>© Copyright 2023, Praveen Niroula</div>
      <div class="arrow fa-solid fa-arrow-up" onClick={handleOnTop}>
        Page Up
      </div>
    </div>
  );
};

export default Footer;
