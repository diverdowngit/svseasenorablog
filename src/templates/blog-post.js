import React, { Component } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import moment from "moment";
// import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/layout";
import Seo from "../components/seo";
 import Share from "../components/share";

export default class blogPost extends Component {
  render() {
    const data = this.props.data.contentfulBlogs;
    // const disqusShortname = "RohitGupta";
    // const disqusConfig = {
    //   identifier: data.id,
    //   title: data.title
    // };

    const siteurl = this.props.data.contentfulSiteInformation.siteUrl + "/";
    const twitterhandle = this.props.data.contentfulSiteInformation
      .twitterHandle;
    const socialConfigss = {
      site: {
        siteMetadata: { siteurl, twitterhandle }
      },
      title: data.title,
      slug: data.slug
    };

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
             <Share
              socialConfig={{
                ...socialConfigss.site.siteMetadata.twitterhandletitle,
                config: {
                  url: `${siteurl}${socialConfigss.slug}`,
                  title: `${socialConfigss.title}`
                }
              }}
            /> 
            {/* <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            /> */}
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      slug
      featureImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO,
WEBP])
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      createdAt
    }
    contentfulSiteInformation {
      siteUrl
      twitterHandle
    }
  }
`;
