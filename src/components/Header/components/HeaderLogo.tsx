import React from 'react';
import styled from 'styled-components';

import TokensLogo from '../../TokensLogo';

const HeaderLogo = styled(({ ...rest }) => <TokensLogo background={false} {...rest} />)`
  height: clamp(8rem, 12vw, 16rem);
`;

export default HeaderLogo;
