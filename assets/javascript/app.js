var topics = [
    "Dogs", 
    "Tea", 
    "Jimmy Fallon", 
    "Travel", 
    "Spring", 
    "Christmas", 
    "Computer", 
    "Sea", 
    "Beer"
]
//clear function, using parameters to clear the element
function clear(id) {
    $("#" + id).empty();
}

//console.log(topics.length);
// loop through each of the array elements
function addButton() {
    clear("foodButtons");
    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>").text(topics[i]);
        button.attr("class", "aFood")
        //appending the button to the top
        $("#foodButtons").append(button)
    }
}

function getGif(foodName) {
    console.log('hello')
    // var foodName = $(this).text();
    console.log(foodName)
    var page = "https://api.giphy.com/v1/gifs/search?q=" + foodName + "&api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=12";

    $.ajax({
        url: page,
        method: "GET"
    }).done(function (response) {
        var pageData = response.data;
        // console.log("Response: " + JSON.stringify(response));
        clear("giphyContent");
        for (var i = 0; i < pageData.length; i++) {
            // var rating = $("<p>").text("Rating: " + pageData[i].rating);
            // $("#giphyContent").append(rating);
            var addImage = $("<img>").attr("src", pageData[i].images.downsized_still.url);
            addImage.attr("data-still", pageData[i].images.downsized_still.url);
            addImage.attr("data-animate", pageData[i].images.downsized.url);
            addImage.attr("data-state", "still");
            addImage.addClass("gif_img");
            addImage.addClass("")

            $("#giphyContent").append(addImage);
        }
    })
}
$("#addFood").on("click", function () {
    var value = $("#foodInput").val();
    if (value !== "" && !topics.includes(value)) {
        topics.push(value);
        $("#foodInput").val("");
        console.log(topics);
        addButton();
        getGif(value);
    } 
 
    event.preventDefault();
  
})
//everytime I click on the button, console.log of what the the text of the button is. 
$("#foodButtons").on("click", ".aFood", function(){
    getGif($(this).text());
})

$(document).on("click", ".gif_img", function () {
    var state = $(this).attr("data-state");
    if (state == "animate") {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
    else {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    }
})

//make another function that will scan the images to switch the state of the images. You will take in the ID in order to identify the images.

//execution

addButton()


    // var URL = "https://api.giphy.com/v1/gifs/search?q=" + topics "&api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=10"