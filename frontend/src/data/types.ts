import { ReactElement, ReactNode } from "react"

// Base types
export interface PageHeaderProps {
  title: string
  description: string
  maxW?: string
}

export interface HeroImageProps {
  src?: string
  alt: string
  placeholderTitle?: string
  placeholderSubtitle?: string
  height?: string | Record<string, string>
}

export interface FeatureIconProps {
  icon?: ReactElement
  color: string
  label?: string
  size?: string
  shape?: "square" | "circle"
}

export interface FeatureCardProps {
  icon?: ReactElement
  iconColor: string
  iconLabel?: string
  title: string
  description: string
  align?: "start" | "center"
}

export interface Feature {
  id: string
  iconColor: string
  iconLabel?: string
  title: string
  description: string
}

export interface FeatureGridProps {
  title: string
  features: Feature[]
  columns?: { base: number; md: number; lg: number }
  cardAlign?: "start" | "center"
}

export interface ChecklistItemProps {
  text: string | ReactNode
  checked?: boolean
  iconColor?: string
  icon?: ReactElement
}

export interface PricingFeature {
  id: string
  text: string
  included: boolean
}

export interface PricingCardProps {
  imageSrc?: string
  imageAlt: string
  imagePlaceholder?: string
  iconLabel?: string
  badge: {
    label: string
    colorScheme: string
  }
  title: string
  description: string
  features: PricingFeature[]
  price: {
    amount: string
    currency?: string
    period: string
    originalPrice?: string
    savings?: string
  }
  ctaLabel: string
  onCtaClick?: () => void
  highlighted?: boolean
}

export interface PricingGridProps {
  title: string
  plans: PricingCardProps[]
  columns?: { base: number; lg: number }
}

export interface ImageInfo {
  src?: string
  alt: string
  placeholder?: string
}

export interface InfoSectionProps {
  title: string
  titleColor?: string
  images?: ImageInfo[]
  description: string
  imageColumns?: { base: number; md: number }
}

export interface ScheduleRow {
  id: string
  timeRange: string
  badge: {
    label: string
    colorScheme: string
  }
}

export interface ScheduleTableProps {
  title: string
  schedules: ScheduleRow[]
}

export interface Guideline {
  id: string
  label: string
  description: string
}

export interface GuidelinesListProps {
  title: string
  guidelines: Guideline[]
  iconColor?: string
}

export interface Service {
  id: string
  iconColor: string
  iconLabel: string
  title: string
  description?: string
}

export interface ServiceGridProps {
  title: string
  services: Service[]
  columns?: { base: number; md: number }
}

export interface GalleryImage {
  id: string
  src?: string
  alt: string
  placeholder?: string
}

export interface GalleryProps {
  title: string
  images: GalleryImage[]
  columns?: { base: number; md: number }
  imageHeight?: string
}

export interface CTAButton {
  id: string
  label: string
  variant?: "solid" | "outline"
  colorScheme?: string
  onClick?: () => void
}

export interface CTASectionProps {
  title: string
  description: string
  buttons: CTAButton[]
  contactInfo?: string
  gradient?: string
  textColor?: string
  bgColor?: string
}

export interface SectionContainerProps {
  title?: string
  titleAlign?: "left" | "center" | "right"
  children: ReactNode
  spacing?: number
}
