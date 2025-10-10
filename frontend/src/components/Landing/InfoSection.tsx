import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react"
import { InfoSectionProps } from "../../data/types"

export function InfoSection({
  title,
  titleColor = "blue.600",
  images = [],
  description,
  imageColumns = { base: 2, md: 2 }
}: InfoSectionProps) {
  return (
    <Box
      bg="white"
      p={6}
      rounded="lg"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
    >
      <VStack align="stretch" gap={4}>
        <Heading size="md" color={titleColor}>
          {title}
        </Heading>
        {images.length > 0 && (
          <Grid
            templateColumns={{
              base: `repeat(${imageColumns.base}, 1fr)`,
              md: `repeat(${imageColumns.md}, 1fr)`
            }}
            gap={4}
          >
            {images.map((image, index) => {
              if (image.src) {
                return (
                  <Box
                    key={index}
                    as="img"
                    src={image.src}
                    alt={image.alt}
                    h="120px"
                    w="full"
                    objectFit="cover"
                    borderRadius="md"
                  />
                )
              }

              return (
                <Box
                  key={index}
                  h="120px"
                  bg="gray.100"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed"
                  borderColor="gray.300"
                >
                  <Text fontSize="sm" color="gray.500">
                    {image.placeholder || image.alt}
                  </Text>
                </Box>
              )
            })}
          </Grid>
        )}
        <Text color="gray.600">{description}</Text>
      </VStack>
    </Box>
  )
}
