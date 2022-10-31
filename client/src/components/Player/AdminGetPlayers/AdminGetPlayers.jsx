import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import './AdminGetPlayers.scss';

import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import AdminEditPlayer from '../AdminEditPlayer/AdminEditPlayer';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import AdminDeletePlayer from '../AdminDeletePlayer/AdminDeletePlayer';

import { adminGetPlayersAction } from '../../../store/actions/playerActions';

const AdminGetPlayers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  useEffect(() => {
    if (!userInfo && !userAdmin?.isAdmin) {
      navigate('/login');
    } else {
      dispatch(adminGetPlayersAction());
    }
  }, [navigate, dispatch, userInfo, userAdmin]);

  const adminGetPlayers = useSelector((state) => state.adminGetPlayers);
  const { loading, success, error, players } = adminGetPlayers;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}

      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          {success && players ? (
            <>
              <div className="inner-content-wrapper">
                {players.map((player) => (
                  <div key={player._id} className="inner-inner-wrapper">
                    <fieldset className="fieldSet">
                      <legend>{player.name}</legend>

                      <p>ID: {player._id}</p>
                      <p>
                        Name on shirt: {player.nameOnShirt} - Shirt number:{' '}
                        {player.shirtNumber}
                      </p>
                      <p>
                        Email address: {player.email} - Village:{' '}
                        {player.villageName}
                      </p>
                      <p>
                        Renewal method: {player.renewalMethod} - Status:{' '}
                        {player.status} - Got a uniform:{' '}
                        {player.uniform ? 'YES' : 'NO'}
                      </p>
                      <p>Government ID: {player.governmentId}</p>
                      <p>
                        Date of Birth {player?.dateOfBirth} [
                        <span>
                          {Math.floor(
                            moment(new Date()).diff(
                              moment(
                                player.dateOfBirth,
                                'dd-mm-yyyy' || 'dd/mm/yyyy',
                              ),
                              'years',
                              true,
                            ),
                          )}
                        </span>{' '}
                        years old]
                      </p>
                      <p>
                        Start Date {player?.startDate} -
                        <span>
                          {moment(
                            player?.startDate,
                            'dd-mm-yyyy' || 'dd/mm/yyyy',
                          ).fromNow()}
                        </span>
                      </p>
                      <p>
                        End Date {player?.endDate} -
                        <span>
                          {}
                          {player?.endDate !== 'null' ? (
                            <>
                              {moment(
                                player?.endDate,
                                'dd-mm-yyyy' || 'dd/mm/yyyy',
                              ).fromNow()}
                            </>
                          ) : (
                            ' [Still active]'
                          )}
                        </span>
                      </p>
                      <p>{player.notes}</p>
                      <div className="dates-wrapper">
                        <p> Created: {moment(player.createdAt).fromNow()}</p>
                        <p> Updated: {moment(player.updatedAt).fromNow()}</p>
                      </div>
                      <div className="button-wrapper">
                        <AdminEditPlayer playerId={player._id} />
                        <AdminDeletePlayer playerId={player._id} />
                      </div>
                    </fieldset>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default AdminGetPlayers;
