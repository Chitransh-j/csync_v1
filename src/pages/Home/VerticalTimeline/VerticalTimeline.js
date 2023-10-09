import React, { useEffect, useRef } from "react";
import "./VerticalTimeline.css";

const Event = ({ event }) => (
  <div className="content">
    <p>
      <span className="event_tag">Event Name :</span> {event.EventName}
    </p>
    <p>
      <span className="event_tag">Club :</span> {event.ClubName}
    </p>
    <p>
      <span className="event_tag">Start Date :</span> {event.StartDate}
    </p>
    <p>
      <span className="event_tag">End Date :</span> { event.EndDate}
    </p>
    <p>
      <span className="event_tag">Time :</span> {event.EventTime}
    </p>
    <p>
      <span className="event_tag">Venue :</span> {event.Venue}
    </p>
    <p>
      <span className="event_tag">Event Description :</span> {event.EventDescription}
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
