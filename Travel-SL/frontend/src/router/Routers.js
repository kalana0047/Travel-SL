import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import About from '../pages/About';
import FeedbackForm from '../pages/FeedbackForm';
import EmergencyContact from '../pages/EmergencyContact'
import Taxi from '../pages/Taxi'
import Hotels from "./../pages/Hotels";
import HotelDetails from "./../pages/HotelDetails";
import Rests from "./../pages/Rests";
import RestDetails from "./../pages/RestDetails";
import Cars from "./../pages/Cars";
import CarDetails from "./../pages/CarDetails";
import Guides from "./../pages/Guides";
import GuideDetails from "./../pages/GuideDetails";
import Dests from "./../pages/Dests";
import DestDetails from "./../pages/DestDetails";
import ComplaintForm from './../pages/ComplaintForm';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path='/about' element={<About />} />
      <Route path='/feedback' element= {<FeedbackForm />} />
      <Route path='/emergency' element={<EmergencyContact />} />
      <Route path='/taxi' element= {<Taxi />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />
      <Route path="/rests" element={<Rests />} />
      <Route path="/rests/:id" element={<RestDetails />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/guides/:id" element={<GuideDetails />} />
      <Route path="/dests" element={<Dests />} />
      <Route path="/dests/:id" element={<DestDetails />} />
      <Route path="/comps" element={<ComplaintForm />} />
    </Routes>
  );
};

export default Routers;
