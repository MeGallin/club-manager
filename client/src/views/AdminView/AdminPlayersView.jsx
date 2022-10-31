import { NavLink } from 'react-router-dom';
import './AdminPlayersView.scss';

import ButtonComponent from '../../components/Button/ButtonComponent';
import AdminCreatePlayer from '../../components/Player/AdminCreatePlayer/AdminCreatePlayer';
import AdminGetPlayers from '../../components/Player/AdminGetPlayers/AdminGetPlayers';
import ModalComponent from '../../components/ModalComponent/ModalComponent';

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
      <ModalComponent
        className="create-btn"
        openButtonTitle="Create Profile"
        closeButtonTitle="Close modal"
        props={
          <>
            <AdminCreatePlayer />
          </>
        }
      />

      <AdminGetPlayers />
    </div>
  );
};

export default AdminPlayersView;
