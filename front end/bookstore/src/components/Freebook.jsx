import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Freebook = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    const getData = async () => {
      try {
        const gettingData = await axios.get("http://localhost:3001/books")
      setData(gettingData.data.filter((data) => data.category === "free"))
      
      
    } catch (error) {
      console.log(error)
    }
    }
    getData()
  },[])

  //   console.log(listItems);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white`}>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses </h1>
          <p>
            eact-Slick is a React-based carousel/slider library that provides a
            simple API for creating highly customizable sliders. It is a React
            port of the popular Slick Carousel library and supports features
            like infinite looping, lazy loading, autoplay, and responsive
            settings
          </p>
        </div>
        <div className=" dark:bg-slate-900 dark:text-white">
          <Slider {...settings}>
            {data.map((items) => (
              <Cards item={items} key={items.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
