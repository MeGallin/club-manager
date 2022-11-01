import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AdminProfileComponent from '../../components/Admin/AdminComponent';
import './AdminProfileView.scss';

const AdminProfileView = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  useEffect(() => {
    let ignore = false;
    if (!userInfo && !userAdmin?.isAdmin) {
      if (!ignore) navigate('/home');
    }
    return () => (ignore = true);
  }, [navigate, userInfo, userAdmin]);
  return (
    <>
      <AdminProfileComponent />
    </>
  );
};

export default AdminProfileView;
