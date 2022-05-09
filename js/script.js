// alert("JavaScript is working");

// === Variables ===
const URL =
  "https://api.openbrewerydb.org/breweries?by_city=raleigh&per_page=100&page=1";
// console.log(URL);

// === Element references ===

// Define jQuery variables as jQuery references to HTML elements
const $name = $("<h2>");
const $info = $(".info");
const $street = $("<li>");
const $city = $("<li>");
const $state = $("<li>");
const $phone = $("<li>");
const $website = $("<li>");
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
      $name.text("Hello");
      $mainContent.append($name);
      $mainContent.append($info);
      $street.text("data.street");
      $info.append($street);
      $city.text("data.city");
      $info.append($city);
      $phone.text("data.phone");
      $info.append($phone);
      $website.text("data.website_url");
      $info.append($website);
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
}
