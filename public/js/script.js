
$(function () {
    
    $(".collection").on("click", function (event) {
        var styleName = $(this).data("target");
        console.log(styleName);
        window.location.href = "/collection/" + styleName
    });

    $(".artist").on("click", function (event) {
        var artistName = $(this).data("name");
        window.location.href = "/artist/" + artistName
    });


    $(".artist-submit").on("click", function () {

        event.preventDefault();
        event.stopPropagation();

        var newArtist = {
            artist_name: $(".artist-input").val().trim(),
            artist_phone: $(".phone-input").val().trim(),
            artist_email: $(".email-input").val().trim(),
            artist_bio: $(".bio-input").val().trim()
        }


        $.post("/api/artist", newArtist)
            .then(function (data) {
                console.log("added following artist", data);

            });
    })

    // $(".")
});