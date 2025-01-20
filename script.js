// Import the API key from config.js
import { apiKey } from "./config.js";

document.getElementById("fetchCarInfo").addEventListener("click", async () => {
  const reg = document.getElementById("reg").value.trim();
  const loading = document.getElementById("loading");
  const carInfo = document.getElementById("carInfo");
  const errorMessage = document.getElementById("errorMessage");

  // Clear any previous error
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");

  // Show loading indicator and hide car info section
  loading.classList.remove("hidden");
  carInfo.classList.add("hidden");

  try {
    const response = await fetch(
      `https://dvlasearch.appspot.com/DvlaSearch?apikey=${apiKey}&licencePlate=${reg}`
    );
    if (!response.ok) throw new Error("Failed to fetch car information.");

    const data = await response.json();

    // Check for error in the JSON response
    if (!data.make || !data.model || !data.yearOfManufacture) {
      throw new Error(
        "The registration number could not be found. Please check and try again."
      );
    }

    // Populate fields with fetched data
    document.getElementById("make").value = data.make || "";
    document.getElementById("model").value = data.model || "";
    document.getElementById("year").value = data.yearOfManufacture || "";

    carInfo.classList.remove("hidden");
  } catch (error) {
    // Display error below the registration input
    errorMessage.textContent = error.message;
    errorMessage.classList.remove("hidden");
    console.error(error);
  } finally {
    // Hide loading indicator
    loading.classList.add("hidden");
  }
});

// Live regex validation while typing
document.getElementById("reg").addEventListener("input", () => {
  const reg = document.getElementById("reg").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Regex for validating registration number
  const regPattern =
    /(^[A-Za-z]{2}[0-9]{2}\s?[A-Za-z]{3}$)|(^[A-Za-z][0-9]{1,3}[A-Za-z]{3}$)|(^[A-Za-z]{3}[0-9]{1,3}[A-Za-z]$)|(^[0-9]{1,4}[A-Za-z]{1,2}$)|(^[0-9]{1,3}[A-Za-z]{1,3}$)|(^[A-Za-z]{1,2}[0-9]{1,4}$)|(^[A-Za-z]{1,3}[0-9]{1,3}$)|(^[A-Za-z]{1,3}[0-9]{1,4}$)|(^[0-9]{3}[DXdx]{1}[0-9]{3}$)/;

  if (!reg) {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
    return;
  }

  if (!regPattern.test(reg)) {
    errorMessage.textContent = "Invalid registration number format.";
    errorMessage.classList.remove("hidden");
  } else {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
  }
});

document.getElementById("generateLink").addEventListener("click", () => {
  const make = document.getElementById("make").value.trim();
  const model = document.getElementById("model").value.trim();
  const year = document.getElementById("year").value.trim();
  const postcode = document.getElementById("postcode").value.trim();

  if (!make || !model || !year || !postcode) {
    alert(
      "Make, Model, Year, and Postcode are required to navigate to the link."
    );
    return;
  }

  // Construct the AutoTrader URL
  const autoTraderURL = `https://www.autotrader.co.uk/car-search?advertising-location=at_cars&make=${encodeURIComponent(
    make
  )}&model=${encodeURIComponent(
    model
  )}&moreOptions=visible&postcode=${encodeURIComponent(
    postcode
  )}&sort=relevance&year-from=${year}&year-to=${year}`;

  // Redirect to the AutoTrader URL
  window.open(autoTraderURL, "_blank");
});

document.getElementById("generateEbayLink").addEventListener("click", () => {
  const make = document.getElementById("make").value.trim();
  const model = document.getElementById("model").value.trim();
  const year = document.getElementById("year").value.trim();
  const postcode = document.getElementById("postcode").value.trim();

  if (!make || !model || !year || !postcode) {
    alert(
      "Make, Model, Year, and Postcode are required to navigate to the link."
    );
    return;
  }

  // Construct the eBay Motors URL with year included
  const ebayURL = `https://www.ebay.co.uk/sch/i.html?_nkw=${encodeURIComponent(
    make
  )}+${encodeURIComponent(model)}+${encodeURIComponent(
    year
  )}&_ipg=240&_sop=12&LH_ItemCondition=3000`;

  // Redirect to the eBay Motors URL
  window.open(ebayURL, "_blank");
});
