import { useSelector, useDispatch } from 'react-redux';

import { adminDeletePrivateMessageAction } from '../../../store/actions/adminPrivateMessagesActions';

import ButtonComponent from '../../Button/ButtonComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';

const AdminDeletePrivateMessageComponent = ({ messageId }) => {
  const dispatch = useDispatch();
  const handleMessageDelete = () => {
    if (messageId) {
      dispatch(adminDeletePrivateMessageAction(messageId));
    }
  };

  const adminDeletePrivateMessage = useSelector(
    (state) => state.adminDeletePrivateMessage,
  );
  const { loading, success, error } = adminDeletePrivateMessage;
  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Message was successfully deleted" />
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
                  <h3>
                    By deleting this you are removing all records of
                    correspondence between you and the this user. Are you sure?
                  </h3>
                </div>
                <ButtonComponent
                  type="submit"
                  text="Yes, Delete Message"
                  variant="danger"
                  disabled={false}
                  onClick={handleMessageDelete}
                />
              </>
            }
          />
        </>
      )}
    </>
  );
};

export default AdminDeletePrivateMessageComponent;
