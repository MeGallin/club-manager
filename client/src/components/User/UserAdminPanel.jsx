import { useDispatch, useSelector } from 'react-redux';
import './UserDisplayPanel';

const UserAdminPanel = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { loading, success, error, userAdmin } = userAdminDetails;

  return (
    <div>UserAdminPanel to edit USER details So this will require inputs</div>
  );
};

export default UserAdminPanel;
