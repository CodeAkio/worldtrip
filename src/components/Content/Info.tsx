import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface InfoProps {
  data: number
  text: string
  popoverText?: string
}

export function Info({ data, text, popoverText }: InfoProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      align={["flex-star", "flex-start", "center"]}
    >
      <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
        {data}
      </Heading>
      <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700">
        {text}
        {popoverText && (
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWidth="400" fontSize="lg">
                {popoverText}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Text>
    </Flex>
  )
}