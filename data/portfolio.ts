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
  sequence?: FlagshipProjectSequence;
};

export type FlagshipProjectScene = {
  id: string;
  eyebrow: string;
  title: string;
  preview: string;
  body: string;
  highlights: string[];
  signalTags: string[];
};

export type FlagshipProjectSequence = {
  railLabel: string;
  intro: string;
  panelSummary: string;
  coreTags: string[];
  scenes: FlagshipProjectScene[];
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
  photo: {
    src: "/20260331_184256.jpg",
    alt: "Jose Addiel Martinez De La Cruz",
  },
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
      "Debt Pressure Lab is a full-stack financial education app that makes the cost of high-interest debt visible. It combines an interactive payoff simulator, SSE-streaming AI chat, 16 structured finance tools, a personal debt workspace, authentication, SQLite/libSQL storage, source-backed benchmark data, calculation traces, and automated tests.",
    proof:
      "Through this project, I'm showing that I can connect frontend product design, backend API routes, authenticated data persistence, AI tool execution, traceable financial math, official data provenance, and verified test coverage in one working application.",
    repo: "https://github.com/jam398/student-reality-lab-martinezdelacruz",
    tags: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "API routes",
      "Node.js",
      "SQLite/libSQL",
      "Drizzle ORM",
      "Better Auth",
      "OpenAI Responses API",
      "SSE streaming",
      "Model Context Protocol SDK",
      "16 AI tools",
      "Zod",
      "Rate limiting",
      "Payoff simulation",
      "Avalanche vs. snowball",
      "Calculation traces",
      "Data provenance",
      "node:test",
      "tsx",
      "111 passing tests",
      "Technical documentation",
    ],
    sequence: {
      railLabel: "Debt Pressure Lab walkthrough",
      intro:
        "This is the project I use to show one real student problem, one interactive product, and one verified full-stack build.",
      panelSummary:
        "A full-stack financial education app that turns official debt-rate data into simulator results, AI-assisted explanations, saved debt plans, and traceable calculations.",
      coreTags: [
        "Next.js App Router",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "SQLite/libSQL",
        "Drizzle ORM",
        "Better Auth",
        "OpenAI Responses API",
        "SSE streaming",
        "MCP SDK",
        "Zod",
        "node:test",
      ],
      scenes: [
        {
          id: "why-it-exists",
          eyebrow: "Scene 1",
          title: "Why it exists",
          preview: "Real debt pressure is easier to ignore when the interest math stays abstract.",
          body:
            "I built Debt Pressure Lab around one student-sized question: what happens when the same $5,000 balance is paid down at credit-card APR instead of a federal student-loan rate?",
          highlights: [
            "Uses Federal Reserve G.19 and StudentAid.gov benchmark rates instead of invented numbers.",
            "Shows how payment size changes payoff time, interest, and total cost.",
          ],
          signalTags: ["Official sources", "Student problem"],
        },
        {
          id: "what-i-built",
          eyebrow: "Scene 2",
          title: "What I built",
          preview: "The product combines simulation, AI help, saved debts, sources, and learning content.",
          body:
            "The app includes a payoff explorer, an AI chat assistant, a financial glossary, a source-provenance page, account pages, and a personal debt workspace with strategy comparison.",
          highlights: [
            "The workspace lets users save debts and compare avalanche vs. snowball payoff strategies.",
            "Calculation trace panels make results auditable instead of asking users to trust hidden math.",
          ],
          signalTags: ["Simulator", "Workspace"],
        },
        {
          id: "how-it-works",
          eyebrow: "Scene 3",
          title: "How it works",
          preview: "The UI is backed by API routes, auth, persistence, streaming, tools, and validation.",
          body:
            "Behind the UI, the app uses Next.js API routes, Better Auth, Drizzle with SQLite/libSQL, Zod validation, rate limiting, SSE chat streaming, OpenAI Responses API calls, and MCP-backed finance tools.",
          highlights: [
            "The assistant routes questions through 16 structured tools instead of relying on loose free-text answers.",
            "The finance engine handles payoff simulation, target payments, first-payment breakdowns, sensitivity analysis, and strategy comparison.",
          ],
          signalTags: ["SSE chat", "MCP tools"],
        },
        {
          id: "what-it-proves",
          eyebrow: "Scene 4",
          title: "What it proves",
          preview: "This is the project that anchors the portfolio's technical credibility.",
          body:
            "This is the project I use to prove full-stack implementation, AI integration inside a real workflow, tested financial logic, and documentation that explains the architecture, data sources, and limitations.",
          highlights: [
            "The source project reports 111 passing tests across finance, MCP, tool routing, SSE parsing, auth, and workspace behavior.",
            "The documentation covers architecture, data provenance, user flow, assumptions, and limitations.",
          ],
          signalTags: ["111 tests", "Documentation"],
        },
      ],
    },
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
