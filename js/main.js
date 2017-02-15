$(function() {

    $('.switch').on('click', function() {

        $('body').toggleClass('dark');
        $('body').toggleClass('light');

        if ($('.switch button').attr('class') === 'on') {
            $('.switch button').removeClass('on').addClass('off');
            $('.status').text("You're not safe in the dark");

        } else {
            $('.switch button').removeClass('off').addClass('on');
            $('.status').text("Lets keep the lights bright!");
        }
    })
});
