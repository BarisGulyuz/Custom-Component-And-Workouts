
let score = 0,
    speed = 150
finished = false


const removeAndCreate = () => {
    $('.ball').remove()
    createBall()
    if(score >= 10){
        //make function here for another score logic
        $('.ball').css({
            'background-color': 'green',
            'width': '70px',
            'height': '70px'
        })
    }
    setScore()
}

const createBall = (isBasic = false) => {
    $('body').prepend(
        `<span onclick=(removeAndCreate()) class="ball"> </span>`
    )
    x = Math.random() * (500 - 1) + 1
    y = Math.random() * (850 - 1) + 1
    if (isBasic === true) {
        x = Math.random() * (1700 - 1) + 1
        y = Math.random() * (1000 - 1) + 1
    }
    $('.ball').css({
        'left': `${x}px`,
        'top': `${y}px`
    })
}

const moveBall = (time) => {
    setInterval(() => {
        if ($('.ball').position().left > 1920) {
            $('.ball').remove()
            $('body').prepend(
                `<div class="finish-score">Game Over! You Have ${score} Score</div>`
            )
        }
        $('.ball').animate({
            'left': '+=50px',
        }, time)
    }, time)
}

const basicBall = () => {
    createBall()
    //more logic
}

const setScore = () => {
    score += 1
    $('.score').text(`Score: ${score}`)
}

const setGameType = (type) => {
    $('.game-types').hide()
    if (type === 'basic') {
        createBall(true)
        setTimeout(() => {
            basicBall()
            if (finished === true) {
                $('.ball').remove()
                $('body').prepend(
                    `<div class="finish-score">Game Over! You Have ${score} Score</div>`
                )
            }
        }, 60000)
        finished = true
    }
    if (type === 'speed') {
        createBall()
        setInterval(() => {
            speed -= 1
            moveBall(speed)
        }, speed)
    }
}

