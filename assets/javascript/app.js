var topics = [
    "Funny",
    "Tea",
    "Spring",
    "Plants",
    "Corgi",
    "Coffee",
]
//clear function, using parameters to clear the element
function clear(id) {
    $("#" + id).empty();
}

// loop through each of the array elements
function addButton() {
    clear("gifButtons");
    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>").text(topics[i]);
        button.attr("class", "aGif")
        //appending the button to the top
        $("#gifButtons").append(button)
    }
}

function getGif(gifName) {
    // set page ""
    var page = "";
    // if gifName is equal to "" show the trending gifs
    if (gifName === "") {
        page = "https://api.giphy.com/v1/gifs/trending?api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=12";
    } else {
        page = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=12";
    }

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
            var addImage = $("<img>").attr({
                src: pageData[i].images.downsized_still.url,
                title: "Click here"
            });
            addImage.attr("data-still", pageData[i].images.downsized_still.url);
            addImage.attr("data-animate", pageData[i].images.downsized.url);
            addImage.attr("data-state", "still");
            addImage.addClass("gif_img");
            addImage.addClass("")

            $("#giphyContent").append(addImage);
        }
    })
}
$("#addGif").on("click", function () {
    var value = $("#gifInput").val();
    if (value !== "" && !topics.includes(value)) {
        topics.push(value);
        $("#gifInput").val("");
        addButton();
        getGif(value);
    }

    event.preventDefault();

})

$("#gifButtons").on("click", ".aGif", function () {
    getGif($(this).text());
})

$(document).on("click", ".gif_img", function () {
    var state = $(this).attr("data-state");
    if (state == "animate") {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    } else {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    }
})

//execution
addButton()
getGif("")