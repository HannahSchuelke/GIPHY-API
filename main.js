// linking in AJAX
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=aoLoR30pQOHgUwaOE5aBMZ4ukG6ShiZn";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

// declaring variables
var topics = ["cat", "dog", "love", "eagles", "jaguar", "coding", "ducks", "napoleon", "biking", "running", "mustaches", "games", "oops"];

// take the topics in this array and create buttons in your HTML.
// Use a loop that appends a button for each string in the array.

// When the user clicks on a button, 
// the page should grab 10 static, 
// non-animated gif images from the GIPHY API 
// and place them on the page.

// When the user clicks one of the still GIPHY images, 
// the gif should animate. 
// If the user clicks the gif again, it should stop playing.


// Add a form to your page takes the value from a user 
// input box and adds it into your topics array. 
// Then make a function call that takes each topic in 
// the array remakes the buttons on the page.