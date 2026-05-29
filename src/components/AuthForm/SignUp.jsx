import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
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

      <Button colorScheme={"blue"} w={"full"} fontSize={"14"} size={"sm"}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUp;
