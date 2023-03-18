import React from 'react'
import {FiMenu} from 'react-icons/fi'
import { useState } from 'react';

const Navbar = () => {

  //   this UseState to manage the navbaar also to use the we have put the
   //onclick funtion on the our react icon 

     const [nav, setnav] = useState(false);
     const handleNav =()=>{
      setnav(!nav)

      //stoping the page to scroll while navbar is open 

      if (!nav){
        document.body.style.overflow='hidden'
      }else{
        document.body.style.overflow='scroll'
      }
     }
  return (
    <div  className='absolute flex items-center p-4 w-full justify-between'>
      <h1 className='text-white text-2xl font-bold z-20'>Explore Unseen</h1>
      < FiMenu   onClick={handleNav} className='text-white cursor-pointer z-20' size={25}/>
      <div
       className={
        nav
        ? ' ease-in duration-300 fixed left-0 top-0 text-white w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'

        : 'absolute top-0 h-screen  left-[-100%] ease-in duration-500 z-10'
       }
       >
        <ul  className=' fixed flex flex-col  w-full h-screen items-center justify-center'>
          <li className=' font-bold  text-3xl p-6 cursor-pointer'>Home</li>
          <li className=' font-bold  text-3xl p-6 cursor-pointer'>Destination</li>
          <li className=' font-bold  text-3xl p-6 cursor-pointer'>Reservation</li>
          <li className=' font-bold  text-3xl p-6 cursor-pointer'>Activities</li>
          <li className=' font-bold  text-3xl p-6 cursor-pointer'>Amenities</li>
          <li className=' font-bold  text-3xl p-6 cursor-pointer'>Rooms</li>
          <li className=' font-bold  text-3xl p-6 cursor-pointer'>Help</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
