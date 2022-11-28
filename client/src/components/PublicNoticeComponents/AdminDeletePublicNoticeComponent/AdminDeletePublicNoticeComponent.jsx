import { useSelector, useDispatch } from 'react-redux';
import { adminDeletePublicNoticeAction } from '../../../store/actions/adminPublicNoticeActions';

import ButtonComponent from '../../Button/ButtonComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';

const AdminDeletePublicNoticeComponent = ({ noticeId, noticeTitle }) => {
  const dispatch = useDispatch();

  const handlePublicNoticeDelete = () => {
    dispatch(adminDeletePublicNoticeAction(noticeId));
  };

  const adminDeletePublicNotice = useSelector(
    (state) => state.adminDeletePublicNotice,
  );

  const { loading, error } = adminDeletePublicNotice;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}

      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <ModalComponent
            className="create-btn"
            openButtonTitle="Delete Notice"
            closeButtonTitle="No thanks"
            variant="danger"
            props={
              <>
                <div>
                  <span>Are you sure you want to delete notice titled?</span>{' '}
                  <h3>{noticeTitle}</h3>
                </div>
                <ButtonComponent
                  type="submit"
                  text="Yes Delete"
                  variant="danger"
                  disabled={false}
                  onClick={handlePublicNoticeDelete}
                />
              </>
            }
          />
        </>
      )}
    </>
  );
};

export default AdminDeletePublicNoticeComponent;
