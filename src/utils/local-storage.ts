export const setLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  if (result) return JSON.parse(result);

  return null;
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
