// alert("JavaScript is working");

// Variables
const URL =
  "https://api.openbrewerydb.org/breweries?by_city=raleigh&per_page=100&page=1";
// console.log(URL);

// Element references

// Define jQuery variables as jQuery references to HTML elements
const $name = $("#name");
const $street = $("#street");
const $city = $("#city");
const $state = $("#state");
const $phone = $("#phone");
const $website = $("#website_url");
const $findBreweryBtn = $("#breweryFinderBtn");
const $mainContent = $("main");

// Event Listeners

// $randomBrewery.on("click", findBrewery);

// Functions

// const findBrewery = () => {
//   const randomBrewery = Math.floor(Math.random() * URL.length);
// };

// console.log($.ajax(URL));
function retrieveBrewery(event) {
  event.preventDefault();
  $.ajax(URL).then(
    function (data) {
      console.log("Brewery has been retrieved");
      console.log(data);
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
}
