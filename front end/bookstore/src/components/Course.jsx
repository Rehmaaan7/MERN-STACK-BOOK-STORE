import React, { useEffect, useState } from "react";
import listItems from "../../public/listItems.json";
import Cards from "./Cards";
import axios from "axios"
import { Link } from "react-router-dom";
function Course() {

  const [data, setData] = useState([])

  useEffect(()=>{

    
  const getData = async () => {
    try {
      const gettingData = await axios.get("http://localhost:3001/books")
      console.log(gettingData.data)
      setData(gettingData.data)
    } catch (error) {
      console.log(error)
    }
  }
  getData();

  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-gray-900">
        <div className="mt-30 flex-col item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you
            <span className="text-pink-500"> here :)</span>
          </h1>
          <p className="mt-12">
            Flex comes from the CSS layout system called CSS Flexbox. In simple
            words, Flex is a layout method used to arrange elements in a row or
            column and control their alignment and spacing easily. When you use
            the flex class in Tailwind CSS, it actually applies this CSS:
          </p>
          <Link to="/">
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800
           duration:300 hover:cursor-pointer mt-4"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
