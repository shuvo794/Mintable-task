import React, { useEffect, useState } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Grid, Typography } from "@mui/material";
import "../../jibon-slider/Card/Card.css";
import { Box } from "@mui/material";

const TopSlider = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("/TopCollection.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);

  return (
    <Box>
      <Typography
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
        variant="h3"
      >
        Top <span style={{ color: "#6119EE" }}>Collections</span>
      </Typography>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          Top Collections
          {catagories.map((catagorie) => (
            <Grid item xs={2} sm={4} md={4}>
              <SwiperSlide key={catagorie.id} catagorie={catagorie}>
                <div className="jibon-slider__card__container">
                  <div className="cover-photo">
                    <img src={catagorie.cover} alt="" />
                  </div>
                  <div className="profile-photo">
                    <img src={catagorie.profile} alt="" />
                  </div>
                  <div className="jibon-slider__card__content">
                    <div className="title">{catagorie.title}</div>
                    {/* <div className="profile">{catagorie.profile}</div> */}
                    <div className="verify">{catagorie.verify}</div>
                    <div className="description">{catagorie.description}</div>
                    <div className="bottom">
                      <div className="item">{catagorie.item1}</div>
                      <div className="item">{catagorie.item2}</div>
                      <div className="item">{catagorie.item3}</div>
                      {/* <div className="item">item 4</div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Grid>
          ))}
        </Grid>
        ...
      </Swiper>
    </Box>
  );
};

export default TopSlider;