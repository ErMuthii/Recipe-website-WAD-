import React from "react";
import Hero from "./Hero";
import bg1 from "../assets/food1.jpg";
import { Button, Card, Image } from "@nextui-org/react";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Features Section */}
      <div className="px-10 py-10 bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <Card className="p-6">
          <h3 className="font-semibold text-xl">User-Centered</h3>
          <p className="text-gray-500 mt-2">
            Your feedback shapes our platform, ensuring a seamless culinary
            journey.
          </p>
        </Card>

        {/* Feature 2 */}
        <Card className="p-6">
          <h3 className="font-semibold text-xl">Diverse Recipes</h3>
          <p className="text-gray-500 mt-2">
            We celebrate culinary traditions from around the world, inspiring
            you today.
          </p>
        </Card>

        {/* Feature 3 */}
        <Card className="p-6">
          <h3 className="font-semibold text-xl">Fun Community</h3>
          <p className="text-gray-500 mt-2">
            We foster a vibrant community where joy comes with sharing recipes.
          </p>
        </Card>
      </div>

      {/* Featured Recipe Section */}
      <div className="px-10 py-10 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-6">
        {/* Recipe Image */}
        <div className="md:w-1/2">
          <Image src={bg1} alt="Recipe" className="w-full rounded-lg" />
        </div>

        {/* Recipe Details */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold">
            Featured: Salisbury Steak and Asparagus
          </h3>
          <Button auto className="bg-yellow-500 text-white hover:bg-yellow-600">
            See Recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
