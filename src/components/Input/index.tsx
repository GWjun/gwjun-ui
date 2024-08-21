import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';

import {
  baseStyles,
  containerStyles,
  sizeStyles,
  variantStyles,
} from './Input.style';

import Label from '#components/Label';

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  label?: string;
  variant?: 'default' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div css={containerStyles}>
        {label && (
          <Label id={props.id} required={props.required}>
            {label}
          </Label>
        )}

        <input
          ref={ref}
          css={[baseStyles, variantStyles[variant], sizeStyles[size]]}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
