import React from "react";

const Plans = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

         {/* left side of the plans destination */}
      <div  className=" grid grid-cols-2 grid-rows-6 h-[80vh]">

        <img className=' row-span-3 object-cover w-full h-full p-2'
          src="https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <img className=' row-span-2 object-cover w-full h-full p-2'
          src="https://images.unsplash.com/photo-1541300613939-71366b37c92e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <img className=' row-span-2 object-cover w-full h-full p-2'
          src="https://images.unsplash.com/photo-1615277716590-d87d101caa70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <img className=' row-span3 object-cover w-full h-full p-2'
          src="https://images.unsplash.com/photo-1588584473317-137dbfe94aad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80"
          alt=""
        />
        <img className=' row-span2 object-cover w-full h-full p-2'
          src="https://images.unsplash.com/photo-1507666664345-c49223375e33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
          alt=""
        />
      </div>
          {/* right side of the plans */}

          <div className="flex flex-col h-full justify-center ">


            <h2 className="text-5xl md:text-6xl font-bold  text-red-500 " >Plan Your Trip With Ous </h2>

            <p className=" text-4xl py-6 text-blue-800">Escape to the epitome of luxury, packed with signature amenities and services</p>

            <p className="pb-6  text-xl" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ad eaque, sit maxime aliquam a animi quod commodi deserunt numquam.</p>
          <div>
            <button className="border-black    hover:shadow-black  shadow-lg mr-4   ">Learn More</button>
            <button className=" bg-black text-white   hover:shadow-black  shadow-lg  ">Book Your Trip</button>
          </div>

          </div>
    </div>
  );
};

export default Plans;
