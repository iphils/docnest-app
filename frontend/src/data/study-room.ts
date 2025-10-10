const libraryImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Humfrey%27s_Library_Interior_6%2C_Bodleian_Library%2C_Oxford%2C_UK_-_Diliff.jpg/640px-Duke_Humfrey%27s_Library_Interior_6%2C_Bodleian_Library%2C_Oxford%2C_UK_-_Diliff.jpg"

export const studyRoomData = {
  header: {
    title: "NEET PG Study Room",
    description: "State-of-the-art study facilities designed for serious NEET PG aspirants. Equipped with modern amenities and a focused learning environment."
  },

  hero: {
    src: libraryImage,
    alt: "Study Room Facility",
    placeholderTitle: "Study Room Hero Image",
    placeholderSubtitle: "Modern study room with students preparing",
    height: "400px"
  },

  features: {
    title: "Why Our Study Room is Perfect for NEET PG Prep",
    features: [
      {
        id: "silent",
        iconColor: "blue",
        iconLabel: "Quiet",
        title: "Silent Environment",
        description: "Strict no-talking zones for maximum concentration"
      },
      {
        id: "access",
        iconColor: "green",
        iconLabel: "24/7",
        title: "24/7 Access",
        description: "Study anytime with round-the-clock facility access"
      },
      {
        id: "climate",
        iconColor: "purple",
        iconLabel: "AC",
        title: "Climate Controlled",
        description: "Perfect temperature maintained year-round"
      },
      {
        id: "seating",
        iconColor: "orange",
        iconLabel: "Premium",
        title: "Premium Seating",
        description: "Ergonomic chairs and spacious desks for comfort"
      }
    ],
    columns: { base: 1, md: 2, lg: 4 },
    cardAlign: "center" as const
  },

  plans: {
    title: "Study Room Plans",
    plans: [
      {
        imageSrc: libraryImage,
        imageAlt: "Daily Pass",
        imagePlaceholder: "Daily Pass Image",
        badge: { label: "Flexible", colorScheme: "yellow" },
        title: "Daily Pass",
        description: "Perfect for occasional study sessions and exam preparation.",
        features: [
          { id: "1", text: "8 hours access", included: true },
          { id: "2", text: "Free Wi-Fi", included: true },
          { id: "3", text: "Coffee/Tea included", included: true },
          { id: "4", text: "Power outlets at desk", included: true }
        ],
        price: {
          amount: "500",
          period: "per day"
        },
        ctaLabel: "Get Daily Pass"
      },
      {
        imageSrc: libraryImage,
        imageAlt: "Monthly Plan",
        imagePlaceholder: "Monthly Plan Image",
        badge: { label: "Most Popular", colorScheme: "blue" },
        title: "Monthly Unlimited",
        description: "Unlimited access for serious aspirants preparing for NEET PG.",
        features: [
          { id: "1", text: "24/7 unlimited access", included: true },
          { id: "2", text: "Reserved seat option", included: true },
          { id: "3", text: "Free printing (100 pages)", included: true },
          { id: "4", text: "Locker facility", included: true },
          { id: "5", text: "Free refreshments", included: true }
        ],
        price: {
          amount: "8,000",
          period: "per month"
        },
        ctaLabel: "Subscribe Monthly",
        highlighted: true
      },
      {
        imageSrc: libraryImage,
        imageAlt: "Annual Plan",
        imagePlaceholder: "Annual Plan Image",
        badge: { label: "Best Value", colorScheme: "green" },
        title: "Annual Premium",
        description: "Complete preparation package with maximum savings and benefits.",
        features: [
          { id: "1", text: "All monthly benefits", included: true },
          { id: "2", text: "Personal storage cabinet", included: true },
          { id: "3", text: "Free printing (1500 pages)", included: true },
          { id: "4", text: "Mock test access", included: true },
          { id: "5", text: "Priority booking", included: true }
        ],
        price: {
          amount: "75,000",
          period: "per year (Save ₹21,000)",
          originalPrice: "96,000",
          savings: "21,000"
        },
        ctaLabel: "Subscribe Annual"
      }
    ],
    columns: { base: 1, lg: 3 }
  },

  facilityDetails: {
    title: "Facility Details",
    sections: [
      {
        title: "Study Environment",
        titleColor: "blue.600",
        images: [
          { src: libraryImage, alt: "Individual Desks", placeholder: "Individual Desks" },
          { src: libraryImage, alt: "Reading Area", placeholder: "Reading Area" }
        ],
        description: "Spacious individual study desks with ample lighting, power outlets, and storage space. Separate zones for group discussions and silent study."
      },
      {
        title: "Technical Facilities",
        titleColor: "green.600",
        images: [
          { src: libraryImage, alt: "Digital Library", placeholder: "Digital Library" },
          { src: libraryImage, alt: "Computer Lab", placeholder: "Computer Lab" }
        ],
        description: "High-speed Wi-Fi, digital library access, computer terminals for online tests, and printing facilities available 24/7."
      }
    ]
  },

  schedule: {
    title: "Operating Hours",
    schedules: [
      {
        id: "1",
        timeRange: "6:00 AM - 12:00 PM",
        badge: { label: "High Availability", colorScheme: "green" }
      },
      {
        id: "2",
        timeRange: "12:00 PM - 6:00 PM",
        badge: { label: "Moderate", colorScheme: "yellow" }
      },
      {
        id: "3",
        timeRange: "6:00 PM - 12:00 AM",
        badge: { label: "Peak Hours", colorScheme: "red" }
      },
      {
        id: "4",
        timeRange: "12:00 AM - 6:00 AM",
        badge: { label: "Available", colorScheme: "green" }
      }
    ]
  },

  guidelines: {
    title: "Study Room Guidelines",
    guidelines: [
      {
        id: "1",
        label: "Silence Zone",
        description: "No talking in designated areas"
      },
      {
        id: "2",
        label: "Mobile Policy",
        description: "Phones on silent mode only"
      },
      {
        id: "3",
        label: "Food Policy",
        description: "Only water bottles allowed"
      },
      {
        id: "4",
        label: "Booking",
        description: "Reserve seats up to 24 hours in advance"
      },
      {
        id: "5",
        label: "Break Area",
        description: "Dedicated space for refreshments"
      }
    ],
    iconColor: "blue"
  },

  services: {
    title: "Additional Services",
    services: [
      {
        id: "library",
        iconColor: "blue",
        iconLabel: "Library",
        title: "Reference Library",
        description: "Extensive collection of NEET PG books and materials"
      },
      {
        id: "tests",
        iconColor: "green",
        iconLabel: "Tests",
        title: "Mock Tests",
        description: "Regular practice tests and performance analysis"
      },
      {
        id: "support",
        iconColor: "orange",
        iconLabel: "Support",
        title: "Study Support",
        description: "Doubt clearing sessions and study guidance"
      },
      {
        id: "groups",
        iconColor: "purple",
        iconLabel: "Events",
        title: "Study Groups",
        description: "Peer learning and group study sessions"
      }
    ],
    columns: { base: 2, md: 4 }
  },

  gallery: {
    title: "Study Room Gallery",
    images: [
      { id: "1", src: libraryImage, alt: "Modern Library", placeholder: "Study Room Photo 1" },
      { id: "2", src: libraryImage, alt: "Reading Room", placeholder: "Study Room Photo 2" },
      { id: "3", src: libraryImage, alt: "Study Hall", placeholder: "Study Room Photo 3" },
      { id: "4", src: libraryImage, alt: "Library Interior", placeholder: "Study Room Photo 4" },
      { id: "5", src: libraryImage, alt: "Study Campus", placeholder: "Study Room Photo 5" },
      { id: "6", src: libraryImage, alt: "Classic Library", placeholder: "Study Room Photo 6" }
    ],
    columns: { base: 2, md: 3 },
    imageHeight: "200px"
  },

  cta: {
    title: "Start Your NEET PG Journey Today!",
    description: "Join hundreds of successful NEET PG aspirants who have achieved their dreams by studying in our world-class facilities.",
    buttons: [
      {
        id: "visit",
        label: "Book a Visit",
        variant: "solid" as const,
        colorScheme: "whiteAlpha"
      },
      {
        id: "call",
        label: "Call Now",
        variant: "outline" as const,
        colorScheme: "whiteAlpha"
      }
    ],
    contactInfo: "📞 +91-XXXXX-XXXXX | 📧 studyroom@neetpg.com",
    gradient: "linear(to-r, blue.400, purple.500)",
    textColor: "white"
  }
}
