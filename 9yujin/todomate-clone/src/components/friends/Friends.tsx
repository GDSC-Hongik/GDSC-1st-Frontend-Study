import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { friendsState } from '../../stores/friends';
import selectedState from '../../stores/selected';
import FriendsIcon from './FriendsIcon';

const Friends = () => {
  const friends = useRecoilValue(friendsState);
  const selectedId = useRecoilValue(selectedState);
  return (
    <Wrapper>
      <FriendsIcon
        friend={friends[0]}
        selected={selectedId === friends[0].userId}
      />
      <FriendsList>
        {friends.map(
          (friend, index) =>
            index !== 0 && (
              <FriendsIcon
                friend={friend}
                selected={selectedId === friend.userId}
                key={friend.userId}
              />
            ),
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
