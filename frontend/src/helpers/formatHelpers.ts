export const formatString = (header: string) => {
  return header.split(/(?=[A-Z])/).join(" ");
};

export const formatDate = (value: string) => {
  const date = new Date(value);

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
