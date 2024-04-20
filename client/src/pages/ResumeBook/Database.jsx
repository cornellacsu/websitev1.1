import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";

var bcrypt = require('bcryptjs');

// PUT FIREBASE CONFIG HERE

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function checkPassword(username, password) {
  try {
    const docRef = doc(db, "sponsors", username);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      if (bcrypt.compareSync(password, documentData['password']))
        return true;
      return false;
    } else {
      console.log("Document does not exist!");
      return false;
    }
  } catch (error) {
    console.error("Error querying document:", error);
    return false;
  }
}

export default checkPassword