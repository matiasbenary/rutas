import { Button } from "@chakra-ui/react";

const ButtonsRojo = ({ children, ...props }) => {
  return (
    <Button bg="red.400" {...props}>
      {children}
    </Button>
  );
};
export default ButtonsRojo;
