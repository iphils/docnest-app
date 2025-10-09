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
export const Route = createFileRoute("/accommodation")({
  component: AccommodationPage,
})

function AccommodationPage() {
  return (
    <Container maxW="7xl" py={8}>
      <VStack gap={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            NEET PG Accommodation
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            noise-freeremium accommodation facilities designed specifically for NEET PG aspirants.
            Safe, comfortable, and conducive environment for your medical entrance preparation.
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
            <Text fontSize="xl" color="gray.500">Hero Image Placeholder</Text>
            <Text fontSize="sm" color="gray.400">Accommodation facility exterior/interior view</Text>
          </VStack>
        </Box>

        {/* Features Section */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Why Choose Our Accommodation?
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
              <VStack align="start" gap={4}>
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
                  <Text fontSize="xs" color="blue.400">Icon</Text>
                </Box>
                <Heading size="md">Safe & Secure</Heading>
                <Text color="gray.600">
                  24/7 security, CCTV surveillance, and secure access control
                  ensuring complete safety for all residents.
                </Text>
              </VStack>
            </Box>

            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
              <VStack align="start" gap={4}>
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
                  <Text fontSize="xs" color="green.400">Icon</Text>
                </Box>
                <Heading size="md">Study-Friendly Environment</Heading>
                <Text color="gray.600">
                  Quiet zones, dedicated study areas, and noise-free environment
                  perfect for focused preparation.
                </Text>
              </VStack>
            </Box>

            <Box bg="white" p={6} rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
              <VStack align="start" gap={4}>
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
                  <Text fontSize="xs" color="purple.400">Icon</Text>
                </Box>
                <Heading size="md">All Amenities Included</Heading>
                <Text color="gray.600">
                  High-speed Wi-Fi, laundry, housekeeping, and nutritious meals
                  - everything you need under one roof.
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Box>

        {/* Room Types & Pricing */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Room Types & Pricing
          </Heading>
          <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={6}>
            {/* Single Room */}
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
                  <Text color="gray.500">Single Room Image</Text>
                </Box>
                <Badge colorScheme="blue" alignSelf="start">Most Popular</Badge>
                <Heading size="md">Single Room</Heading>
                <Text color="gray.600">
                  Private room with attached bathroom, study table, and wardrobe.
                </Text>
                <VStack align="start" gap={2}>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Private bathroom</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Study table & chair</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>High-speed Wi-Fi</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Air conditioning</Text>
                  </HStack>
                </VStack>
                <Box borderTop="1px solid" borderColor="gray.200" my={4} />
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                    ₹25,000
                  </Text>
                  <Text fontSize="sm" color="gray.500">per month</Text>
                </VStack>
                <Button colorScheme="blue" size="lg">
                  Book Now
                </Button>
              </VStack>
            </Box>

            {/* Shared Room */}
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
                  <Text color="gray.500">Shared Room Image</Text>
                </Box>
                <Badge colorScheme="green" alignSelf="start">Budget Friendly</Badge>
                <Heading size="md">Shared Room (2 Beds)</Heading>
                <Text color="gray.600">
                  Comfortable twin sharing with all essential amenities.
                </Text>
                <VStack align="start" gap={2}>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Shared bathroom</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Individual study space</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>High-speed Wi-Fi</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Air conditioning</Text>
                  </HStack>
                </VStack>
                <Box borderTop="1px solid" borderColor="gray.200" my={4} />
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color="green.600">
                    ₹15,000
                  </Text>
                  <Text fontSize="sm" color="gray.500">per month</Text>
                </VStack>
                <Button colorScheme="green" size="lg">
                  Book Now
                </Button>
              </VStack>
            </Box>

            {/* Premium Room */}
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
                  <Text color="gray.500">Premium Room Image</Text>
                </Box>
                <Badge colorScheme="purple" alignSelf="start">Premium</Badge>
                <Heading size="md">Premium Suite</Heading>
                <Text color="gray.600">
                  Spacious room with premium amenities and additional comforts.
                </Text>
                <VStack align="start" gap={2}>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Premium bathroom</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Executive study desk</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>High-speed Wi-Fi</Text>
                  </HStack>
                  <HStack>
                    <FiCheck color="green" />
                    <Text>Mini refrigerator</Text>
                  </HStack>
                </VStack>
                <Box borderTop="1px solid" borderColor="gray.200" my={4} />
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color="purple.600">
                    ₹35,000
                  </Text>
                  <Text fontSize="sm" color="gray.500">per month</Text>
                </VStack>
                <Button colorScheme="purple" size="lg">
                  Book Now
                </Button>
              </VStack>
            </Box>
          </Grid>
        </Box>

        {/* Additional Facilities */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Additional Facilities
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
                <Text fontSize="xs" color="blue.400">Wi-Fi</Text>
              </Box>
              <Text fontWeight="semibold">High-Speed Internet</Text>
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
                <Text fontSize="xs" color="orange.400">Meals</Text>
              </Box>
              <Text fontWeight="semibold">Nutritious Meals</Text>
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
                <Text fontSize="xs" color="green.400">Laundry</Text>
              </Box>
              <Text fontWeight="semibold">Laundry Service</Text>
            </VStack>

            <VStack>
              <Box
                w="80px"
                h="80px"
                bg="red.50"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px dashed red.200"
              >
                <Text fontSize="xs" color="red.400">Security</Text>
              </Box>
              <Text fontWeight="semibold">24/7 Security</Text>
            </VStack>
          </Grid>
        </Box>

        {/* Gallery Placeholder */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">
            Photo Gallery
          </Heading>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={4}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Box
                key={i}
                h="150px"
                bg="gray.100"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px dashed gray.300"
              >
                <Text fontSize="sm" color="gray.500">Gallery Image {i}</Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Contact/Booking Section */}
        <Box bg="blue.50" p={6} rounded="lg">
          <VStack gap={4} textAlign="center">
            <Heading size="lg">Ready to Book Your Accommodation?</Heading>
            <Text color="gray.600" maxW="2xl">
              Secure your spot today and focus on your NEET PG preparation in a
              comfortable and supportive environment.
            </Text>
            <HStack gap={4}>
              <Button colorScheme="blue" size="lg">
                Book Now
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Visit
              </Button>
            </HStack>
            <Text fontSize="sm" color="gray.500">
              Call us at: +91-8281447237 | Email: pprince3700@gmail.com
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default AccommodationPage
