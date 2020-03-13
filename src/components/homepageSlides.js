import React from 'react';
import { Link } from "gatsby"; 
import { Controller, Scene } from 'react-scrollmagic';

import "../scss/homeSlider.scss"

const HomepageSlides = () => (
  <Controller>
    <Scene pin={true} triggerHook={0} classToggle="is-active">
      <div className="home-section home-section-1">
        <Link to="/case-studies/whizz">
          <div className="background"></div>
          <div className="number-wrapper">01 <span className="line"></span> selected works</div>
          <div className="content-wrapper">
            <h2>Clean your house mate</h2>
            <p>Whizz are Australia’s leading home cleaning services with over 5,000 cleaners on demand platform for both mobile and web applications.</p>
          </div>
        </Link>
      </div>
    </Scene>
    <Scene pin={true} triggerHook={0} classToggle="is-active">
      <div className="home-section home-section-2">
        <Link to="/case-studies/le-buns">
          <div className="background"></div>
          <div className="number-wrapper">02 <span className="line"></span> selected works</div>
          <div className="content-wrapper">
            <h2>Le Buns</h2>
            <p>Le Buns is an up and coming Australian swimwear label that puts sustainability and environmental consciousness at the centre of what they do.</p>
          </div>
        </Link>
      </div>
    </Scene>
    <Scene pin={true} triggerHook={0} classToggle="is-active">
      <div className="home-section home-section-3">
        <Link to="/case-studies/stratton-finance">
          <div className="background"></div>
          <div className="number-wrapper">03 <span className="line"></span> selected works</div>
          <div className="content-wrapper">
            <h2>Stratton Finance</h2>
            <p>Stratton Finance are the leading car finance website in Australia, assisting Australians with buying their new car.</p>
          </div>
        </Link>
      </div>
    </Scene>
    <Scene pin={true} triggerHook={0} classToggle="is-active">
      <div className="home-section home-section-4">
        <Link to="/case-studies/sesame-street">
          <div className="background"></div>
          <div className="number-wrapper">04 <span className="line"></span> selected works</div>
          <div className="content-wrapper">
            <h2>Sesame Street</h2>
            <p>With an abundance of iconic characters instantly recognisable across multiple generations.</p>
          </div>
        </Link>
      </div>
    </Scene>
    <div className="home-section"></div>
  </Controller>
);

export default HomepageSlides;