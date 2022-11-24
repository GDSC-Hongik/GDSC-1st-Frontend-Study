import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Calendar from '../components/Calendar';
import LiveClock from '../components/LiveClock';
import Modal from '../components/Modal';
import ModalPortal from '../components/ModalPortal';
import Sidebar from '../components/Sidebar';
import DetailTodo from '../components/Todo/DetailTodo';
import Todo from '../components/Todo/Todo';
import WeatherInfo from '../components/WeatherInfo';
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
          <div className="weather-area">
            <WeatherInfo />
          </div>
          <LiveClock />
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

  .weather-area {
    display: flex;
    justify-content: right;
  }

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
