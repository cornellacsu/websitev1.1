import React from 'react'
import CalendarAtom from '../../atoms/CalendarSlots/Calendar'
import './Calendar.css'

const Calendar = () => {

    const line = <span className='line'></span>
    return (
        <div className='calendar_container'>
            <div className='title'>
                <h1>Upcoming Events</h1>
                {/* <span className='line'></span> */}
            </div>
            <CalendarAtom date = "04/20/2024" event = "CS 2110 Prelim @ Statler 185"/>
            {line}
        </div>
    )
}

export default Calendar