// var Style = require("../models/style.js");
// var Artist = require("../models/artist.js");

$(function() {
    $(".collection").on("click", function(event) {
        var styleName = $(this).data("target");
        console.log(styleName);
        // event.preventDefault();
        $("#selected-style").text(styleName);
        
    })









});