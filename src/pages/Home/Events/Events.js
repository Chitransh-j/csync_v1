import React, { useState, useEffect } from "react";
import VerticalTimeline from "../VerticalTimeline/VerticalTimeline.js";

function Events() {
  const [eventlist, setEventlist] = useState([]);

  useEffect(() => {
    const readGoogleSheet = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/al7pl5xxhzyil");
        const data = await response.json();
        setEventlist(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the function to fetch data when the component mounts
    readGoogleSheet();
  }, []); // The empty array [] ensures this effect runs once after the initial render

  return (
    <div>
      <div>
        <VerticalTimeline eventList={eventlist} />
      </div>
    </div>
  );
}

export default Events;
