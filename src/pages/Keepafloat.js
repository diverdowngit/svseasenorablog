import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Patron from "../images/patreon-icon.webp";
import { StaticImage } from "gatsby-plugin-image"
import {
  container,
  bookingwrapper,
  wrapper,
  staywrapper,
  aboutCards,
  overlay,
  adminText,
} from "../css/Keepafloat.module.css";

const Keepafloat = () => {
  return (
    <Layout>
      <div className={overlay}>
         <StaticImage src="../images/sailboatonrocks.webp" placeholder="blurred"
            layout="fullWidth" alt="sailboat on rocks" />
        <h2 className={adminText}>
          Our Passion For Travel Is The Foundation Of  Let's Sail Andiamo .
        </h2>
      </div>
      <div className={container}>
        <div className={wrapper}>
          {" "}
          <img
            src={Patron}
            href="https://www.patreon.com/LetsSailAndiamo"
            alt="patron"
          />
        </div>
        <div className={bookingwrapper}>
          <div className={staywrapper}>
            <div className={aboutCards}>
              <h1 className="cardsHeadings">Become A Patreon</h1>
              <p>
                You can make contributions on our Patreon page ( Button Below ).
                If you can't give, but still want to support our cause, please
                share our page with your friends, family Members, and coworkers.
                With more people aware of our Adventure, We would be one step
                closer to reaching our goal. We would like to thank you in
                advance for your support!
              </p>
              <a
                href="https://www.patreon.com/LetsSailAndiamo"
                alt="patron"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  href="https://www.patreon.com/LetsSailAndiamo"
                  alt="patron"
                >
                  Patreon
                </button>
              </a>
            </div>
          </div>
          <div className={staywrapper}>
            <div className={aboutCards}>
              <h1>PayPal</h1>
              <p>
                If you would like to make a One time donation click the button
                below to go to our PayPal page We would like to thank you in
                advance for your support!{" "}
              </p>
              <a
                href="https://www.paypal.com/pools/c/957aJlX1is"
                alt="Paypal"
                target="_blank"
                rel="noopener noreferrer "
              >
                <button aria-label="PayPal">PayPal</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Keep afloat" />;
export default Keepafloat;
