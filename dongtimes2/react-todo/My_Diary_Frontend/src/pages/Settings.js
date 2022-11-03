import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import { fontList } from '../constants/Constants';
import settingState from '../recoil/settingState';

const Settings = () => {
  const [settings, setSettings] = useRecoilState(settingState);

  const handleChangeFont = (font) => {
    setSettings((prev) => {
      return {
        ...prev,
        font,
      };
    });
  };

  return (
    <>
      <PageBox font={settings.font}>
        <SidebarBox>
          <Sidebar />
        </SidebarBox>
        <SettingsBox>
          <div>설정</div>
          <div>
            <div>폰트 설정</div>
            <button type="button" onClick={() => handleChangeFont(fontList[0])}>
              noto sans
            </button>
            <button type="button" onClick={() => handleChangeFont(fontList[1])}>
              온글잎 보영
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

const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 97%;
`;

export default Settings;
