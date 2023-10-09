// import React from 'react';
import leftPhone from '../assets/images/left-phone.svg';
import rightPhone from '../assets/images/right-phone.svg';

function Phones() {
  return (
    <div className={"images"}>
      <div className="pics">
        <img className="leftPhone" src={leftPhone} alt="" />
        <img className="right" src={rightPhone} alt="" />
      </div>
    </div>
  );
}

export default Phones;
