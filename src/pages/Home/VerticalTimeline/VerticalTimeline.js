import React, { useEffect, useRef } from "react";
import './VerticalTimeline.css'


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
          <div
            className={`container ${isLeft ? "left" : "right"}`}
            key={index}
          >
            <div className="content">
              <h2>{event.EventName}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalTimeline;
