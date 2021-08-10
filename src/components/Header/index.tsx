import Link from "next/link";
import { useRouter } from "next/router";

import { Flex, Grid, Icon } from "@chakra-ui/react";
import { RiArrowLeftSLine } from 'react-icons/ri'

import { Logo } from "./Logo";

export function Header() {
  const { asPath } = useRouter()

  const notHomePage = () => asPath !== "/"

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
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
            </a>
          </Link>
        )}
        <Logo />
      </Grid>
    </Flex>
  )
}