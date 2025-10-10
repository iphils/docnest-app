import { Box, Grid, Heading, Text } from "@chakra-ui/react"
import { GalleryProps } from "../../data/types"

export function Gallery({
  title,
  images,
  columns = { base: 2, md: 3 },
  imageHeight = "200px"
}: GalleryProps) {
  return (
    <Box>
      <Heading size="lg" mb={6} textAlign="center">
        {title}
      </Heading>
      <Grid
        templateColumns={{
          base: `repeat(${columns.base}, 1fr)`,
          md: `repeat(${columns.md}, 1fr)`
        }}
        gap={4}
      >
        {images.map((image) => {
          if (image.src) {
            return (
              <Box
                key={image.id}
                as="img"
                src={image.src}
                alt={image.alt}
                h={imageHeight}
                w="full"
                objectFit="cover"
                borderRadius="md"
              />
            )
          }

          return (
            <Box
              key={image.id}
              h={imageHeight}
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
    </Box>
  )
}
