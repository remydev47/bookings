import React from 'react'

function Navbar() {
  return (
     <div className="bg-[#003580] h-[72px]">
         <div>
             <span>remybookings</span>
             <div className="flex flex-row">
                 <button>Register</button>
                 <button>SignIn</button>
             </div>
         </div>
    </div>
  )
}

export default Navbar