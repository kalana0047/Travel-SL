import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

import "./dest-card.css";

const DestCard = ({ dest }) => {
  const { _id, title, city, photo, price, featured, reviews } = dest;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="dest__card">
      <Card>
        <div className="dest__img">
          <img src={photo} alt="dest-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="dest__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {city}
            </span>
            <span className="dest__rating d-flex align-items-center gap-1">
              <i class="ri-star-s-fill"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews?.length})</span>
              )}
            </span>
          </div>

          <h5 className="dest__title">
            <Link to={`/dests/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/dests/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DestCard;
