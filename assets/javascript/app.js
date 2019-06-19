$(document).ready(function() {

    // Button event listener
    $("button").on("click", function() {

        var person = $(this).attr("data-person");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=qQSqkVtM3n2TAwKHxosoCWlxDiFocfpw&limit=15";

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

                        var personImage = $("<img>");

                        personImage.attr("src", results[i].images.fixed_height.url);

                        gifDiv.append(personImage)

                        $("#gifs-appear-here").prepend(gifDiv);
                    }
                }
            })
    })
})