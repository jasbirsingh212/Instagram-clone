import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, fireStoreDB } from "../Firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signUpWithEmailAndPassword = async ({
    email,
    fullName,
    username,
    password,
  }) => {
    if (!email || !password || !fullName || !username) {
      throw new Error("All fields are required");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: email,
          username: username,
          fullName: fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };

        await setDoc(doc(fireStoreDB, "users", newUser.user.uid), userDoc);

        localStorage.setItem("user-info", JSON.stringify(userDoc));
      }
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  return { loading, error, signUpWithEmailAndPassword };
};

export default useSignUpWithEmailAndPassword;
