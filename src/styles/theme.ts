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
    fontSize: '18px',
    lineHeight: '28px',
  },
  md: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  sm: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  xs: {
    fontSize: '12px',
    lineHeight: '20px',
  },
} as const;

const borderRadius = {
  sm: '4px',
  md: '6px',
  lg: '8px',
} as const;

const theme = {
  colors,
  text,
  borderRadius,
};

export default theme;
