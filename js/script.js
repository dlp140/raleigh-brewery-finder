// === Variables ===
let URL =
  "https://api.openbrewerydb.org/breweries?by_city=raleigh&per_page=100&page=1";

// === Element references ===

// Define jQuery variables as jQuery references to HTML elements
const $data = $(".data");
const $name = $("<h2>");
const $info = $(".info");
const $div = $(".image");
const $street = $("<p>");
const $city = $("<p>");
const $state = $("<p>");
const $phone = $("<p>");
const $website = $("<a>");
const $findBreweryBtn = $("#breweryFinderBtn");
const $mainContent = $(".list");
const $newCityForm = $("#city");

// === Event Listeners ===
$findBreweryBtn.on("click", retrieveBrewery);

// === Functions ===
function retrieveBrewery(event) {
  // Prevents default of reloading page on each click of button
  //   event.preventDefault();

  // Remove child elements after event listener, prior to loading next brewery's information
  $mainContent.empty();
  $div.empty();

  $.ajax(URL).then(
    function (data) {
      const randomBrewery = Math.floor(Math.random() * data.length);
      const brewery = data[randomBrewery];

      console.log(data.length);
      console.log("Brewery has been retrieved");
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
      $website.attr("href", brewery.website_url);
      $website.text(brewery.website_url);
      $info.append($website);
      if (brewery.name === "1323 R & D") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/DHZUJ2v.png");
        $div.prepend($img);
      } else if (brewery.name === "Big Boss Brewing Co") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/9owMF9V.png");
        $div.prepend($img);
      } else if (brewery.name === "Boylan Bridge Brewpub") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/9sUZJvT.png");
        $div.prepend($img);
      } else if (brewery.name === "Brewery Bhavana") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/MGVChIf.png");
        $div.prepend($img);
      } else if (brewery.name === "Brice's Brewing Company") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/HoIOETQ.png");
        $div.prepend($img);
      } else if (brewery.name === "Clouds Brewing") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/ap7H5vC.png");
        $div.prepend($img);
      } else if (brewery.name === "Collection Brewing Company") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/Llgmyhc.png");
        $div.prepend($img);
      } else if (brewery.name === "Compass Rose") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/oWWwxRw.png");
        $div.prepend($img);
      } else if (brewery.name === "Crank Arm Brewing Co") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/Bu4lCDA.png");
        $div.prepend($img);
      } else if (brewery.name === "Funguys Brewery") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/VoWJwdf.png");
        $div.prepend($img);
      } else if (brewery.name === "Gizmo Brew Works") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/vM9n7YQ.png");
        $div.prepend($img);
      } else if (brewery.name === "Little City Brewing Co.") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/hN32wbD.png");
        $div.prepend($img);
      } else if (brewery.name === "Lonerider Brewing Co") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/W8kxULy.png");
        $div.prepend($img);
      } else if (brewery.name === "Lynnwood Brewing Concern") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/0mgDWGU.png");
        $div.prepend($img);
      } else if (brewery.name === "Lynnwood Brewing Concern") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/0mgDWGU.png");
        $div.prepend($img);
      } else if (brewery.name === "NC State Brewery") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/xINN40i.jpg");
        $div.prepend($img);
      } else if (brewery.name === "Neuse River Brewing Company") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/STPWJQ8.png");
        $div.prepend($img);
      } else if (brewery.name === "Nickelpoint Brewing Co") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/6YmA4XS.png");
        $div.prepend($img);
      } else if (brewery.name === "Oak and Dagger Public House") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/o1nSZ1Z.png");
        $div.prepend($img);
      } else if (brewery.name === "Raleigh Brewing Company") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/s52qajj.png");
        $div.prepend($img);
      } else if (brewery.name === "Sub Noir Brewing Company") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/SGfAkwR.png");
        $div.prepend($img);
      } else if (brewery.name === "Tobacco Road Brewery") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/Yur0hr3.png");
        $div.prepend($img);
      } else if (brewery.name === "Trophy Brewing Company") {
        let $img = $("<img>");
        $img.attr("src", "https://i.imgur.com/R2awcUt.png");
        $div.prepend($img);
      }
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
}
