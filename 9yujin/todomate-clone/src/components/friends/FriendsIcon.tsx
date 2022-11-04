import { useSetRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import { IFriend } from '../../interfaces/IFriend';
import selectedState from '../../stores/selected';

interface FriendsIconProps {
  friend: IFriend;
  selected: boolean;
}

const FriendsIcon = ({ friend, selected }: FriendsIconProps) => {
  const setSelectedProfile = useSetRecoilState(selectedState);
  const selectProfile = () => {
    setSelectedProfile(friend.userId);
  };

  return (
    <FriendsIconWrapper>
      <ProfileImage
        friend={friend}
        selected={selected}
        onClick={selectProfile}
      />
      <p>{friend.name}</p>
    </FriendsIconWrapper>
  );
};

export default FriendsIcon;

const parseEmoji = (string: string) => {
  // https://avengersrhydon1121.tistory.com/268
  if (
    /^([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/.test(
      string,
    )
  ) {
    return string.slice(0, 2);
  } else {
    return string[0];
  }
};

const getImageStyle = (friend: IFriend) => {
  switch (friend.profileImage.length) {
    case 0:
      return css`
        ::after {
          content: '${parseEmoji(friend.name)}';
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
        background-size: 40px 40px;
        background-position: center;
      `;
  }
};

const FriendsIconWrapper = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
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
