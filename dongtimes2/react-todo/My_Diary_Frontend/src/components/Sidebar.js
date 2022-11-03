import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarBox>
      <Link to="/schedule">Schedule</Link>
      <Link to="/settings">Setting</Link>
    </SidebarBox>
  );
};

const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-right: 1px solid lightgray;
`;

export default Sidebar;
