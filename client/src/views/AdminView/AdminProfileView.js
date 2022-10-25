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
    if (!userInfo && !userAdmin?.isAdmin) {
      navigate('/home');
    }
  }, [navigate, userInfo, userAdmin]);
  return (
    <>
      <AdminProfileComponent />
    </>
  );
};

export default AdminProfileView;
