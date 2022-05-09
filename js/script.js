// alert("JavaScript is working");

// === Variables ===
const URL =
  "https://api.openbrewerydb.org/breweries?by_city=raleigh&per_page=100&page=1";
// console.log(URL);

// === Element references ===

// Define jQuery variables as jQuery references to HTML elements
const $name = $("#name");
const $street = $("#street");
const $city = $("#city");
const $state = $("#state");
const $phone = $("#phone");
const $website = $("#website_url");
const $findBreweryBtn = $("#breweryFinderBtn");
const $mainContent = $("main");

// === Event Listeners ===

$findBreweryBtn.on("click", retrieveBrewery);

// === Functions ===

// const findBrewery = () => {
//   const randomBrewery = Math.floor(Math.random() * URL.length);
// };

// console.log($.ajax(URL));
function retrieveBrewery(event) {
  // Prevents default of reloading page on each click of button
  event.preventDefault();

  // Remove child elements after event listener, prior to loading next brewery's information
  $mainContent.empty();

  $.ajax(URL).then(
    function (data) {
      console.log("Brewery has been retrieved");
      console.log(data);
      $name.text(data.name);
      $mainContent.append($name);
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
}
