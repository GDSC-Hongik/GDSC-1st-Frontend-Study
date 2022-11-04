import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import { imageData } from '../constants/Constants';
import settingState from '../recoil/settingState';
const Settings = () => {
  const [settings, setSettings] = useRecoilState(settingState);

  const handleChangeBackground = (type) => {
    setSettings((prev) => {
      return {
        ...prev,
        image: type,
      };
    });
  };

  return (
    <>
      <PageBox image={settings.image}>
        <SidebarBox>
          <Sidebar />
        </SidebarBox>
        <SettingsBox>
          <div>설정</div>
          <div>
            <div>배경 설정</div>
            <button
              type="button"
              onClick={() => handleChangeBackground(imageData.sunset)}
            >
              노을
            </button>
            <button
              type="button"
              onClick={() => handleChangeBackground(imageData.night)}
            >
              밤
            </button>
            <button
              type="button"
              onClick={() => handleChangeBackground(imageData.forest)}
            >
              숲
            </button>
            <button
              type="button"
              onClick={() => handleChangeBackground(imageData.wood)}
            >
              나무
            </button>
            <button
              type="button"
              onClick={() => handleChangeBackground(imageData.dubai)}
            >
              두바이
            </button>
          </div>
        </SettingsBox>
      </PageBox>
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
`;

const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 95%;
`;

export default Settings;
