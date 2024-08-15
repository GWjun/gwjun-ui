type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  variant?: 'primary' | 'secondary' | 'default' | 'outline' | 'text' | 'danger';
}

const Button = (
  {
    size = 'medium',
    variant = 'default',
    children,
    ...attributes
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => (
  <button ref={ref} {...attributes}>
    {children}
  </button>
);

export default forwardRef(Button);
