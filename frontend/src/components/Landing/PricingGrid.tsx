import { Box, Grid, Heading } from "@chakra-ui/react"
import { PricingGridProps } from "../../data/types"
import { PricingCard } from "./PricingCard"

export function PricingGrid({
  title,
  plans,
  columns = { base: 1, lg: 3 }
}: PricingGridProps) {
  return (
    <Box>
      <Heading size="lg" mb={6} textAlign="center">
        {title}
      </Heading>
      <Grid
        templateColumns={{
          base: `repeat(${columns.base}, 1fr)`,
          lg: `repeat(${columns.lg}, 1fr)`
        }}
        gap={6}
      >
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </Grid>
    </Box>
  )
}
