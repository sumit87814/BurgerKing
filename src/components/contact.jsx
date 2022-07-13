import React from 'react'

function contact() {
  return (
      <div id='contact'>
          <h1>BOOK YOUR TABLE</h1>
          <form>
              <input type="text" placeholder='Full Name' />
              <input type="email" placeholder='Enter your email' />
              <textarea placeholder='Write here...'></textarea>
              <input type="Submit" value='Book ' />
          </form>
    </div>
  )
}

export default contact