jQuery(document).ready(function() {
    $('#my-icon').on('click', function() {
        $(this).toggleClass('is-active');
        $('.navbar-mobile').toggleClass('show');
    })
})