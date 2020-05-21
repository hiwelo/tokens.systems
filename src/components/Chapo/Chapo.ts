import styled from 'styled-components';

import Tokens from '../Tokens/components/StyledTokens';

const Chapo = styled.p`
  font-family: var(--font-headings), var(--font-defaults);
  font-size: var(--font-size-chapo);
  font-weight: 300;

  & ${Tokens}, strong {
    font-weight: 500;
  }
`;

export default Chapo;
