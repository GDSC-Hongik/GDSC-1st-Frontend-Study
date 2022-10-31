import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import friendsState from '../../stores/friends';
import FriendsIcon from './FriendsIcon';

const Friends = () => {
  const friends = useRecoilValue(friendsState);
  return (
    <Wrapper>
      <FriendsIcon friend={friends[0]} />
      <FriendsList>
        {friends.map(
          (friend, index) =>
            index !== 0 && <FriendsIcon friend={friend} key={friend.userId} />,
        )}
      </FriendsList>
    </Wrapper>
  );
};

export default Friends;

const Wrapper = styled.div`
  display: flex;
`;

const FriendsList = styled.div`
  width: 238px;
  display: flex;
`;
