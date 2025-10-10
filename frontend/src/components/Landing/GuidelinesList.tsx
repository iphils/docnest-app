import { Box, Heading, VStack } from "@chakra-ui/react"
import { GuidelinesListProps } from "../../data/types"
import { ChecklistItem } from "./ChecklistItem"

export function GuidelinesList({
  title,
  guidelines,
  iconColor = "blue"
}: GuidelinesListProps) {
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
      <VStack gap={3} align="start">
        {guidelines.map((guideline) => (
          <ChecklistItem
            key={guideline.id}
            text={
              <>
                <span style={{ fontWeight: "600" }}>{guideline.label}:</span>{" "}
                {guideline.description}
              </>
            }
            iconColor={iconColor}
          />
        ))}
      </VStack>
    </Box>
  )
}
