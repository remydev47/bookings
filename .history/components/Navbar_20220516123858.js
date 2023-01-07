import React from 'react'

function Navbar() {
  return (
     <div className="bg-[#003580] h-[72px] flex justify-center">
         <div className="w-full max-w-screen-lg items-center flex justify-between">
             <span className="text-[#fff] font-semibold">remybookings</span>
             <div className="">
                 <button className="bg-white">Register</button>
                 <button className="bg-white">LogIn</button>
             </div>
         </div>
    </div>
  )
}

export default Navbar