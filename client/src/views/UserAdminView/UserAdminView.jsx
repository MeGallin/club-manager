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
    let ignore = false;
    if (!userInfo) {
      if (!ignore) navigate('/login');
    }

    return () => (ignore = true);
  }, [navigate, userInfo, dispatch]);

  return (
    <>
      <UserAdminComponent />
    </>
  );
};

export default UserAdminView;
