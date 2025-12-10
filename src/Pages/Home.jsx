import React, { useEffect } from 'react';
import Footer from '../Component/Footer';
import ProductGrid from '../Component/ProductGrid';
import { useDispatch } from 'react-redux';
import { setSelectedCategory, initializeHome } from '../features/products/ProductSlice';
import About from './About';

function Home() {
  const dispatch = useDispatch();
  const categories = ["All", "Graphic Cards", "Laptops", "Monitors", "PowerSupply"];

  // Load one product per category on first page load
  useEffect(() => {
    dispatch(initializeHome());
  }, [dispatch]);

  return (
    <div>
      <div className='bg'></div>

      {/* CATEGORY BUTTONS */}
      <div className='container mx-auto my-10 px-4'>
        <div className='flex gap-4 flex-wrap'>
          {categories.map((cat) => (
            <button
              key={cat}
              className='bg-gray-300 py-2 px-4 rounded-md text-black 
                         active:scale-105 hover:bg-zinc-400 transition-all ease-in'
              onClick={() => dispatch(setSelectedCategory(cat))}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <ProductGrid />

      <About />

      {/* FOOTER WITH CALLBACK */}
      <Footer onCategorySelect={(cat) => dispatch(setSelectedCategory(cat))} />
    </div>
  );
}

export default Home;
