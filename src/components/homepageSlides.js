import React from 'react';
import styled from 'styled-components';
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
            <p>Our full service strategy made these guys some money</p>
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
            <p>Lorem Ipsum</p>
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
            <p>Lorem Ipsum</p>
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
            <p>Lorem Ipsum</p>
          </div>
        </Link>
      </div>
    </Scene>
    <div className="home-section"></div>
  </Controller>
);

export default HomepageSlides;