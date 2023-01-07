import React from 'react'

function Navbar() {
  return (
     <div className="bg-[#003580] h-[72px] flex justify-center">
         <div className="w-full max-w-screen-lg items-center justify-between">
             <span>remybookings</span>
             <div className="flex">
                 <button className="bg-white">Register</button>
                 <button className="bg-white">LogIn</button>
             </div>
         </div>
    </div>
  )
}

export default Navbar