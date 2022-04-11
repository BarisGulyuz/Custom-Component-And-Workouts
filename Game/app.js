$(document).ready(() => {

    Helpers.createBox()

    let person = $('#person')
    let box = $('.box')

    $(document).keydown(function (e) {
        key = String.fromCharCode(e.keyCode);
        switch (key) {
            case 'W':
                person.css({
                    'top': `${parseInt(person.css('top')) - 10}px`
                })
                break;
            case 'S':
                person.css({
                    'top': `${parseInt(person.css('top')) + 10}px`
                })
                break;
            case 'A':
                person.css({
                    'left': `${parseInt(person.css('left')) - 10}px`
                })
                break;
            case 'D':
                person.css({
                    'left': `${parseInt(person.css('left')) + 10}px`
                })
                break;
            case 'Q':
                person.css({
                    'top': `${parseInt(person.css('top')) - 10}px`,
                    'left': `${parseInt(person.css('left')) - 10}px`
                })
            case 'E':
                person.css({
                    'top': `${parseInt(person.css('top')) - 10}px`,
                    'left': `${parseInt(person.css('left')) + 10}px`
                })
        }
        for (let i = 0; i <= box.length; i++) {
            if ($(`#box${i}`)?.position()?.top < person.position().top + person.height() && $(`#box${i}`).position().top + $(`#box${i}`).height() > person.position().top && $(`#box${i}`).position().left < person.position().left + person.width() && $(`#box${i}`).position().left + $(`#box${i}`).width() > person.position().left) {
                person.css('height', person.height() + $(`#box${i}`).height() / 5)
                person.css('width', person.width() + $(`#box${i}`).width() / 5)
                $(`#box${i}`).remove()
            }
        }

        if (10 > Helpers.getBoxLength()) {
            Helpers.createBox()
        }
    });
})


class Helpers {
    static getRandomNumber(min = 0, max = 1300) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        const newNumber = number - number % 5;
        return newNumber
    }

    static createBox(boxCount = 100) {
        for (let i = 0; i <= boxCount; i++) {
            $('body').prepend(`<div class="box" id="box${i}"></div>`);
            $(`#box${i}`).css({
                'position': 'absolute',
                'width': '20px',
                'height': '20px',
                'border-radius': '10px',
                'top': `${Helpers.getRandomNumber()}px`,
                'left': `${Helpers.getRandomNumber()}px`,
                'font-size': `${Helpers.getRandomNumber()}px`,
                'background-color': `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
            })
        }
    }

    static getBoxLength() {
        return $('.box').length
    }
}




