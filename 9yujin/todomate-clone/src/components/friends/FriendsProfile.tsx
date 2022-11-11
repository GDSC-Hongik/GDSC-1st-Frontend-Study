import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import defaultImage from '../../assets/images/profileDefaultImage.png';
import useWeather from '../../hooks/useWeather';
import { selectUserById } from '../../stores/friends';
import selectedState from '../../stores/selected';

const FriendsProfile = () => {
  const selectedId = useRecoilValue(selectedState);
  const [selectedProfile] = useRecoilValue(selectUserById(selectedId));
  const { degree, icon } = useWeather();

  return (
    <Wrapper>
      <div>
        <ProfileImage image={selectedProfile.profileImage} />
        <Content>
          <div>{selectedProfile.name}</div>
          <div>{selectedProfile.statusMessage}</div>
        </Content>
      </div>
      <Weather>
        <img src={icon} />
        <p>{degree}℃</p>
      </Weather>
    </Wrapper>
  );
};

export default FriendsProfile;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }
`;
const ProfileImage = styled.div<{ image: string }>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  ${({ image }) =>
    image.length > 2
      ? css`
          background-image: url(${image});
        `
      : css`
          background-image: url(${defaultImage});
          border: 1px solid ${({ theme }) => theme.palette.mono.gray_ed};
        `}
  background-size: contain;
`;

const Content = styled.div`
  margin-left: 10px;
  & > div:first-child {
    font-size: 18px;
    font-weight: 700;
  }
  & > div:last-child {
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.mono.gray_99};
    margin-top: 4px;
  }
`;

const Weather = styled.div`
  height: 46px;

  & > img {
    height: 46px;
  }

  & > p {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.mono.gray_99};
  }
`;
