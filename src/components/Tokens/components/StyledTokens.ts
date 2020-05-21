import styled, { css } from 'styled-components';

import { colors } from '../../../modules/theme';

const StyledToken = styled.span`
  ${Object.values(colors).map(
    (color, index) => css`
      & > :nth-child(${index + 1}) {
        color: ${color};
      }
    `,
  )}
`;

export default StyledToken;
