import { Box, Grid, Heading } from "@chakra-ui/react"
import { FeatureGridProps } from "../../data/types"
import { FeatureCard } from "./FeatureCard"

export function FeatureGrid({
  title,
  features,
  columns = { base: 1, md: 2, lg: 4 },
  cardAlign = "center"
}: FeatureGridProps) {
  return (
    <Box>
      <Heading size="lg" mb={6} textAlign="center">
        {title}
      </Heading>
      <Grid
        templateColumns={{
          base: `repeat(${columns.base}, 1fr)`,
          md: `repeat(${columns.md}, 1fr)`,
          lg: `repeat(${columns.lg}, 1fr)`
        }}
        gap={6}
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            iconColor={feature.iconColor}
            iconLabel={feature.iconLabel}
            title={feature.title}
            description={feature.description}
            align={cardAlign}
          />
        ))}
      </Grid>
    </Box>
  )
}
