import React, { Component } from "react";
import { graphql,Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import moment from "moment";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { overlay, adminText } from "../css/Keepafloat.module.css";
export default class Blogs extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Seo
          title="Blogs"
          keywords={[`Sailing`, `Liveaboard`, `Cruiser`, `Blogs`]}
        />
        <div className="site-container blogs-page" id="Blogs">
          <div className={overlay}>
            <StaticImage src="../images/summer-computer.jpg" alt="summer-computer" />
            <h2 className={adminText}>Enjoy Your Reading </h2>
          </div>
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Blogs</h1>
            </div>
            <ul
              className={`blogs-list ${
                data.allContentfulBlogs.edges.length < 4 ? "few-blogs" : ""
              }`}
            >
              {data.allContentfulBlogs.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={`/${item.node.slug}`} />
                      {item.node.featureImage ? (
                        <GatsbyImage
                          image={item.node.featureImage.gatsbyImageData}
                          alt=""
                        />
                      ) : (
                        <div className="no-image"></div>
                      )}
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        <span className="date">
                          <i className="fas fa-calendar-alt"></i>{" "}
                          {moment(item.node.createdAt).format("LL")}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogsQuery {
    allContentfulBlogs(sort: { createdAt: DESC }) {
      edges {
        node {
          title
          slug
          featureImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          createdAt
        }
      }
    }
  }
`;
