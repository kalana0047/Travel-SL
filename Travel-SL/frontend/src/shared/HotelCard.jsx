import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

import "./hotel-card.css";

const HotelCard = ({ hotel }) => {
  const { _id, title, city, photo, price, featured, reviews } = hotel;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="hotel__card">
      <Card>
        <div className="hotel__img">
          <img src={photo} alt="hotel-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="hotel__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {city}
            </span>
            <span className="hotel__rating d-flex align-items-center gap-1">
              <i class="ri-star-s-fill"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews?.length})</span>
              )}
            </span>
          </div>

          <h5 className="hotel__title">
            <Link to={`/hotels/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/hotels/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HotelCard;
