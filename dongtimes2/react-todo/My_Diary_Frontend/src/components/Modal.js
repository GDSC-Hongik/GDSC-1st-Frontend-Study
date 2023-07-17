import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = ({ onCloseModal, children }) => {
  const handleCloseModal = () => {
    onCloseModal(false);
  };

  const handleIgnoreEvent = (event) => {
    event.stopPropagation();
  };

  return (
    <BackgroundBox onClick={handleCloseModal}>
      <ModalContentbox onClick={handleIgnoreEvent}>{children}</ModalContentbox>
    </BackgroundBox>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

const BackgroundBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 50%);
`;

const ModalContentbox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(200, 200, 200, 40%);
  width: 50%;
  height: 50%;
  border-radius: 10px;
  padding: 30px;
`;

export default Modal;
