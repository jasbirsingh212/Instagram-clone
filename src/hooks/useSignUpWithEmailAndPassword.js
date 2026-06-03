import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, fireStoreDB } from "../Firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
// import { useNavigate } from "react-router-dom";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  //   const navigation = useNavigate();
  const loginUser = useAuthStore((state) => state.login);

  const signUpWithEmailAndPassword = async ({
    email,
    fullName,
    username,
    password,
  }) => {
    if (!email || !password || !fullName || !username) {
      showToast("Error", "All fields are required.", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(email, password);

      if (!newUser) {
        showToast(
          "Error",
          error?.message || "Failed to create account.",
          "error",
        );
        return;
      }

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
        loginUser(userDoc);
        showToast("Success", "Account created successfully!", "success");
        // navigation("/");
      }
    } catch (err) {
      console.error("Error signing up:", err);
      showToast("Error", err.message, "error");
    }
  };

  return { loading, error, signUpWithEmailAndPassword };
};

export default useSignUpWithEmailAndPassword;
