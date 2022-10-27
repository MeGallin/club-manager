import { NavLink } from 'react-router-dom';
import './AdminPlayersView.scss';

import ButtonComponent from '../../components/Button/ButtonComponent';
import AdminCreatePlayer from '../../components/Player/AdminCreatePlayer/AdminCreatePlayer';

const AdminPlayersView = () => {
  return (
    <div>
      <fieldset className="fieldSet">
        <ButtonComponent
          type="button"
          text={
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/admin-profile"
            >
              Go Back
            </NavLink>
          }
          variant="info"
          disabled={false}
        />
      </fieldset>
      <AdminCreatePlayer />
    </div>
  );
};

export default AdminPlayersView;
