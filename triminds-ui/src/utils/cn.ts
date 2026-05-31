export const cn = (...classes: Array<string | undefined>) => {
  return classes.filter(Boolean).join(' ');
};
