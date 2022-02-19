export const lowerCasedValues = (object: any) => {
  const valuesArray = Object.values(object);
  const lowerCaseValues = valuesArray.map((value) => {
    if (typeof value === "string") return value.toLowerCase();
  });
  return lowerCaseValues;
};
