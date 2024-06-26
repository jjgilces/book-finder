import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { useSelector } from 'react-redux'; 
import { RootState } from '../../hooks/reducer'; 

const Navbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const booksCount = useSelector((state: RootState) => state.readingList.books.length);
  const isActive = (path) => location.pathname === path;

  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-white py-2">
        <div className="container flex justify-between items-center">
          <div >
            <a href="/">
              <img src={"../../book3.png"} alt="Logo" className="w-12" />
            </a>
          </div>
<div>
  <p  className= "font-bold text-2xl sm:text-3xl flex gap-2">BookFinder</p>
</div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Buscar"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* favorite button */}
            <div className="relative group">

            <button onClick={() => navigate("/favorite")} 
                className={`btn-custom ${isActive('/order') ? 'bg-secondary' : ''}`}>
                <FaBookBookmark />
              <p className="tooltip">Usted tiene {booksCount} libros en su lista de lectura.</p>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
