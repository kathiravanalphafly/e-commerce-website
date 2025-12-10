import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      <div className="bg-white p-8 shadow rounded-lg">
        <p className="text-lg mb-6 text-gray-700 leading-7">
          Have questions, need help, or want to know more about our products?
          We're always happy to talk tech. Fill out the form below, and our
          support team will get back to you soon!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded focus:ring focus:ring-blue-300 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded focus:ring focus:ring-blue-300 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded h-32 resize-none focus:ring focus:ring-blue-300 outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-8 text-gray-600">
        <p>Email: support@techstore.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Chennai, Tamil Nadu</p>
      </div>
    </div>
  );
}

export default Contact;
