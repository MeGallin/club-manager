import './LogoutComponent.scss';
import { useDispatch } from 'react-redux';
import { userLogoutAction } from '../../store/actions/userActions';

const LogoutComponent = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogoutAction());
  };
  return (
    <div>
      <div onClick={handleLogout}>
        <span className="link-effect">LOG OUT</span>
      </div>
    </div>
  );
};

export default LogoutComponent;
