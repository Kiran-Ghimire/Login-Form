import React, { useState } from 'react';
import './Form.css';
import AppLogin from './AppLogin';
import AppSuccess from './AppSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://images.vexels.com/media/users/3/145819/isolated/preview/486c34cf5b3b4badd52bc427dbeb44a1-rocket-cartoon-by-vexels.png' alt='Rocket' />
        </div>
        {!isSubmitted ? (
          <AppLogin submitForm={submitForm} />
        ) : (
          <AppSuccess />
        )}
      </div>
    </div>
  );
};

export default Form;
