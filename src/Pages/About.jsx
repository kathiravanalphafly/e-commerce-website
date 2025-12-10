import React from "react";
import Footer from "../Component/Footer";

function About() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <div className="bg-white p-8 shadow rounded leading-7 text-lg">
        <p className="mb-4">
          Welcome to <span className="font-semibold">TechStore</span> — your
          trusted online destination for the best computer components and
          electronics.
        </p>

        <p className="mb-4">
          We are passionate about technology and strive to bring high-quality
          products like <span className="font-semibold">Graphic Cards, Laptops,
          Monitors, and Power Supplies</span> at the most competitive prices.
          Our goal is to make your shopping experience smooth, fast, and secure.
        </p>

        <p className="mb-4">
          Whether you're a gamer, creator, or building your first PC, we are
          here to guide you with the right products and exceptional customer
          support.
        </p>

        <p className="mb-4">
          Our platform is fully built with modern web technologies like
          <span className="font-semibold"> React, Redux, Tailwind CSS</span>{" "}
          ensuring a fast and responsive user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p className="mb-4">
          To provide reliable components and a seamless shopping experience for
          every tech lover across India.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>High-quality and original products</li>
          <li>Fast delivery and secure checkout</li>
          <li>Affordable and transparent pricing</li>
          <li>Wide range of computer components</li>
          <li>Simple and smooth user experience</li>
        </ul>

        <p className="mt-6 font-semibold text-center">
          Thank you for choosing TechStore ❤️  
          <br />
          We are here to serve you better!
        </p>
      </div>
    </div>
  );
}

export default About;
