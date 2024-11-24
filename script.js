async function checkCarModel() {
  const reg = document.getElementById("reg").value;
  const apiUrl = `https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=${reg}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    // Extract car details
    const make = data.make || "Unknown";
    const model = data.model || "Unknown";
    const color = data.colour || "Unknown";
    const year = data.yearOfManufacture || "Unknown";

    // Update the carDetails div
    const carDetailsDiv = document.getElementById("carDetails");
    carDetailsDiv.innerHTML = `
      <h3>Car Details:</h3>
      <p><strong>Make:</strong> ${make}</p>
      <p><strong>Model:</strong> ${model}</p>
      <p><strong>Color:</strong> ${color}</p>
      <p><strong>Year:</strong> ${year}</p>
    `;
  } catch (error) {
    console.error(error);
    const carDetailsDiv = document.getElementById("carDetails");
    carDetailsDiv.innerHTML = `<p style="color:red;">Failed to fetch car model. Please try again.</p>`;
  }
}
