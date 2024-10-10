import React from "react";
import { Button, Image } from "@nextui-org/react";

import bg2 from "../assets/food2.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-between px-10 py-16 space-y-8 md:space-y-0">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">
            Adventure of <span className="text-yellow-500">Delicacies</span>
          </h1>
          <p className="text-lg text-gray-500">
            Unlock a world of variety culinary recipes and unleash your inner
            chef the easy way with Flavoriz.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Button auto className="bg-black text-white hover:bg-gray-800">
              Explore Recipes
            </Button>
            <Button auto flat className="bg-gray-200 hover:bg-gray-300">
              Post A Recipe
            </Button>
          </div>
        </div>

        {/* Right Side: Food Image */}
        <div className="md:w-1/2">
          <Image src={bg2} alt="Food" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </>
  );
};

export default Hero;
