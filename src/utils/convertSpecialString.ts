export const convertSpecialString = (str: string) => {
  return str.replace(/#/g, "'");
};
