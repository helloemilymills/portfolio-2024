import { useState } from 'react';
import './ContactPanel.css'

//this form is linked with my Herotofu account
const FORM_ENDPOINT = "https://public.herotofu.com/v1/9bd05320-aa9e-11ee-8fa9-872d80d8eac1";

export default function ContactPanel({ closeContactForm }) {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  return (
    <>
      <div className='gradientBackgroundPanel'>
      <div className='panel'>
        <svg onClick={() => closeContactForm()} id="closeIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white" />
        </svg>

        <div className='column column1'>
          <h2>A bit about me</h2>
          <p>Lorem ipsum </p>
          <div className='socialIconsContainer'>
            <a href='https://www.instagram.com/helloemilymills/' target='_blank'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="white" stroke-width="1.5" />
                <path d="M17.5 6.51001L17.51 6.4989" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/helloemilymills/' target='_blank'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 17V13.5V10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 17V13.75M11 13.75V10M11 13.75C11 10 17 10 17 13.75V17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 7.01001L7.01 6.9989" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a href='https://github.com/helloemilymills' target='_blank'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>


          </div>
        </div>

        <div className='column column2'>
          <h2>A bit about you</h2>
          <p>Let's start with the basics. Please let me know who you are and how I can contact you. </p>
          <form className='contactForm' action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
            <div className='sideBySide'>
              <div className='inputContainer'>
                <label for="name">Your name</label>
                <input type="text" name="name" required />
              </div>
              <div className='inputContainer'>
                <label for="company">Company name</label>
                <input type="text" name="company"  />
              </div>
            </div>
            <div className='sideBySide'>
              <div className='inputContainer'>
                <label for="email">Your email</label>
                <input type="email" name="email" required />
              </div>
              <div className='inputContainer'>
                <label for="phone">Your phone number</label>
                <input type="number" name="phone" />
              </div>
            </div>
            <div className='inputContainer'>
              <label for="communicationPreferences">How do you prefer to communicate?</label>
              <div className='sideBySide'>
                <label><input type="checkbox" name="communicationPreferences" value="email" /> Email</label>
                <label><input type="checkbox" name="communicationPreferences" value="phone" /> Phone</label>
                <label><input type="checkbox" name="communicationPreferences" value="video" /> Video Meeting</label>
              </div>
            </div>
            <p>In order to do my best work, I need a thorough understanding of your project. Here are 10 questions to get our conversation started. </p>

            <div className='inputContainer'>
              <label for="projectOverview">Tell me about your project</label>
              <textarea name="projectOverview" required />
            </div>
            <div className='inputContainer'>
              <label for="projectGoals">What do you want to achieve?</label>
              <textarea name="projectGoals" required />
            </div>
            <div className='inputContainer'>
              <label for="projectInspiration">What inspired this project?</label>
              <textarea name="projectInspiration" required />
            </div>
            <div className='inputContainer'>
              <label for="targetAudience">Who is your target audience?</label>
              <textarea name="targetAudience" required />
            </div>
            <div className='inputContainer'>
              <label for="competitors">Who are your top competitors?</label>
              <textarea name="competitors" />
            </div>
            <div className='inputContainer'>
              <label for="previousBranding">What do you like or dislike about your previous branding?</label>
              <textarea name="previousBranding" />
            </div>
            <div className='inputContainer'>
              <label for="designUsage">How will you distribute or use this design?</label>
              <textarea name="designUsage" required />
            </div>
            <div className='inputContainer'>
              <label for="timeline">How soon do you need it?</label>
              <textarea name="timeline" required />
            </div>
            <div className='inputContainer'>
              <label for="expectations">What are your expecations of me?</label>
              <textarea name="expectations" required />
            </div>
            <div className='inputContainer'>
              <label for="extraInfo">Is there anything else you'd like to add?</label>
              <textarea name="extraInfo" />
            </div>




            <button className="formSubmitButton" type="submit"> Send a message </button>
            <div style={{ textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }} aria-hidden="true">
              <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
            </div>
            {submitted && (<div>Hooray! I'll reach out to you within 3 business days with next steps.</div>)}
          </form>
        </div>

      </div>
      </div>

    </>
  );
}