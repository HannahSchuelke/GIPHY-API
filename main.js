// Load HTML before javascript with...
$(document).ready(function () {
  console.log("ready!");
});
// define global varible
var results = {}

// declaring array
var topics = ["cats", "dog", "love", "eagles", "jaguar", "coding", "ducks", "napoleon", "biking", "running", "mustaches", "games", "oops"];


// create button and the text of buttons changing from the array --- for loop
for (var i = 0; i < topics.length; i++) {
var buttonTag = $("<button>").text(topics [i])
buttonTag.attr("class", "animalButton")
$(".button-container").prepend(buttonTag);
}
// creating for click handler to append a button for each string in the array
// make a clickhander... so everytime I click the handler, the text of the button will send to the AJAX
$(".button-container").on("click", ".animalButton", function(event) {
  var animals = $(this).text()
  console.log("click")

// linking in AJAX
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=aoLoR30pQOHgUwaOE5aBMZ4ukG6ShiZn";
// defining results within the function
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  var results = response.data;
  console.log(results)
});
// 




// this part is for displaying the gifs
  // Use a loop that appends a button for each string in the array.
  for (var i = 0; i < results.length; i++) {
    // Only taking action if the photo has an appropriate rating
    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
      // Creating a div for the gif
      var gifDiv = $("<div>");

      // Storing the result item's rating
      var rating = results[i].rating;

      // Creating a paragraph tag with the result item's rating
      var p = $("<p>").text("Rating: " + rating);

      // Creating an image tag
      var personImage = $("<img>");

      // Giving the image tag an src attribute of a proprty pulled off the
      // result item
      personImage.attr("src", results[i].images.fixed_height.url);

      // Appending the paragraph and personImage we created to the "gifDiv" div we created
      gifDiv.append(p);
      gifDiv.append(personImage);

      // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
      $(".grid").prepend(gifDiv);
    }
  }
})