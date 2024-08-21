import type { ComponentPropsWithoutRef } from 'react';

import { labelStyles, requiredStyles } from './Label.style';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  required?: boolean;
}

const Label = ({ id, required = false, children, ...props }: LabelProps) => {
  return (
    <label htmlFor={id} {...props} css={labelStyles}>
      {children}
      {required && (
        <span css={requiredStyles} aria-hidden>
          *
        </span>
      )}
    </label>
  );
};

export default Label;
