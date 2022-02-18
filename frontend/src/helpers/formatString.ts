export const formatString = (header: string) => {
  return header.split(/(?=[A-Z])/).join(" ");
};
