$(function () {
    


    $(".collection").on("click", function (event) {
        var styleName = $(this).data("target");
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
                location.reload()
                alert(newArtist.artist_name + ' was added!')

            })
            .catch(function(err){

                console.log(err)
            })
    })

    $(".style-submit").on("click", function(){

        event.preventDefault();
        event.stopPropagation();
        
        var newStyle = {
            style_name: $(".stylename-input").val().trim()
        }

        $.post("/api/style", newStyle)
            .then(function(data){
                location.reload()
                alert(newStyle.style_name + ' was added!')
            })
            .catch(function(err){

                console.log(err)
            })
    })
    

    $(".event-submit").on("click", function(){

        event.preventDefault();
        event.stopPropagation();

        var newExhibit = {
            exhibit_name: $(".eventname-input").val().trim(),
            date: $(".eventdate-input").val().trim(),
            time: $(".eventtime-input").val().trim(),
            exhibit_descript: $(".eventdescription-input").val().trim(),
            exhibit_address: $(".eventaddress-input").val().trim()
        }

        $.post("/api/exhibit", newExhibit)
            .then(function(data){
                location.reload()
                alert(newExhibit.exhibit_name + ' was added!')
            })
            .catch(function(err){

                console.log(err)
            })
    })
});