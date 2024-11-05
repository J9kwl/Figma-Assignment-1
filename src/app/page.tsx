import Image from "next/image";
import Header from "./components/Header";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-24">
          <h1 className="text-4xl p-2 font-bold h-[189px] w-[496px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="h-[149px] p-2 text-[25px] text-ordinary">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="border-8 bg-primary border-primary my-4 m-2 rounded-md w-48 text-secondary text-xl">
            Explore Now
          </button>
        </div>
        <div className=" flex justify-center items-center">
          <Image
            src={"/images/figma_image.svg"}
            alt="hero image"
            width={302}
            height={465}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
