import React from 'react';
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";

export const Header = () => {
  return (
    <div className='flex items-center h-[94px] bg-primary pl-[30px] text-secondary text-[65px]'>
      <div className='mr-auto'>Purity</div>
      
      <div className='relative text-sm pr-8'>
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400" >
        <FiSearch size={20} />
        </div>
        <input 
          type='search'
          placeholder='Search for Gold Jewellery, Diamond Jewellery and more…'
          className='pl-4 border rounded-xl h-10 w-[569.89px] outline-none text-primary'
        />
      </div>
      
      <div className='flex items-center space-x-4 mr-8'> 
        <IoMdHeartEmpty size={30} />
        <BsPeople size={30} />
        <PiShoppingCartLight size={30} />
      </div>
    </div>
  );
};

export default Header;
