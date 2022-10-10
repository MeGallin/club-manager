import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UserAdminView.scss';

import UserAdminPanel from '../../components/User/UserAdminPanel';
import UserDisplayPanel from '../../components/User/UserDisplayPanel';

const UserAdminView = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  });

  return (
    <>
      <div className="user-admin-wrapper">
        <fieldset className="fieldSet">
          <legend>USER DISPLAY PANEL</legend>
          <UserDisplayPanel />
        </fieldset>
        <fieldset className="fieldSet">
          <legend>USER ADMIN PANEL</legend>
          <UserAdminPanel />
        </fieldset>
      </div>
    </>
  );
};

export default UserAdminView;
