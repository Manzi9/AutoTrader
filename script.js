"use strict";

function generateUKAutoTraderURL(make, model, year, locationName) {
  // UK AutoTrader URL structure
  const baseURL = "https://www.autotrader.co.uk/car-search";

  // Construct the query parameters
  const queryParams = new URLSearchParams({
    make,
    model,
    "year-from": year, // Set the 'year from' parameter
    "year-to": year, // Set the 'year to' parameter
    locationName,
  });

  // Combine the base URL with the query parameters
  const ukAutoTraderURL = `${baseURL}?${queryParams.toString()}`;

  return ukAutoTraderURL;
}

// Example usage
const make = "BMW";
const model = "M3";
const year = "2016";
const locationName = "KT33DL"; // Adjust locationName to match UK cities

const ukAutoTraderURL = generateUKAutoTraderURL(
  make,
  model,
  year,
  locationName
);

console.log(ukAutoTraderURL);
