import Clock from 'react-live-clock';
import styled from 'styled-components';

const LiveClock = () => {
  return (
    <ClockBox>
      <Clock format={'HH:mm:ss'} ticking={true} />
    </ClockBox>
  );
};

const ClockBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 60%;
  padding: 30px 0;
  color: white;
  background-color: rgba(90, 90, 90, 40%);
  font-size: 50px;
`;

export default LiveClock;
