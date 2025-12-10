import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  // ==================== Email Validation ====================
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // Validate email on change
    if (name === "email") {
      if (value && !validateEmail(value)) {
        setErrors({ ...errors, email: "Invalid email format" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final email check
    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

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
          {/* Name */}
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

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={`w-full border p-3 rounded focus:ring focus:ring-blue-300 outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
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

          {/* Submit */}
          <button
            type="submit"
            disabled={errors.email !== "" || !form.email}
            className={`w-full py-3 rounded font-semibold text-white transition ${
              errors.email || !form.email
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
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
