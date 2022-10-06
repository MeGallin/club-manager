import { useState } from 'react';
import RegistrationComponent from '../../components/RegistrationComponent/RegistrationComponent';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import './LoginView.scss';

const LoginView = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  return (
    <>
      {showRegistration ? (
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
    </>
  );
};

export default LoginView;
