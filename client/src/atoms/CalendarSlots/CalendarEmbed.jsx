import React from 'react';

const CalendarEmbed = () => {
    return (
        <div> 
            <div>
            <h1 class="font-weight-bold" style={{ display: "flex", justifyContent: "center"}}>Calendar</h1>
            <h5 style={{ display: "flex", justifyContent: "center"}}>Find our upcoming events here!</h5>
            </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showPrint=0&src=Y18yYWM3ZDc3ZDUyMWM0NGQyNmNmNWI4ODJiYjBhYzZiZGJmNzFiMDA5ZjlhYmFiNTcwNjFkODZlMDQ5ZmUwNmU4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D50000" 
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