import { Box, Heading, VStack } from "@chakra-ui/react"
import { SectionContainerProps } from "../../data/types"

export function SectionContainer({
  title,
  titleAlign = "center",
  children,
  spacing = 8
}: SectionContainerProps) {
  return (
    <Box>
      {title && (
        <Heading size="lg" mb={6} textAlign={titleAlign}>
          {title}
        </Heading>
      )}
      <VStack gap={spacing} align="stretch">
        {children}
      </VStack>
    </Box>
  )
}
