import { Button } from "@chakra-ui/react";

const ButtonBlue = ({ children, onClick, ...props }) => {
  return (
    <>
      <Button {...props} bg="blue.400">
        {children}
      </Button>
      <Button onClick={onClick}>test</Button>
    </>
  );
};
export default ButtonBlue;
