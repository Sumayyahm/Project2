require("../../routes/style-api.js");
require("../../routes/artist-api.js");

$(function() {
    $(".collection").on("click", function(event) {
        var styleName = $(this).data("target");
        window.location.href= ""
        console.log(styleName);
        // event.preventDefault();
        var Style = {
            StyleName : styleName
        }

        $.ajax("/api/style/" + styleName, {
            type: "GET",
            data: Style
        });
        
    });

    $(".artist").on("click", function(event) {
        var artistName= $(this).data("name");

        var Artist = {
          artistname: artistName
        }

        $.ajax("/api/artist/" + artistName, {
            type: "GET",
            data: Artist
        });
    })









});