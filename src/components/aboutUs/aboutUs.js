import React from "react";
import "./aboutUs.css";
import { motion } from "framer-motion"

function aboutUs() {
  return (


    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileInView="visible"
      transition={{ type: "linear", duration: 3.0 }}
    >
      <div className="main">
        <div className="component">
          <img src="/images/image7.jpg" alt="" />
          <div className="content">
            <div className="content-1">ABOUT US</div>
            <hr />
            <div className="content-2">We Are the Singapore Indian Association.</div>
            <div className="content-3">
            The Singapore Indian Association was established in 1923 with the objective of promoting the social, physical, intellectual, cultural and the general welfare of its members. When it was formed, the association projected itself as a pan-Indian, rather than narrowly ethnic, language, religion, caste or region-based organization. This marked it as significantly different from most other Indian organisations in Singapore.
            </div>
            <div className="content-4">
            While the association was founded in 1923, its clubhouse was only completed in the 1950s. It is located at the historic Balestier Plain in Singapore, which has acquired formal heritage status for its concentration of a cluster of community associations and sports clubs, such as the Indian Association. In keeping with its early political leanings, the foundation stone of the clubhouse was laid by Jawaharlal Nehru on 18 June 1950.
            </div>
            <div className="content-4">
            Since its beginning, the association has been extremely active in Singapore’s sports scene. Sports in which the association is active in include cricket, tennis, hockey, football and billiards. Many of its members and sportspeople also went on to represent Singapore in regional and international tournaments.
            </div>
            <button>Know More</button>
          </div>
        </div>
      </div>
    </motion.div>

  );
}

export default aboutUs;
