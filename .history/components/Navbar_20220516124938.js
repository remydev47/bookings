import React from 'react'

function Navbar() {
  return (
     <div className="bg-[#003580] h-[72px] flex justify-center">
         <div className="w-full max-w-screen-lg items-center flex justify-between">
             <span className="text-[#fff] font-semibold cursor-pointer">remybookings</span>
             <div className="ml-5 border-none cursor-pointer color-[#bfdbfe]">
                 <button className="">Register</button>
                 <button className="">LogIn</button> 
             </div>
         </div>
    </div>
  )
}

export default Navbar