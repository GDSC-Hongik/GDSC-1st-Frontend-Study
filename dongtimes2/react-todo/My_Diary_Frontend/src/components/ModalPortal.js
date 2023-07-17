import ReactDom from 'react-dom';

const ModalPortal = ({ children }) => {
  const element = document.getElementById('modal');

  return ReactDom.createPortal(children, element);
};

export default ModalPortal;
