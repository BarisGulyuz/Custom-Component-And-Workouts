const button = document.querySelector('.modal-button')
const modal = document.querySelector('.bg-modal')

button.addEventListener('click', () => {
    modal.showModal()
})

const closeModal = () => {
    modal.close()
}
