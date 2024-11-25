document.getElementById("fetchCarInfo").addEventListener("click", async () => {
  const reg = document.getElementById("reg").value.trim();
  const loading = document.getElementById("loading");
  const carInfo = document.getElementById("carInfo");
  const errorMessage = document.getElementById("errorMessage");

  // Clear any previous error
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");

  if (!reg) {
    errorMessage.textContent = "Please enter a registration number.";
    errorMessage.classList.remove("hidden");
    return;
  }

  // Show loading indicator and hide car info section
  loading.classList.remove("hidden");
  carInfo.classList.add("hidden");

  try {
    const response = await fetch(
      `https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=${reg}`
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
