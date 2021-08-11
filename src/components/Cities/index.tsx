import { Box, Grid, Heading } from "@chakra-ui/react";

import { City } from "./City";

export function Cities() {
  return (
    <Box>
      <Heading
        fontWeight="500"
        fontSize={["2xl", "4xl"]}
        mb="10"
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City city="Londres" country="Reino Unido" thumbnail="londres" flag="londres" />
        <City city="Paris" country="França" thumbnail="paris" flag="franca" />
        <City city="Roma" country="Itália" thumbnail="roma" flag="roma" />
        <City city="Praga" country="República Tcheca" thumbnail="praga" flag="praga" />
        <City city="Amsterdã" country="Holanda" thumbnail="amsterda" flag="amsterda" />
      </Grid>
    </Box>
  )
}