import React from 'react'
import CalendarAtom from '../../atoms/CalendarSlots/Calendar'
import './Calendar.css'

const Calendar = () => {

    const line = <span className='line'></span>
    return (
        <div className='calendar_container'>
            <div className='title'>
                <h2>Upcoming Events</h2>
                {line}
            </div>
            <CalendarAtom date = "03/20/2024" event = "Research Night @ Gates G01"/>
            {line}
            <CalendarAtom date = "03/23/2024" event = "Game Night @ Upson 221"/>
        </div>
    )
}

export default Calendar