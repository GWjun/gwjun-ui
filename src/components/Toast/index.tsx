import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import * as styles from './styles.css';

export interface ToastProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'primary' | 'success' | 'error' | 'alert';
  onClose: () => void;
}

const Toast = ({
  variant = 'primary',
  onClose,
  children,
  className,
  ...props
}: ToastProps) => {
  return (
    <div
      className={clsx(styles.toast, className)}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      <div className={styles.toastLineVariants({ variant })} />
      <span className={styles.title}>Title</span>
      <p className={styles.content}>{children}</p>
      <button onClick={onClose} className={styles.closeButton}>
        x
      </button>
    </div>
  );
};

export default Toast;
