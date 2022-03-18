//JQUERY

const customSlider = (options = {
    selector,
    isPaging,
    isArrows,
    maxheight,
    width,
    cursor,
    radius,
    isBoxShadow,
    autoPlay,
    autoPlaySpeed,
}) => {
    if (options.isPaging === undefined) options.isPaging = true;
    if (options.isBoxShadow === undefined) options.isBoxShadow = true;
    if (options.maxheight === undefined) options.maxheight = '300px';
    if (options.width === undefined) options.width = '85%';
    if (options.cursor === undefined) options.cursor = 'pointer';
    if (options.radius === undefined) options.radius = '15px';
    if (options.autoPlay === undefined) options.autoPlay = true;
    if (options.autoPlaySpeed === undefined) options.autoPlaySpeed = 3000;
    if (options.isArrows === undefined) options.isArrows = true;

    $(`${options.selector}`).css('overflow', 'hidden');
    $(`${options.selector}`).css('position', 'relative');
    $(`${options.selector}`).css('width', options.width);
    $(`${options.selector}`).css('max-height', options.maxheight);
    $(`${options.selector}`).css('cursor', options.cursor);
    $(`${options.selector}`).css('border-radius', options.radius);
    $(`${options.selector}`).css('padding-bottom', '0 !important');
    $(`${options.selector}`).css('box-shadow', '2px 2px 10px #ccc');
   
    const imageLength = $(`${options.selector} > ul > `).length;

    const buttonsContainer = `<div class="image-buttons"></div>`;
    $(`${options.selector}`).append(buttonsContainer);
    for (let index = 0; index < imageLength; index++) {
        const imageButton = `<button>${index + 1}</button>`
        $('.image-buttons').append(imageButton);
    }
    $('.image-buttons button:first-child').addClass('active');
    $('.image-buttons button').click(function () {
        let index = $(this).index();
        $('.slider-item').hide();
        $('.slider-item').eq(index).fadeIn();
        $('.image-buttons button').removeClass('active');
        $(this).addClass('active');
    });
    
    if (options.isPaging == false) { $('.image-buttons').css('display', 'none') }


    if (options.isArrows) {
        $(`${options.selector}`).append(`<a class="arrow-prev">&#8656;</a>`);
        $(`${options.selector}`).append(`<a class="arrow-next">&#8658;</a>`);

        $('.arrow-prev').click(() => {
            let index = $('.active').index();
            if (index === $('.slider-item').length - 1) {
                index = -1;
            }
            $('.slider-item').hide()
            $('.slider-item').eq(index - 1).fadeIn();
            $('.image-buttons button').removeClass('active');
            $('.image-buttons button').eq(index - 1).addClass('active');
        })

        $('.arrow-next').click(() => {
            let index = $('.active').index();
            if (index === $('.slider-item').length - 1) {
                index = -1;
            }
            $('.slider-item').hide()
            $('.slider-item').eq(index - 1).fadeIn();
            $('.image-buttons button').removeClass('active');
            $('.image-buttons button').eq(index + 1).addClass('active');
        })
    }


    if (options.autoPlay) {
        let slideInterval = setInterval(function () {
            let activeButton = $('.image-buttons button.active');
            let nextButton = activeButton.next();
            if (nextButton.length == 0) {
                nextButton = $('.image-buttons button:first-child');
            }
            activeButton.removeClass('active');
            nextButton.addClass('active');
            $('.slider-item').hide();
            $('.slider-item').eq(nextButton.index()).fadeIn();
        }, options.autoPlaySpeed);

        $('.slider-item').hover(function () {
            clearInterval(slideInterval);
        })

        $('.slider-item').mouseleave(function () {
            slideInterval = setInterval(function () {
                let activeButton = $('.image-buttons button.active');
                let nextButton = activeButton.next();
                if (nextButton.length == 0) {
                    nextButton = $('.image-buttons button:first-child');
                }
                activeButton.removeClass('active');
                nextButton.addClass('active');
                $('.slider-item').hide();
                $('.slider-item').eq(nextButton.index()).fadeIn();
            }, options.autoPlaySpeed);
        })
    }
}

