$(document).ready(function () {
    const popup = $('#popup');
    const popupImg = $('#popup-img');
    const popupTitle = $('#popup-title');
    const popupDate = $('#popup-date');
    const popupMedium = $('#popup-medium');

    $('.gallery .art').on('click', function () {
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
