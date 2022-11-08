import { useSelector, useDispatch } from 'react-redux';

import './AdminDeleteGeneralInfoComponent.scss';

import { adminDeleteGeneralInfoAction } from '../../../store/actions/adminGeneralInfoActions';

import ButtonComponent from '../../Button/ButtonComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';

const AdminDeleteGeneralInfoComponent = ({ postId, postTitle }) => {
  const dispatch = useDispatch();
  const handleGeneralInfoDelete = () => {
    //Action Delete player
    dispatch(adminDeleteGeneralInfoAction(postId));
  };
  const adminDeleteGeneralInfo = useSelector(
    (state) => state.adminDeleteGeneralInfo,
  );
  const { loading, error } = adminDeleteGeneralInfo;
  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}

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
                  <span>Are you sure you want to delete post titled?</span>{' '}
                  <h3>{postTitle}</h3>
                </div>
                <ButtonComponent
                  type="submit"
                  text="Yes Delete Profile"
                  variant="danger"
                  disabled={false}
                  onClick={handleGeneralInfoDelete}
                />
              </>
            }
          />
        </>
      )}
    </>
  );
};

export default AdminDeleteGeneralInfoComponent;
