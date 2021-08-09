import { Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Image
      src="/Logo.svg"
      alt="world trip"
      justifySelf="center"
      gridColumn="2"
      w={["81px", "184px"]}
    />
  )
}