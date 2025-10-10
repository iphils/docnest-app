import { Box, Badge, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { ScheduleTableProps } from "../../data/types"

export function ScheduleTable({ title, schedules }: ScheduleTableProps) {
  return (
    <Box
      bg="white"
      p={6}
      rounded="lg"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
    >
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      <VStack align="stretch" gap={0}>
        {schedules.map((schedule, index) => (
          <Box
            key={schedule.id}
            borderBottom={
              index < schedules.length - 1 ? "1px solid" : undefined
            }
            borderColor="gray.200"
            py={2}
          >
            <HStack justify="space-between">
              <Text>{schedule.timeRange}</Text>
              <Badge colorScheme={schedule.badge.colorScheme}>
                {schedule.badge.label}
              </Badge>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
