import { css, SerializedStyles } from '@emotion/react';
import { ButtonProps } from '.';

import theme from 'src/styles/theme.ts';
import { darken } from 'src/styles/util';

const { colors, borderRadius, text } = theme;

export const baseStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${borderRadius.md};
  font-size: ${text.sm.fontSize};
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  &:focus-visible {
    outline-width: 1px;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const variantStyles: Record<
  Required<ButtonProps>['variant'],
  SerializedStyles
> = {
  /** default styles */
  primary: css`
    background-color: ${colors.primary.main};
    color: ${colors.primary.alt};
    &:hover {
      background-color: ${darken(colors.primary.main, 10)};
    }
  `,
  secondary: css`
    background-color: ${colors.secondary.main};
    color: ${colors.secondary.alt};
    &:hover {
      background-color: ${darken(colors.secondary.main, 10)};
    }
  `,
  outline: css`
    background-color: #fff;
    border: 1px solid #ddd;
    &:hover {
      background-color: ${darken('#fff', 10)};
    }
  `,
  text: css`
    background-color: #fff;
    &:hover {
      background-color: ${darken('#fff', 10)};
    }
  `,
  destructive: css`
    background-color: ${colors.destructive.main};
    color: ${colors.destructive.alt};
    &:hover {
      background-color: ${darken(colors.destructive.main, 10)};
    }
  `,
};

export const sizeStyles: Record<
  Required<ButtonProps>['size'],
  SerializedStyles
> = {
  /** default styles */
  sm: css`
    padding: 8px 12px;
  `,
  md: css`
    padding: 12px 16px;
  `,
  lg: css`
    padding: 14px 24px;
  `,
};
