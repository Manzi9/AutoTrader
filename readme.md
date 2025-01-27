# Car Information Finder

The **Car Information Finder** is a simple web application that enables users to search for detailed car information using a registration number. Additionally, it provides quick links to browse car listings on AutoTrader and eBay Motors, making it a handy tool for anyone looking to explore vehicles for purchase.

## Features

- **Registration Validation:** Ensures the entered vehicle registration follows valid UK formats using regex.
- **Car Information Retrieval:** Fetches car details such as make, model, and year from an external API.
- **AutoTrader Listings:** Generates a link to search for similar cars on AutoTrader.
- **eBay Motors Listings:** Generates a link to search for similar cars on eBay Motors.
- **Live Validation:** Provides real-time feedback for the registration number as the user types.

## How It Works

1. **Enter Registration Number:** Input the car's registration number in the provided text box.
2. **Fetch Car Information:** Click the "Fetch Car Info" button to retrieve details about the car.
3. **Search Postcode:** Enter a postcode to refine search results for listings.
4. **Generate Links:** Use the "AutoTrader Listings" or "eBay Motors Listings" buttons to open the respective car listing pages.

## Installation

1. Clone or download this repository.
2. Ensure you have a web browser installed.
3. Open the `index.html` file in your browser to start the application.

## API Integration

The application uses the [DVLA Search API](https://dvlasearch.appspot.com/) to fetch car details. Ensure you replace the demo API key in `config.js` with a valid key for full functionality.

## Example Usage

### Input:

- **Make:** VW
- **Model:** POLO
- **Year:** 2010
- **Postcode:** KT33DL

### AutoTrader URL:

```
https://www.autotrader.co.uk/car-search?advertising-location=at_cars&make=VW&model=POLO&moreOptions=visible&postcode=KT33DL&sort=relevance&year-from=2010&year-to=2010
```

### eBay Motors URL:

```
https://www.ebay.co.uk/sch/i.html?_nkw=VW+POLO+2010&_ipg=240&_sop=12&LH_ItemCondition=3000
```

## Dependencies

- None. The application runs entirely in the browser without external libraries.

## Contributing

Feel free to fork this repository, make changes, and submit pull requests. Suggestions and improvements are always welcome!

## License

This project is licensed under the MIT License.
