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

// console.log($.ajax(URL));
function retrieveBrewery(event) {
  // Prevents default of reloading page on each click of button
  //   event.preventDefault();

  // Remove child elements after event listener, prior to loading next brewery's information
  $mainContent.empty();

  $.ajax(URL).then(
    function (data) {
      const randomBrewery = Math.floor(Math.random() * data.length);
      const brewery = data[randomBrewery];

      console.log(data.length);
      console.log("Brewery has been retrieved");

      //   console.log(data);
      $name.text(brewery.name);
      $mainContent.append($name);
      $mainContent.append($info);
      $street.text(brewery.street);
      $info.append($street);
      $city.text(
        brewery.city + ", " + brewery.state + " " + brewery.postal_code
      );

      $info.append($city);
      $phone.text(brewery.phone);
      $info.append($phone);
      $website.text('<a href="$brewery.website_url">');
      $info.append($website);
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
  //   console.log(data.length);
}
