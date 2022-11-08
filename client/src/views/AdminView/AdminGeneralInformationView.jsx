import AdminCreateGeneralInfoComponent from '../../components/GeneralInfoComponent/AdminCreateGeneralInfoComponent/AdminCreateGeneralInfoComponent';
import AdminGetGeneralInfoComponent from '../../components/GeneralInfoComponent/AdminGetGeneralInfoComponent/AdminGetGeneralInfoComponent';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import './AdminGeneralInformationView.scss';

const AdminGeneralInformationView = () => {
  return (
    <>
      <div>
        <fieldset className="fieldSet">
          <ModalComponent
            className="create-btn"
            openButtonTitle="Create A NEW POST"
            closeButtonTitle="Close modal"
            props={
              <>
                <AdminCreateGeneralInfoComponent />
              </>
            }
          />
        </fieldset>
      </div>
      <AdminGetGeneralInfoComponent />
    </>
  );
};

export default AdminGeneralInformationView;
