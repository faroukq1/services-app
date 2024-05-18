export const categoriesList = [
  "All",
  "Plumber",
  "Baby sitting",
  "Meal Preparing",
  "Home Automation",
];

export const sortingOptionsList = [
  "Most recent",
  "Most popular",
  "Highest price",
  "Lowest price",
  "Alphabetically",
];

export const filterOptionList = [
  {
    id: 1,
    text: "Location",
    options: ["1km", "2km", "5km", "10km"],
  },
  {
    id: 2,
    text: "Category",
    options: categoriesList,
  },
];

export const dayTimes = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
export const morePaymentOptions = [
  {
    id: 1,
    name: "Paypal",
    img: require("../assets/paypal.png"),
  },
  {
    id: 2,
    name: "ApplePay",
    img: require("../assets/apple.png"),
  },
  {
    id: 3,
    name: "GooglePay",
    img: require("../assets/google.png"),
  },
];

export const TAX = 20 / 100;
