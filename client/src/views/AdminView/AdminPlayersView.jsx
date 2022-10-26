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
      <h1>Component to manage players details here</h1>
    </div>
  );
};

export default AdminPlayersView;
