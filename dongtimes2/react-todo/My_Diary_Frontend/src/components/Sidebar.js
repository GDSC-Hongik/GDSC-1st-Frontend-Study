import { FiSettings, FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarBox>
      <Link to="/schedule">
        <FiCalendar />
      </Link>
      <Link to="/settings">
        <FiSettings />
      </Link>
    </SidebarBox>
  );
};

const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  border-right: 1px solid lightgray;
  width: 100%;
  background-color: rgba(0, 0, 0, 20%);

  a {
    padding: 20px 0;
    color: white;
    transition-duration: 0.3s;
  }

  a:hover {
    color: gray;
  }
`;

export default Sidebar;
