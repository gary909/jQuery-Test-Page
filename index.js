// Don't forget to import the jQuery library in the html

/*document.querySelector("h1"); // standard JS
$("h1") // Same query using jQuery

document.querySelectorAll("button") //JS
$("button") // JQ



// ********* Changing CSS ***********

$("h1").css("color", "green");
*/

// $(document).ready(function() { // This function waits for jquery to be loaded before proceeding
//     $("h1").css("color", "red"); // $ = jQuery
// });

// $("h1").css("color", "green"); // Font to green
// $("h1").css("font-size", 115); // change font size



// ********* Changing Text ***********

$("h1").addClass("big-title")
// $("h1").removeClass("big-title")

$("h1").text("Bye") // changes the text from 'hello' to 'bye'

//$("button") // selects all the elements that match the selector

$("button").text("Don't Click Me") // Changes all the buttons text to 'Don't click Me'

$("button").html("<em>Hey</em>") // changes the buttons html



// ********* Changing Attributes ***********

$("a").attr("href", "https://yahoo.com") // changes the anchor ('a') tags attribute from the original href, to the new one (yahoo)



// ********* Adding Event Listeners ***********

$("h1").click(function(){ // onClick
    $("h1").css("color", "purple");
});

// Previous method of selecting all the buttons and making them change h1 colour:
// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "red";
//     });
// }
// ...In jQuery
$("button").click(function() {
    $("h1").css("color", "blue");
});

//Adding text with the input
$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key); // change the h1 to the keypress
});

$("h1").on("mouseover", function() { // on mouseOver change h1 color
    $("h1").css("color", "salmon")
})