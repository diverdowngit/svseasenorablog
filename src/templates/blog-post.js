import React, { Component } from "react";
import { graphql,Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import moment from "moment";
import Layout from "../components/layout";
import Seo from "../components/seo";


export default class blogPost extends Component {
  render() {
    const data = this.props.data.contentfulBlogs;

    // Find the previous and next blog posts
    const allPosts = this.props.data.allContentfulBlogs.edges;
    const currentIndex = allPosts.findIndex(post => post.node.id === data.id);
    const prevPost = allPosts[currentIndex - 1]?.node;
    const nextPost = allPosts[currentIndex + 1]?.node;
   

    return (
      <Layout>
        <Seo
          title={data.title}
          keywords={[
            `SV Sea Senora`
            ,
            `${data.title}`
          ]}
        />
        <div className="site-container blog-post">
          <div className="container">
            {data.featureImage ? (
              <GatsbyImage
              className="feature-img"
              image={data.featureImage.gatsbyImageData}
alt=""
               />
             
            ) : (
              <div className="no-image"></div>
            )}

            <div className="details">
              <h1 className="title">{data.title}</h1>
              <span className="date">
                <i className="fas fa-calendar-alt"></i>{" "}
                {moment(data.createdAt).format("LL")}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
                }}
              />
            </div>
              
              <div className="prev-next-links">
              {prevPost && (
                <Link to={`/${prevPost.slug}`} className="prev-link">
                  <span>&lt;</span> {prevPost.title}
                </Link>
              )}

              {nextPost && (
                <Link to={`/${nextPost.slug}`} className="next-link">
                  {nextPost.title} <span>&gt;</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
query SinglePostQuery($slug: String!) {
  contentfulBlogs(slug: {eq: $slug}) {
    id
    title
    slug
    featureImage {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED,
formats: [AUTO, WEBP])
    }
    description {
      childMarkdownRemark {
        html
      }
    }
    createdAt
  }
  allContentfulBlogs(sort: {createdAt: DESC}) {
    edges {
      node {
        id
        title
        slug
        createdAt
      }
    }
  }
  contentfulSiteInformation {
    siteUrl
    twitterHandle
  }
}
`;
