const button = document.querySelector('.modal-button')
const modal = document.querySelector('.bg-modal')
const closeButton = document.querySelector('.close')

button.addEventListener('click', () => {
    modal.showModal()
})

const closeModal = () => {
    modal.close()
}
