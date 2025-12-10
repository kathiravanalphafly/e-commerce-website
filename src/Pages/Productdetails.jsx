import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from '../features/cart/cartSlice';
import { addReview } from "../features/reviews/reviewSlice";

function Productdetails() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id))
  );

  // ⭐ Review states
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState("");

  // ⭐ Get reviews for this product
  const reviews = useSelector(
    (state) => state.reviews.list[product?.id]
  ) || [];

  if (!product) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4'>
            Product Not found
            <Link to="/" className='text-blue-600 hover:text-blue-800'>
              Return to Home
            </Link>
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div>
        <Link to="/" className='mb-8 inline-block'>Back to Products</Link>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='shadow-md p-4 rounded w-[600px]'>
            <img src={product.image} alt={product.title} />
          </div>

          <div>
            <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
            <p className='text-gray-600 mb-6'>{product.description}</p>

            <div className='mb-6'>
              <span className='text-3xl font-bold'>₹{product.price}</span>
            </div>

            <div className='mb-6'>
              <h3 className='font-semibold mb-2'>Category</h3>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm'>
                {product.category}
              </span>
            </div>

            {/* Add To Cart */}
            <button
              className='w-full md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300'
              onClick={() => {
                dispatch(addToCart(product));
                alert(`${product.title} added to cart!`);
              }}
            >
              <FaCartPlus />
              Add to Cart
            </button>
          </div>
        </div>

        {/* ---------------------- REVIEWS SECTION ---------------------- */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

          {/* Review List */}
          <div className="mb-8">
            {reviews.length > 0 ? (
              reviews.map((r, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded mb-4">
                  <h3 className="font-semibold">{r.name}</h3>
                  <p className="text-yellow-500">{"⭐".repeat(r.rating)}</p>
                  <p className="text-gray-700">{r.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet. Be the first to review!</p>
            )}
          </div>

          {/* Review Form */}
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-bold mb-4">Write a Review</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  addReview({
                    productId: product.id,
                    name,
                    rating,
                    comment
                  })
                );
                setName("");
                setRating(5);
                setComment("");
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <select
                className="w-full p-2 border rounded mb-4"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Star
                  </option>
                ))}
              </select>

              <textarea
                className="w-full p-2 border rounded mb-4"
                placeholder="Write your review..."
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>

              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                Submit Review
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Productdetails
