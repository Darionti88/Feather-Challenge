export const setStatusColor = (status: string | undefined) => {
  switch (status) {
    case "ACTIVE":
      return "bg-featherGreen";
    case "CANCELLED":
      return "bg-featherOrange";
    case "PENDING":
      return "bg-featherDarkPurple";

    case "DROPPED_OUT":
      return "bg-featherPink";
    default:
      return "bg-featherBlue";
  }
};
