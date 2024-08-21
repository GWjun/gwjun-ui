import { css, SerializedStyles } from '@emotion/react';
import { InputProps } from '.';

import theme from '#styles/theme';

const { colors, borderRadius, text } = theme;

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const baseStyles = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.5rem;
  border: 1px solid transparent;
  border-radius: ${borderRadius.md};
  font-size: ${text.sm.fontSize};

  &:focus-visible {
    outline-color: ${colors.primary.main};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[type='file'] {
    background-color: transparent;
    font-weight: 500;
  }
`;

export const variantStyles: Record<
  Required<InputProps>['variant'],
  SerializedStyles
> = {
  /** default styles */
  default: css`
    border: 1px solid #ddd;
  `,
  text: css`
    border-radius: 0;
    &:focus-visible {
      outline: transparent;
      border-bottom: 1px solid #ddd;
    }
  `,
};

export const sizeStyles: Record<
  Required<InputProps>['size'],
  SerializedStyles
> = {
  sm: css`
    padding: 0.25rem 0.75rem;
  `,
  /** default styles */
  md: css`
    padding: 0.5rem 1rem;
  `,
  lg: css`
    padding: 0.75rem 1.25rem;
  `,
};
