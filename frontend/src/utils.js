export const truncateString = (str) => {
  if (str.length > 10) {
    return str.substr(0, 15) + '...' + str.substr(str.length - 15, str.length);
  }
  return str;
};
