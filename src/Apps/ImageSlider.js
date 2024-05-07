import React, { useState } from "react";
import img1 from "../assests/aaron-burden-wPy71r8Hi_s-unsplash.jpg";
import img2 from "../assests/anthony-rosset-coY9XY7x_mw-unsplash.jpg"
import img3 from "../assests/christian-regg-RxOoPUC1F44-unsplash.jpg"
import img4 from "../assests/cristian-palmer-XexawgzYOBc-unsplash.jpg"
import img5 from "../assests/ian-parker-rWey_wseEcY-unsplash.jpg"
import img6 from "../assests/jeremy-bishop-mA9abjhEG4A-unsplash.jpg"
import img7 from "../assests/paddy-o-sullivan-5cE4ecIqMTQ-unsplash.jpg"
import img8 from "../assests/robert-bye-EKLr56NaJDw-unsplash.jpg"
import img9 from "../assests/victor-rodriguez-5rchckwczuc-unsplash.jpg"
import img10 from "../assests/yifei-chen-qqu0_9Gn8tM-unsplash.jpg"

const imageArray = [
  {
    id: 1,
    image: img1,
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 2,
    image: img2,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 3,
    image: img3,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    id: 4,
    image: img4,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 5,
    image: img5,
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    id: 6,
    image: img6,
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    id: 7,
    image: img7,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 8,
    image: img8,
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    id: 9,
    image: img9,
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    id: 10,
    image: img10,
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
];

const ImageSlider = () => {
  const [currentSlide, setcurrentSlide] = useState(1);
  const [activeDot, setActiveDot] = useState("");

  const currentImage = imageArray.filter((image) => image.id === currentSlide);

  const handleNextSlide = () => {
    if (currentSlide <= imageArray.length - 1) {
      setcurrentSlide(currentSlide + 1);
    } else {
      setcurrentSlide(1);
    }
  };
  const handlePrevSlide = () => {
    if (1 < currentSlide) {
      setcurrentSlide(currentSlide - 1);
    } else {
      setcurrentSlide(imageArray.length);
    }
  };

  // navigation using nav dot or whatever they r called!
  const handleNavDots = (id) => {
    setcurrentSlide(id);
  };

//   const handleActiveDot=(dotID)=>{
// setActiveDot(dotID)
//   }

  return (
    <div>
      <div className="h-screen center items-center gap-2 lg:gap-5 bg-green-100">
        <buttom
          onClick={handlePrevSlide}
          className="rounded-full bg-slate-700 text-gray-200 lg:text-xl p-2 center items-center size-6 lg:size-8  hover:bg-black hover:text-white animated">
          <i className="fa-solid fa-chevron-left"></i>
        </buttom>

        <div className="images">
          {currentImage.map((image) => {
            return (
              <div
                key={image.id}
                className="rounded-md  h-52 w-80 lg:h-96 lg:w-[700px]">
                <div className="rounded-md bg-black w-full h-full overflow-hidden relative">
                  <img src={image.image} className="  h-full w-full" />

                  <div className="quotes absolute left-[10%] top-[30%] center lg:w-[550px]  h-14 lg:h-20 text-xs lg:text-base text-green-600 lg:font-semibold rounded-xl px-2 center items-center  backdrop-blur-[1px]">
                    <div className="relative h-full w-full">
                      {image.quote}
                      <div className="author absolute bottom-1 right-1">
                        - {image.author}
                      </div>
                    </div>
                  </div>

                  <div className="nav_dots flex gap-2 absolute bottom-2 right-[30%] lg:right-[35%] ">
                    {imageArray.map((dot) => {
                      return (
                        <span
                          onClick={() => {
                            handleNavDots(dot.id);
                          }}
                          className={` cursor-pointer  size-2 lg:size-3 rounded-full hover:bg-green-500 hover:scale-[1.1]  animated ${currentSlide === dot.id ? "bg-green-500 scale-[1.3]" : "bg-gray-200"}`}></span>
                      );
                    })}
                  </div>
                  <div className="absolute top-1 left-1 center rounded-full text-[11px] text-white center items-center size-4 bg-black/20 ">
                    {image.id}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="dots"></div>
        <button
          onClick={handleNextSlide}
          className="rounded-full bg-slate-700 text-gray-200 lg:text-xl p-2 center items-center size-6 lg:size-8  hover:bg-black hover:text-white animated ">
             <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
