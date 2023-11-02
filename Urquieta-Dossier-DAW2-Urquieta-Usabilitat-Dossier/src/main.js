import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupDossierCristian } from "./app/DossierCristian.js";

import './app/signupForm.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'
import './app/logout.js'
import './app/DossierCristian.js'

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    setupDossierCristian(true);
  } else {
    setupDossierCristian(false);
    loginCheck(user);
  }
});

let contDias = new Date();
  let alertDia = localStorage.getItem("contadorDies");

  if (alertDia === null) {
    alert("Hola!! Es el primer inici en aquesta pagina!");
    localStorage.setItem("contadorDies", contDias);
  } else {
    if (contDias - alertDia >= 3) {
      alert("Ja has entrat en aquesta pagina fa uns dies!");
      localStorage.setItem("contadorDies", alertDia);
    }
  }