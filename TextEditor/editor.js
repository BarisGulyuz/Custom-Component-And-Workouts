const buttons = document.querySelectorAll('.option-btn');
const colorInput = document.querySelector('#option-color');
const imageInput = document.querySelector('#option-image');

const fontFamily = document.querySelector('#font-family');
const fontSize = document.querySelector('#font-size');

// const fullScreenButton = document.querySelector('#full-screen');

buttons.forEach(button => {
    let command = button.getAttribute('data-command');
    button.addEventListener('click', (e) => {
        e.preventDefault()
        execCommand(command);
    });
})
function execCommand(command) {
    document.execCommand(command);
}


colorInput.addEventListener('change', (e) => {
    document.execCommand('forecolor', false, e.target.value);
})

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (e) => {
        document.execCommand('insertImage', false, e.target.result);
    })
})


fontFamily.addEventListener('change', (e) => {
    document.execCommand('fontName', false, e.target.value);
})

fontSize.addEventListener('change', (e) => {
    document.execCommand('fontSize', false, e.target.value);
})











