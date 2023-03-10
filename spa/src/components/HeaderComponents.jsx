/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react';

class HeaderComponents extends Component{
  render (){
    return(
      <header className="header">
        <div className="header__logo">
          <img src="" alt="Blue beach spa" />
        </div>
        <div className="header__nav">
          <div className="nav__menu">Day Visit</div>
          <div className="nav__menu">Accommoddation</div>
          <div className="nav__menu">Dining</div>
          <div className="nav__menu">Skincare</div>
          <div className="nav__menu">More</div>
        </div>
        <div className="header__items">
          <button className="btn">My Booking</button>
          <button className="btn__blue">Book Now</button>  
        </div>
      </header>
    )
  };
}



export default HeaderComponents;