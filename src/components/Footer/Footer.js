import React from "react";
import "./FooterStyles.css";

const creators = [
  {
    name: "Chetan Kumar Patel",
    image:
      "https://i.pinimg.com/736x/ba/dc/30/badc30c4659b9df4a5d05e6e8d9a3f15.jpg",
    github: "https://github.com/V10codes",
  },
  {
    name: "Chitransh Jawere",
    image:
      "https://i.pinimg.com/1200x/71/32/0e/71320e078c18619ee2ad9358867fe14b.jpg",
    github: "https://github.com/Chitransh-j",
  },
  {
    name: "Devesh Dewangan",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/924/421/desktop-wallpaper-eren-yeager-icons-eren-icon.jpg",
    github: "https://github.com/devesh-d16",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h3>Meet the Creators :</h3>
          <div className="location">
            {creators.map((creator, index) => (
              <div className="namer" key={index}>
                <img src={creator.image} alt={`img${index + 2}`} />
                <p>
                  <a href={creator.github} className="repo">
                    {creator.name}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <h3>About The Project:</h3>
          <p>
            The PR of various events and fests is a hectic task. It is not
            possible to inform each and every student about every happening at
            all the clubs. C-sync provides a centralised platform for all this.
            We are the one and only stop for all your PR needs. Find out about
            the upcoming and past events here and ignore those WhatsApp
            forwards.
          </p>
          <p>
            <a href="https://github.com/V10codes/csync.git" className="repo">
              🔗Check out our project Repo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
