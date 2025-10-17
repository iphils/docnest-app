export const studyRoomData = {
  header: {
    title: "NEET PG Study Room",
    description: "State-of-the-art study facilities designed for serious NEET PG aspirants. Equipped with modern amenities and a focused learning environment."
  },

  hero: {
    src: "/assets/images/study-room/view1.jpeg",
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
        iconLabel: "7AM-9PM",
        title: "7 AM - 9 PM Access",
        description: "Study during extended hours designed for optimal productivity"
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
        imageAlt: "Daily Pass",
        iconLabel: "Daily",
        badge: { label: "Flexible", colorScheme: "orange" },
        title: "Daily Pass",
        description: "Perfect for occasional study sessions and exam preparation.",
        features: [
          { id: "1", text: "8 hours access", included: true },
          { id: "2", text: "Free Wi-Fi", included: true },
          { id: "3", text: "Power outlets at desk", included: true },
          { id: "4", text: "Climate controlled", included: true }
        ],
        price: {
          amount: "350",
          period: "per day"
        },
        ctaLabel: "Get Daily Pass"
      },
      {
        imageAlt: "Monthly Plan",
        iconLabel: "Monthly",
        badge: { label: "Most Popular", colorScheme: "teal" },
        title: "Monthly Unlimited",
        description: "Unlimited access for serious aspirants preparing for NEET PG.",
        features: [
          { id: "1", text: "7 AM - 9 PM unlimited access", included: true },
          { id: "2", text: "Reserved seat option", included: true },
          { id: "3", text: "Locker facility", included: true },
          { id: "4", text: "Free Wi-Fi", included: true },
          { id: "5", text: "Power outlets at desk", included: true }
        ],
        price: {
          amount: "1,500",
          period: "per month"
        },
        ctaLabel: "Subscribe Monthly",
        highlighted: true
      },
      {
        imageAlt: "3 Months Plan",
        iconLabel: "3 Months",
        badge: { label: "Best Value", colorScheme: "purple" },
        title: "3 Months Plan",
        description: "Extended access plan with savings for dedicated NEET PG preparation.",
        features: [
          { id: "1", text: "7 AM - 9 PM unlimited access", included: true },
          { id: "2", text: "Reserved seat option", included: true },
          { id: "3", text: "Locker facility", included: true },
          { id: "4", text: "Personal storage cabinet", included: true },
          { id: "5", text: "Priority booking", included: true }
        ],
        price: {
          amount: "3,600",
          period: "for 3 months (Save ₹900)",
          originalPrice: "4,500",
          savings: "900"
        },
        ctaLabel: "Subscribe 3 Months"
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
          { src: "/assets/images/study-room/view1.jpeg", alt: "Individual Desks", placeholder: "Individual Desks" },
          { src: "/assets/images/study-room/view2.jpeg", alt: "Reading Area", placeholder: "Reading Area" }
        ],
        description: "Spacious individual study desks with ample lighting, power outlets, and storage space. Separate zones for group discussions and silent study."
      },
      {
        title: "Technical Facilities",
        titleColor: "green.600",
        images: [
          { src: "/assets/images/study-room/view3.jpeg", alt: "Digital Library", placeholder: "Digital Library" },
          { src: "/assets/images/study-room/view4.jpeg", alt: "Computer Lab", placeholder: "Computer Lab" }
        ],
        description: "High-speed Wi-Fi, digital library access, and computer terminals for online tests available 24/7."
      }
    ]
  },

  schedule: {
    title: "Operating Hours",
    schedules: [
      {
        id: "1",
        timeRange: "7:00 AM - 9:00 PM",
        badge: { label: "Open Daily", colorScheme: "green" }
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
    columns: { base: 2, md: 3 }
  },

  gallery: {
    title: "Study Room Gallery",
    images: [
      { id: "1", src: "/assets/images/study-room/docnest-studyhall-arrangment.png", alt: "Seating Arrangement", placeholder: "Seating Arrangement" },
      { id: "2", src: "/assets/images/study-room/view1.jpeg", alt: "Study Room View 1", placeholder: "Study Room Photo 1" },
      { id: "3", src: "/assets/images/study-room/view2.jpeg", alt: "Study Room View 2", placeholder: "Study Room Photo 2" },
      { id: "4", src: "/assets/images/study-room/view3.jpeg", alt: "Study Room View 3", placeholder: "Study Room Photo 3" },
      { id: "5", src: "/assets/images/study-room/view4.jpeg", alt: "Study Room View 4", placeholder: "Study Room Photo 4" },
      { id: "6", src: "/assets/images/study-room/view2.jpeg", alt: "Study Room View 6", placeholder: "Study Room Photo 6" }
    ],
    columns: { base: 2, md: 3 },
    imageHeight: "200px"
  },

  cta: {
    title: "Start Your NEET PG Journey Today!",
    description: "Contact us for more information, pricing details, or to schedule a visit to our facilities.",
    buttons: [],
    contactInfo: "Contact us via WhatsApp, phone, or email below",
    gradient: "linear(to-r, blue.400, purple.500)",
    textColor: "white"
  }
}
