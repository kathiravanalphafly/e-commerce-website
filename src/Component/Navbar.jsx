import { FaUser, FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Audiophile-Color-FINAL.png';
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/products/ProductSlice";

function Navbar() {

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [userOpen, setUserOpen] = React.useState(false);

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  // Cart
  const cartitem = useSelector((state) => state.cart.items);
  const itemCount = cartitem.reduce((total, item) => total + item.quantity, 0);

  // User
  const { currentUser } = useSelector((state) => state.users);

  return (
    <header className='bg-white shadow-md'>
      <div className='py-4'>
        
        {/* Main Container */}
        <div className='container mx-auto flex justify-between items-center px-4'>

          {/* Left - Logo */}
          <Link to="/" className="w-32">
            <img src={logo} alt="audiophile" className="w-full" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className='hidden md:flex gap-8 items-center'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin">AdminDashboard</Link></li>
            <li><Link to="/user">UserDashboard</Link></li>
          </ul>

          {/* Desktop Search */}
          <form className="hidden md:block w-64 relative">
            <input 
              type="text" 
              placeholder="Search products"
              className="bg-zinc-100 rounded-md border border-zinc-200 py-2 px-3 w-full"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </form>

          {/* Icons */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <div className="relative">
              <Link to="/cart">
                <FaShoppingCart size={35} className="cursor-pointer bg-gray-100 p-2 rounded-full" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* User Dropdown */}
            <div className="relative">
              <FaUser
                size={35}
                className="cursor-pointer bg-gray-200 p-2 rounded-full"
                onClick={() => setUserOpen(!userOpen)}
              />

              {userOpen && (
                <ul className="absolute right-0 top-12 bg-white shadow-md rounded p-4 flex flex-col gap-2 w-36 z-20">
                  
                  {/* ✔ Condition applied here */}
                  {currentUser ? (
                    <li>
                      <Link to="/account">My Account</Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/login">Sign In</Link>
                    </li>
                  )}

                </ul>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden bg-gray-200 p-2 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 shadow-inner p-4 flex flex-col gap-4">

            {/* Mobile Search */}
            <div className="relative">
              <input 
                type="text"
                placeholder="Search products"
                className="bg-zinc-100 rounded-md border border-zinc-200 py-2 px-3 w-full pr-10"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Mobile Links */}
            <Link to="/" className="border-b pb-2">Home</Link>
            <Link to="/about" className="border-b pb-2">About</Link>
            <Link to="/contact" className="border-b pb-2">Contact</Link>
            
            <Link to="/admin" className="border-b pb-2">Dashboard</Link>

            {/* Mobile User Logic */}
            {currentUser ? (
              <Link to="/account" className="border-b pb-2">My Account</Link>
            ) : (
              <Link to="/login" className="border-b pb-2">Sign In</Link>
            )}
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;
