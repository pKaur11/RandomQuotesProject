/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [];  // creating empty array

// adding elements to quotes array with different properties (quote, source, citation, year)
quotes[0] = {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." , 
  source: "Nelson Mandela"};
quotes[1] ={quote: "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my " +
  "sunset sky.", source: "Rabindranath Tagore", citation: "Stray Birds"};
quotes[2] = {quote: "The way to get started is to quit talking and begin doing.", source: "Walt Disney"};
quotes[3] = {quote: "People who are unable to motivate themselves must be content with mediocrity, no matter how " + 
  "impressive their other talents.", source: "Andrew Carnegie", year: 2014};
quotes[4] = {quote: "Dream is not that which you see while sleeping it is something that does not let you sleep.", 
  source: "A P J Abdul Kalam"};
quotes[5] = {quote: "Life is what happens when you're busy making other plans.", source: "John Lennon"};
quotes[6] = {quote: "As God is my witness, I'll never be hungry again.", source: "Sidney Howard", 
  citation: "Gone with the Wind", year: 1939};
quotes[7] = {quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its " +
  "whole life believing that it is stupid.", source: "Albert Einstein"};
quotes[8] = {quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing " +
  "nothing.", source: "George Bernhard Shaw"};
quotes[9] = {quote: "All we have to decide is what to do with the time that is given us.", source: "J.R.R. Tolkein", 
  citation: "The Fellowship of the Ring"};

// console.log(quotes); // testing array's objects

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var num = Math.floor(Math.random() * quotes.length);  // getting random number for choosing the quote
  var randQuote = quotes[num];  // getting quote object from quotes array
  return randQuote; // returning random quote object
}

/***
 * `printQuote` function
***/
function printQuote() {

  let randomQuote = getRandomQuote(); // calling getRandomQuote() function and storing returned value in randomQuote
  // console.log(randomQuote);  // testing randomQuote
  let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p> <p class='source'>"+ randomQuote.source ;
                                                                              // adding quote and its source in p tags

  // checking if quote has citation or year. If it has, adding them in span tag, otherwise adding empty string to PtoHTML1
  if(typeof randomQuote.citation === 'undefined'){
    PtoHTML1 += '';
  }
  else {
    PtoHTML1 += " <span class='citation'>" + randomQuote.citation + "</span>";
  }

  if(typeof randomQuote.year === 'undefined'){
    PtoHTML1 += '';
  }
  else {
  PtoHTML1 += " <span class='year'>" + randomQuote.year + "</span>";
  }

  PtoHTML1 += "</p>"; // adding end p tag
  // console.log(PtoHTML1); // checking PtoHTML1 string
  document.getElementById('quote-box').innerHTML = PtoHTML1;  // changing the content of html element having id "quote-box"

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); 
                                  // adding "click" event listener to the button and calling printQuote function