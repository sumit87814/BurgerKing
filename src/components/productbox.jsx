import React from 'react';

function productbox(props) {
  return (
      <div className='a-box'>
          <div className="a-b-img">
              <img src={props.image} alt="" />
          </div>
          <div className="a-b-text">
              <h2>{props.title}</h2>
              <button className='productbox-button'>Order now</button>
          </div>
    </div>
  )
}

export default productbox;