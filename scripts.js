$(document).ready(function() {
    $('#more-info').click(function() {
        $('#info').fadeToggle();
    });

    $('.card').hover(
        function() {
            $(this).css("box-shadow", "0 4px 8px rgba(255, 255, 255, 0.5)");
        },
        function() {
            $(this).css("box-shadow", "none");
        }
    );
});