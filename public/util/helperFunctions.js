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

export const renderCurrentWeek = () => {
  const currentDay = new Date();
  const currentDayOfWeek = currentDay.getDay();
  const startDay = new Date(currentDay);
  startDay.setDate(currentDay.getDate() - currentDayOfWeek);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startDay);
    day.setDate(day.getDate() + i);

    const dayName = day.toLocaleDateString("en-Us", { weekday: "short" });
    const dayNumber = day.getDate();
    const Month = day.getMonth();

    weekDays.push({
      id: i,
      date: day.toISOString().substring(0, 10),
      name: dayName,
      month: monthNames[Month],
      number: dayNumber,
    });
  }

  return weekDays;
};
