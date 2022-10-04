import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../../shared/components/Card";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
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
      <div className="slider">
        <h2> </h2>
        <Slider {...settings}>
          <div>
            <h3>
              <h2>Timeline</h2>
              <i className="bi bi-calendar3-week"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Friends</h2>
              <i className="bi bi-person-square"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Groups</h2>
              <i className="bi bi-people-fill"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Newspaper</h2>
              <i className="bi bi-newspaper"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Newspaper</h2>
              <i className="bi bi-newspaper"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Newspaper</h2>
              <i className="bi bi-newspaper"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Newspaper</h2>
              <i className="bi bi-newspaper"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Newspaper</h2>
              <i className="bi bi-newspaper"></i>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
