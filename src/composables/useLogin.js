import { ref } from 'vue'
import { auth } from "../../src/firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth";

let error = ref(null);

let signIn = async(email,password) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error("Login Failed!")
    }
    return res;
  } catch (err) {
    const errorMessage = err.message.replace(/^Firebase:\s*/, '');
    error.value = errorMessage;
  }
}

let useLogin = () => {
  return {error,signIn}
}

export {useLogin};