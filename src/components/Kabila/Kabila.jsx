import React from "react";
import "./kabila.css";
import { cardData, socialIcons } from "./data";

const Kabila = () => (
  <div className="clubs__container">
    {cardData.map((data, id) => (
      <div key={id} className="card">
        <div
          className="banner"
          style={{ backgroundImage: `url(${data.banner})` }}
        >
          <img src={data.svg} alt="Profile SVG" className="profileImage" />
        </div>

        <h1 className="name">{data.name}</h1>
        <p className="desc">{data.desc}</p>

        <div className="card_handles">
          {socialIcons.map((icon, idx) => (
            <a
              href={data.socialLinks[icon.key]}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
            >
              <button className={`socialContainer ${icon.containerClass}`}>
                <svg
                  viewBox={icon.viewBox}
                  className={`socialSvg ${icon.svgClass}`}
                >
                  <path d={icon.pathData}></path>
                </svg>
              </button>
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Kabila;
