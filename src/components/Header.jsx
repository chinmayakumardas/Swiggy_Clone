import React, { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu=()=>{
    setToggle(false)
  }
  const links=[
    {
        icon:<IoIosSearch />,
        name:"search"
    },
    {
        icon:<CiDiscount1 />,
        name:"offers",
        sup:"New"
    },
    {
        icon:"",
        name:"Help"
    },
    {
        icon:"",
        name:"Sign in"
    },
    {
        icon:"",
        name:"Cart"
    },
    
  ]
  return (
    <>
      <div className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }} onClick={hideSideMenu} >
                <div
                className="w-[500px]  bg-white h-full absolute duration-[400ms]"
                style={{
                    left: toggle ? "0%" : "-100%",
                }}
                onClick={(e)=>{e.stopPropagation()}}
                ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto  flex items-center ">
         {/* 1 */}
          <div className="w-[100px]  cursor-pointer">
            <svg
              className="w-full"
              height="50"
              viewBox="-7.3 3.6 2520.1 3702.8"
              width="1708"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1255.2 3706.3c-2.4-1.7-5-4-7.8-6.3-44.6-55.3-320.5-400.9-601.6-844.2-84.4-141.2-139.1-251.4-128.5-279.9 27.5-74.1 517.6-114.7 668.5-47.5 45.9 20.4 44.7 47.3 44.7 63.1 0 67.8-3.3 249.8-3.3 249.8 0 37.6 30.5 68.1 68.2 68 37.7 0 68.1-30.7 68-68.4l-.7-453.3h-.1c0-39.4-43-49.2-51-50.8-78.8-.5-238.7-.9-410.5-.9-379 0-463.8 15.6-528-26.6-139.5-91.2-367.6-706-372.9-1052-7.5-488 281.5-910.5 688.7-1119.8 170-85.6 362-133.9 565-133.9 644.4 0 1175.2 486.4 1245.8 1112.3 0 .5 0 1.2.1 1.7 13 151.3-820.9 183.4-985.8 139.4-25.3-6.7-31.7-32.7-31.7-43.8-.1-115-.9-438.8-.9-438.8-.1-37.7-30.7-68.1-68.4-68.1-37.6 0-68.1 30.7-68.1 68.4l1.5 596.4c1.2 37.6 32.7 47.7 41.4 49.5 93.8 0 313.1-.1 517.4-.1 276.1 0 392.1 32 469.3 90.7 51.3 39.1 71.1 114 53.8 211.4-154.9 866-1135.9 1939.1-1172.8 1983.8z"
                fill="#fc8019"
              />
            </svg>
          </div>
          {/* 2 */}
          <div className="cursor-pointer">
            <span className="font-bold border-b-[3px]  border-[black] hover:border-[#fc8019] text-black hover:text-[#fc8015]">
              Patia
            </span>
            ,Kanan Vihar,Bhubanes...
            <PiCaretDownBold
              className="cursor-pointer inline text-[0.9rem] text-[#fc8019] "
              fontSize={25}
              onClick={showSideMenu}
            />
          </div>
          {/* 3 */}
          <nav className="flex gap-10 list-none ml-auto  font-semibold text-[18px] ">
            {
                links.map((link,index)=>{
                  return  <li key={index} className="hover:text-[#fc8019] flex items-center gap-2">
                            {link.icon}
                            {link.name}
                            <sup>{link.sup}</sup>
                    </li>
                })
            }
          </nav>


        </div>

        
      </header>
    </>
  );
};

export default Header;
