import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import useBottomSheet from '../../hooks/useBottomSheet';
import useTodo from '../../hooks/useTodo';
import { bottomSheetState } from '../../stores/bottomSheet';
import { categoryState } from '../../stores/category';
import FeedItemList from './FeedItemList';
import MenuBottomSheet from './MenuBottomSheet';

const Feed = () => {
  const categories = useRecoilValue(categoryState);
  const { isOpen, onDismiss, selectedItem } = useBottomSheet(false);
  const { deleteTodo } = useTodo();
  return (
    <Wrapper>
      <div>Feed</div>
      <List>
        {categories.map((category) => (
          <FeedItemList category={category} key={category.label} />
        ))}
      </List>

      {/* 수정, 삭제 바텀시트 */}
      <MenuBottomSheet
        isOpen={isOpen}
        onDismiss={onDismiss}
        onDeleteTodo={() => deleteTodo(selectedItem!.id)}
        label={selectedItem?.label}
      />
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
