// Mobile.js
// import React from 'react';   
import logoM from '../assets/images/y.svg';
import logoT from '../assets/images/Reputy_landing page task (1)/Sign up/Welcome screen/Sign up/Welcome screen/Group.svg'
import xBtn from '../assets/images/x.svg';
import btnImg from '../assets/images/button.svg'

function Mobile() {
  return (
    <div className="mobile">
      <div className="mo" style={{ position: 'relative', display: 'flex' }}>
        <img
          src={logoT}
          className="mobile-logo-title"
          style={{
            position: 'absolute',
            display: 'block',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          alt=""
        />
        <img
          className="mobile-logo"
          style={{ display: 'inline-block', width: '100%' }}
          src={logoM}
          alt=""
        />
      </div>
      <form>
        <div className="input-container">
          <input id="display" className="input-m" type="text" placeholder="" />
          <label className="label" htmlFor="display">Display Name</label>
          <img className="x-btn" src={xBtn} />
        </div>

        <div className="input-container">
          <input id="email" className="input-m" type="text" placeholder="" />
          <label className="label" htmlFor="email">Email Address</label>
          <img className="x-btn" src={xBtn} style={{ width: '16px' }} alt="" />
        </div>

        <button className="button-m">
          <img src={btnImg} alt="" />
          Continue with Magic Link
        </button>
      </form>
    </div>
  );
}

export default Mobile;
