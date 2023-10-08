import React, { useEffect, useRef } from "react";
import "./VerticalTimeline.css";

const Event = ({ event }) => (
  <div className="content">
    <p>
      <span>Event Name:</span> {event.EventName}
    </p>
    <p>
      <span>Club:</span> {event.ClubName}
    </p>
    <p>
      <span>Start Date:</span> {event.StartDate}
    </p>
    <p>
      <span>End Date:</span> {event.EndDate}
    </p>
    <p>
      <span>Time:</span> {event.EventTime}
    </p>
    <p>
      <span>Venue:</span> {event.Venue}
    </p>
  </div>
);

const VerticalTimeline = (props) => {
  const timelineRef = useRef(null);
  const eventList = props.eventList;
  let isLeft = false;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (timelineRef.current) {
      const containers = timelineRef.current.querySelectorAll(".container");
      containers.forEach((container) => {
        observer.observe(container);
      });
    }
  }, [eventList]); // Add eventList as a dependency if needed

  return (
    <div className="timeline" ref={timelineRef}>
      {eventList.map((event, index) => {
        isLeft = !isLeft;

        return (
          <div className={`container ${isLeft ? "left" : "right"}`} key={index}>
            <Event key={index} event={event} />
          </div>
        );
      })}
    </div>

  );
};

export default VerticalTimeline;
