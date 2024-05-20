import React from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/about.css'

import Newsletter from '../shared/Newsletter';

const About = () => {

  return (
    <>
    <CommonSection title={'About'} />
    

      <div className="about-container">
        <container>
            <h1>Our History</h1>
            <p>Discover the rich tapestry of our history as you journey through our land. 
                From ancient civilizations to modern marvels, every corner holds a story waiting to be explored. 
                Walk in the footsteps of emperors, poets, and visionaries, tracing the intricate paths of our cultural heritage. 
                Marvel at architectural wonders that stand as testament to our past, and immerse yourself in the traditions that have shaped our identity. 
                Embark on a voyage through time, where each chapter reveals a new layer of our captivating history, 
                inviting you to uncover the essence of who we are. </p>
        </container>
        <container>
            <h1>Our Mission</h1>
            <p>At Our Mission, we're dedicated to revolutionizing your travel experience. 
                Our innovative web app is designed to be your ultimate companion, seamlessly 
                guiding you through every step of your journey. Whether you're planning an exotic 
                getaway or a weekend escape, we provide curated recommendations, insider tips, 
                and personalized itineraries tailored to your preferences. With a commitment to 
                simplifying travel planning and enhancing exploration, Our Mission empowers you to 
                embark on unforgettable adventures with ease and confidence. </p>
        </container>
        <container>
            <h1>Our Vision</h1>
            <p>Our vision for a new travel guide web app is to revolutionize the way people explore and 
                experience the world. We aim to create a platform that seamlessly integrates personalized 
                recommendations, comprehensive destination information, and user-generated content to 
                empower travelers to plan unforgettable journeys tailored to their interests and preferences. 
                Through innovative features such as interactive maps, curated itineraries, 
                and real-time updates, our app will inspire wanderlust and facilitate meaningful 
                connections with destinations, cultures, and fellow travelers, ultimately fostering a 
                global community united by a passion for exploration and discovery.</p>
        </container>
        </div>
    <Newsletter />
    </>
  );
};

export default About;