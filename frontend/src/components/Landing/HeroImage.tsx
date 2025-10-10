import { Box, Image, Text, VStack } from "@chakra-ui/react"
import { HeroImageProps } from "../../data/types"

export function HeroImage({
  src,
  alt,
  placeholderTitle = "Hero Image",
  placeholderSubtitle,
  height = "400px"
}: HeroImageProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        h={height}
        w="full"
        objectFit="cover"
        borderRadius="lg"
      />
    )
  }

  return (
    <Box
      h={height}
      bg="gray.100"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="2px dashed"
      borderColor="gray.300"
    >
      <VStack>
        <Text fontSize="xl" color="gray.500">
          {placeholderTitle}
        </Text>
        {placeholderSubtitle && (
          <Text fontSize="sm" color="gray.400">
            {placeholderSubtitle}
          </Text>
        )}
      </VStack>
    </Box>
  )
}
