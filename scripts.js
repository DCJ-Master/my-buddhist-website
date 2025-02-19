/* scripts.js */
$(document).ready(function() {
    $('#more-info').click(function() {
        $('#info').html('<iframe width="560" height="315" src="https://www.youtube.com/watch?v=m3wBbirxigA" frameborder="0" allowfullscreen></iframe>').fadeToggle();
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
