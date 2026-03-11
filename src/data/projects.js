import awe1 from '../assets/awe1.png';
import awe2 from '../assets/awe2.png';
import awe3 from '../assets/awe3.jpg';
import awe4 from '../assets/awe4.jpg';
import v1 from '../assets/v1.png';
import v2 from '../assets/v2.png';
import v3 from '../assets/v3.png';
import v4 from '../assets/v4.png';
import skrt1 from '../assets/skrt1.png';
import skrt2 from '../assets/skrt2.png';
import skrt3 from '../assets/skrt3.png';
import network1 from '../assets/network1.png';
import commerce1 from '../assets/commerce1.png';
import aifa1 from '../assets/aifa1.png';
import aifa2 from '../assets/aifa2.png';

export const projects = [
  {
    id: 'awe',
    title: 'Autonomous Workflow Engine',
    repo: 'https://github.com/niravkpatel36/AWE.git',
    stack: 'React · TypeScript · FastAPI · Docker',
    short: 'Transforms high-level goals into DAGs with live execution visualization and real-time updates.',
    images: [awe1, awe2, awe3, awe4],
    description: 'AWE is a full-stack autonomous execution system that decomposes high-level objectives into structured, observable workflows. Each task is materialized as a node in a Directed Acyclic Graph (DAG) and updates are streamed in real time. Designed for transparency, determinism, and modular extensibility, AWE supports experimentation, internal tooling, and research in autonomous systems.',
    highlights: ['Live DAG', 'WebSocket Updates'],
  },
  {
    id: 'venture',
    title: 'VENTURE',
    repo: 'https://github.com/niravkpatel36/VENTURE.git',
    demo: 'https://venture-qgzz.onrender.com/',
    stack: 'Django · JavaScript · OAuth 2.0 · HTML/CSS',
    short: 'A full-stack music platform that combines discovery, interactive prompts, and curated album experiences.',
    images: [v1, v2, v3, v4],
    description: 'VENTURE is a production-oriented, full-stack music exploration system that unifies external API integration, deterministic prompt interpretation, and custom audio playback within a single cohesive architecture. The platform supports real-time music search via the Spotify Web API, a prompt-driven mood and theme explorer, and a fully designed interactive album experience. Built with clear separation of concerns and extensibility in mind, VENTURE prioritizes predictable rendering, accessibility, and scalability while providing a forward-compatible surface for future AI-driven enhancements.',
    highlights: ['Spotify API Integration', 'Deterministic Prompt Engine'],
  },
  {
    id: 'skrt',
    title: 'SKRT',
    stack: 'Python · Kivy · OOP · Canvas',
    repo: 'https://github.com/niravkpatel36/SKRT.git',
    short: 'A cross-platform 2D perspective runner game with dynamic tiles, collisions, and score tracking.',
    images: [skrt1, skrt2, skrt3],
    description: 'SKRT is a Python game built with Kivy that demonstrates interactive graphics, procedural tile generation, perspective rendering, and smooth animation. Players navigate a spaceship along a continuously scrolling track while avoiding collisions. The project emphasizes modular design, reusable components, and cross-platform deployment for desktop and mobile environments.',
    highlights: ['Perspective Rendering','Score Tracking'],
  },
  {
  id: 'commerce',
  title: 'Commerce',
  repo: 'https://github.com/niravkpatel36/Commerce.git',
  stack: 'Python · JavaScript · HTML/CSS · SQLite',
  short: 'A full-stack auction platform with real-time bidding logic, watchlists, and role-based permissions.',
  images: [commerce1],
  description: 'Commerce is a full-stack e-commerce auction platform designed around competitive bidding workflows and robust server-side validation. The system supports authenticated users creating and managing auction listings, placing bids with enforced constraints, tracking items via personal watchlists, and participating in threaded discussions. Auction state transitions are handled deterministically, ensuring consistent winner selection and permission-aware interactions. Built with Django’s ORM and authentication system, the platform emphasizes clean data modeling, separation of concerns, and maintainable full-stack architecture.',
  highlights: ['Bidding Logic', 'Access Control'],
  },
  {
  id: 'network',
  title: 'Network',
  repo: 'https://github.com/niravkpatel36/Network.git',
  stack: 'Python · JavaScript · HTML/CSS · SQL',
  short: 'A full-stack social networking prototype with posts, followers, and interactive likes.',
  images: [network1],
  description: 'Network is a full-stack social media prototype built with Django that allows users to create and edit posts, follow other users, and interact with content through likes. It features dynamic, asynchronous updates using JavaScript fetch calls, responsive design with HTML/CSS, and scalable data handling with SQLite and Django ORM. The platform implements secure user authentication, pagination for feeds, and a clean separation of concerns between frontend and backend, demonstrating full-stack best practices for modern web applications.',
  highlights: ['Asynchronous Post Editing', 'Follower System'],
  },
  {
  id: 'aifa',
  title: 'AI Financial Advisor',
  repo: 'https://github.com/niravkpatel36/AIFA.git',
  stack: 'Next.js · React · SQL · Redis · Docker · OpenAI API',
  short: 'An AI-powered financial advisory platform delivering personalized guidance through scalable architecture.',
  images: [aifa1, aifa2],
  description: 'AIFA is a production-oriented, AI-powered financial advisory platform designed to deliver personalized, explainable, and compliant financial guidance at scale. Built as a multi-tenant SaaS system, the platform combines a modern Next.js frontend with a scalable FastAPI backend that orchestrates authentication, financial advice generation, portfolio analysis, and subscription billing. The system emphasizes modular service boundaries, secure JWT-based authentication, and deterministic data flows, while integrating large language models for context-aware financial insights. AIFA is architected for extensibility, regulatory awareness, and real-world deployment.',
  highlights: [
    'LLM-Powered',
    'In Progress'],
  }
];


