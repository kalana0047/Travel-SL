import React, { useState } from 'react';
import { Button } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import CommonSection from '../shared/CommonSection';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComplaint] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the feedback data
    console.log({ fullName, email, comment, rating });
    // You may want to send this data to your server or handle it in some way
  };

  return (
    <>
    <CommonSection title={'Feedback'}/>
    <div className="feedback-form">
      <h2>Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <StarRatings
            rating={rating}
            starRatedColor="#FFD700"
            changeRating={(newRating) => setRating(newRating)}
            numberOfStars={5}
            name='rating'
          />
        </div>
        <Button className='primary__btn'>Submit</Button>
      </form>
    </div>
    </>
  );
};

export default FeedbackForm;
