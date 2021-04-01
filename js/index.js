$(".downArrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#recent").offset().top
    }, 500);
});