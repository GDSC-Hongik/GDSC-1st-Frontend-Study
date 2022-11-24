import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ children, setIsDailyMode }) => {
  return (
    <HeaderBox>
      <div className="text-area">{children}</div>
      <div className="button-area">
        <button type="button" onClick={() => setIsDailyMode(true)}>
          일간
        </button>
        <button type="button" onClick={() => setIsDailyMode(false)}>
          전체
        </button>
      </div>
    </HeaderBox>
  );
};

Header.propTypes = {
  children: PropTypes.any.isRequired,
  setIsDailyMode: PropTypes.func.isRequired,
};

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  padding: 20px 0;
  background-color: rgba(50, 50, 50, 40%);
  border-radius: 20px;
  color: white;

  .text-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 65%;
  }

  .button-area {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 35%;

    & button {
      font-size: 20px;
      padding: 5px 10px;
      border-radius: 10px;
      border: 1px solid gray;
      color: white;
      background-color: rgba(50, 50, 50, 70%);
      transition-duration: 0.3s;
      height: 35px;

      &:hover {
        color: black;
        background-color: lightgray;
      }
    }
  }
`;

export default Header;
