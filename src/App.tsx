import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="signup-container">
        <div className="signup-form">
          <div className="logo">
            <span role="img" aria-label="tree"><FontAwesomeIcon icon={faTree} /></span> Trip Planner
          </div>
          <h1>Sign up</h1>
          <p className="signup-text">Sign up to enjoy the feature of Revolutie</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name"  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input type="password" id="password" />
                <span className="password-toggle">
                  
                </span>
              </div>
            </div>
            <button type="submit" className="signup-button">Sign up</button>
          </form>
          <div className="or-divider">or</div>
          <button className="google-signup">
            <span className="google-icon">
              <img src="images/google.png" alt="google" />
            </span>
            Continue with Google
          </button>
          <div className="login-prompt">
            Already have an account?? <a href="#">Sign in</a>
          </div>
        </div>
        <div className="image-container">
          
        </div>
      </div>
    </div>
  );
}

export default App;
