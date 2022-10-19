import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UserAdminView.scss';

import UserAdminComponent from '../../components/User/UserAdminComponent';

const UserAdminView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo, dispatch]);

  return (
    <>
      <UserAdminComponent />
    </>
  );
};

export default UserAdminView;
