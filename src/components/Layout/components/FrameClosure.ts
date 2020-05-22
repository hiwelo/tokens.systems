import styled, { css } from 'styled-components';

const FrameClosure = styled.span<FrameClosureProps>(
  ({ edge = 'top' }) => css`
    &::before {
      position: fixed;
      ${edge}: 0;
      left: 1.6rem;
      right: 1.6rem;
      display: block;
      height: 1.6rem;
      content: '';
      background: radial-gradient(var(--color-session) 35%, transparent 40%);
      background-attachment: scroll;
      background-size: var(--frame-border) var(--frame-border);
      z-index: 2;
    }

    &::after {
      position: fixed;
      ${edge}: 0;
      left: 1.6rem;
      right: 1.6rem;
      display: block;
      height: 3.2rem;
      content: '';
      background: var(--color-background);
      z-index: 1;
    }
  `,
);

interface FrameClosureProps {
  edge?: 'bottom' | 'top';
}

export default FrameClosure;
