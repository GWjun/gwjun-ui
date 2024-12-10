import type { ComponentProps } from 'react';
import clsx from 'clsx';
import * as styles from './styles.css';

interface AvatarProps
  extends Omit<ComponentProps<'img'>, 'src' | 'alt' | 'width' | 'height'> {
  src?: string | null | undefined;
  size: number;
}

const Avatar = ({ src, size, className, ...props }: AvatarProps) => {
  return (
    <img
      src={src || '/default-profile.svg'}
      width={size}
      height={size}
      className={clsx(styles.avatar, className)}
      alt="프로필 이미지"
      {...props}
    />
  );
};

export default Avatar;
