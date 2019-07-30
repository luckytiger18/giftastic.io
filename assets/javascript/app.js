var topics = ["Coffee", "Tea", "Ice Cream", "Doughnut", "Bacon", "Cookie", "Taco", "Cake", "Beer"]

//clear function
function clear() {
    $("#foodButtons").empty()
}

//console.log(topics.length);
// for loop through each of the array elements
function addButton() {
    clear();
    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>").text(topics[i]);
        button.attr("class", "aFood")
        //appending the button to the top
        $("#foodButtons").append(button)
    }
}
$("#addFood").on("click", function () {
    var value = $("#foodInput").val();
    topics.push(value);
    console.log(topics);
    addButton();
    event.preventDefault();
})
//everytime I click on the button, console.log of what the the text of the button is. 
$("#foodButtons").on("click", ".aFood", function () {
    var clickFoodButton = $(this).text()

    console.log(clickFoodButton)
})



//execution, javascript, jQuery, api address
console.log("hello world!")
var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=coffee&api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=10");
xhr.done(function (data) { console.log("success got data", data); });

addButton()


    // var URL = "https://api.giphy.com/v1/gifs/search?q=" + topics "&api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=10"