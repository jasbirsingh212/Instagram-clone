import { useToast } from "@chakra-ui/react";

const useShowToast = () => {
  const toast = useToast();
  const showToast = (title, description, status) => {
    // Implementation for showing toast notification
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
    });
  };

  return showToast;
};

export default useShowToast;
