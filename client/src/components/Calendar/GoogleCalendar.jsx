import React from "react";

const GoogleCalendar = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=1&showNav=0&showDate=1&showPrint=0&src=a2M2OTZAY29ybmVsbC5lZHU&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441&color=%2333B679&color=%230B8043"
          style="border:solid 1px #777"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no">
        </iframe>`,
      }}
    />
  );
};

export default GoogleCalendar;
