import styled from 'styled-components';

const Frame = styled.div`
  --frame-border: 0.2rem;

  position: relative;
  height: 100vh;
  overflow: scroll hidden;
  padding: 3.2rem 4rem;
  width: 100vw;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    content: '';
    background: radial-gradient(var(--color-session) 35%, transparent 40%);
    background-size: var(--frame-border) var(--frame-border);
    z-index: -2;
  }

  &::after {
    position: absolute;
    bottom: 1.6rem;
    left: 1.6rem;
    right: 1.6rem;
    top: 1.6rem;
    display: block;
    content: '';
    background: var(--color-background);
    z-index: -1;
  }
`;

export default Frame;
