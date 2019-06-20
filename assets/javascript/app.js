$(document).ready(function() {

    // Button event listener
    $("button").on("click", function() {

        var person = $(this).attr("data-person");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=qQSqkVtM3n2TAwKHxosoCWlxDiFocfpw&limit=9";

        // Performing AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        // After data comes back from API
            .then(function(response) {
                // Storing an array of reults in the results variable
                var results = response.data;

                console.log(response);

                for (var i = 0; i < results.length; i++) {
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        var gifDiv = $("<div>");

                        var rating = results[i].rating;

                        var p = $("<p>").text("Rating: " + rating);

                        var personImage = $("<img class='gif'>");
                        var play = results[i].images.fixed_height.url;
                        var still = results[i].images.original_still.url;
                        var state = $(this).attr("src")

                        personImage.attr("src", play);

                        gifDiv.append(p);
                        $(gifDiv).append(personImage);
                        
                        $("#gifs-appear-here").prepend(gifDiv);

                }
                $(".gif").on("click", function() {
                    if ($(this).attr("src") === play) {
                    $(this).attr("src", still);
                    } else {
                        $(this).attr("src", play);
                    }
                })

                }
            })
    })
    
})