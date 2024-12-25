import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AlreadyDoctor.css'; // Add relevant CSS for this component if needed

const AlreadyDoctor = ({ onSignupClick }) => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/'); // Redirect back to the landing page
  };


  // Optional: Ensure navigation works if `onSignupClick` is not passed as a prop
  const handleSignupClick = () => {
    if (onSignupClick) {
      onSignupClick();
    } else {
      navigate('/registrationform');
    }
  };

  return (
    <div className="form-container">
      <h3>Hospital Login</h3>
      <form>
        <div className="form-group">
          <label htmlFor="user_id">Hospital User ID:</label>
          <input
            type="text"
            id="user_id"
            name="user_id"
            placeholder="Enter Hospital User ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="button-group">
          <button
            type="submit"
            className="login-btn"
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            Login
          </button>
          <button
            type="button"
            className="cancel-btn"
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </form>
      <p>
        Don't have an account?{' '}
        <a href="#" onClick={handleSignupClick}>
          Sign up here
        </a>
      </p>
    </div>
  );
};

export default AlreadyDoctor;
