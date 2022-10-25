import './LogoutComponent.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogoutAction } from '../../store/actions/userActions';

const LogoutComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogoutAction());
    navigate('/login');
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
