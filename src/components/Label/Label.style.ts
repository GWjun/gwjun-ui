import { css } from '@emotion/react';

import theme from '#styles/theme';

const { colors, text } = theme;

export const labelStyles = css`
  font-size: ${text.sm.fontSize};
  font-weight: 600;
`;

export const requiredStyles = css`
  color: ${colors.destructive.main};
`;
