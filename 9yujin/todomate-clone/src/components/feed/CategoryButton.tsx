import styled from 'styled-components';
import box from '../../assets/images/openBox.png';
import add from '../../assets/images/feedAddButton.png';
import { ICategory } from '../../interfaces/ICategory';
import editingState from '../../stores/editing';
import { useSetRecoilState } from 'recoil';

interface CategoryButtonProps {
  category: ICategory;
}

const CategoryButton = ({ category }: CategoryButtonProps) => {
  const setEditing = useSetRecoilState(editingState);
  return (
    <Wrapper>
      <div>
        <Inner color={category.color}>
          <img src={box} />
          <div>{category.label}</div>
          <button onClick={() => setEditing(category.label)}>
            <img src={add} />
          </button>
        </Inner>
      </div>
    </Wrapper>
  );
};

export default CategoryButton;

const Wrapper = styled.div`
  & > div {
    display: inline-block;
    height: 36px;
    border-radius: 4px;
    margin: 6px 0;
    background-color: ${({ theme }) => theme.palette.mono.gray_f5};
    border: 1px solid ${({ theme }) => theme.palette.mono.gray_f0};
  }
`;

const Inner = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 8px;

  & > img {
    width: 22px;
    height: 22px;
  }

  button {
    width: 18px;
    height: 18px;
    & > img {
      width: 100%;
      height: auto;
    }
  }

  div {
    font-weight: 800;
    font-size: 15px;
    padding: 0 8px;
    color: ${({ color }) => color};
  }
`;
