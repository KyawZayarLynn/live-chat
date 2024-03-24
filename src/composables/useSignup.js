import { ref } from "vue";
import { auth } from "../../src/firebase/config"
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';

let error = ref(null);
let createAccount = async(email,password,displayName) => { 
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("couldn't create a new user");
    }
    updateProfile(auth.currentUser,{displayName})
    return res;
  } catch (err) {
    const errorMessage = err.message.replace(/^Firebase:\s*/, '');
    error.value = errorMessage;
  }
}

let useSignup= () => {

  return { error, createAccount };
}

export { useSignup };