// Don't forget to import the jQuery library in the html

/*document.querySelector("h1"); // standard JS
$("h1") // Same query using jQuery

document.querySelectorAll("button") //JS
$("button") // JQ

$("h1").css("color", "green");
*/

// $(document).ready(function() { // This function waits for jquery to be loaded before proceeding
//     $("h1").css("color", "red"); // $ = jQuery
// });

// $("h1").css("color", "green"); // Font to green
// $("h1").css("font-size", 115); // change font size

$("h1").addClass("big-title")
// $("h1").removeClass("big-title")

$("h1").text("Bye") // changes the text from 'hello' to 'bye'

//$("button") // selects all the elements that match the selector

$("button").text("Don't Click Me") // Changes all the buttons text to 'Don't click Me'

$("button").html("<em>Hey</em>") // changes the buttons html

$("a").attr("href", "https://yahoo.com") // changes the anchor ('a') tags attribute from the original href, to the new one (yahoo)