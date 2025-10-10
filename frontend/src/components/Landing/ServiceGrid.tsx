import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react"
import { ServiceGridProps } from "../../data/types"
import { FeatureIcon } from "./FeatureIcon"

export function ServiceGrid({
  title,
  services,
  columns = { base: 2, md: 4 }
}: ServiceGridProps) {
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
        gap={6}
      >
        {services.map((service) => (
          <VStack key={service.id}>
            <FeatureIcon
              color={service.iconColor}
              label={service.iconLabel}
              size="80px"
              shape="circle"
            />
            <Text fontWeight="semibold">{service.title}</Text>
            {service.description && (
              <Text fontSize="sm" color="gray.600" textAlign="center">
                {service.description}
              </Text>
            )}
          </VStack>
        ))}
      </Grid>
    </Box>
  )
}
