import { NavLink } from 'react-router-dom';
import './AdminPlayersView.scss';

import ButtonComponent from '../../components/Button/ButtonComponent';

const AdminPlayersView = () => {
  return (
    <div className="temp-wrapper">
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
      <h1>Component to manage players details here</h1>
    </div>
  );
};

export default AdminPlayersView;
