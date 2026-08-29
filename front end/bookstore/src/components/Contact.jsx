import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const Contact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
    <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
        <div className="relative bg-white dark:bg-slate-800 shadow-xl rounded-xl p-8 w-full max-w-md">
          {/* Close / Back button */}
          <button
            onClick={() => navigate(-1)} // go back
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl font-bold cursor-pointer "
          >
            ×
          </button>

          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                autoComplete="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-sm text-red-500">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                autoComplete="email"
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">Email is required</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                id="message"
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500">Message is required</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
