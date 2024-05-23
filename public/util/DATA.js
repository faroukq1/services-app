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
  "08:00:00",
  "09:00:00",
  "10:00:00",
  "11:00:00",
  "12:00:00",
  "13:00:00",
  "14:00:00",
  "15:00:00",
  "16:00:00",
  "17:00:00",
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
