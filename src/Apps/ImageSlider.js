import React, { useState } from "react";

const imageArray = [
  {
    id: 1,
    image: "https://picsum.photos/id/11/200/300",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/12/200/300",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/13/200/300",
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/14/200/300",
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 5,
    image: "https://picsum.photos/id/15/200/300",
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    id: 6,
    image: "https://picsum.photos/id/16/200/300",
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    id: 7,
    image: "https://picsum.photos/id/17/200/300",
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 8,
    image: "https://picsum.photos/id/18/200/300",
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    id: 9,
    image: "https://picsum.photos/id/19/200/300",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    id: 10,
    image: "https://picsum.photos/id/20/200/300",
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
];

const ImageSlider = () => {
  const [currentSlide, setcurrentSlide] = useState(1);
  const [currentNavDot, setCurrentNavDot] = useState("");
  const currentImage = imageArray.filter((image) => image.id === currentSlide);

  const handleNextSlide = () => {
    if (currentSlide <= imageArray.length - 1) {
      setcurrentSlide(currentSlide + 1);
    } else {
      alert("No more Slides");
    }
  };
  const handlePrevSlide = () => {
    if (1 < currentSlide) {
      setcurrentSlide(currentSlide - 1);
    } else {
      alert("You are on First Slide");
    }
  };

  // navigation using nav dot or whatever they r called!

  const handleNavDots = (id) => {
    setcurrentSlide(id);
  };

  return (
    <div>
      <div className="h-screen center items-center gap-5 bg-green-100">
        <button
          onClick={handlePrevSlide}
          className="rounded bg-orange-400 px-2 py-1 w-20  lg:h-10  hover:bg-orange-600 hover:text-white ">
          Previous
        </button>

        <div className="images">
          {currentImage.map((image) => {
            return (
              <div
                key={image.id}
                className="rounded-md  h-52 w-96 lg:h-96 lg:w-[700px]">
                <div className="rounded-md bg-black w-full h-full overflow-hidden relative">
                  <img src={image.image} className="  h-full w-full" />

                  <div className="quotes absolute left-[10%] top-[30%] center lg:w-[550px]  h-14 lg:h-20 text-xs lg:text-base text-green-600 lg:font-semibold rounded-xl px-2 center items-center  backdrop-blur-sm ">
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
                          className=" cursor-pointer bg-gray-200 size-2 lg:size-3 rounded-full"></span>
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
          className="rounded bg-orange-400 px-2 py-1 w-20 lg:h-10  hover:bg-orange-600 hover:text-white ">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
