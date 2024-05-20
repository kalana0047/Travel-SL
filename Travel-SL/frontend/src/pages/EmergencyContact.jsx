import React from 'react';
import "../styles/EmergencyContact.css";
import CommonSection from '../shared/CommonSection'

const EmergencyContact = () => {
    return (
        <>
        <CommonSection title={'Emergency'} />
        <div className="emergency-contact">
            <h2>Emergency Contact Details</h2>
            <br></br>
            <ul>
                <li>Tourist Police</li>
                <li1><a href="tel:011-2421052">011-2421052</a></li1>
                          
                <li>Sri Lanka Tourism Development Authority (SLTDA)</li>
                <li1><a href="tel:1912">1912</a></li1>
                
                <li>Police Emergency Hotline</li>
                <li1><a href="tel:119">119</a></li1>
                
                <li>Ambulance / Fire & rescue</li>
                <li1><a href="tel:110">110</a></li1>

                <li>Ambulance</li>
                <li1><a href="tel:1990">1990</a></li1>

                <li>Report Crimes</li>
                <li1><a href="tel:011-2691500">011-2691500</a></li1>

                <li>The National Hospital of Sri Lanka</li>
                <li1><a href="tel:1959">1959</a></li1>
                <br></br>
                <br></br>
                <li1>Tourist Police Units</li1>
                <li>Anuradhapura</li>
                <li1><a href="tel:+9411-3133686">+9411-3133686</a></li1>
                <li>Polonnaruwa</li>
                <li1><a href="tel:+9427-2223099">+9427-2223099</a></li1>
                <li>Kandy</li>
                <li1><a href="tel:+9481-3837392">+9481-3837392</a></li1>
                <li>Mount Lavinia</li>
                <li1><a href="tel:+9411-2738351">+9411-2738351</a></li1>
                <li>Sigiriya</li>
                <li1><a href="tel:+9466-4930327">+9466-4930327</a></li1>
                <li>Hikkaduwa / Narigama</li>
                <li1><a href="tel:+9491-2275545">+9491-2275545</a></li1>
                <li>Aluthgama / Moragalla</li>
                <li1><a href="tel:+9434-2276049">+9434-2276049</a></li1>
                <li>Arugambay / Pothuvil</li>
                <li1><a href="tel:+9411-3081044">+9411-3081044</a></li1>
                <li>Negambo / Eththukale</li>
                <li1><a href="tel:+9431-2275555">+9431-2275555</a></li1>
                <li>Kalukuda / Pasikuda</li>
                <li1><a href="tel:+9465-2257707">+9465-2257707</a></li1>
                <li>Rambukkana / Pinnawala</li>
                <li1><a href="tel:+9476-7195607">+9476-7195607</a></li1>
                <br></br>
                <br></br>
                <li>Bandaranaike International Airport</li>
                <li1><a href="tel:+94112264444">+94112264444</a></li1>

                <li>Dept. of Immigration</li>
                <li1><a href="tel:+94112264444">+94112264444</a></li1>
                {/* Add more emergency contacts as needed */}
            </ul>
        </div>
        </>
    );
}

export default EmergencyContact;
