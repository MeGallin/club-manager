import { useSelector, useDispatch } from 'react-redux';

import './AdminDeletePlayer.scss';

import { adminDeletePlayerAction } from '../../../store/actions/playerActions';

import ButtonComponent from '../../Button/ButtonComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';

const AdminDeletePlayer = ({ playerId }) => {
  const dispatch = useDispatch();
  const handlePlayerDelete = () => {
    //Action Delete player
    dispatch(adminDeletePlayerAction(playerId));
  };
  const adminDeletePlayer = useSelector((state) => state.adminDeletePlayer);
  const { loading, success, error } = adminDeletePlayer;
  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Player profile was successfully deleted" />
      ) : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <ModalComponent
            className="create-btn"
            openButtonTitle="Delete Profile"
            closeButtonTitle="No thanks"
            variant="danger"
            props={
              <>
                <div>
                  <h3>Are you sure you want to delete profile ?</h3>
                </div>
                <ButtonComponent
                  type="submit"
                  text="Yes Delete Profile"
                  variant="danger"
                  disabled={false}
                  onClick={handlePlayerDelete}
                />
              </>
            }
          />
        </>
      )}
    </>
  );
};

export default AdminDeletePlayer;
