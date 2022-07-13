import React from 'react'
import aboutimage from '../images/about.png';

function About() {
  return (
      <div id='about'>
          <div className='about-text'>
              <h1>UPCOMING EVENTS</h1>
              <p>hink of the introduction and conclusion as the bun, with the "meat" of your argument in between. The introduction is where you'll state your thesis, while the conclusion sums up your case. Both should be no mor</p>
              <button>Read More</button>
              <div className='about-image'>
                  <img src={aboutimage} alt="" />
              </div>
          </div>
    </div>
  )
}

export default About;