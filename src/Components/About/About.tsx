import React from "react";
import "./About.css";
import line from "../Dash.png";
import Image from "next/Image";
import Headshot from "../V2Headshot.png";

const About = () => (
  <div className="about-container">
    <div className="bio">
      <div className="grid-even-coloms">
        <h1>
          About <Image src={line}></Image>
        </h1>
      </div>
      <p>
        Prior to founding her own practice, Angela was the VP, Brand at YogaGlo,
        a digital wellness company that offers yoga and meditation classes.
        While there, she led a cross-functional team tasked with driving growth  
        through brand,user,and product efforts at a critical time in the company
        lifecycle.
      </p>
      <p>
        Before joining YogaGlo, Angela was the Head of Strategy at Anomaly, a
        global agency that was awarded 2017 Agency of the Year. During her
        tenure,she led marketing efforts on YouTube, Hyperloop Transportation
        Technologies, and PlayStation.
      </p>
      <p>
        While living in New York City, Angela was the Director of Strategy at
        West, a Silicon Valley-based incubator focused on creating new markets
        for early-stage companies. In that role, she led the re-launch of
        Spring, a shopping app that raised $65M ahead of an acquisition. She
        gained invaluable experience in product marketing, brand identity, and
        UX/UI design.
      </p>

      <p>
        At Redscout, she led brand and innovation strategy for world-class
        brands such as PepsiCo, American Express, Petco, Sephora, KSNY,
        Gatorade, Ocean Spray, and Rent the Runway. Her quantitative and
        qualitative insights led to the development of the Gatorade G Series.
      </p>
      <p>
        Angela started her career at TBWA\Chiat\Day, where she won a Cannes Lion
        Grand Prix and a Gold, Silver, and Bronze Effie for her work on
        Gatorade.
      </p>
      <p>
        Angela played NCAA Division I soccer at Drake University, where she
        earned a BS in Business, Cum Laude. She&apos;s a triathlete, yogi, and
        and mother of two who enjoys doing crazy things like climbing to the
        base camp of Mt. Everest.
      </p>
    </div>
    <Image src={Headshot} alt="Headshot" className="profile-image" />
  </div>
);

export default About;
