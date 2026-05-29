import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
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
        placeholder="Password"
        fontSize={"14"}
        name="password"
        type="password"
        size={"sm"}
        value={inputValues.password}
        onChange={handleInputChange}
      />

      <Button colorScheme={"blue"} w={"full"} fontSize={"14"} size={"sm"}>
        Log In
      </Button>
    </>
  );
};

export default Login;
