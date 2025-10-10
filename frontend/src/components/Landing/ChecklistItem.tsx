import { HStack, Text } from "@chakra-ui/react"
import { FiCheck } from "react-icons/fi"
import { ChecklistItemProps } from "../../data/types"

export function ChecklistItem({
  text,
  iconColor = "green",
  icon
}: ChecklistItemProps) {
  return (
    <HStack>
      {icon || <FiCheck color={iconColor} />}
      <Text>{text}</Text>
    </HStack>
  )
}
