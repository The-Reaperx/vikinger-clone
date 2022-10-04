import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../../shared/components/Card";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
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
              <i className="bi bi-person"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Groups</h2>
              <i className="bi bi-people"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Messages</h2>
              <i className="bi bi-envelope-paper"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Archive</h2>
              <i className="bi bi-archive"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Market</h2>
              <i className="bi bi-bag"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Favourites</h2>
              <i className="bi bi-bookmark-star"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Photos</h2>
              <i className="bi bi-camera"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Photos</h2>
              <i className="bi bi-camera"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Photos</h2>
              <i className="bi bi-camera"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Photos</h2>
              <i className="bi bi-camera"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Photos</h2>
              <i className="bi bi-camera"></i>
            </h3>
          </div>
          <div>
            <h3>
              <h2>Photos</h2>
              <i className="bi bi-camera"></i>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
