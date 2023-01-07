import { MdHotel } from 'react-icons/md';
import { MdOutlineFlight } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai';
import { MdLocalTaxi } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';
import { MdOutlineAttractions } from 'react-icons/md'

const Header = () => {
  return (
     <div className="bg-[#003580] text-white flex justify-center"> {/*Header*/}
        <div className="w-full max-w-screen-lg mt-5 mb-20">{/*header-container*/}
          <div className="flex gap-10">
              <div className="flex items-center gap-2.5 cursor-pointer">
                  <FaHotel />
                  <span>Stays</span>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer">
                  <MdOutlineFlight />
                  <span>Flights</span>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer">
                  <AiFillCar />
                  <span>Car Rental</span>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer">
                  <MdOutlineAttractions />
                  <span>Attractions</span>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer hover:animate-bounce">
                  <MdLocalTaxi />
                  <span>Airport Taxis</span>
              </div>
           </div>
           <h1 className="mt-3 text-4xl font-mono">A lifetime of discounts? Its Genius</h1>
           <p>Get reawarded for your Travels Unlock Instant savings of 10% and more with a remybooking Account</p>
           <button className="bg-[#fff] text-black">Sign In / Register</button>
        </div>
    </div>
  )
}

export default Header;