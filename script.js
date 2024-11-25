document.getElementById("fetchCarInfo").addEventListener("click", async () => {
  const reg = document.getElementById("reg").value.trim();
  const loading = document.getElementById("loading");
  const carInfo = document.getElementById("carInfo");

  if (!reg) {
    alert("Please enter a registration number.");
    return;
  }

  loading.classList.remove("hidden");
  carInfo.classList.add("hidden");

  try {
    const response = await fetch(
      `https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=${reg}`
    );
    if (!response.ok) throw new Error("Failed to fetch car information.");

    const data = await response.json();

    document.getElementById("make").value = data.make || "";
    document.getElementById("model").value = data.model || "";
    document.getElementById("year").value = data.yearOfManufacture || "";

    carInfo.classList.remove("hidden");
  } catch (error) {
    alert(
      "Could not retrieve car information. Please check the registration or try again later."
    );
    console.error(error);
  } finally {
    loading.classList.add("hidden");
  }
});

document.getElementById("generateLink").addEventListener("click", () => {
  const make = document.getElementById("make").value.trim();
  const model = document.getElementById("model").value.trim();
  const year = document.getElementById("year").value.trim();

  if (!make || !model || !year) {
    alert("Make, Model, and Year are required to generate the link.");
    return;
  }

  const autoTraderURL = `https://www.autotrader.co.uk/car-search?advertising-location=at_cars&make=${encodeURIComponent(
    make
  )}&model=${encodeURIComponent(
    model
  )}&moreOptions=visible&postcode=kt33dl&sort=relevance&year-from=${year}&year-to=${year}`;

  const linkDiv = document.getElementById("generatedLink");
  linkDiv.innerHTML = `<h3>AutoTrader Link:</h3><a href="${autoTraderURL}" target="_blank">${autoTraderURL}</a>`;
  linkDiv.classList.remove("hidden");
});
