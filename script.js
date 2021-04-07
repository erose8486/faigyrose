$(function(){
    $('.gallery figure').click(function(){
        $('body').addClass('popover');
        $('#overlay').fadeIn();
        $(this).addClass('open')
    })
    $('#overlay').click(function(){
        $(this).fadeOut();
        $('.gallery figure').removeClass('open')
        $('body').removeClass('popover')
    })
})