import styled from 'styled-components';

const HomeGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 64rem;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
    max-width: 128rem;

    & > * {
      margin: 0 4rem;
      max-width: 64rem;
    }

    & > *:last-child {
      margin-top: 1.6rem;
    }
  }
`;

export default HomeGrid;
