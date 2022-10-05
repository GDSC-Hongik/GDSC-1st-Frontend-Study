import styled from 'styled-components';
import Feed from './feed/Feed';

const HomeTemplate = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Main>
        <div></div>
        <Feed />
      </Main>
    </Wrapper>
  );
};

export default HomeTemplate;

const Wrapper = styled.div`
  width: 100%;
  min-width: 800px;
  height: 100vh;
`;

const Header = styled.div`
  height: 64px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.mono.gray_fa};
  border-bottom: 1px solid ${({ theme }) => theme.palette.mono.gray_f0};
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 346px auto;
  width: 100%;
  padding: 0 48px;

  & > div {
    margin-left: 64px;
  }
`;
