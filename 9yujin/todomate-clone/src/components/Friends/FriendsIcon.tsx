import styled from 'styled-components';
import { IFriend } from '../../interfaces/IFriend';

const FriendsIcon = ({ friend }: { friend: IFriend }) => {
  const { userId, name, profileImage } = friend;
  return (
    <FriendsIconWrapper>
      <ProfileImage image={profileImage} />
      <p>{name}</p>
    </FriendsIconWrapper>
  );
};

const ProfileImage = ({ image }: { image: string }) => {
  return <ProfileImageWrapper></ProfileImageWrapper>;
};

export default FriendsIcon;

const FriendsIconWrapper = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 8px;
  p {
    margin-top: 8px;
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.mono.gray_99};
  }
`;

const ProfileImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.palette.mono.gray_f5};
`;
