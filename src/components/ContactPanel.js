import { useState } from 'react';
import './ContactPanel.css'

//this form is linked with my Herotofu account
const FORM_ENDPOINT = "https://public.herotofu.com/v1/9bd05320-aa9e-11ee-8fa9-872d80d8eac1";

export default function ContactPanel() {

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
        
        <div className='panel'>

          <div className='column1'>
            <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
              <input type="text" placeholder="Name" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
              <textarea placeholder="Message" name="message" required />
              <button type="submit"> Send a message </button>
              <div style={{textIndent:"-99999px", whiteSpace:"nowrap", overflow:"hidden", position:"absolute"}} aria-hidden="true">
                <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
              </div>
              {submitted && (<div>Thanks! I'll be in touch soon.</div>) }
            </form>
          </div>

          <div className='column2'>
              <p>About Me</p>
          </div>

        </div>
        
      </>
    );
    }