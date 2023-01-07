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
              <div className="flex items-center gap-2.5">
                  <FaHotel />
                  <span>Stays</span>
              </div>
              <div className="flex items-center gap-2.5">
                  <MdOutlineFlight />
                  <span>Flights</span>
              </div>
              <div className="flex items-center gap-2.5">
                  <AiFillCar />
                  <span>Car Rental</span>
              </div>
              <div className="flex items-center gap-2.5">
                  <MdOutlineAttractions />
                  <span>Attractions</span>
              </div>
              <div className="flex items-center gap-2.5">
                  <MdLocalTaxi />
                  <span>Airport Taxis</span>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Header;