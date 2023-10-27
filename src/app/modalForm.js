const modal = document.querySelector('#modal')

modal.addEventListener('submit', (e) =>{
    e.preventDefault()

    const email = modal['modal-email'].value
    const password = modal['modal-password'].value

    console.log(email,password)
})