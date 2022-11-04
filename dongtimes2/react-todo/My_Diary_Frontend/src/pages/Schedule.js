import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Calendar from '../components/Calendar';
import DetailTodo from '../components/DetailTodo';
import Modal from '../components/Modal';
import ModalPortal from '../components/ModalPortal';
import Sidebar from '../components/Sidebar';
import Todo from '../components/Todo';
import settingState from '../recoil/settingState';

const Schedule = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  const settings = useRecoilValue(settingState);

  return (
    <>
      <PageBox image={settings.image}>
        <SidebarBox>
          <Sidebar />
        </SidebarBox>
        <CalendarBox>
          <Calendar />
        </CalendarBox>
        <TodoBox>
          <Todo
            setSelectedTodo={setSelectedTodo}
            onShowModal={setIsShowingModal}
          />
        </TodoBox>
      </PageBox>

      {isShowingModal && (
        <ModalPortal>
          <Modal onCloseModal={setIsShowingModal}>
            <DetailTodo selectedTodo={selectedTodo} />
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

const PageBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
`;

const SidebarBox = styled.div`
  display: flex;
  flex-basis: 5%;
  width: 100%;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  width: 100%;
`;

export default Schedule;
