import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryState } from '../../stores/category';
import FeedItem from './FeedItem';

const Feed = () => {
  const categories = useRecoilValue(categoryState);

  return (
    <Wrapper>
      <div>Feed</div>
      <List>
        {categories.map((category) => (
          <FeedItem category={category} key={category.label} />
        ))}
      </List>
    </Wrapper>
  );
};

export default Feed;

const Wrapper = styled.div`
  & > div:first-child {
    height: 100px;
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 36px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;
