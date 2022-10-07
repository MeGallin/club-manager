import { useState } from 'react';
import RegistrationComponent from '../../components/RegistrationComponent/RegistrationComponent';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import './LoginView.scss';
import ForgotPWComponent from '../../components/ForgotPWComponent/ForgotPWComponent';

const LoginView = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showForgotPW, setShowForgotPW] = useState(false);
  return (
    <>
      {showForgotPW ? (
        <>
          <ForgotPWComponent />
        </>
      ) : showRegistration ? (
        <RegistrationComponent />
      ) : (
        <>
          <LoginComponent />
        </>
      )}

      {showRegistration ? (
        <div onClick={() => setShowRegistration(!showRegistration)}>
          <span className="link-effect">Already Registered?</span>
        </div>
      ) : (
        <div onClick={() => setShowRegistration(!showRegistration)}>
          <span className="link-effect">Not Registered?</span>
        </div>
      )}
      <div onClick={() => setShowForgotPW(!showForgotPW)}>
        <span className="link-effect">
          {!showForgotPW ? 'Forgotten your Password?' : 'Go Back?'}
        </span>
      </div>
    </>
  );
};

export default LoginView;
