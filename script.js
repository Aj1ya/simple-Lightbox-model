   // Function to add lightbox to images
   $( '.overlay' ).click(function() {
    $(this).closest('.single-item').addClass('active');

    // function to check for a keypress of the esc after lightbox is active
    $(document).on('keydown', function(event) {
        if (event.key === "Escape") {
            $('.single-item').removeClass('active');
        }
    });

    // function to close lightbox on click of close button
    $( '.close-btn' ).click(function() {
        $(this).parent('.lightbox-image').parent('.single-item').removeClass('active');
    });

    // function to navigate to next image on click of next button
    $( '.next-btn' ).click(function() {
        $(this).closest('.single-item').removeClass('active');
        $(this).closest('.single-item').next('.single-item').addClass('active');
    });

    $( '.prev-btn' ).click(function() {
        $(this).closest('.single-item').removeClass('active');
        $(this).closest('.single-item').prev('.single-item').addClass('active');
    });
});