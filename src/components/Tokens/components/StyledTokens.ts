import styled, { css } from 'styled-components';

const tokensColors = ['#034EA2', '#303A99', '#5E2390', '#8B0D88', '#C00384', '#F10080'];

const StyledToken = styled.span`
  ${tokensColors.map(
    (color, index) => css`
      & > :nth-child(${index + 1}) {
        color: ${color};
      }
    `,
  )}
`;

export default StyledToken;
