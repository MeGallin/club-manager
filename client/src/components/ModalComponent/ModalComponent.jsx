import React, { useState } from 'react';
import LogoComponent from '../LogoComponent/LogoComponent';
import './ModalComponent.scss';
import { FaRegWindowClose } from 'react-icons/fa';

const ModalComponent = ({
  openButtonTitle,
  closeButtonTitle,
  props,
  variant,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <>
      {showModal ? (
        <div>
          <div
            title="Close"
            className={showModal ? 'modal-overlay' : null}
            onClick={() => setShowModal(false)}
          />
          <div className="modal-wrapper">
            <div className="modal-inner-wrapper">
              <LogoComponent />

              <span
                onClick={() => setShowModal(false)}
                className="confirmation"
              >
                <FaRegWindowClose className="ra-thumbs-down" />
              </span>
            </div>
            {props}
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={handleShowModal}
        className={`${variant} modal-btn`}
      >
        <span className="modal-title">{openButtonTitle}</span>
      </button>
    </>
  );
};

export default ModalComponent;
