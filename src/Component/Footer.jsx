import React from 'react'
import logo from '../assets/Audiophile-Color-FINAL.png'
import { AiOutlineFacebook } from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";
import { FaSquareYoutube, FaSquareInstagram } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/products/ProductSlice';

function Footer () {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
    navigate("/"); 
  };

  return (
    <footer className='bg-slate-900 shadow-md'>
      
      {/* NEWSLETTER */}
      <div className='container mx-auto px-4'>
        <div className='min-h-16'>
          <div className='flex justify-between items-center flex-col md:flex-row py-10'>
            <h2 className='text-4xl font-bold text-white'>Subscribe Our Newsletter</h2>
            <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
              <input 
                type='text'
                placeholder='Enter Your Email'
                className='bg-white py-4 px-4 rounded shadow-md w-full'
              />
              <button className='bg-gray-200 py-4 px-4 rounded-full absolute right-3 top-1 bottom-1'>Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER MAIN */}
      <div className='bg-slate-800 text-white py-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            
            {/* LOGO + SOCIAL */}
            <div>
              <img src={logo} className='my-4 w-30' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div className='flex items-center gap-8 mt-5'>
                <a href="https://www.facebook.com" target="_blank"><AiOutlineFacebook size={40} /></a>
                <a href="https://www.twitter.com" target="_blank"><LiaTwitterSquare size={40} /></a>
                <a href="https://www.youtube.com" target="_blank"><FaSquareYoutube size={40} /></a>
                <a href="https://www.instagram.com" target="_blank"><FaSquareInstagram size={40} /></a>
              </div>
            </div>

            {/* PAGES */}
            <div>
              <h2 className='text-2xl font-semibold my-4'>Pages</h2>
              <ul className='space-y-2'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/admin">AdminDashboard</Link></li>
                <li><Link to="/user">UserDashboard</Link></li>
              </ul>
            </div>

            {/* CATEGORY FILTER */}
            <div>
              <h2 className='text-2xl font-semibold my-4'>Category</h2>
              <ul className='space-y-2'>
                <li onClick={() => handleCategoryClick("Monitors")} className='cursor-pointer hover:text-gray-300'>Monitors</li>
                <li onClick={() => handleCategoryClick("Graphic Cards")} className='cursor-pointer hover:text-gray-300'>GPUs</li>
                <li onClick={() => handleCategoryClick("Laptops")} className='cursor-pointer hover:text-gray-300'>Laptops</li>
                <li onClick={() => handleCategoryClick("PowerSupply")} className='cursor-pointer hover:text-gray-300'>Power Supply</li>
              </ul>
            </div>

            {/* ADDRESS */}
            <div>
              <h2 className='text-2xl font-semibold my-4'>Contact</h2>
              <p>33 Rasingapuram, Bodinayakkanur, Theni, TamilNadu</p>
              <p>+91 6374455874</p>
              <p>+91 5459886549</p>
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className='container mx-auto text-center py-4 px-4 text-white'>
        <p>Copyright © 2025 OnlineITtuts</p>
      </div>

    </footer>
  )
}

export default Footer;
