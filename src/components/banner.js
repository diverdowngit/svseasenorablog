import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default class Banner extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="banner">
        <GatsbyImage
          image={data.bannerImage.gatsbyImageData}
          alt=""
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
        <div className="container">
          <div className="banner-details">
            <span>Welcome</span>
            <h1>To {data.designation}</h1>
            <ul className="sub-data">
              {data.bannerList.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <ul className="social">
              <li>
                <a
                  className="fab fa-facebook-f"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                  alt="facebook"
                >
                  {}
                </a>
              </li>
              <li>
                <a
                  className="fab fa-instagram"
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  {}
                </a>
              </li>
              <li>
                <a
                  className=" fab fa-patreon"
                  href={data.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="patreon"
                >
                  {}
                </a>
              </li>
              <li>
                {/* <a
                  className="fab fa-youtube"
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="youtube"
                >
                  {}
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
