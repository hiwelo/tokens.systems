import styled from 'styled-components';

const BoxWrapper = styled.div`
  display: block;
  padding: 1.6rem;
  /* background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 0.2rem,
    var(--color-session) 0.2rem,
    var(--color-session) 0.3rem
  ); */
  background: radial-gradient(var(--color-session) 35%, transparent 40%);
  background-size: var(--frame-border) var(--frame-border);
`;

export default BoxWrapper;
