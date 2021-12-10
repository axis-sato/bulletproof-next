import { Button as ChakraButton, ButtonProps } from "@chakra-ui/button";
import { forwardRef } from "@chakra-ui/react";

type Props = ButtonProps;

const Button = forwardRef<Props, "button">((props, ref) => (
  <ChakraButton {...props} ref={ref} />
));

export default Button;
