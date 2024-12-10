import { style } from '@vanilla-extract/css';
import { theme } from '#styles/theme.css';

export const avatar = style({
  borderRadius: 9999,
  backgroundColor: theme.colors.background,
});
