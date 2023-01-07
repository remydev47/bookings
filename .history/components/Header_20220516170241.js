import { MdHotel, MdOutlinePerson, MdOutlineFlight, MdLocalTaxi, MdOutlineAttractions } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { FaHotel } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';

const Header = () => {
  return (
     <div className="bg-[#003580] text-white flex justify-center relative"> {/*Header*/}
        <div className="w-full max-w-screen-lg mt-5 mb-20">{/*header-container*/}
          <div className="flex gap-10">
              <div className="flex items-center gap-2.5 cursor-pointer active:">
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
           <p>Get rewarded for your Travels Unlock Instant savings of 10% and more with a remybooking Account</p>
           <button className="bg-[#0071c2] text-[#fff] font-medium p-2.5 mt-3 border-none cursor-pointer">Sign In / Register</button>
           <div className="h-[40px] text-black bg-white border-4 border-yellow-500 flex items-center justify-around p-2.5
                absolute bottom-[-25px] w-full max-w-5xl">
            <div className="flex items-center gap-2.5">
              <MdHotel height={32} width={32}/>
              <input type="text" placeholder="Where are you going?" className="border-none outline-none" />
            </div>
            <div className="flex items-center gap-2.5">
              <AiOutlineCalendar />
              <span>Date to check out</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MdOutlinePerson />
              <span>2 Adults 2 Children 1 Room</span>
            </div>
            <div className="bg-[#0071c2] p-2">
              <button>Search</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Header;