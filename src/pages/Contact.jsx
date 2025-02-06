import { useState } from "react";
import '../styles/contact.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Contact() {
  const [errors, setErrors] = useState({});

  function validateForm(event) {
    event.preventDefault();
    const form = event.target;
    
    const firstName = form.firstname.value.trim();
    const lastName = form.lastname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    let newErrors = {};

    // First & Last Name Validation
    if (!firstName) newErrors.firstname = "First name is required.";
    if (!lastName) newErrors.lastname = "Last name is required.";

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format.";

    // Phone Validation
    const phoneRegex = /^[0-9]+$/;
    if (!phone) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(phone)) newErrors.phone = "Phone number must contain only digits.";

    // Message Validation
    if (!message) newErrors.message = "Message cannot be empty.";

    // If there are errors, update state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, submit form (replace this with actual submission logic)
    alert("Form submitted successfully!");
    form.reset();
    setErrors({});
  }

  return (
    <>
      <Navbar />
   
      <h1 className="contacth1">CONTACT US!</h1>
      <div className="main-wrapper">
        <div className="form-wrapper">
          <form onSubmit={validateForm}>
            <div className="input-flex">
              <div>
                <label htmlFor="firstname" className="form-label">First name</label>
                <input type="text" name="firstname" id="firstname" placeholder="Jane" className="form-input" />
                {errors.firstname && <p className="error">{errors.firstname}</p>}
              </div>
              <div>
                <label htmlFor="lastname" className="form-label">Last name</label>
                <input type="text" name="lastname" id="lastname" placeholder="Cooper" className="form-input" />
                {errors.lastname && <p className="error">{errors.lastname}</p>}
              </div>
            </div>
            <div className="input-flex">
              <div>
                <label htmlFor="email" className="form-label">Mail</label>
                <input type="email" name="email" id="email" placeholder="john@mail.com" className="form-input" />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" name="phone" id="phone" placeholder="(319) 555-0115" className="form-input" />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>
            
              <label htmlFor="message" className="form-label message">Message</label>
              <textarea rows="6" name="message" id="message" placeholder="Type your message" className="form-input"></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
       
            <button type="submit" className="bttn">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
