import React from 'react';
import '../styles/taxi.css';
import img from '../assets/images/construction.jpg'
import CommonSection from '../shared/CommonSection'

const Taxi = () => {
    return (
        <>
        <CommonSection title={'Taxi'} />
        <div className="temp-taxi">
            <h1>Sorry</h1>
            <h2>Web Page is Under Construction</h2>
            <img src={img} alt="Under Construction" />
            <p>Until then...</p>
            <div className="buttons">
                <a href="https://www.uber.com/lk/en/" className="button">Uber</a>
            </div>
            <div className="buttons">
                <a href="https://pickme.lk/book-your-taxi" className="button">Pickme</a>
            </div>
        </div>
        </>
    );
}

export default Taxi;


