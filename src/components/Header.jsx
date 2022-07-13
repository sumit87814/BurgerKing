import React from 'react'

function Header() {
  return (
      <div id='main'>
          <div className='header-heading'>
              <h3>Its a good time for a god taste of Burger</h3>
              <h1><span>Burger</span>For<br />Week</h1>
              <p className='details'>
                  Order now and grab exciting discounts 
              </p>
              <div className="header-btns">
                  <a href="#" className='header-btn'>Order</a>
              </div>
          </div>
    </div>
  )
}

export default Header