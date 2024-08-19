export const lighten = (color: string, amount: number) => {
  return `color-mix(in srgb, ${color}, white ${amount}%)`;
};

export const darken = (color: string, amount: number) => {
  return `color-mix(in srgb, ${color}, black ${amount}%)`;
};
