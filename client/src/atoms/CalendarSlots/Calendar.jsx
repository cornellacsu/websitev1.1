import React from 'react';
import "./Calendar.css";

const Calendar = ({ date, event }) => {
    let dummyDate = "3/20/2024";
    let dummyEvent = "Research Night @ Gates G01";
    return (
        <div className="slot">
            <div className="date">{date ? date : dummyDate}</div>
            <div className="event">{event ? event : dummyEvent}</div>
        </div>
    )
}

export default Calendar