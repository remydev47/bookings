import { MdHotel } from 'react-icons/md';
import { MdOutlineFlight } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai';
import { MdLocalTaxi } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="">
        <div className="">
            <div className="">
                <FaHotel />
                <span>Stays</span>
            </div>
            <div>
                <MdOutlineFlight />
                <span>Flights</span>
            </div>
            <div>
                <AiFillCar />
                <span>Car Rental</span>
            </div>
            <div>
                <MdHotel />
                <span>Attractions</span>
            </div>
            <div>
                <MdLocalTaxi />
                <span>Airport Taxis</span>
            </div>
        </div>
    </div>
  )
}

export default Header;