import React from 'react'

function Navbar() {
  return (
     <div className="bg-[#003580] h-[72px] flex justify-center">
         <div>
             <span>remybookings</span>
             <div className="flex">
                 <button className="bg-white">Register</button>
                 <button className="bg-white">SignIn</button>
             </div>
         </div>
    </div>
  )
}

export default Navbar