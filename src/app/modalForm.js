import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth} from './firebase.js'
import { mostrarMensaje} from "./mostarMensajes.js"

const modal = document.querySelector('#modal')

modal.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = modal['modal-email'].value
    const password = modal['modal-password'].value

    console.log(email,password)

    
    try {
        const UserCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(UserCredentials)

        mostrarMensaje("Bienvenido "+ UserCredentials.user.email)
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 3000);
    } catch (error) {
        
        if (error.code === 'auth/network-request-failed'){
            mostrarMensaje("Correo invalido o ya existe", "error")
        }else if(error.code === 'auth/weak-password'){
            mostrarMensaje("Clave Invalida", "error")
        }else if (error.code){
            mostrarMensaje("Upps algo salio mal", "error")
        }

    }
})
