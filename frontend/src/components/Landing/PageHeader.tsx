import { Box, Heading, Text } from "@chakra-ui/react"
import { PageHeaderProps } from "../../data/types"

export function PageHeader({
  title,
  description,
  maxW = "2xl"
}: PageHeaderProps) {
  return (
    <Box textAlign="center">
      <Heading size="2xl" mb={4}>
        {title}
      </Heading>
      <Text fontSize="lg" color="gray.600" maxW={maxW} mx="auto">
        {description}
      </Text>
    </Box>
  )
}
