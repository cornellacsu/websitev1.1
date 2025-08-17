import React from 'react';

const CalendarEmbed = () => {
    return (
        <div> 
            <div>
            <h1 class="font-weight-bold" style={{ display: "flex", justifyContent: "center"}}>Calendar</h1>
            <h5 style={{ display: "flex", justifyContent: "center"}}>Find our upcoming events here!</h5>
            </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <iframe src="https://calendar.google.com/calendar/embed?src=c_57a6507b1e9c36a6bfd510214b38c5358a1ab6f0ab59651d9d40a84254fb57e3%40group.calendar.google.com&ctz=America%2FNew_York" 
            style={{border: "solid 1px #777", marginTop:"20px"}} 
            width="800" 
            height="600" 
            frameborder="0">
            </iframe>
        </div >
        </div>
    )
};

export default CalendarEmbed;
