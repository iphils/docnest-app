import {
  Box,
  Badge,
  Heading,
  Image,
  Text,
  Button,
  VStack,
  HStack
} from "@chakra-ui/react"
import { PricingCardProps } from "../../data/types"
import { ChecklistItem } from "./ChecklistItem"

export function PricingCard({
  imageSrc,
  imageAlt,
  imagePlaceholder,
  badge,
  title,
  description,
  features,
  price,
  ctaLabel,
  onCtaClick,
  highlighted = false
}: PricingCardProps) {
  return (
    <Box
      bg="white"
      p={6}
      rounded="lg"
      shadow="sm"
      border={highlighted ? "2px solid" : "1px solid"}
      borderColor={highlighted ? `${badge.colorScheme}.200` : "gray.200"}
    >
      <VStack gap={4} align="stretch">
        {/* Image */}
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            h="200px"
            w="full"
            objectFit="cover"
            borderRadius="md"
          />
        ) : (
          <Box
            h="200px"
            bg="gray.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px dashed"
            borderColor="gray.300"
          >
            <Text color="gray.500">{imagePlaceholder || imageAlt}</Text>
          </Box>
        )}

        {/* Badge */}
        <Badge colorScheme={badge.colorScheme} alignSelf="start">
          {badge.label}
        </Badge>

        {/* Title & Description */}
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>

        {/* Features */}
        <VStack align="start" gap={2}>
          {features.map((feature) => (
            <ChecklistItem
              key={feature.id}
              text={feature.text}
            />
          ))}
        </VStack>

        {/* Divider */}
        <Box borderTop="1px solid" borderColor="gray.200" my={4} />

        {/* Pricing */}
        <VStack>
          {price.originalPrice && (
            <HStack>
              <Text
                fontSize="lg"
                textDecoration="line-through"
                color="gray.400"
              >
                {price.currency || "₹"}{price.originalPrice}
              </Text>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={`${badge.colorScheme}.600`}
              >
                {price.currency || "₹"}{price.amount}
              </Text>
            </HStack>
          )}
          {!price.originalPrice && (
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color={`${badge.colorScheme}.600`}
            >
              {price.currency || "₹"}{price.amount}
            </Text>
          )}
          <Text fontSize="sm" color="gray.500">
            {price.period}
            {price.savings && ` (Save ${price.currency || "₹"}${price.savings})`}
          </Text>
        </VStack>

        {/* CTA Button */}
        <Button
          colorScheme={badge.colorScheme}
          size="lg"
          onClick={onCtaClick}
        >
          {ctaLabel}
        </Button>
      </VStack>
    </Box>
  )
}
