export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  summary: string;
  liveUrl: string;
  image?: string;
  imageAlt?: string;
  visual: string;
  stack: string[];
  projectFocus: string;
  role: string;
  context: string;
  approach: string;
  highlights: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "skillsense",
    title: "SkillSense",
    category: "AI career platform",
    shortDescription: "Resume intelligence and career guidance.",
    summary: "An AI-powered resume analysis experience that helps people examine their profile, understand strengths, and work toward a more focused job search.",
    liveUrl: "https://skillsensepk.vercel.app/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663898260788/QfhhWBumBbqbJfzk.webp",
    imageAlt: "SkillSense AI resume analysis interface",
    visual: "skillsense",
    stack: ["Next.js", "TypeScript", "FastAPI", "Groq API", "Gemini API"],
    projectFocus: "AI-assisted career workflows",
    role: "Full-stack product implementation",
    context: "Job seekers often receive generic resume advice without a clear view of what needs attention. SkillSense turns the first review step into a guided, product-like experience.",
    approach: "The product is organized around a focused upload and analysis journey. The interface keeps the primary task simple, while the backend supports resume processing and AI-led feedback.",
    highlights: ["Resume upload flow designed around a single clear action", "AI feedback designed to make next steps easier to understand", "Career-oriented product language instead of technical jargon"],
    outcome: "A practical AI product that brings resume review, profile signals, and career guidance into one coherent experience.",
  },
  {
    slug: "the-burger-house",
    title: "The Burger House",
    category: "Interactive 3D experience",
    shortDescription: "A premium restaurant story with 3D and motion.",
    summary: "A cinematic restaurant website that treats the menu as an experience, combining luxury food art direction, motion-led storytelling, and an interactive 3D burger showcase.",
    liveUrl: "https://premiumburger.vercel.app/",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Gourmet burger used for The Burger House project preview",
    visual: "burger-house",
    stack: ["React", "React Three Fiber", "GSAP", "Framer Motion"],
    projectFocus: "Immersive frontend storytelling",
    role: "Frontend interaction and visual system",
    context: "A restaurant landing page has to communicate taste and atmosphere before a visitor reaches the menu. A conventional product grid would not deliver that sense of occasion.",
    approach: "The experience uses an editorial luxury direction, deliberate pacing, and interactive product presentation. Motion is used to support the story rather than compete with it.",
    highlights: ["Interactive 3D product moment for the signature burger", "GSAP and Framer Motion used for paced visual transitions", "Restaurant content structured around menu discovery and action"],
    outcome: "A distinctive frontend showcase that demonstrates product storytelling, motion direction, and immersive interaction in a commercially focused context.",
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Full stack storefront",
    shortDescription: "Commerce flows, payments, and operational views.",
    summary: "A full-featured shopping platform designed around browsing, cart management, checkout, and the workflows needed to keep a storefront operational.",
    liveUrl: "https://e-commerce-mu-wheat-87.vercel.app/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663898260788/kpnEUdeCIKGlaWEB.webp",
    imageAlt: "E-Commerce Platform landing page",
    visual: "commerce",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    projectFocus: "Commerce flows and platform structure",
    role: "Full-stack product implementation",
    context: "A storefront needs to make discovery straightforward for customers while leaving room for product, payment, and operational workflows behind the scenes.",
    approach: "The build gives customers a familiar, readable shopping journey while organizing the platform around durable data and payment flows.",
    highlights: ["Product discovery and cart interactions", "Checkout-oriented payment integration", "Admin-focused workflow support and data persistence"],
    outcome: "A complete commerce case study that brings customer-facing interaction and platform concerns into the same product system.",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    category: "Collaborative planning workspace",
    shortDescription: "Real-time planning and focused team workflows.",
    summary: "A collaborative task workspace for organizing work, moving tasks through a clear flow, and giving teams a shared view of priorities.",
    liveUrl: "https://auto-task-manager.vercel.app/dashboard",
    visual: "tasks",
    stack: ["React", "TypeScript", "Framer Motion", "Zustand"],
    projectFocus: "Collaborative planning UX",
    role: "Frontend application architecture",
    context: "Team planning can become noisy when task states, priorities, and ownership are hard to scan. This project focuses on making the daily planning surface feel direct and manageable.",
    approach: "The workspace is structured around visible task states and interaction patterns that make reordering and reviewing work feel immediate.",
    highlights: ["Drag-and-drop oriented planning flow", "Clear task-state visibility for team scanning", "Motion used to make changes feel understandable"],
    outcome: "A focused workspace concept that explores interaction design for collaboration-heavy product interfaces.",
  },
  {
    slug: "physical-ai-textbook",
    title: "Physical AI Textbook",
    category: "AI learning platform",
    shortDescription: "Structured learning with contextual AI help.",
    summary: "An interactive educational platform that organizes Physical AI learning into structured modules and supports exploration through contextual AI assistance.",
    liveUrl: "https://physical-ai-textbook-frontend001-he.vercel.app/",
    visual: "textbook",
    stack: ["Docusaurus", "React", "JavaScript", "AI Chatbot"],
    projectFocus: "Educational information architecture",
    role: "Learning experience and frontend implementation",
    context: "Technical learning materials can become overwhelming when long-form content has no clear progression or a learner cannot ask for help in the moment.",
    approach: "The platform combines structured modules with an AI-supported question path so learners can move between reading, practice, and clarification without leaving the subject area.",
    highlights: ["Module-based learning path for difficult technical material", "Contextual AI chatbot support", "Documentation-style interface optimized for sustained reading"],
    outcome: "A learning product that turns dense technical material into a more navigable and supportive experience.",
  },
  {
    slug: "rest-api-service",
    title: "REST API Service",
    category: "Backend integration service",
    shortDescription: "Secure, documented APIs for reliable integrations.",
    summary: "A backend service organized around authentication, documented endpoints, and protective patterns for applications that need reliable external integrations.",
    liveUrl: "https://api-docs-demo.vercel.app",
    visual: "api",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    projectFocus: "Secure API architecture",
    role: "Backend service implementation",
    context: "An API is only useful when other developers can understand, trust, and integrate with it. This service focuses on the foundational patterns that support that handoff.",
    approach: "The project combines familiar REST conventions with authentication, rate-aware handling, and documentation-led endpoint design.",
    highlights: ["Authentication patterns using JWT", "Documented endpoints designed for integration", "Database-backed service structure with protective controls"],
    outcome: "A backend case study demonstrating how reliable service design supports practical product integrations.",
  },
];

export const featuredCaseStudies = caseStudies.slice(0, 3);
export const additionalCaseStudies = caseStudies.slice(3);
