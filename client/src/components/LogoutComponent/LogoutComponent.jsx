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
    <div className="link-effect" onClick={handleLogout}>
      LOG OUT
    </div>
  );
};

export default LogoutComponent;
