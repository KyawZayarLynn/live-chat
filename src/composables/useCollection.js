import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, addDoc as addDocument } from "firebase/firestore";

let useCollection = (coll) => {
  let error = ref(null);
  let addDoc = async(doc) => {
    try {
      await addDocument(collection(db, coll), doc);
    } catch (err) {
      error.value = "couldn't connect to server";
      console.log(error.value);
    }
  }
  return { error, addDoc };
}

export default useCollection;