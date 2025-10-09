import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Badge,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { FiCheck } from "react-icons/fi"

// @ts-ignore
export const Route = createFileRoute("/study-room")({
  component: StudyRoomPage,
})

function StudyRoomPage() {
  return (
    <Container maxW="7xl" py={8}>
      <VStack gap={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            NEET PG Study Room
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            State-of-the-art study facilities designed for serious NEET PG aspirants.
            Equipped with modern amenities and a focused learning environment.
          </Text>
        </Box>

        {/* Hero Image Placeholder */}
        <Box
          h="400px"
          bg="gray.100"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="2px dashed gray.300"
        >
          <VStack>
            <Text fontSize="xl" color="gray.500">Study Room Hero Image</Text>
            <Text fontSize="sm" color="gray.400">Modern study room with students preparing</Text>
          </VStack>
        </Box>

        {/* Key Features */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Why Our Study Room is Perfect for NEET PG Prep
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200" textAlign="center">
              <VStack gap={3}>
                <Box
                  w="60px"
                  h="60px"
                  bg="blue.50"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed blue.200"
                >
                  <Text fontSize="xs" color="blue.400">Quiet</Text>
                </Box>
                <Heading size="sm">Silent Environment</Heading>
                <Text fontSize="sm" color="gray.600">
                  Strict no-talking zones for maximum concentration
                </Text>
              </VStack>
            </Box>

            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200" textAlign="center">
              <VStack gap={3}>
                <Box
                  w="60px"
                  h="60px"
                  bg="green.50"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed green.200"
                >
                  <Text fontSize="xs" color="green.400">24/7</Text>
                </Box>
                <Heading size="sm">24/7 Access</Heading>
                <Text fontSize="sm" color="gray.600">
                  Study anytime with round-the-clock facility access
                </Text>
              </VStack>
            </Box>

            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200" textAlign="center">
              <VStack gap={3}>
                <Box
                  w="60px"
                  h="60px"
                  bg="purple.50"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed purple.200"
                >
                  <Text fontSize="xs" color="purple.400">AC</Text>
                </Box>
                <Heading size="sm">Climate Controlled</Heading>
                <Text fontSize="sm" color="gray.600">
                  Perfect temperature maintained year-round
                </Text>
              </VStack>
            </Box>

            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200" textAlign="center">
              <VStack gap={3}>
                <Box
                  w="60px"
                  h="60px"
                  bg="orange.50"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed orange.200"
                >
                  <Text fontSize="xs" color="orange.400">Premium</Text>
                </Box>
                <Heading size="sm">Premium Seating</Heading>
                <Text fontSize="sm" color="gray.600">
                  Ergonomic chairs and spacious desks for comfort
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Box>

        {/* Study Room Plans */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Study Room Plans
          </Heading>
          <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={6}>
            {/* Daily Pass */}
            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
              <VStack gap={4} align="stretch">
                <Box
                  h="200px"
                  bg="gray.100"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed gray.300"
                >
                  <Text color="gray.500">Daily Pass Image</Text>
                </Box>
                <Badge colorScheme="yellow" alignSelf="start">Flexible</Badge>
                <Heading size="md">Daily Pass</Heading>
                <Text color="gray.600">
                  Perfect for occasional study sessions and exam preparation.
                </Text>
                <VStack align="start" gap={2}>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>8 hours access</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Free Wi-Fi</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Coffee/Tea included</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Power outlets at desk</Text>
                  </HStack>
                </VStack>
                <Box borderTop="1px solid" borderColor="gray.200" my={4} />
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color="yellow.600">
                    ₹500
                  </Text>
                  <Text fontSize="sm" color="gray.500">per day</Text>
                </VStack>
                <Button colorScheme="yellow" size="lg">
                  Get Daily Pass
                </Button>
              </VStack>
            </Box>

            {/* Monthly Plan */}
            <Box bg="white" p={6} rounded="lg" shadow="sm" border="2px solid" borderColor="blue.200">
              <VStack gap={4} align="stretch">
                <Box
                  h="200px"
                  bg="gray.100"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed gray.300"
                >
                  <Text color="gray.500">Monthly Plan Image</Text>
                </Box>
                <Badge colorScheme="blue" alignSelf="start">Most Popular</Badge>
                <Heading size="md">Monthly Unlimited</Heading>
                <Text color="gray.600">
                  Unlimited access for serious aspirants preparing for NEET PG.
                </Text>
                <VStack align="start" gap={2}>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>24/7 unlimited access</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Reserved seat option</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Free printing (100 pages)</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Locker facility</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Free refreshments</Text>
                  </HStack>
                </VStack>
                <Box borderTop="1px solid" borderColor="gray.200" my={4} />
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                    ₹8,000
                  </Text>
                  <Text fontSize="sm" color="gray.500">per month</Text>
                </VStack>
                <Button colorScheme="blue" size="lg">
                  Subscribe Monthly
                </Button>
              </VStack>
            </Box>

            {/* Annual Plan */}
            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
              <VStack gap={4} align="stretch">
                <Box
                  h="200px"
                  bg="gray.100"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed gray.300"
                >
                  <Text color="gray.500">Annual Plan Image</Text>
                </Box>
                <Badge colorScheme="green" alignSelf="start">Best Value</Badge>
                <Heading size="md">Annual Premium</Heading>
                <Text color="gray.600">
                  Complete preparation package with maximum savings and benefits.
                </Text>
                <VStack align="start" gap={2}>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>All monthly benefits</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Personal storage cabinet</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Free printing (1500 pages)</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Mock test access</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Priority booking</Text>
                  </HStack>
                </VStack>
                <Box borderTop="1px solid" borderColor="gray.200" my={4} />
                <VStack>
                  <HStack>
                    <Text fontSize="lg" textDecoration="line-through" color="gray.400">
                      ₹96,000
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold" color="green.600">
                      ₹75,000
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.500">per year (Save ₹21,000)</Text>
                </VStack>
                <Button colorScheme="green" size="lg">
                  Subscribe Annual
                </Button>
              </VStack>
            </Box>
          </Grid>
        </Box>

        {/* Facility Details */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Facility Details
          </Heading>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box>
              <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
                <VStack align="stretch" gap={4}>
                  <Heading size="md" color="blue.600">Study Environment</Heading>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <Box
                      h="120px"
                      bg="gray.100"
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="2px dashed gray.300"
                    >
                      <Text fontSize="sm" color="gray.500">Individual Desks</Text>
                    </Box>
                    <Box
                      h="120px"
                      bg="gray.100"
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="2px dashed gray.300"
                    >
                      <Text fontSize="sm" color="gray.500">Reading Area</Text>
                    </Box>
                  </Grid>
                  <Text color="gray.600">
                    Spacious individual study desks with ample lighting, power outlets,
                    and storage space. Separate zones for group discussions and silent study.
                  </Text>
                </VStack>
              </Box>
            </Box>

            <Box>
              <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
                <VStack align="stretch" gap={4}>
                  <Heading size="md" color="green.600">Technical Facilities</Heading>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <Box
                      h="120px"
                      bg="gray.100"
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="2px dashed gray.300"
                    >
                      <Text fontSize="sm" color="gray.500">Digital Library</Text>
                    </Box>
                    <Box
                      h="120px"
                      bg="gray.100"
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="2px dashed gray.300"
                    >
                      <Text fontSize="sm" color="gray.500">Computer Lab</Text>
                    </Box>
                  </Grid>
                  <Text color="gray.600">
                    High-speed Wi-Fi, digital library access, computer terminals for
                    online tests, and printing facilities available 24/7.
                  </Text>
                </VStack>
              </Box>
            </Box>
          </Grid>
        </Box>

        {/* Time Table */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Study Room Schedule & Rules
          </Heading>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
              <Heading size="md" mb={4}>Operating Hours</Heading>
              <Box>
                <Box borderBottom="1px solid" borderColor="gray.200" py={2}>
                  <HStack justify="space-between">
                    <Text>6:00 AM - 12:00 PM</Text>
                    <Badge colorScheme="green">High Availability</Badge>
                  </HStack>
                </Box>
                <Box borderBottom="1px solid" borderColor="gray.200" py={2}>
                  <HStack justify="space-between">
                    <Text>12:00 PM - 6:00 PM</Text>
                    <Badge colorScheme="yellow">Moderate</Badge>
                  </HStack>
                </Box>
                <Box borderBottom="1px solid" borderColor="gray.200" py={2}>
                  <HStack justify="space-between">
                    <Text>6:00 PM - 12:00 AM</Text>
                    <Badge colorScheme="red">Peak Hours</Badge>
                  </HStack>
                </Box>
                <Box py={2}>
                  <HStack justify="space-between">
                    <Text>12:00 AM - 6:00 AM</Text>
                    <Badge colorScheme="green">Available</Badge>
                  </HStack>
                </Box>
              </Box>
            </Box>

            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
              <Heading size="md" mb={4}>Study Room Guidelines</Heading>
              <VStack gap={3} align="start">
                <HStack>
                  <FiCheck color="blue" />
                  <Text><Text as="span" fontWeight="semibold">Silence Zone:</Text> No talking in designated areas</Text>
                </HStack>
                <HStack>
                  <FiCheck color="blue" />
                  <Text><Text as="span" fontWeight="semibold">Mobile Policy:</Text> Phones on silent mode only</Text>
                </HStack>
                <HStack>
                  <FiCheck color="blue" />
                  <Text><Text as="span" fontWeight="semibold">Food Policy:</Text> Only water bottles allowed</Text>
                </HStack>
                <HStack>
                  <FiCheck color="blue" />
                  <Text><Text as="span" fontWeight="semibold">Booking:</Text> Reserve seats up to 24 hours in advance</Text>
                </HStack>
                <HStack>
                  <FiCheck color="blue" />
                  <Text><Text as="span" fontWeight="semibold">Break Area:</Text> Dedicated space for refreshments</Text>
                </HStack>
              </VStack>
            </Box>
          </Grid>
        </Box>

        {/* Additional Services */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Additional Services
          </Heading>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={6}>
            <VStack>
              <Box
                w="80px"
                h="80px"
                bg="blue.50"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px dashed blue.200"
              >
                <Text fontSize="xs" color="blue.400">Library</Text>
              </Box>
              <Text fontWeight="semibold">Reference Library</Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Extensive collection of NEET PG books and materials
              </Text>
            </VStack>

            <VStack>
              <Box
                w="80px"
                h="80px"
                bg="green.50"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px dashed green.200"
              >
                <Text fontSize="xs" color="green.400">Tests</Text>
              </Box>
              <Text fontWeight="semibold">Mock Tests</Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Regular practice tests and performance analysis
              </Text>
            </VStack>

            <VStack>
              <Box
                w="80px"
                h="80px"
                bg="orange.50"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px dashed orange.200"
              >
                <Text fontSize="xs" color="orange.400">Support</Text>
              </Box>
              <Text fontWeight="semibold">Study Support</Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Doubt clearing sessions and study guidance
              </Text>
            </VStack>

            <VStack>
              <Box
                w="80px"
                h="80px"
                bg="purple.50"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px dashed purple.200"
              >
                <Text fontSize="xs" color="purple.400">Events</Text>
              </Box>
              <Text fontWeight="semibold">Study Groups</Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Peer learning and group study sessions
              </Text>
            </VStack>
          </Grid>
        </Box>

        {/* Gallery */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Study Room Gallery
          </Heading>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                key={i}
                h="200px"
                bg="gray.100"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px dashed gray.300"
              >
                <Text fontSize="sm" color="gray.500">Study Room Photo {i}</Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box bg="gradient" bgGradient="linear(to-r, blue.400, purple.500)" p={6} rounded="lg">
          <VStack gap={4} textAlign="center" color="white">
            <Heading size="lg">Start Your NEET PG Journey Today!</Heading>
            <Text maxW="2xl">
              Join hundreds of successful NEET PG aspirants who have achieved their
              dreams by studying in our world-class facilities.
            </Text>
            <HStack gap={4}>
              <Button colorScheme="whiteAlpha" size="lg">
                Book a Visit
              </Button>
              <Button variant="outline" colorScheme="whiteAlpha" size="lg">
                Call Now
              </Button>
            </HStack>
            <Text fontSize="sm">
              📞 +91-XXXXX-XXXXX | 📧 studyroom@neetpg.com
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default StudyRoomPage
