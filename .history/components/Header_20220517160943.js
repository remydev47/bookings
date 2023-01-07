import { MdHotel, MdOutlinePerson, MdOutlineFlight, MdLocalTaxi, MdOutlineAttractions } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { FaHotel } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format }  from 'date-fns';
import { useState } from 'react';

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);

  const [ date, setDate ] =  useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };


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
           {type !== "list" && (
          <>
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
              <span
                onClick={() => setOpenDate(!openDate)}
              >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                 <DateRange
                 editableDateInputs={true}
                 onChange={(item) => setDate([item.selection])}
                 moveRangeOnFirstSelection={false}
                 ranges={date}
                 className="absolute top-[50px]"
            />
              )}
            </div>
            <div className="flex items-center gap-2.5">
              <MdOutlinePerson />
              <span onClick={() => setOpenOptions(!openOptions)} >
                 {`${options.adult} adult · ${options.children} children · ${options.room} room`}
              </span>

              {openOptions && (
                  <div className="absolute top-[50px] bg-gray-400 text-white rounded-md">
                    <div className="w-[200px] flex justify-between m-2.5">
                      <span className="optionText">Adult</span>
                      <div className="flex items-center gap-[10px]">
                        <button
                          disabled={options.adult <= 1}
                          className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md">
                          {options.adult}
                        </span>
                        <button
                          className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between m-2.5">
                      <span className="optionText">Children</span>
                      <div className="flex items-center gap-[10px]">
                        <button
                          disabled={options.children <= 0}
                          className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md">
                          {options.children}
                        </span>
                        <button
                          className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between m-2.5">
                      <span className="optionText">Room</span>
                      <div className="flex items-center gap-[10px]">
                        <button
                          disabled={options.room <= 1}
                          className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md">
                          {options.room}
                        </span>
                        <button
                          className="w-[30px] h-[30px] border border-blue-500 cursor-pointer text-black rounded-md"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
            </div>
            <div className="bg-gray-400 p-2 cursor-pointer">
              <button>Search</button>
            </div>
           </div>
          </>
        )}
        </div>
    </div>
  )
}

export default Header;