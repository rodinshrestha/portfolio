export const ucFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const turncate = (str: string | null, number: number) => {
  return str?.substring(0, number) + "..." || str;
};

export const turncateId = (str: string | null, number: number) => {
  return str?.substring(0, number) || str;
};
