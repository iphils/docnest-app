import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { FeatureCardProps } from "../../data/types"
import { FeatureIcon } from "./FeatureIcon"

export function FeatureCard({
  icon,
  iconColor,
  iconLabel,
  title,
  description,
  align = "center"
}: FeatureCardProps) {
  return (
    <Box
      bg="white"
      p={6}
      rounded="lg"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
      textAlign={align}
    >
      <VStack gap={3} align={align}>
        <FeatureIcon
          icon={icon}
          color={iconColor}
          label={iconLabel}
        />
        <Heading size="sm">{title}</Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </VStack>
    </Box>
  )
}
