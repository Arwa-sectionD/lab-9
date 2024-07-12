$(document).ready(function() {
    $('#filters button').click(function() {
        var category = $(this).data('category');
        if (category === 'all') {
            $('#gallery figure').show();
        } else {
            $('#gallery figure').hide();
            $('#gallery figure[data-category="' + category + '"]').show();
        }
    });
});$(document).ready(function() {
    // Filter functionality
    $('#filters button').click(function() {
        var category = $(this).data('category');
        if (category === 'all') {
            $('#gallery figure').show();
        } else {
            $('#gallery figure').hide();
            $('#gallery figure[data-category="' + category + '"]').show();
        }
    });

    // Lightbox functionality
    $('#gallery img').click(function() {
        var src = $(this).attr('src');
        $('body').append('<div id="lightbox"><img src="' + src + '"><div id="lightbox-overlay"></div></div>');
        $('#lightbox-overlay').click(function() {
            $('#lightbox').remove();
        });
    });
});$(document).ready(function() {
    // Filter functionality with effects
    $('#filters button').click(function() {
        var category = $(this).data('category');
        if (category === 'all') {
            $('#gallery figure').fadeIn();
        } else {
            $('#gallery figure').fadeOut();
            $('#gallery figure[data-category="' + category + '"]').fadeIn();
        }
    });

    // Lightbox functionality with effects
    $('#gallery img').click(function() {
        var src = $(this).attr('src');
        $('body').append('<div id="lightbox"><img src="' + src + '"><div id="lightbox-overlay"></div></div>');
        $('#lightbox').fadeIn();
        $('#lightbox-overlay').click(function() {
            $('#lightbox').fadeOut(function() {
                $(this).remove();
            });
        });
    });

    // Hover effects on images
    $('#gallery img').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});