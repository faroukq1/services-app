export const sortingHelperFuntion = (data, option) => {
  const dataCopy = [...data];
  switch (option) {
    case "Most recent":
      return dataCopy.sort(
        (a, b) =>
          new Date(a.service_creation_date) - new Date(b.service_creation_date)
      );
    case "Most popular":
      return dataCopy.sort((a, b) => b.service_rating - a.service_rating);
    case "Highest price":
      return dataCopy.sort((a, b) => b.service_price - a.service_price);
    case "Lowest price":
      return dataCopy.sort((a, b) => a.service_price - b.service_price);
    case "Alphabetically":
      return dataCopy.sort((a, b) =>
        a.service_name.localeCompare(b.service_name)
      );
    default:
      return data;
  }
};
