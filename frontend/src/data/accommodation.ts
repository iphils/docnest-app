const libraryImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Humfrey%27s_Library_Interior_6%2C_Bodleian_Library%2C_Oxford%2C_UK_-_Diliff.jpg/640px-Duke_Humfrey%27s_Library_Interior_6%2C_Bodleian_Library%2C_Oxford%2C_UK_-_Diliff.jpg"

export const accommodationData = {
  header: {
    title: "NEET PG Accommodation",
    description: "Noise-free, premium accommodation facilities designed specifically for NEET PG aspirants. Safe, comfortable, and conducive environment for your medical entrance preparation."
  },

  hero: {
    src: libraryImage,
    alt: "Accommodation Facility",
    placeholderTitle: "Hero Image Placeholder",
    placeholderSubtitle: "Accommodation facility exterior/interior view",
    height: "400px"
  },

  features: {
    title: "Why Choose Our Accommodation?",
    features: [
      {
        id: "safe-secure",
        iconColor: "blue",
        iconLabel: "Icon",
        title: "Safe & Secure",
        description: "24/7 security, CCTV surveillance, and secure access control ensuring complete safety for all residents."
      },
      {
        id: "study-friendly",
        iconColor: "green",
        iconLabel: "Icon",
        title: "Study-Friendly Environment",
        description: "Quiet zones, dedicated study areas, and noise-free environment perfect for focused preparation."
      },
      {
        id: "amenities",
        iconColor: "purple",
        iconLabel: "Icon",
        title: "All Amenities Included",
        description: "High-speed Wi-Fi, laundry, housekeeping, and nutritious meals - everything you need under one roof."
      }
    ],
    columns: { base: 1, md: 3, lg: 3 },
    cardAlign: "start" as const
  },

  rooms: {
    title: "Room Types & Pricing",
    plans: [
      {
        imageSrc: libraryImage,
        imageAlt: "Single Room",
        imagePlaceholder: "Single Room Image",
        badge: { label: "Most Popular", colorScheme: "blue" },
        title: "Single Room",
        description: "Private room with attached bathroom, study table, and wardrobe.",
        features: [
          { id: "1", text: "Private bathroom", included: true },
          { id: "2", text: "Study table & chair", included: true },
          { id: "3", text: "High-speed Wi-Fi", included: true },
          { id: "4", text: "Air conditioning", included: true }
        ],
        price: {
          amount: "25,000",
          period: "per month"
        },
        ctaLabel: "Book Now",
        highlighted: true
      },
      {
        imageSrc: libraryImage,
        imageAlt: "Shared Room",
        imagePlaceholder: "Shared Room Image",
        badge: { label: "Budget Friendly", colorScheme: "green" },
        title: "Shared Room (2 Beds)",
        description: "Comfortable twin sharing with all essential amenities.",
        features: [
          { id: "1", text: "Shared bathroom", included: true },
          { id: "2", text: "Individual study space", included: true },
          { id: "3", text: "High-speed Wi-Fi", included: true },
          { id: "4", text: "Air conditioning", included: true }
        ],
        price: {
          amount: "15,000",
          period: "per month"
        },
        ctaLabel: "Book Now"
      },
      {
        imageSrc: libraryImage,
        imageAlt: "Premium Suite",
        imagePlaceholder: "Premium Room Image",
        badge: { label: "Premium", colorScheme: "purple" },
        title: "Premium Suite",
        description: "Spacious room with premium amenities and additional comforts.",
        features: [
          { id: "1", text: "Premium bathroom", included: true },
          { id: "2", text: "Executive study desk", included: true },
          { id: "3", text: "High-speed Wi-Fi", included: true },
          { id: "4", text: "Mini refrigerator", included: true }
        ],
        price: {
          amount: "35,000",
          period: "per month"
        },
        ctaLabel: "Book Now"
      }
    ],
    columns: { base: 1, lg: 3 }
  },

  facilities: {
    title: "Additional Facilities",
    services: [
      {
        id: "wifi",
        iconColor: "blue",
        iconLabel: "Wi-Fi",
        title: "High-Speed Internet"
      },
      {
        id: "meals",
        iconColor: "orange",
        iconLabel: "Meals",
        title: "Nutritious Meals"
      },
      {
        id: "laundry",
        iconColor: "green",
        iconLabel: "Laundry",
        title: "Laundry Service"
      },
      {
        id: "security",
        iconColor: "red",
        iconLabel: "Security",
        title: "24/7 Security"
      }
    ],
    columns: { base: 2, md: 4 }
  },

  gallery: {
    title: "Photo Gallery",
    images: [
      { id: "1", src: libraryImage, alt: "Cozy Bedroom", placeholder: "Gallery Image 1" },
      { id: "2", src: libraryImage, alt: "Modern Room", placeholder: "Gallery Image 2" },
      { id: "3", src: libraryImage, alt: "Student Room", placeholder: "Gallery Image 3" },
      { id: "4", src: libraryImage, alt: "Twin Room", placeholder: "Gallery Image 4" },
      { id: "5", src: libraryImage, alt: "Luxury Suite", placeholder: "Gallery Image 5" },
      { id: "6", src: libraryImage, alt: "Study Area", placeholder: "Gallery Image 6" },
      { id: "7", src: libraryImage, alt: "Common Area", placeholder: "Gallery Image 7" },
      { id: "8", src: libraryImage, alt: "Dining Facility", placeholder: "Gallery Image 8" }
    ],
    columns: { base: 2, md: 4 },
    imageHeight: "150px"
  },

  cta: {
    title: "Ready to Book Your Accommodation?",
    description: "Secure your spot today and focus on your NEET PG preparation in a comfortable and supportive environment.",
    buttons: [
      {
        id: "book",
        label: "Book Now",
        variant: "solid" as const,
        colorScheme: "blue"
      },
      {
        id: "visit",
        label: "Schedule a Visit",
        variant: "outline" as const
      }
    ],
    contactInfo: "Call us at: +91-8281447237 | Email: pprince3700@gmail.com",
    bgColor: "blue.50"
  }
}
