import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signUpWithEmailAndPassword } =
    useSignUpWithEmailAndPassword();
  const [inputValues, setInputValues] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <Input
        placeholder="Email"
        name="email"
        fontSize={"14"}
        type="email"
        size={"sm"}
        value={inputValues.email}
        onChange={handleInputChange}
      />

      <Input
        placeholder="Username"
        name="username"
        fontSize={"14"}
        type="text"
        size={"sm"}
        value={inputValues.username}
        onChange={handleInputChange}
      />

      <Input
        placeholder="Full Name"
        name="fullName"
        fontSize={"14"}
        type="text"
        size={"sm"}
        value={inputValues.fullName}
        onChange={handleInputChange}
      />

      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={"14"}
          name="password"
          type={showPassword ? "text" : "password"}
          size={"sm"}
          value={inputValues.password}
          onChange={handleInputChange}
        />
        <InputRightElement h={"full"}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={"13"} p={2} borderRadius={4}>
          <AlertIcon fontSize={"12px"} />
          {error.message}
        </Alert>
      )}

      <Button
        colorScheme={"blue"}
        w={"full"}
        fontSize={"14"}
        size={"sm"}
        onClick={() => signUpWithEmailAndPassword(inputValues)}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </>
  );
};

export default SignUp;
