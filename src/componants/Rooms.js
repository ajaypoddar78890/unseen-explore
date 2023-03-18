import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-red-200 mx-auto my-20 pt-16 lg:mb-[20%]  md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4' >

        <div className='lg:top-20 relative lg:col-span-1 col-span-2' >
            <h3 className=' font-bold text-2xl text-gray-600'>Checkout our Rooms</h3>
            <p className=' pt-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla rem repudiandae recusandae ratione illum consequuntur dolores eaque sed eligendi aliquam
            !</p>

        </div>
        <div className=' grid grid-cols-2 col-span-2 gap-2'>
            <img 
             className=' object-cover w-full h-full' src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" />

            <img 
             className=' row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" />

            <img  
             className=' object-cover w-full h-full'src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
    </div>
  )
}

export default Rooms