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
      <PageBox font={settings.font}>
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

  font-family: ${(props) => props.font}, sans-serif;

  button,
  input,
  textarea {
    font-family: ${(props) => props.font}, sans-serif;
  }
`;

const SidebarBox = styled.div`
  display: flex;
  flex-basis: 3%;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 57%;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  border-left: 1px solid lightgray;
`;

export default Schedule;
