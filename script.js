"use strict";

function generateURL() {
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("customYear").value;
  const location = document.getElementById("location").value;

  const autoTraderURL = generateUKAutoTraderURL(make, model, year, location);
  console.log(autoTraderURL);

  // Open the generated URL in a new tab
  window.open(autoTraderURL, "_blank");

  // Display the generated URL as a hyperlink
  const generatedURLElement = document.getElementById("generatedURL");
  generatedURLElement.innerHTML = `<a href="${autoTraderURL}" target="_blank">${autoTraderURL}</a>`;
}

function generateUKAutoTraderURL(make, model, year, location) {
  const baseURL = "https://www.autotrader.co.uk/car-search";
  const queryParams = new URLSearchParams({
    make,
    model,
    "year-from": year, // Set the 'year from' parameter
    "year-to": year, // Set the 'year to' parameter
    location,
  });
  const ukAutoTraderURL = `${baseURL}?${queryParams.toString()}`;
  return ukAutoTraderURL;
}
