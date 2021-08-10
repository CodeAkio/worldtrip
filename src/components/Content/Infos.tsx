import { Flex, Heading, Text } from "@chakra-ui/react";
import { Info } from "./Info";

export function Infos() {
  return (
    <Flex
      align="center"
      justify="space-between"
    >
      <Info data={50} text="países" />
      <Info data={60} text="línguas" />
      <Info data={27} text="cidades +100" popoverText="Lisboa, Paris, Londres" />
    </Flex>
  )
}