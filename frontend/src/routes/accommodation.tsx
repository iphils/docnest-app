import { Container, VStack } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import {
  PageHeader,
  HeroImage,
  FeatureGrid,
  PricingGrid,
  ServiceGrid,
  Gallery,
  CTASection
} from "../components/Landing"
import { accommodationData } from "../data/accommodation"

// @ts-ignore
export const Route = createFileRoute("/accommodation")({
  component: AccommodationPage,
})

function AccommodationPage() {
  const { header, hero, features, rooms, facilities, gallery, cta } = accommodationData

  return (
    <Container maxW="7xl" py={8}>
      <VStack gap={8} align="stretch">
        <PageHeader {...header} />
        <HeroImage {...hero} />
        <FeatureGrid {...features} />
        <PricingGrid {...rooms} />
        <ServiceGrid {...facilities} />
        <Gallery {...gallery} />
        <CTASection {...cta} />
      </VStack>
    </Container>
  )
}

export default AccommodationPage
