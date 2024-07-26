import React, { useState } from 'react';
import master from '../assets/img/bg-masthead.jpg';

function Masthead() {
  const [emailAddress, setEmailAddress] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add your API token here
    const apiToken = 'YOUR_API_TOKEN';

    // Make API call to submit the form
    fetch(`https://api.startbootstrap.com/solution/contact-forms/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        email: emailAddress,
      }),
    })
     .then((response) => response.json())
     .then((data) => {
        if (data.success) {
          setSubmitSuccess(true);
        } else {
          setSubmitError(true);
        }
      })
     .catch((error) => {
        setSubmitError(true);
      });
  };

  return (
    <header className="masthead" id="masthead" style={{ backgroundImage: `url(${master})` }}>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              {/* <!-- Page heading--> */}
              <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
              {/* <!-- Signup form--> */}
              <form className="form-subscribe" id="contactForm" onSubmit={handleFormSubmit}>
                {/* <!-- Email address input--> */}
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control form-control-lg"
                      id="emailAddress"
                      type="email"
                      placeholder="Email Address"
                      value={emailAddress}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback text-white" id="emailAddressRequired">Email Address is required.</div>
                    <div className="invalid-feedback text-white" id="emailAddressInvalid">Email Address is not valid.</div>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                  </div>
                </div>
                {/* <!-- Submit success message--> */}
                {submitSuccess && (
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                )}
                {/* <!-- Submit error message--> */}
                {submitError && (
                  <div className="text-center text-danger mb-3">Error sending message!</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Masthead;