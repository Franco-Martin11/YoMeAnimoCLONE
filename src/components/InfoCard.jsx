import { Stack, Image, Heading, Text, Button, Box } from "@chakra-ui/react";

const InfoCard = ({ data: { infoIMG, infoUrl, infoTitle, infoCopy } }) => {
  return (
    <Box
      bgImage="url('https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/_Tramas/general-trama-thunder.svg')"
      bgPosition="center"
      bgSize="cover"
      py={8}
    >
      <Stack
        margin="0 25px !important"
        bg="#fff"
        borderRadius={"2xl"}
        boxShadow="md"
      >
        <Image src={infoIMG} alt={infoTitle} borderTopRadius={"2xl"} />
        {/*<SvgIcon />*/}
        <Box p={6} as={Stack} direction={"column"} gap={2}>
          <Heading
            color="primary.darkGranate"
            textTransform="capitalize"
            fontWeight="900"
            fontSize="xl"
          >
            {infoTitle}
          </Heading>
          <Text fontWeight={500} color="primary.darkGranate">
            {infoCopy}
          </Text>
          <Button
            colorScheme={"red"}
            size="lg"
            borderRadius="xl"
            w="fit-content"
          >
            Quiero saber más!
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default InfoCard;
