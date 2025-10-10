import { Box, Text } from "@chakra-ui/react"
import { FeatureIconProps } from "../../data/types"

export function FeatureIcon({
  icon,
  color,
  label,
  size = "60px",
  shape = "square"
}: FeatureIconProps) {
  return (
    <Box
      w={size}
      h={size}
      bg={`${color}.50`}
      borderRadius={shape === "circle" ? "full" : "lg"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="2px dashed"
      borderColor={`${color}.200`}
    >
      {icon || (
        <Text fontSize="xs" color={`${color}.400`}>
          {label || "Icon"}
        </Text>
      )}
    </Box>
  )
}
