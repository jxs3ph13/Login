import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth} from './firebase.js'
const modal = document.querySelector('#modal')

modal.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = modal['modal-email'].value
    const password = modal['modal-password'].value

    console.log(email,password)

    
    try {
        const UserCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(UserCredentials)

        document
    } catch (error) {
        console.log(error)
    }
})