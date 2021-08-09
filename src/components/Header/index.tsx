import { Flex, Grid } from "@chakra-ui/react";

import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        w="100%"
        maxW="1160px"
        mx="auto"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Logo />
      </Grid>
    </Flex>
  )
}