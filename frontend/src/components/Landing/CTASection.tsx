import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { CTASectionProps } from "../../data/types"

export function CTASection({
  title,
  description,
  buttons,
  contactInfo,
  gradient,
  textColor = "white",
  bgColor
}: CTASectionProps) {
  return (
    <Box
      bg={bgColor}
      bgGradient={gradient}
      p={6}
      rounded="lg"
    >
      <VStack gap={4} textAlign="center" color={textColor}>
        <Heading size="lg">{title}</Heading>
        <Text maxW="2xl">{description}</Text>
        <HStack gap={4}>
          {buttons.map((button) => (
            <Button
              key={button.id}
              variant={button.variant || "solid"}
              colorScheme={button.colorScheme || "whiteAlpha"}
              size="lg"
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </HStack>
        {contactInfo && (
          <Text fontSize="sm">{contactInfo}</Text>
        )}
      </VStack>
    </Box>
  )
}
