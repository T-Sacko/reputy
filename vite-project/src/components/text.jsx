import React, { useState, useRef, useEffect } from 'react';
import icon from '../assets/images/icon.svg';
import tick from '../assets/images/tick.svg';

function Text() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="text">
      <div className={`overlay ${isModalVisible ? 'overlay-active' : ''}`}>
        <div className={`modal ${isModalVisible ? 'modal-active' : ''}`} ref={modalRef}>
          <img src={tick} alt=""/>
          <h3>Thanks for signing up !</h3>
          <h3> magic link has been sent to your email.</h3>
        </div>
      </div>
      <h1>Land the dream <br/> job by showing <br/> your soft skills <br/> credentials</h1>
      <div className="sign">
        <h2 className="sg wallet">Create your </h2>
        <h2 className="sg wallet"> free talent wallet</h2>
        <div className="form">
          <input className="input" type="text" placeholder="Display name"/>
          <input className="input" type="text" placeholder="Email address"/>
          <button className="modal-btn button" onClick={openModal}>
            <img src={icon} alt=""/>Sign up with email
          </button>
          <p>Already have an account? <strong><u>Log in</u></strong></p>
        </div>
      </div>
    </div>
  );
}

export default Text;
