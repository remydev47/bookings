import { MdHotel, MdOutlinePerson, MdOutlineFlight, MdLocalTaxi, MdOutlineAttractions } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { FaHotel } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';

const Header = () => {
  return (
     <div className="bg-[#003580] text-white flex justify-center"> {/*Header*/}
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
           <div>{/*header-search*/}
              <div>{/*headersearch-item*/}
                <MdHotel />
                <input type="text" placeholder="Where do you want to go?" className="border-none p-2.5" />
              </div>
           </div>
           <div className="h-[30px] bg-white border-2 border-yellow-500 flex items-center justify-around">{/*header-search*/}
              <div>{/*headersearch-item*/}
                <AiOutlineCalendar />
                <span>date to check-out</span>
              </div>
           </div>
           <div>{/*header-search*/}
              <div>{/*headersearch-item*/}
                <MdOutlinePerson />
                <span>2 Adults 2 Children</span>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Header;