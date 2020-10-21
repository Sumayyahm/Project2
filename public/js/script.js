var db = require("../../models")


$(function() {
    $(".collection").on("click", function(event) {
        var styleName = $(this).data("target");
        window.location.href= "/collection/" + styleName
        // console.log(styleName);
        // event.preventDefault();
       
        $.ajax("/api/style/" + styleName, {
            type: "GET",
            data: {StyleName:styleName
        });
        
    });

    $(".artist").on("click", function(event) {
        var artistName= $(this).data("name");
        window.location.href= "views/artists.handlebars"
        var Artist = {
          artistname: artistName
        }

        $.ajax("/api/artwork/" + artistName, {
            type: "GET",
            data: Artist
        });
    })









});