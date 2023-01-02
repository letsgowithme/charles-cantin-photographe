// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
//Your form's endpoint is: https://formspree.io/f/moqzakbn

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contactForm.css'
function ContactForm() {
  const [state, handleSubmit] = useForm("moqzakbn");
  if (state.succeeded) {
      return <p>Votre message a été envoyé!</p>;
  }
  return (
    
      <form onSubmit={handleSubmit} 
      method="POST" 
      className="form" netlify="true">
      
      <input
        id="email"
        type="email" 
        name="email"
        className='form-input form-item'
        placeholder='Votre adresse e-mail'
       
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className='form-t-aria form-item'
        placeholder='Saisissez votre message'
        rows="15" 
        cols="33"
        
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="form-btn form-item">
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
