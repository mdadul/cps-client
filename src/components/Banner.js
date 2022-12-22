import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import image for slide
import image from "../img/programming.gif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "../stylesheet/Banner.module.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

import Illustration from "./Illustration";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Keyboard, Pagination, Navigation]}
        className={classes.mySwiper}
      >
        <SwiperSlide>
          <div className="container column ">
            <div className={classes.banner}>
              <h3>Welcome To</h3>
              <h1>Cholo Programming Shikhi</h1>
              <p>
                We are a leading online learning platform for the world's best
                programmers. We offer courses in various programming languages,
                web development and many more.
              </p>
              <button> Get Started </button>
            </div>
            <Illustration src={image} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container column ">
            <div className={classes.banner}>
              <h3>Welcome To</h3>
              <h1>Cholo Programming Shikhi</h1>
              <p>
                We are a leading online learning platform for the world's best
                programmers. We offer courses in various programming languages,
                web development and many more.
              </p>
              <button> Get Started </button>
            </div>
            <Illustration src={image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container column ">
            <div className={classes.banner}>
              <h3>Welcome To</h3>
              <h1>Cholo Programming Shikhi</h1>
              <p>
                We are a leading online learning platform for the world's best
                programmers. We offer courses in various programming languages,
                web development and many more.
              </p>
              <button> Get Started </button>
            </div>
            <Illustration src={image} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
