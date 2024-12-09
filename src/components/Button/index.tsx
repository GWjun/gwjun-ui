import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import * as styles from './styles.css';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'destructive';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'sm', className, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
