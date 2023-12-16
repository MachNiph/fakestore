import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col  bg-black text-white gap-10 py-10 s">
      <div className="flex justify-center flex-col items-center gap-4 ">
        <h1 className="font-bold text-xl">
          TIMRO <span className="text-green-500">BAZAAR</span>
        </h1>
        <p>
          Welcome to our website, where you can fall into <br />
          the class of your own choice to pick any item.
        </p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">Categories</h1>
          <ul className="flex flex-col gap-2">
            <li>MensWear</li>
            <li>WomensWear</li>
            <li>LaptopandAccesories</li>
            <li>Jwellery</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">Help</h1>
          <ul className="flex flex-col gap-2">
            <li>AboutUs</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Payment</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Get in touch</h1>
          <ul>timrobazar@support</ul>
          <ul>+9778313011692</ul>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p>Copyright All rights reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
