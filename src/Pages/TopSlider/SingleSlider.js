import React from 'react';
// import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

const SingleSlider = ({ catagorie }) => {
  const { cover, profile, title, verify, description, item1, item2, item3 } =
    catagorie;
  console.log(title);
  return (
    <Grid item xs={2} sm={4} md={4}>
      <div className="jibon-slider__card__container">
        <div className="cover-photo">
          <img src={cover} alt="" />
        </div>
        <div className="profile-photo">
          <img src={profile} alt="" />
        </div>
        <div className="jibon-slider__card__content">
          <div className="title">{title}</div>
          <div className="verify">{verify}</div>
          <div className="description">{description}</div>
          <div className="bottom">
            <div className="item">{item1}</div>
            <div className="item">{item2}</div>
            <div className="item">{item3}</div>
            {/* <div className="item">item 4</div> */}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default SingleSlider;