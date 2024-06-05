import React,{useEffect} from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import {
  overlay,
  adminText,
} from "../css/Keepafloat.module.css";
const Merch = () => {
  useEffect(() => {
    const spreadShopConfig = {
      shopName: 'sv-sea-senora',
      locale: 'us_US',
      prefix: 'https://lets-sail-andiamo.myspreadshop.com',
      baseId: 'myShop',
      usePushState: false,
      updateMetadata: true,
    };

    // Insert the Spreadshop integration script
    const script = document.createElement('script');
    script.src = 'https://lets-sail-andiamo.myspreadshop.com/js/shopclient.nocache.js';
    script.async = true;
    document.body.appendChild(script);

    // Set the Spreadshop configuration
    window.spread_shop_config = spreadShopConfig;
  }, []);

  return (
    <Layout>
        <div className={overlay}>
         <StaticImage src="../images/Store.webp" placeholder="blurred"
            layout="fullWidth" alt="Light house Store" />
        <h2 className={adminText}>
         Welcome to our Store and helping keeping the Lights On.
        </h2>
      </div>
     <div id="myShop" >
    <a href="https://lets-sail-andiamo.myspreadshop.com">Let's Sail Andiamo</a>
</div>
    </Layout>
  );
};

export default Merch;


