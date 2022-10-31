import styled, { css } from 'styled-components';
import { IFriend } from '../../interfaces/IFriend';

interface FriendsIconProps {
  friend: IFriend;
  selected: boolean;
}

const FriendsIcon = ({ friend, selected }: FriendsIconProps) => {
  return (
    <FriendsIconWrapper>
      <ProfileImage friend={friend} selected={selected} />
      <p>{friend.name}</p>
    </FriendsIconWrapper>
  );
};

export default FriendsIcon;

const getImageStyle = (friend: IFriend) => {
  switch (friend.profileImage.length) {
    case 0:
      return css`
        ::after {
          content: '${friend.name[0]}';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
          font-weight: 500;
        }
      `;
    case 2:
      return css`
        ::after {
          content: '${friend.profileImage}';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
          font-size: 14px;
        }
      `;
    default:
      return css`
        background-image: url(${friend.profileImage});
        background-size: contain;
      `;
  }
};

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

const ProfileImage = styled.div<{ friend: IFriend; selected: boolean }>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.palette.mono.gray_f5};
  ${({ friend }) => getImageStyle(friend)}
  border: ${({ selected, theme }) =>
    selected && `2px solid ${theme.palette.mono.gray_44}`}
`;
