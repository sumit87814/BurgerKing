import React from 'react';
import Productbox from './productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';


function products() {
  return (
      <div id='products'>
          <h1>CHOOSE & ENJOY</h1>
          <p>Grab your Juicy Burger Now </p>
      <div className="a-container">
        <Productbox image={pimage1} title="Cheese &Baccon Burger"/>
        <Productbox image={pimage2} title="veggie Burger" />
        <Productbox image={pimage1} title="Chessy Burger" />
        <Productbox image={pimage1} title="Succy Burger" />
        <Productbox image={pimage2} title="Chicken Burger" />
        {/* <Productbox image={pimage1}title="HamBurger"/> */}
      
       
              
          </div>
    </div>
  )
}

export default products;