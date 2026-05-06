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
  kicker?: string;
  headline?: string;
  intro: string;
  panelSummary: string;
  coreTags: string[];
  proofPoints: {
    label: string;
    value: string;
  }[];
  verification: string[];
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
  title: "Practical AI-Powered Web Systems",
  subtitle:
    "I'm a software developer building full-stack applications with backend logic, databases, testing, and practical AI tool use. My current focus is growing toward RAG-based applications, AI agents, and reliable AI workflows.",
  direction:
    "I'm building from a full-stack foundation first and growing toward AI application engineering through real project work, testing, documentation, and practical system thinking.",
  photo: {
    src: "/20260331_184256.jpg",
    alt: "Jose Addiel Martinez De La Cruz",
  },
};

export const heroTags = [
  "Full-Stack Development",
  "Practical AI Workflows",
  "Tested Backend Systems",
] as const;

export const profileLinks: ProfileLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/jam398",
    status: "ready",
    placeholderText: "",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jose-martinez-de-la-cruz-32baa022b",
    status: "ready",
    placeholderText: "",
  },
];

export const heroActions = [
  {
    label: "View Projects",
    kind: "primary" as const,
    href: "#projects",
  },
  ...profileLinks.map((link) => ({
    label: link.label,
    kind: "ghost" as const,
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
      "Integrated AI assistant workflows, structured tools, MCP-style interactions, and content-management guardrails into real applications.",
  },
  {
    title: "Testing and Reliability",
    description:
      "Used automated testing and validation to make project behavior easier to verify.",
  },
  {
    title: "Growing AI Focus",
    description:
      "Developing RAG, embeddings, vector search, AI evaluation, and human-reviewed AI workflows through focused projects.",
  },
];

export const directionSection = {
  kicker: "My Direction",
  title: "Software development with a clear path into AI-powered systems",
  paragraphs: [
    "I'm an Information Technology student focused on software development, backend systems, and AI-powered applications. I like building practical tools that combine APIs, databases, user interfaces, testing, and automation. My long-term goal is to grow into AI application engineering work where I can build useful systems that connect AI models to real workflows.",
    "I'm not presenting myself as a senior AI engineer. I'm showing the full-stack foundation I've built so far and the direction I'm moving in through project work, testing, documentation, and intentional use of AI tools.",
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
        "TypeScript",
        "Tailwind CSS 4",
        "SQLite/libSQL",
        "Drizzle ORM",
        "Better Auth",
        "OpenAI Responses API",
        "MCP SDK",
        "node:test",
      ],
      proofPoints: [
        {
          label: "Problem",
          value: "Make high-interest debt pressure visible with official benchmark rates.",
        },
        {
          label: "Build",
          value: "Simulator, AI chat, debt workspace, auth, persistence, and source traces.",
        },
        {
          label: "Role",
          value: "Full-stack implementation, AI tool flow, finance logic, testing, and docs.",
        },
      ],
      verification: [
        "111 passing tests reported in the source project.",
        "Calculation traces and documented assumptions instead of hidden math.",
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
    title: "JM AI Consulting Platform",
    status: "Midterm Project",
    label: "AI Website + Admin Tooling",
    description:
      "JM AI Consulting is a multi-surface AI content-management project: an Eleventy consulting website, a JSON-backed content system, an AI admin panel, a Cloudflare Worker MCP tool server, GitHub Pages deployment, and a Kotlin Android companion app for mobile editing.",
    proof:
      "This project shows that I can connect a static website, a protected content model, AI-assisted editing, GitHub publishing, remote MCP tools, and automated verification. The Android app stays a companion surface rather than the main project claim.",
    repo: "https://github.com/jam398/AI-website",
    demo: "https://jam398.github.io/AI-website/",
    tags: [
      "Eleventy",
      "Nunjucks",
      "JSON content model",
      "AI admin panel",
      "Cloudflare Workers",
      "MCP tools",
      "OpenAI GPT-4o",
      "GitHub API",
      "GitHub Pages",
      "Content guardrails",
      "Backup/restore",
      "SEO tools",
      "Audio transcription",
      "Kotlin Android companion",
      "Jetpack Compose",
      "Android unit tests",
    ],
    sequence: {
      railLabel: "JM AI Consulting walkthrough",
      kicker: "Midterm Case Study",
      headline: "JM AI Consulting turns a static site into an AI-managed publishing system",
      intro:
        "This midterm project expands the portfolio beyond a single app screen: it connects a public consulting site, a browser admin panel, a server-side AI worker, MCP tools, GitHub publishing, and a brief Android companion surface.",
      panelSummary:
        "A static Eleventy website with one JSON content source, AI-assisted editing, protected fields, deploy automation, remote MCP tools, and a Kotlin Android companion for mobile content proposals.",
      coreTags: [
        "Eleventy",
        "Nunjucks",
        "JavaScript",
        "Cloudflare Workers",
        "MCP tools",
        "OpenAI GPT-4o",
        "GitHub API",
        "GitHub Pages",
        "Kotlin Android",
      ],
      proofPoints: [
        {
          label: "Problem",
          value: "Let a small consulting site accept AI-assisted content updates without losing control.",
        },
        {
          label: "Build",
          value: "Static site, JSON source, admin panel, worker tools, deployment flow, and Android client.",
        },
        {
          label: "Boundary",
          value: "Protected identity fields, reviewable changes, backups, and human-controlled publishing.",
        },
      ],
      verification: [
        "Web verify command passed with 19 Node tests and Eleventy build.",
        "Android unit tests passed for the companion app.",
      ],
      scenes: [
        {
          id: "why-it-exists",
          eyebrow: "Scene 1",
          title: "Why it exists",
          preview: "Static websites are easy to deploy but harder to update safely without a workflow.",
          body:
            "I built JM AI Consulting around one source of truth: content/site.json. The public pages read from that file, so updates can flow through AI review or GitHub edits without rewriting templates.",
          highlights: [
            "The site keeps identity, contact, and navigation fields protected.",
            "The admin flow turns content changes into reviewable proposals instead of direct unchecked edits.",
          ],
          signalTags: ["Content source", "Guardrails"],
        },
        {
          id: "what-i-built",
          eyebrow: "Scene 2",
          title: "What I built",
          preview: "The project has a public site, an admin panel, and a server-side AI tool layer.",
          body:
            "The website is built with Eleventy and Nunjucks, while the admin surface validates content updates, protects critical fields, and connects to Cloudflare Worker endpoints for AI-assisted content operations.",
          highlights: [
            "The Worker exposes chat, REST, and MCP-style tool endpoints.",
            "Tools cover content reads, search, proposal generation, publishing, backups, SEO, Lighthouse, social copy, and transcription.",
          ],
          signalTags: ["Admin panel", "Worker tools"],
        },
        {
          id: "how-it-works",
          eyebrow: "Scene 3",
          title: "How it works",
          preview: "AI suggestions stay server-side and publishing stays reviewable.",
          body:
            "OpenAI calls happen inside the worker, not in the browser. GitHub publishing uses request-time credentials, and the admin logic validates candidate JSON before it can become site content.",
          highlights: [
            "The browser never needs direct OpenAI keys.",
            "Backup and restore tooling gives the workflow a rollback path.",
          ],
          signalTags: ["Server-side AI", "Rollback"],
        },
        {
          id: "android-companion",
          eyebrow: "Scene 4",
          title: "Android companion",
          preview: "The Android app is a companion client, not the main project focus.",
          body:
            "I also built a Kotlin Android companion that talks to the same worker. It uses Jetpack Compose for chat UI, Room for local messages and proposals, Retrofit for network calls, Hilt for dependency injection, and proposal cards for publish/cancel/revise flows.",
          highlights: [
            "The Android source is local, so the portfolio does not claim a public Android repository.",
            "Unit tests cover parser, endpoint, settings, content proposal, and audio helper behavior.",
          ],
          signalTags: ["Jetpack Compose", "Companion app"],
        },
        {
          id: "what-it-proves",
          eyebrow: "Scene 5",
          title: "What it proves",
          preview: "The project proves workflow design around AI, not just a prompt box.",
          body:
            "JM AI Consulting shows I can design an end-to-end AI publishing workflow with static generation, content integrity, server-side AI calls, tool permissions, deploy automation, rollback support, documentation, and tests.",
          highlights: [
            "The public website is available through GitHub Pages.",
            "The admin page is available as a separate publishing surface.",
          ],
          signalTags: ["Deployed site", "Workflow proof"],
        },
      ],
    },
  },
  {
    title: "TestPilot AI",
    status: "Assignment 2 Project",
    label: "RAG Test Generation App",
    description:
      "TestPilot AI is a full-stack test-generation project that uses a FastAPI backend, a React/Vite frontend, retrieval over project context, structured LLM output, and evaluation logic to help draft useful tests from real code context.",
    proof:
      "This project links directly to the RAG and vector-search skills I was learning for Assignment 2. It shows retrieval, prompt construction, schema validation, generated-code quality checks, provider configuration, and a frontend workflow for selecting test scenarios.",
    repo: "https://github.com/jam398/TestAuto",
    tags: [
      "FastAPI",
      "React",
      "Vite",
      "TypeScript",
      "Python",
      "RAG",
      "Embeddings",
      "Vector store",
      "Prompt builder",
      "Structured output",
      "Schema validation",
      "AI evaluation",
      "Pytest",
      "Frontend lint/build",
    ],
    sequence: {
      railLabel: "TestPilot AI walkthrough",
      kicker: "Assignment 2 Case Study",
      headline: "TestPilot AI turns project context into reviewable generated tests",
      intro:
        "This project is the RAG-focused Assignment 2 build: a test-generation app that retrieves relevant context, builds prompts, validates generated output, and presents the result through a focused web UI.",
      panelSummary:
        "A full-stack RAG test-generation workflow with FastAPI services, a React/Vite UI, vector retrieval, prompt building, provider configuration, generated-code validation, and evaluation checks.",
      coreTags: ["FastAPI", "React", "Vite", "TypeScript", "Python", "RAG", "Embeddings", "Pytest"],
      proofPoints: [
        {
          label: "Problem",
          value: "Generate better tests by grounding the model in real project context.",
        },
        {
          label: "Build",
          value: "Backend retrieval/generation services plus a frontend test generator workflow.",
        },
        {
          label: "Learning",
          value: "RAG, embeddings, vector search, structured LLM output, and AI evaluation.",
        },
      ],
      verification: [
        "Backend tests cover retrieval, prompt building, schema validation, LLM client behavior, and evaluation.",
        "Frontend includes build/lint-ready Vite and TypeScript surfaces.",
      ],
      scenes: [
        {
          id: "why-it-exists",
          eyebrow: "Scene 1",
          title: "Why it exists",
          preview: "Generated tests are weak when the model does not understand the project context.",
          body:
            "TestPilot AI was built to practice RAG in a practical developer workflow: retrieve relevant code/documentation context first, then ask the model to produce test ideas and code that can be reviewed.",
          highlights: [
            "The project connects directly to RAG, embeddings, and vector search learning goals.",
            "It keeps generated output reviewable instead of treating AI output as automatically correct.",
          ],
          signalTags: ["RAG", "Test generation"],
        },
        {
          id: "what-i-built",
          eyebrow: "Scene 2",
          title: "What I built",
          preview: "The app has a backend generation API and a frontend workflow for test scenarios.",
          body:
            "The backend includes services for chunking, embeddings, vector retrieval, prompt building, LLM calls, evaluation, and schema validation. The frontend exposes a test generator form, status feedback, and result display.",
          highlights: [
            "Scenario controls let the workflow target specific test types.",
            "Validation prevents empty or malformed generated code from being treated as success.",
          ],
          signalTags: ["FastAPI", "React UI"],
        },
        {
          id: "how-it-works",
          eyebrow: "Scene 3",
          title: "How it works",
          preview: "Retrieval feeds the prompt before the model generates test output.",
          body:
            "The backend retrieves project context, builds a structured prompt, calls the configured model provider or fallback path, validates the response against schemas, and evaluates whether the generated test is useful enough to show.",
          highlights: [
            "The source includes tests for retrieval, prompt building, schema validation, and evaluation.",
            "Provider configuration and observability docs keep the AI path easier to inspect.",
          ],
          signalTags: ["Vector context", "Evaluation"],
        },
        {
          id: "what-it-proves",
          eyebrow: "Scene 4",
          title: "What it proves",
          preview: "This project proves I can move from using AI to building AI-backed developer tools.",
          body:
            "TestPilot AI is important because it connects the skills behind RAG systems to a real developer task: generating tests from retrieved context while preserving validation, review, and quality checks.",
          highlights: [
            "The public source repository is available for review.",
            "The project expands the portfolio beyond chat into retrieval-backed software tooling.",
          ],
          signalTags: ["RAG skills", "Public repo"],
        },
      ],
    },
  },
  {
    title: "TriagePilot AI",
    status: "Support Workflow Project",
    label: "Human-Reviewed AI Ticket Triage",
    description:
      "TriagePilot AI is a full-stack support ticket dashboard with a Next.js operations UI, FastAPI backend, SQLModel and SQLite persistence, structured AI triage, similar solved-ticket retrieval, editable apply flows, activity events, and resolution notes that update future ticket memory.",
    proof:
      "This project shows a practical human-in-the-loop AI workflow: AI can summarize, classify, prioritize, recommend actions, and retrieve similar solved tickets, but ticket fields only change after a human reviews and applies the triage fields.",
    repo: "",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "SQLModel",
      "SQLite",
      "Structured AI triage",
      "RAG retrieval",
      "Vector store fallback",
      "Human review",
      "Ticket events",
      "Resolution memory",
      "Pytest",
      "43 backend tests",
    ],
    sequence: {
      railLabel: "TriagePilot AI walkthrough",
      kicker: "Project Case Study",
      headline: "TriagePilot AI keeps support automation under human control",
      intro:
        "This project shows an operations-style AI workflow where tickets are durable, AI output is structured, similar solved cases provide context, and humans stay in control of ticket updates.",
      panelSummary:
        "A support ticket dashboard with durable SQLite data, structured AI analysis, editable apply steps, similar solved-ticket retrieval, resolution notes, events, and automated tests.",
      coreTags: ["Next.js", "FastAPI", "SQLModel", "SQLite", "RAG", "Structured AI", "Pytest"],
      proofPoints: [
        {
          label: "Problem",
          value: "Support teams need faster triage without letting AI silently mutate ticket state.",
        },
        {
          label: "Build",
          value: "Dashboard, ticket CRUD, AI analysis, similar solved tickets, events, and resolution flow.",
        },
        {
          label: "Boundary",
          value: "AI suggestions are stored separately until a human applies editable triage fields.",
        },
      ],
      verification: [
        "Backend pytest suite passed with 43 tests.",
        "Frontend lint/build and workflow validation passed during source review.",
      ],
      scenes: [
        {
          id: "why-it-exists",
          eyebrow: "Scene 1",
          title: "Why it exists",
          preview: "Support automation is useful only if it keeps the ticket owner in control.",
          body:
            "TriagePilot AI was built around a human-reviewed workflow: AI can analyze a ticket, but category, priority, and team changes stay editable and require an explicit apply step.",
          highlights: [
            "SQLite remains the source of truth for tickets, analyses, similar matches, and events.",
            "Resolution notes are required before a ticket can be resolved.",
          ],
          signalTags: ["Human review", "Durable data"],
        },
        {
          id: "what-i-built",
          eyebrow: "Scene 2",
          title: "What I built",
          preview: "The app combines an operations dashboard with backend AI and ticket services.",
          body:
            "The frontend renders stats, filters, queue, ticket details, AI analysis controls, similar solved tickets, activity timeline, create-ticket flow, and resolve-ticket flow. The backend exposes health, dashboard, tickets, and analysis APIs.",
          highlights: [
            "Ticket events make AI, updates, and resolution history visible.",
            "SLA and priority data help the dashboard behave like an operations tool.",
          ],
          signalTags: ["Dashboard", "FastAPI"],
        },
        {
          id: "how-it-works",
          eyebrow: "Scene 3",
          title: "How it works",
          preview: "Similar solved tickets shape the AI analysis context.",
          body:
            "The backend retrieves similar solved tickets, persists match records, builds prompt context, stores structured analysis, and reindexes resolved tickets so future analyses can use their resolution notes.",
          highlights: [
            "The local vector-store fallback preserves the retrieval behavior when ChromaDB is unavailable.",
            "The apply endpoint updates only reviewed triage fields.",
          ],
          signalTags: ["Similar tickets", "Resolution memory"],
        },
        {
          id: "what-it-proves",
          eyebrow: "Scene 4",
          title: "What it proves",
          preview: "This project proves I can design AI features around real workflow boundaries.",
          body:
            "TriagePilot AI shows backend modeling, API design, frontend operations UI, retrieval grounding, structured AI output, human review, testing, and documentation in one support workflow.",
          highlights: [
            "The source project passed 43 backend tests during verification.",
            "No public repo link is claimed because the local folder is not a Git repository.",
          ],
          signalTags: ["43 tests", "Truthful link boundary"],
        },
      ],
    },
  },
];

export const skillsSection = {
  kicker: "Skills, Tools, and Growing Focus",
  title: "Grouped capabilities instead of a generic skill cloud",
  copy:
    "I grouped these skills to show how my work fits together: software development first, AI application development next, and the interest areas I'm building toward from here.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Software Development",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "Eleventy", "Nunjucks", "Tailwind CSS", "Responsive design"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Cloudflare Workers", "API routes", "Authentication", "REST APIs"],
  },
  {
    title: "Data and Persistence",
    items: ["SQLite/libSQL", "SQLModel", "Drizzle ORM", "SQL", "JSON content models"],
  },
  {
    title: "AI Application Work",
    items: [
      "OpenAI API",
      "AI tool use",
      "MCP-style tools",
      "Prompt design",
      "RAG",
      "Embeddings",
      "Vector retrieval",
      "Human-reviewed AI workflows",
    ],
  },
  {
    title: "Quality and Documentation",
    items: [
      "Automated testing",
      "API testing",
      "Zod validation",
      "Pytest",
      "GitHub Actions",
      "README files",
      "Architecture notes",
    ],
  },
];

export const aiWorkflowSection = {
  kicker: "How I Use AI Intentionally",
  title: "AI is part of the workflow, not a shortcut around understanding",
  copy:
    "I use AI to speed up research, drafting, debugging, and documentation, but I keep verification and final decisions tied to the actual code.",
};

export const workflowCards: WorkflowCard[] = [
  {
    title: "Spec and sprint planning",
    description:
      "Turn vague goals into scoped specs, sprint tasks, acceptance criteria, risks, and verification steps before changing code.",
  },
  {
    title: "Implementation support",
    description:
      "Draft small changes, inspect alternatives, debug errors, and compare approaches while keeping final code decisions tied to the live repository.",
  },
  {
    title: "Testing and QA",
    description:
      "Verify AI-assisted work with lint, production builds, browser checks, responsive review, reduced-motion checks, and manual behavior testing.",
  },
  {
    title: "Documentation and traceability",
    description:
      "Keep specs, sprint records, QA notes, and carry-forward decisions updated so project history stays reviewable outside of chat.",
  },
];

export const portfolioStrategySection = {
  kicker: "Portfolio Strategy",
  title: "The portfolio is intentionally narrow so the proof stays credible",
  copy:
    "I'd rather keep this page focused than fill it with unrelated work. I'm showing verified systems that connect full-stack development, AI workflows, testing, and documentation. I want the page to show real signal, not just volume.",
};

export const strategyPoints: StrategyPoint[] = [
  {
    title: "Real proof first",
    description:
      "I use Debt Pressure Lab as my main proof project because it brings together full-stack development, backend thinking, AI tool use, testing, and documentation in one concrete build.",
  },
  {
    title: "Other projects add workflow proof",
    description:
      "JM AI Consulting, TestPilot AI, and TriagePilot AI show the next layers: AI-managed publishing, retrieval-grounded generation, support-ticket triage, human review, and verified test suites.",
  },
  {
    title: "Skills support the project story",
    description:
      "I grouped the skills section to reinforce the project evidence. It supports the story my projects tell instead of trying to replace real proof with a long keyword list.",
  },
];

export const contactSection = {
  kicker: "Contact / Links",
  title: "Confirmed places to review the work",
  copy:
    "GitHub, LinkedIn, and email are ready for portfolio review and follow-up.",
};

export const contactMethods: ContactMethod[] = [
  ...profileLinks.map((link) => ({
    ...link,
    description:
      link.label === "GitHub"
        ? "Main public code profile for portfolio and project review."
        : "Professional profile destination for recruiters and instructors.",
  })),
  {
    label: "Email",
    href: "mailto:jam398@njit.edu",
    status: "ready",
    placeholderText: "",
    description: "Direct contact channel for portfolio review and follow-up.",
  },
];

export const footerSection = {
  kicker: "Portfolio Closeout",
  title: "Built to be honest, technical, and easy to verify",
  copy:
    "I built this portfolio to show real work, clear direction, and a process that values verification over inflated claims.",
};
