const colors = {
  primary: {
    main: '#0095F6',
    alt: '#fff',
  },
  secondary: {
    main: '#f1f5f9',
    alt: '#000',
  },
  destructive: {
    main: '#ef4444',
    alt: '#fff',
  },
} as const;

const text = {
  lg: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  md: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  sm: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  xs: {
    fontSize: '0.75rem',
    lineHeight: '1.25rem',
  },
} as const;

const borderRadius = {
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
} as const;

const theme = {
  colors,
  text,
  borderRadius,
};

export default theme;
