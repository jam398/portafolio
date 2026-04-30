export type LinkStatus = "ready" | "placeholder";

export type ProfileLink = {
  label: string;
  href: string;
  status: LinkStatus;
  placeholderText: string;
};

export type ProofCard = {
  title: string;
  description: string;
};

export type FeaturedProject = {
  title: string;
  status: string;
  label: string;
  description: string;
  proof: string;
  repo: string;
  demo?: string;
  tags: string[];
  planned?: boolean;
  whyNext?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type WorkflowCard = {
  title: string;
  description: string;
};

export type StrategyPoint = {
  title: string;
  description: string;
};

export type ContactMethod = {
  label: string;
  href: string;
  status: LinkStatus;
  placeholderText: string;
  description: string;
};

export const profile = {
  name: "Jose Addiel Martinez De La Cruz",
  title: "Software Developer Building Practical AI-Powered Web Systems",
  subtitle:
    "I build full-stack applications with backend logic, databases, testing, and AI tool use. My current focus is growing toward RAG-based applications, AI agents, and reliable AI workflows.",
  direction:
    "I’m building from a full-stack foundation first, and I’m growing toward AI application engineering next. I want this portfolio to reflect real project work, honest growth, and practical system thinking.",
};

export const heroTags = [
  "Full-Stack Development",
  "Backend Systems",
  "AI Tool Use",
  "Testing",
  "RAG in Progress",
] as const;

export const profileLinks: ProfileLink[] = [
  {
    label: "GitHub",
    href: "",
    status: "placeholder",
    placeholderText: "Add GitHub profile URL",
  },
  {
    label: "LinkedIn",
    href: "",
    status: "placeholder",
    placeholderText: "Add LinkedIn URL",
  },
  {
    label: "Resume",
    href: "",
    status: "placeholder",
    placeholderText: "Add resume link or file",
  },
];

export const heroActions = [
  {
    label: "View Projects",
    kind: "ghost" as const,
    href: "#projects",
  },
  ...profileLinks.map((link) => ({
    label: link.label,
    kind: "primary" as const,
    link,
  })),
];

export const proofCards: ProofCard[] = [
  {
    title: "Full-Stack Development",
    description:
      "Built a complete web app with frontend, backend, database storage, authentication, and documentation.",
  },
  {
    title: "AI Tool Use",
    description:
      "Integrated AI assistant workflows, structured tools, and MCP-style interactions into a real application.",
  },
  {
    title: "Testing and Reliability",
    description:
      "Used automated testing and validation to make project behavior easier to verify.",
  },
  {
    title: "Growing AI Focus",
    description:
      "Developing RAG, embeddings, vector search, and AI evaluation through the next project.",
  },
];

export const directionSection = {
  kicker: "My Direction",
  title: "Software development with a clear path into AI-powered systems",
  paragraphs: [
    "I’m an Information Technology student focused on software development, backend systems, and AI-powered applications. I like building practical tools that combine APIs, databases, user interfaces, testing, and automation. My long-term goal is to grow into AI application engineering work where I can build useful systems that connect AI models to real workflows.",
    "I’m not presenting myself as a senior AI engineer. I’m showing the full-stack foundation I’ve built so far and the direction I’m moving in through project work, testing, documentation, and intentional use of AI tools.",
  ],
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Debt Pressure Lab",
    status: "Revised Midterm Project",
    label: "Full-Stack AI Financial Education App",
    description:
      "Debt Pressure Lab is a full-stack financial education app that helps students understand the real cost of high-interest debt. It includes an interactive payoff simulator, an AI chat assistant, a personal debt workspace, financial glossary, source-backed benchmark data, calculation traces, authentication, database storage, and automated tests.",
    proof:
      "Through this project, I’m showing that I can build a full-stack web application, design interactive user experiences, write backend logic, work with databases, integrate AI into a real workflow, use AI tool calling, write automated tests, and document technical work clearly.",
    repo: "https://github.com/jam398/student-reality-lab-martinezdelacruz",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "API routes",
      "SQLite/libSQL",
      "Drizzle ORM",
      "Better Auth",
      "OpenAI API",
      "AI tool use",
      "MCP-style tools",
      "Zod validation",
      "Automated testing",
      "Technical documentation",
      "Financial logic",
      "Payoff simulation",
    ],
  },
  {
    title: "RAG-Based AI Career Gap Analyzer",
    status: "Coming Soon / Planned for Assignment 2",
    label: "Job Technology Project",
    description:
      "My next project is a planned RAG-powered AI application based on real AI-forward engineering job descriptions. I want it to analyze resumes and job descriptions to identify missing skills, repeated technologies, and project ideas that can help someone move toward a target role.",
    proof:
      "I planned this project because the AI-forward job descriptions I researched kept pointing to RAG, embeddings, vector search, AI evaluation, model-backed APIs, and production-focused AI workflows. That’s the next skill area I want to build in.",
    repo: "",
    tags: [
      "RAG",
      "Embeddings",
      "Vector databases",
      "Python",
      "FastAPI",
      "LLM API integration",
      "AI evaluation",
      "Automated testing",
      "Technical documentation",
    ],
    planned: true,
    whyNext:
      "This stays visible to show direction, but it must remain clearly planned rather than complete or deployed.",
  },
];

export const skillsSection = {
  kicker: "Skills, Tools, and Growing Focus",
  title: "Grouped capabilities instead of a generic skill cloud",
  copy:
    "I grouped these skills to show how my work fits together: software development first, AI application development next, and the interest areas I’m building toward from here.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Software Development",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive design", "Component-based UI"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "API routes", "Authentication", "Server-side logic", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["SQLite/libSQL", "Drizzle ORM", "SQL", "MongoDB"],
  },
  {
    title: "AI Application Development",
    items: [
      "OpenAI API",
      "ChatGPT",
      "Claude",
      "Codex",
      "AI assistants",
      "AI tool use",
      "MCP-style tools",
      "Prompt design",
      "Agentic workflows",
    ],
  },
  {
    title: "Growing AI Focus",
    items: ["RAG", "Embeddings", "Vector databases", "AI evaluation", "Reliable AI workflows"],
  },
  {
    title: "Testing and Quality",
    items: ["Automated testing", "API testing", "Integration testing", "Zod validation", "Pytest", "Test-driven thinking"],
  },
  {
    title: "Documentation",
    items: ["README files", "Architecture notes", "Setup instructions", "Methodology explanations", "Project writeups"],
  },
  {
    title: "Interests",
    items: ["AI-powered web apps", "Backend systems", "Practical automation", "Developer tools", "Financial education tools", "RAG applications", "AI agents"],
  },
];

export const aiWorkflowSection = {
  kicker: "How I Use AI Intentionally",
  title: "AI is part of the workflow, not a shortcut around understanding",
  copy:
    "I use AI tools to move faster on research, drafting, debugging, and iteration, but I still treat understanding, verification, and final decisions as my responsibility. I’m not trying to sound more advanced than I am. I’m showing the practical workflow I use to build better software.",
};

export const workflowCards: WorkflowCard[] = [
  {
    title: "Research and framing",
    description:
      "I use AI to compare approaches, clarify tradeoffs, and turn vague ideas into clearer implementation steps before I start changing code.",
  },
  {
    title: "Coding and debugging",
    description:
      "I use AI assistance to generate drafts, inspect alternatives, and narrow likely causes of bugs, then I verify the behavior against the actual code and the running application.",
  },
  {
    title: "Testing and QA",
    description:
      "I use AI to help structure checks, think through edge cases, and reduce missed steps, but I do not treat generated output as true until the repository checks and manual verification agree.",
  },
  {
    title: "Documentation and process",
    description:
      "I use AI to help keep specs, sprint plans, and QA records current, which makes the work easier to follow and keeps implementation decisions tied to something durable instead of memory.",
  },
];

export const portfolioStrategySection = {
  kicker: "Portfolio Strategy",
  title: "The portfolio is intentionally narrow so the proof stays credible",
  copy:
    "I’d rather keep this page focused than fill it with unrelated work. I’m showing one real completed system, one clearly planned next step, and the capabilities that match that direction. I want the page to show real signal, not just volume.",
};

export const strategyPoints: StrategyPoint[] = [
  {
    title: "Real proof first",
    description:
      "I use Debt Pressure Lab as my main proof project because it brings together full-stack development, backend thinking, AI tool use, testing, and documentation in one concrete build.",
  },
  {
    title: "Planned work stays planned",
    description:
      "I included the Assignment 2 RAG project to show where I want to go technically, but I’m keeping it clearly labeled as planned so I don’t overstate what already exists.",
  },
  {
    title: "Skills support the project story",
    description:
      "I grouped the skills section to reinforce the project evidence. It supports the story my projects tell instead of trying to replace real proof with a long keyword list.",
  },
];

export const contactSection = {
  kicker: "Contact / Links",
  title: "Visible access points without fake final details",
  copy:
    "I want the important destinations visible here, but I’m leaving unresolved values marked as pending until I have the real final links. That way the page stays honest while still showing what belongs here.",
};

export const contactMethods: ContactMethod[] = [
  ...profileLinks.map((link) => ({
    ...link,
    description:
      link.label === "GitHub"
        ? "Main public code profile for portfolio and project review."
        : link.label === "LinkedIn"
          ? "Professional profile destination for recruiters and instructors."
          : "Formal background summary once the final resume file or link is confirmed.",
  })),
  {
    label: "Email",
    href: "",
    status: "placeholder",
    placeholderText: "Add professional email address",
    description: "Direct contact channel for final portfolio closeout once confirmed.",
  },
];

export const footerSection = {
  kicker: "Portfolio Closeout",
  title: "Built to be honest, technical, and easy to verify",
  copy:
    "I built this portfolio to show real work, clear direction, and a process that values verification over inflated claims.",
};