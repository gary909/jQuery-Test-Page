// document.querySelector("h1"); // standard JS
// $("h1") // Same query using jQuery

$(document).ready(function() { // This function waits for jquery to be loaded before proceeding
    $("h1").css("color", "red"); // $ = jQuery
});