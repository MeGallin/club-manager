import { useSelector, useDispatch } from 'react-redux';

import './AdminDeletePlayer.scss';

import { adminDeletePlayerAction } from '../../../store/actions/playerActions';

import ButtonComponent from '../../Button/ButtonComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';

const AdminDeletePlayer = ({ playerId }) => {
  const dispatch = useDispatch();
  const handlePlayerDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${playerId}`)) {
      //Action Delete player
      dispatch(adminDeletePlayerAction(playerId));
    }
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
        <ButtonComponent
          type="submit"
          text="Delete"
          variant="danger"
          disabled={false}
          onClick={handlePlayerDelete}
        />
      )}
    </>
  );
};

export default AdminDeletePlayer;
