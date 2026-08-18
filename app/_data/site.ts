export const site = {
  name: "Hospital Horror Game Wiki",
  shortName: "HHG Wiki",
  domain: "https://hospitalhorrorgame.wiki",
  description:
    "A beginner-first, source-checked guide to Hospital Horror Game on Roblox.",
  officialGameUrl:
    "https://www.roblox.com/games/113046448920073/Hospital-Horror-Game",
  placeId: "113046448920073",
  universeId: "10610155567",
  creator: "Stella’s avatar ranking",
  verifiedDate: "August 18, 2026",
};

export type FactStatus = "Verified" | "Guide advice" | "Needs in-game check";

export const navLinks = [
  { href: "/beginner-guide", label: "Beginner Guide" },
  { href: "/core-loop", label: "Core Loop" },
  { href: "/progression", label: "Progression" },
  { href: "/common-mistakes", label: "Mistakes" },
  { href: "/faq", label: "FAQ" },
];

export const guideRoute = [
  { href: "/beginner-guide", label: "Beginner Guide", note: "Build a safe first-run plan." },
  { href: "/core-loop", label: "Core Loop", note: "Separate confirmed roles from unknown rules." },
  { href: "/progression", label: "Progression", note: "Learn normal play before paid layers." },
  { href: "/common-mistakes", label: "Common Mistakes", note: "Avoid copied or outdated advice." },
  { href: "/faq", label: "FAQ", note: "Get short, source-backed answers." },
];

export const quickStart = [
  {
    title: "Match the correct game",
    body: `Confirm Place ID ${site.placeId}. Similar hospital games are not reliable substitutes.`,
    status: "Verified" as FactStatus,
  },
  {
    title: "Learn the Doctor side first",
    body: "The public description explicitly promotes becoming a Doctor and saving or helping patients.",
    status: "Verified" as FactStatus,
  },
  {
    title: "Follow the live prompts",
    body: "Game-specific treatment and action keys are not publicly documented, so use the prompt shown by the current build.",
    status: "Guide advice" as FactStatus,
  },
  {
    title: "Watch for Sanity",
    body: "An Infinite Sanity pass confirms the concept exists, but its drain and recovery rules are not public.",
    status: "Verified" as FactStatus,
  },
  {
    title: "Leave modded layers for later",
    body: "Explore Anomaly, Admin Panel, and Sandbox options after you understand the normal Doctor objective.",
    status: "Guide advice" as FactStatus,
  },
];

export const verifiedPillars = [
  {
    number: "01",
    title: "Doctor",
    body: "The official listing puts the Doctor role first and names helping patients as its objective.",
    source: "Roblox universe description",
  },
  {
    number: "02",
    title: "Patients",
    body: "Saving and helping patients is confirmed; exact diagnosis and treatment steps are not published.",
    source: "Roblox universe description",
  },
  {
    number: "03",
    title: "Anomaly",
    body: "Anomaly play is promoted, and a BecomeAnomaly pass exists. Not every access route is known.",
    source: "Description + game-pass API",
  },
  {
    number: "04",
    title: "Admin / Sandbox",
    body: "The experience sells Admin and permanent Sandbox products and highlights both in official art.",
    source: "Game-pass API + official media",
  },
];

export const learningRoute = [
  {
    stage: "Stage 1",
    title: "Orientation",
    body: "Verify the Place ID, choose the Doctor path when it is offered, and read every live objective before acting.",
  },
  {
    stage: "Stage 2",
    title: "Consistency",
    body: "Repeat the ordinary patient-helping flow until you can recognize the current prompts and any Sanity feedback.",
  },
  {
    stage: "Stage 3",
    title: "Experimentation",
    body: "Only then explore Anomaly, Admin, Sandbox, or modifier products, checking current Robux prices first.",
  },
];

export const mistakes = [
  {
    id: "wrong-game",
    title: "Opening the wrong hospital game",
    problem: "Similar names can lead to a completely different rule set.",
    fix: `Match Place ID ${site.placeId} before using this guide.`,
  },
  {
    id: "copied-rules",
    title: "Copying an Animal Hospital guide",
    problem: "Photo, CCTV, room, treatment, and death rules from another game are not evidence for this one.",
    fix: "Use only the current prompts until this exact Place is observed in-game.",
  },
  {
    id: "shift-999",
    title: "Treating “Shift 999” as progression",
    problem: "That phrase appears in promotional art, not a public rule or achievement list.",
    fix: "Do not chase a fabricated unlock route; treat it as marketing copy unless verified later.",
  },
  {
    id: "everything-free",
    title: "Assuming every feature is free",
    problem: "Official passes cover Anomaly, Admin, Sandbox, Sanity, cooldown, and character options.",
    fix: "Review the current Roblox shop before spending; dated prices are not guarantees.",
  },
  {
    id: "guessed-controls",
    title: "Using a guessed keybind list",
    problem: "Roblox has platform defaults, but game-specific actions can use custom prompts.",
    fix: "Use the control shown on screen instead of assuming E, Shift, or C.",
  },
];

export const faqs = [
  {
    id: "what-is-it",
    question: "What is Hospital Horror Game on Roblox?",
    answer:
      "It is a Roblox experience whose official description centers on becoming a Doctor, saving or helping patients, playing as an Anomaly, and using an Admin Panel.",
  },
  {
    id: "who-made-it",
    question: "Who made Hospital Horror Game?",
    answer:
      "The experience is associated with the Roblox group Stella’s avatar ranking. Its description is signed “Made with love by Stella.”",
  },
  {
    id: "game-id",
    question: "What is the correct game ID?",
    answer: `The root Place ID is ${site.placeId}, linked to Universe ID ${site.universeId}.`,
  },
  {
    id: "beginner-first-step",
    question: "What should a beginner do first?",
    answer:
      "Start with the Doctor path and follow the current patient-helping objective. Learn the normal flow before exploring paid or modded layers.",
  },
  {
    id: "play-anomaly",
    question: "Can you play as an Anomaly?",
    answer:
      "Yes. The official description promotes Anomaly play, and a BecomeAnomaly pass is listed. Public data does not prove every way the role can be entered.",
  },
  {
    id: "admin-free",
    question: "Is the Admin Panel free?",
    answer:
      "Do not assume so. The official pass catalog lists a paid Admin Panel and additional Admin or Sandbox products. Always check the current store price.",
  },
  {
    id: "sanity",
    question: "Does the game have Sanity?",
    answer:
      "An Infinite Sanity pass confirms a Sanity concept. Public sources do not explain its normal drain, recovery, or zero-state effects.",
  },
  {
    id: "shift-999-faq",
    question: "How do I reach Shift 999?",
    answer:
      "Shift 999 appears in official promotional artwork, but no public rule or badge confirms a normal route to it. We will not invent one.",
  },
  {
    id: "controls",
    question: "What are the controls?",
    answer:
      "Use standard Roblox movement and camera controls, then follow the current on-screen prompt for game-specific actions. No verified custom keybind chart is public.",
  },
  {
    id: "codes",
    question: "Are there active codes?",
    answer:
      "No code system was confirmed in the official description, place data, passes, badges, or media reviewed on August 18, 2026.",
  },
];

export const publicRoutes = [
  "",
  "/beginner-guide",
  "/core-loop",
  "/progression",
  "/common-mistakes",
  "/faq",
  "/sources",
];

export const sources = [
  {
    label: "Place to Universe mapping",
    url: "https://apis.roblox.com/universes/v1/places/113046448920073/universe",
    supports: "The exact Place ID belongs to Universe 10610155567.",
  },
  {
    label: "Roblox universe places API",
    url: "https://develop.roblox.com/v1/universes/10610155567/places?limit=100&sortOrder=Asc",
    supports: "Official title, public description, and the three listed places.",
  },
  {
    label: "Roblox game-pass API",
    url: "https://apis.roblox.com/game-passes/v1/universes/10610155567/game-passes?passView=Full&pageSize=100",
    supports: "Admin, Sandbox, Anomaly, Sanity, cooldown, and named character products.",
  },
  {
    label: "Roblox badge API",
    url: "https://badges.roblox.com/v1/universes/10610155567/badges?limit=100&sortOrder=Asc",
    supports: "No public badges were returned in the verification snapshot.",
  },
  {
    label: "Roblox input documentation",
    url: "https://create.roblox.com/docs/input/input-action-system",
    supports: "Platform controls exist, while experiences can define their own actions.",
  },
];
