var request = require('request');
request("https://www.omdbapi.com/?t=" + process.argv[2] + "&y=&plot=short&apikey=trilogy"
, function (error, response, body) {
 console.log('error:', error); // Print the error if one occurred
 console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//______________________________________________________________________
 
var body= JSON.parse(body)
 console.log('Title:', body.Title, "Year", body.Year, "Rating", body.Rating); // Print the HTML for the Google homepage.
});