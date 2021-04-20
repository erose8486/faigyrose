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
    $('#menu a').removeClass('active');
    switch (window.location.pathname.split('/')[2]){
        case 'portfolio.php':
            console.assert(window.location.pathname)
            $('#portfolio-link').addClass('active');
            break;
        case 'contact.php':
            $('#contact-link').addClass('active');
            break;
        default:
            $('#home-link').addClass('active');
            break;
    }

})