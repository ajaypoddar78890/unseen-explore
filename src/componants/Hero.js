import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className=" top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
      />

      <div className="bg-black/40 absolute top-0 left-0 w-full h-screen" />

      <div className="absolute top-0 w-full h-screen flex flex-col  text-white justify-center">
        <div className=" md:left-[10%] max-w-[1100px] m-auto absolute p-4">

          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">Travel Without Limit</h1>

          <h3 className="font-bold text-3xl md:text-5xl drop-shadow-xl">Explore unseen Places</h3>

          <p className=" max-w-[600px] drop-shadow-2lx py-2 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis voluptatem quibusdam ipsam.</p>

        <button className=" bg-white text-black">Search Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
