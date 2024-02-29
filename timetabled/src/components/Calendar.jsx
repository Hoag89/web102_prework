import React from "react";
import Event from './Event';

const Calendar = () => {
    return (
        <div className="Calendar">
  <table>
        <thead>
            
    <tr>
        <th></th>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
    </tr>
      </thead>
    <tbody>
      <tr>
        <td className="time">8 am</td>
        <Event event='Coffee on Terrace ☕' color ='green'/>
        <td></td>
        <td></td>
        <td></td>
        <Event event='Free Day' color ='pink'/>
        <td></td>
        <td></td> 
    </tr>
    <tr>
        <td className="time">9 am</td>
        <td></td>
        <td></td>
        <Event event='Walk downtown Amalfi' color ='pink'/>
        <Event event='Path of the Gods' color ='blue'/>
        <td></td>
        <td></td> 
        <td></td> 
    </tr>
    <tr>
        <td className="time">10 am</td>
        <Event event='Scooter to Positano 🛵' color ='pink'/>
        <Event event='Isle of Capri' color ='yellow'/>
        <Event event='Walk downtown Amalfi' color ='pink'/>
        <Event event='Path of the Gods' color ='blue'/>
        <td></td>
        <Event event='Road Trip to Naples' color ='green'/>
        <td></td> 
    </tr>
    <tr>
        <td className="time">11 am</td>
        <td></td>
        <Event event='Isle of Capri' color ='yellow'/>
        <td></td>
        <Event event='Path of the Gods' color ='blue'/>
        <td></td>
        <Event event='Road Trip to Naples' color ='green'/>
        <td></td> 
    </tr>
    <tr>
        <td className="time">12 pm</td>
        <Event event='Lunch in Amalfi 🥗' color ='blue'/>
        <Event event='Isle of Capri' color ='yellow'/>
        <Event event='Eat Pizza by the Ocean' color ='red'/>
        <Event event='Path of the Gods' color ='blue'/>
        <td></td>
        <Event event='Road Trip to Naples' color ='green'/>
        <td></td> 
    </tr>
    <tr>
        <td className="time">1 pm</td>
        <td></td>
        <Event event='Isle of Capri' color ='yellow'/>
        <td></td>
        <Event event='Path of the Gods' color ='blue'/>
        <td></td>
        <Event event='Road Trip to Naples' color ='green'/>
        <Event event='Fly Home ✈' color ='blue'/>
    </tr>
    <tr>
        <td className="time">2 pm</td>
        <Event event='Hang by the Pool 💦' color ='pink'/>
        <Event event='Isle of Capri' color ='yellow'/>
        <td></td>
        <td></td>
        <td></td>
        <Event event='Road Trip to Naples' color ='green'/>
        <td></td> 
    </tr>
    <tr>
        <td className="time">3 pm</td>
        <td></td>
        <Event event='Isle of Capri' color ='yellow'/>
        <td></td>
        <td></td>
        <td></td>
        <Event event='Road Trip to Naples' color ='green'/>
        <td></td> 
    </tr>
    <tr>
        <td className="time">4 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <Event event='Road Trip to Naples' color ='green'/>
        <td></td> 
    </tr>
    <tr>
        <td className="time">5 pm</td>
        <Event event='Dinner in Positano 🍤' color ='pink' location='Ristorante Positano'/>
        <td></td>
        <Event event='Dinner In Amalfi 🍽' color ='pink' location='Cafe Amalfi'/>
        <td></td>
        <td></td>
        <td></td>
        <td></td> 
    </tr>
    


    </tbody>
  </table>
        </div>
    )
  
}

export default Calendar;