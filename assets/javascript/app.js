var topics = ["Coffee", "Tea", "Brownies", "Doughnut", "Bacon", "Cookie", "Taco", "Cake", "Beer"]

//clear function, using parameters to clear the element
function clear(id) {
    $("#" + id).empty();
}

//console.log(topics.length);
// for loop through each of the array elements
function addButton() {
    clear("foodButtons");
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
    var foodName = $(this).text()
    var page = "https://api.giphy.com/v1/gifs/search?q=" + foodName + "&api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=10";

    $.ajax({
        url: page,
        method: "GET"
    }).done(function (response) {
        var pageData = response.data;
        clear("giphyContent");
        for (var i = 0; i < pageData.length; i++) {
            var rating = $("<p>").text(pageData[i].rating);
            $("#giphyContent").append(rating);
            var addImage = $("<img>").attr("src", pageData[i].images.fixed_height_small_still.url);
            $("#giphyContent").append(addImage);
        }
    })
})
//execution, javascript, jQuery, api address

addButton()


    // var URL = "https://api.giphy.com/v1/gifs/search?q=" + topics "&api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=10"