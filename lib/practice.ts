import { BookOpenText, Heart, MessageCircle } from "lucide-react";

export const neighborhoods = [
  "Gold Coast",
  "Near North",
  "Old Town",
  "River North",
  "Lincoln Park",
  "Lakeview",
  "West Town",
  "Wicker Park",
  "Uptown",
];

export const serviceGroups = [
  {
    title: "Speech & fluency",
    intro: "For the everyday moments when being understood means everything.",
    icon: MessageCircle,
    services: [
      {
        title: "Articulation disorders",
        text: "Helping children produce speech sounds clearly and accurately so they can be better understood by family, friends, teachers, and peers. Therapy targets each child’s individual sound errors, with practice designed to help carry new skills into everyday conversation.",
      },
      {
        title: "Stuttering & fluency",
        text: "Individualized, supportive care for children who stutter or experience other disruptions in the flow of speech. Depending on your child’s needs, therapy may focus on communication confidence, reducing the impact of stuttering, understanding fluency, and communicating comfortably without pressure or fear of speaking.",
      },
    ],
  },
  {
    title: "Language & literacy",
    intro:
      "Building the language skills that open doors in the classroom and beyond.",
    icon: BookOpenText,
    services: [
      {
        title: "Receptive & expressive language",
        text: "Supporting children who have difficulty understanding language or expressing their thoughts, ideas, and needs. Treatment may focus on following directions, understanding concepts, building vocabulary, forming sentences, answering questions, and organizing ideas.",
      },
      {
        title: "Phonemic awareness",
        text: "Helping children recognize and work with the individual sounds in spoken words, an important foundation for reading and spelling. Activities may include identifying sounds, blending sounds to make words, segmenting words into individual sounds, and manipulating sounds in playful, structured ways.",
      },
      {
        title: "Reading comprehension",
        text: "Helping students understand, interpret, and discuss what they read. Therapy may address identifying the main idea, recalling details, making inferences, understanding figurative language, summarizing information, and answering questions using evidence from a text.",
      },
    ],
  },
  {
    title: "Social communication",
    intro:
      "Helping your child feel more comfortable sharing their own unique perspective.",
    icon: Heart,
    services: [
      {
        title: "Pragmatic language & social communication",
        text: "Helping children communicate and connect with others in different social situations. Goals may include conversational turn-taking, staying on topic, interpreting social cues, understanding nonliteral language, considering another person’s perspective, and navigating peer interactions while respecting each child’s communication style.",
      },
    ],
  },
];

export const referralGuidance = [
  {
    title: "Feeding & swallowing disorders",
    text: "Children with feeding difficulties, swallowing concerns, or complex oral-motor needs may benefit from an SLP with specialized feeding and swallowing expertise, and sometimes a multidisciplinary team.",
  },
  {
    title: "Early intervention: birth to age 3",
    text: "My services are designed for ages 4–18. Infants and toddlers typically benefit from early intervention providers experienced in supporting communication and development during the birth-to-three years.",
  },
  {
    title: "Dyslexia & reading disorders",
    text: "Children with significant reading difficulties or suspected dyslexia may benefit from specialized assessment. I can support related language skills, including phonemic awareness and reading comprehension, when appropriate. When a child needs further evaluation or specialized reading intervention beyond my scope, I can provide referrals to qualified professionals.",
  },
  {
    title: "Complex sensory & multidisciplinary needs",
    text: "When sensory, behavioral, developmental, or functional needs require coordinated care, a team approach may be most appropriate. Depending on your child’s needs, this may include occupational therapy, physical therapy, developmental specialists, or other professionals working together.",
  },
];
