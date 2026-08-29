import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-gray-100 dark:bg-slate-900 flex items-center justify-center px-4">

        {/* Close Button */}
       

        {/* Content Card */}
        <div className="max-w-3xl bg-white dark:bg-slate-800 shadow-xl rounded-xl p-8 relative z-10">
             <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 text-lg font-bold"
        >
          ×
        </button>
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            About Us
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
            Welcome to our website. This platform is designed to help users
            explore different books and learning resources in a simple and
            modern interface. Our goal is to make learning easy and accessible
            for everyone.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
            We provide a variety of free and premium courses that help students
            improve their knowledge in different subjects. Our platform focuses
            on delivering quality content and a smooth user experience.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            This project is built using modern web technologies like React,
            Tailwind CSS, Express.js, Node.js, and MongoDB to ensure fast
            performance and responsive design across all devices.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-pink-100 dark:bg-slate-700 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                Our Mission
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Making learning simple and accessible.
              </p>
            </div>

            <div className="bg-pink-100 dark:bg-slate-700 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                Our Vision
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Helping students grow with technology.
              </p>
            </div>

            <div className="bg-pink-100 dark:bg-slate-700 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                Our Values
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Quality education and great user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;