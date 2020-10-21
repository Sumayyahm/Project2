
$(function() {
    $(".collection").on("click", function(event) {
        var styleName = $(this).data("target");
        console.log(styleName);
        window.location.href= "/collection/" + styleName
    });

    $(".artist").on("click", function(event) {
        var artistName= $(this).data("name");
        window.location.href= "/artist/" + artistName
    });









});