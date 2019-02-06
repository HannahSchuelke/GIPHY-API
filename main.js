var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=aoLoR30pQOHgUwaOE5aBMZ4ukG6ShiZn";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

