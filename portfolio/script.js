$(window).on('load', function() {
    $('.center').fadeOut();
    $('lds-ellipsis').fadeOut();
    $('.content').fadeIn();
    $(".content").addClass('visible');
});

$(document).ready(function () {
    const popup = $('#popup');
    const popupImg = $('#popup-img');
    const popupTitle = $('#popup-title');
    const popupDate = $('#popup-date');
    const popupMedium = $('#popup-medium');

    $('.material-container .art').on('click', function () {
        const imgSrc = $(this).attr('src');
        const imgTitle = $(this).data('title');
        const imgDate = $(this).data('date');
        const imgMedium = $(this).data('medium');

        popupImg.attr('src', imgSrc);
        popupTitle.text(imgTitle ? imgTitle : "No title available");
        popupDate.text(imgDate ? "Date: " + imgDate : "Date: N/A");
        popupMedium.text(imgMedium ? "Medium: " + imgMedium : "Medium: N/A");

        popup.fadeIn();
    });

    $('#close-popup').on('click', function () {
        popup.fadeOut();
    });

    popup.on('click', function (e) {
        if ($(e.target).is('#popup')) {
            popup.fadeOut();
        }
    });
});

$(document).ready(function () {
    const videoPopup = $('#video-popup');
    const popupVideo = $('#popup-video');
    const popupTitle = $('#video-popup-title');
    const popupDate = $('#video-popup-date');
    const popupMedium = $('#video-popup-medium');

    
    $('.material-container .video').on('click', function () {
        const videoSrc = $(this).attr('src');
        const videoTitle = $(this).data('title');
        const videoDate = $(this).data('date');
        const videoMedium = $(this).data('medium');

        popupVideo.attr('src', videoSrc);
        popupTitle.text(videoTitle ? videoTitle : "No title available");
        popupDate.text(videoDate ? "Date: " + videoDate : "Date: N/A");
        popupMedium.text(videoMedium ? "Medium: " + videoMedium : "Medium: N/A");

        videoPopup.fadeIn();
    });

    $('#close-video-popup').on('click', function () {
        videoPopup.fadeOut();
        popupVideo.attr('src', '');
    });

    videoPopup.on('click', function (e) {
        if ($(e.target).is('#video-popup')) {
            videoPopup.fadeOut();
            popupVideo.attr('src', '');
        }
    });
});


$(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    const threshold = 400;

    if (scrollTop > threshold) {
        $('.up').fadeIn();
    } else {
        $('.up').fadeOut();
    }
});


$('.up').click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});