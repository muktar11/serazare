import React from 'react';
import './style.css'; 
const RegistrationForm: React.FC = () => {
  return (
    <section className="container">
      <header>Registration Form</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="ሙሉ ስም" required />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input type="email" placeholder="የኢሜል አድራሻ ያስገቡ" required />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="tel" placeholder="ስልክ ቁጥር ያስገቡ" required />
          </div>
          <div className="input-box">
            <label>Birth Date የልደት ቀን አስገባ</label>
            <input type="date" placeholder="የልደት ቀን አስገባ" required />
          </div>
        </div>

        <div className="gender-box">
          <h3>Gender ጾታ</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" defaultChecked />
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label htmlFor="check-other">Prefer not to say</label>
            </div>
          </div>
        </div>

        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
        
          <div className="column">
            <div className="select-box">
              <select>
                <option hidden>Country</option>
                <option>Ethiopia</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="column">
            <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default RegistrationForm;
