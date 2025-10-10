import { Container, Grid, VStack } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import {
  PageHeader,
  HeroImage,
  FeatureGrid,
  PricingGrid,
  InfoSection,
  ScheduleTable,
  GuidelinesList,
  ServiceGrid,
  Gallery,
  CTASection,
  SectionContainer
} from "../components/Landing"
import { studyRoomData } from "../data/study-room"

// @ts-ignore
export const Route = createFileRoute("/study-room")({
  component: StudyRoomPage,
})

function StudyRoomPage() {
  const {
    header,
    hero,
    features,
    plans,
    facilityDetails,
    schedule,
    guidelines,
    services,
    gallery,
    cta
  } = studyRoomData

  return (
    <Container maxW="7xl" py={8}>
      <VStack gap={8} align="stretch">
        <PageHeader {...header} />
        <HeroImage {...hero} />
        <FeatureGrid {...features} />
        <PricingGrid {...plans} />

        <SectionContainer title={facilityDetails.title}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            {facilityDetails.sections.map((section, index) => (
              <InfoSection key={index} {...section} />
            ))}
          </Grid>
        </SectionContainer>

        <SectionContainer title="Study Room Schedule & Rules">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <ScheduleTable {...schedule} />
            <GuidelinesList {...guidelines} />
          </Grid>
        </SectionContainer>

        <ServiceGrid {...services} />
        <Gallery {...gallery} />
        <CTASection {...cta} />
      </VStack>
    </Container>
  )
}

export default StudyRoomPage
