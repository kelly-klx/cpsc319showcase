const clients = [
  {
    name: "Benevity",
    acronym: "BE",
    description:
      "A global corporate purpose platform helping companies activate social impact through employee giving, volunteering, and grantmaking.",
    teams: 3,
    color: "#0055B7",
  },
  {
    name: "Surrey Food Bank",
    acronym: "SF",
    description:
      "A frontline community organization providing food support, outreach, and dignity-driven services to people across Surrey.",
    teams: 3,
    color: "#34A853",
  },
  {
    name: "Aunt Leah's",
    acronym: "AL",
    description:
      "A social enterprise and charitable organization supporting youth in foster care and mothers at risk of homelessness.",
    teams: 3,
    color: "#E65100",
  },
  {
    name: "FeathersJS",
    acronym: "FJ",
    description:
      "An open-source framework for building real-time applications and APIs, trusted by developers shipping modern JS products.",
    teams: 3,
    color: "#7C3AED",
  },
  {
    name: "Open WebUI",
    acronym: "OW",
    description:
      "A leading open-source interface for LLM workflows, enabling secure, local-first and enterprise-ready AI collaboration.",
    teams: 2,
    color: "#0EA5A4",
  },
];

const projects = [
  {
    id: "benevity-a",
    title: "Impact Story Composer",
    team: "Team A",
    client: "Benevity",
    description:
      "Built a guided storytelling workflow that helps admins assemble campaign narratives with reusable templates and metrics blocks.",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    members: ["Amelia", "Noah", "Iris", "Karan", "Leo"],
    features: ["Template library", "Campaign analytics", "Approval workflow", "Multi-org permissions"],
    gradient: "linear-gradient(135deg, #1C64F2, #0B1C38)",
    gallery: ["Dashboard", "Story Builder", "Campaign Insights"],
  },
  {
    id: "benevity-b",
    title: "Volunteer Shift Optimizer",
    team: "Team B",
    client: "Benevity",
    description:
      "Created an assignment engine that matches employees to volunteer opportunities based on availability, interest, and skill fit.",
    stack: ["Next.js", "TypeScript", "Prisma", "Redis"],
    members: ["Ava", "Mason", "Rina", "Yusuf", "Ella"],
    features: ["Preference matching", "Calendar sync", "Admin override tools", "Exportable reports"],
    gradient: "linear-gradient(145deg, #2563EB, #60A5FA)",
    gallery: ["Matching Engine", "Availability Planner", "Shift Snapshot"],
  },
  {
    id: "benevity-c",
    title: "Grant Review Workspace",
    team: "Team C",
    client: "Benevity",
    description:
      "Designed a streamlined reviewer workspace for grant submissions, reducing handoff friction and review turnaround time.",
    stack: ["Vue", "Express", "MongoDB", "Docker"],
    members: ["Jaden", "Sophia", "Mia", "Ethan", "Rory"],
    features: ["Review queues", "Decision history", "Reviewer notes", "Role-based access"],
    gradient: "linear-gradient(140deg, #1D4ED8, #0F172A)",
    gallery: ["Submission Queue", "Review Panel", "Decision Log"],
  },
  {
    id: "surrey-a",
    title: "Food Hamper Routing Portal",
    team: "Team D",
    client: "Surrey Food Bank",
    description:
      "Implemented intake-to-delivery routing for hamper requests, helping staff prioritize urgency and optimize volunteer dispatch.",
    stack: ["React", "NestJS", "PostgreSQL", "Leaflet"],
    members: ["Kai", "Nora", "Ibrahim", "Skye", "Dylan"],
    features: ["Intake triage", "Route planning", "Volunteer assignment", "Daily dispatch board"],
    gradient: "linear-gradient(145deg, #15803D, #86EFAC)",
    gallery: ["Request Intake", "Route Board", "Volunteer Assignments"],
  },
  {
    id: "surrey-b",
    title: "Inventory Signal Dashboard",
    team: "Team E",
    client: "Surrey Food Bank",
    description:
      "Delivered inventory forecasting dashboards to surface shortage risks and improve donation campaign timing.",
    stack: ["SvelteKit", "Python API", "SQLite", "Chart.js"],
    members: ["Maya", "Logan", "Arjun", "Priya", "Finn"],
    features: ["Stock trend graphs", "Low-stock alerts", "Seasonality views", "Donation recommendations"],
    gradient: "linear-gradient(130deg, #16A34A, #14532D)",
    gallery: ["Forecasting", "Low Stock Feed", "Campaign Planner"],
  },
  {
    id: "surrey-c",
    title: "Community Referral Console",
    team: "Team F",
    client: "Surrey Food Bank",
    description:
      "Built a secure referral console connecting partner agencies with food bank intake services while preserving client privacy.",
    stack: ["Angular", "Node.js", "MySQL", "Auth0"],
    members: ["Zara", "Harper", "Carter", "Jules", "Theo"],
    features: ["Agency referrals", "Secure intake packets", "Consent management", "Audit logs"],
    gradient: "linear-gradient(150deg, #22C55E, #065F46)",
    gallery: ["Agency Portal", "Intake Packet", "Referral Status"],
  },
  {
    id: "auntleahs-a",
    title: "Housing Pathway Tracker",
    team: "Team G",
    client: "Aunt Leah's",
    description:
      "Created a case-management interface for tracking youth housing milestones, appointments, and support outcomes.",
    stack: ["React", "GraphQL", "PostgreSQL", "Vite"],
    members: ["Sienna", "Nikhil", "Grace", "Owen", "Lucas"],
    features: ["Milestone tracking", "Case notes", "Reminder workflows", "Outcome summaries"],
    gradient: "linear-gradient(125deg, #FB923C, #9A3412)",
    gallery: ["Case Overview", "Timeline", "Outcome Summary"],
  },
  {
    id: "auntleahs-b",
    title: "Donor Impact Studio",
    team: "Team H",
    client: "Aunt Leah's",
    description:
      "Designed a donor engagement dashboard translating program data into clear, narrative impact snapshots for fundraising.",
    stack: ["Next.js", "Supabase", "D3.js", "TypeScript"],
    members: ["Brook", "Ravi", "Mei", "Hugo", "Ari"],
    features: ["Impact narratives", "Donor segmentation", "Exportable briefings", "Campaign metrics"],
    gradient: "linear-gradient(145deg, #F97316, #FDBA74)",
    gallery: ["Impact Dashboard", "Donor Segments", "Campaign Results"],
  },
  {
    id: "auntleahs-c",
    title: "Volunteer Journey Portal",
    team: "Team I",
    client: "Aunt Leah's",
    description:
      "Built an onboarding and scheduling portal that improves volunteer retention through clearer task pathways.",
    stack: ["Vue", "Firebase", "Pinia", "Cloud Functions"],
    members: ["Nina", "Wes", "Daniel", "Ayla", "Samir"],
    features: ["Onboarding checklist", "Task signups", "Shift reminders", "Volunteer history"],
    gradient: "linear-gradient(150deg, #EA580C, #7C2D12)",
    gallery: ["Onboarding", "Task Board", "Shift Planner"],
  },
  {
    id: "feathers-a",
    title: "Plugin Registry Manager",
    team: "Team J",
    client: "FeathersJS",
    description:
      "Shipped a registry workflow for publishing, validating, and versioning community plugins with CI-ready metadata.",
    stack: ["React", "FeathersJS", "MongoDB", "Jest"],
    members: ["Liam", "Anya", "Parker", "Nadia", "Eli"],
    features: ["Package validation", "Version timeline", "Maintainer handoff", "Security checks"],
    gradient: "linear-gradient(135deg, #8B5CF6, #312E81)",
    gallery: ["Registry Index", "Package Details", "Validation Report"],
  },
  {
    id: "feathers-b",
    title: "Realtime Ops Monitor",
    team: "Team K",
    client: "FeathersJS",
    description:
      "Implemented a runtime observability layer for socket events and service calls across distributed Feathers deployments.",
    stack: ["SolidJS", "FeathersJS", "InfluxDB", "Grafana"],
    members: ["Milo", "Yara", "Sofia", "Kenji", "Malik"],
    features: ["Realtime stream view", "Service latency charts", "Incident markers", "Alert routing"],
    gradient: "linear-gradient(145deg, #7C3AED, #1E1B4B)",
    gallery: ["Event Stream", "Latency View", "Alert Center"],
  },
  {
    id: "feathers-c",
    title: "Migration Assistant CLI",
    team: "Team L",
    client: "FeathersJS",
    description:
      "Built a guided CLI assistant that auto-generates migration plans and codemods for legacy Feathers projects.",
    stack: ["TypeScript", "Node CLI", "AST Tools", "Vitest"],
    members: ["Quinn", "Mina", "Tariq", "Alice", "Jon"],
    features: ["Upgrade diagnostics", "Codemod generation", "Rollback support", "Compatibility checks"],
    gradient: "linear-gradient(130deg, #9333EA, #111827)",
    gallery: ["CLI Diagnostics", "Migration Plan", "Generated Codemods"],
  },
  {
    id: "openwebui-a",
    title: "Secure Prompt Workbench",
    team: "Team M",
    client: "Open WebUI",
    description:
      "Developed a role-aware prompt workspace with shared libraries and policy checks for internal model operations.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAPI"],
    members: ["Reese", "Hana", "Victor", "Neha", "Cole"],
    features: ["Prompt templates", "Policy validation", "Workspace permissions", "Session analytics"],
    gradient: "linear-gradient(140deg, #0EA5A4, #1E3A8A)",
    gallery: ["Prompt Library", "Policy Checks", "Session Reports"],
  },
  {
    id: "openwebui-b",
    title: "Model Governance Console",
    team: "Team N",
    client: "Open WebUI",
    description:
      "Created governance tooling for model lifecycle workflows, including approvals, audit trails, and usage visibility.",
    stack: ["Next.js", "Go", "PostgreSQL", "Docker"],
    members: ["Jia", "Mateo", "Layla", "Ben", "Iman"],
    features: ["Approval gates", "Audit timeline", "Usage dashboards", "Policy exceptions"],
    gradient: "linear-gradient(145deg, #14B8A6, #164E63)",
    gallery: ["Model Catalog", "Approvals", "Audit Timeline"],
  },
];

const stats = Array.from(document.querySelectorAll(".stat-number[data-target]"));
const clientGrid = document.getElementById("client-grid");
const projectGrid = document.getElementById("project-grid");
const filterBar = document.getElementById("project-filters");
const themeToggle = document.getElementById("theme-toggle");
const heroSection = document.getElementById("hero");
const heroRotatorEl = document.getElementById("hero-rotator");
const heroCountdownEl = document.getElementById("hero-countdown");
const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");
const countdownEl = document.getElementById("countdown");
const visitCountEl = document.getElementById("visit-count");
const rsvpCountEl = document.getElementById("rsvp-count");
const form = document.getElementById("rsvp-form");
const formSuccess = document.getElementById("form-success");
const formStatus = document.getElementById("form-status");
const submitButton = document.querySelector(".submit");
const toast = document.getElementById("toast");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const headerHeightOffset = 96;

let activeFilter = "All";
let statsAnimated = false;

const storageKeys = {
  rsvps: "cpsc319_rsvps",
  visits: "cpsc319_unique_visits",
  visitSessionFlag: "cpsc319_visit_counted",
  theme: "cpsc319_theme",
};

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function shortenText(text, maxWords) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}…`;
}

function showToast(message, duration = 2200) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.hidden = true;
  }, duration);
}

function applyTheme() {
  const stored = localStorage.getItem(storageKeys.theme);
  if (stored === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

function toggleTheme() {
  const nowDark = !document.documentElement.hasAttribute("data-theme");
  if (nowDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem(storageKeys.theme, "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem(storageKeys.theme, "light");
  }
}

function updateVisitCount() {
  let visits = Number(localStorage.getItem(storageKeys.visits) || 0);
  if (!sessionStorage.getItem(storageKeys.visitSessionFlag)) {
    visits += 1;
    localStorage.setItem(storageKeys.visits, String(visits));
    sessionStorage.setItem(storageKeys.visitSessionFlag, "1");
  }
  visitCountEl.textContent = String(visits);
}

function updateRsvpCount() {
  const records = readJSON(storageKeys.rsvps, []);
  rsvpCountEl.textContent = String(records.length);
}

function renderClients() {
  clientGrid.innerHTML = clients
    .map(
      (client) => `
      <article class="client-card glass reveal" style="--client-color:${client.color}">
        <div class="logo-badge" style="background:${client.color}">${client.acronym}</div>
        <h3>${client.name}</h3>
        <p>${shortenText(client.description, 13)}</p>
        <span class="teams-tag">${client.teams} Teams</span>
      </article>
    `,
    )
    .join("");
}

function getFilters() {
  return ["All", ...clients.map((c) => c.name)];
}

function renderFilters() {
  filterBar.innerHTML = getFilters()
    .map(
      (label) => `
      <button class="filter-pill ${label === activeFilter ? "active" : ""}" type="button" data-filter="${label}">
        ${label}
      </button>
    `,
    )
    .join("");

  filterBar.querySelectorAll(".filter-pill").forEach((button) => {
    button.addEventListener("click", () => {
      const next = button.dataset.filter;
      if (!next || next === activeFilter) return;
      activeFilter = next;
      renderFilters();
      renderProjects(true);
    });
  });
}

function filteredProjects() {
  if (activeFilter === "All") return projects;
  return projects.filter((project) => project.client === activeFilter);
}

function projectCardTemplate(project) {
  return `
    <article class="project-card glass" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Open details for ${project.title}">
      <div class="project-media" style="background:${project.gradient}">
        <span>Coming Soon</span>
      </div>
      <h3 class="project-title">${project.client} — ${project.team}</h3>
      <p class="project-client">${project.title}</p>
      <p class="project-desc">${shortenText(project.description, 15)}</p>
      <div class="chips">${project.stack.map((tech) => `<span class="chip">${tech}</span>`).join("")}</div>
      <p class="team-line">${project.members.join(" · ")}</p>
    </article>
  `;
}

function renderProjects(withTransition = false) {
  const targetProjects = filteredProjects();
  const paint = () => {
    projectGrid.innerHTML = targetProjects.map(projectCardTemplate).join("");
    wireProjectCards();
  };

  if (!withTransition || prefersReducedMotion) {
    paint();
    return;
  }

  projectGrid.classList.add("fade-out");
  window.setTimeout(() => {
    paint();
    projectGrid.classList.remove("fade-out");
  }, 130);
}

function findProjectById(id) {
  return projects.find((project) => project.id === id);
}

function openModal(project) {
  if (!project) return;
  document.getElementById("modal-client").textContent = project.client;
  document.getElementById("modal-title").textContent = `${project.title} (${project.team})`;
  document.getElementById("modal-description").textContent = project.description;
  document.getElementById("modal-team").textContent = project.members.join(" · ");
  document.getElementById("modal-features").innerHTML = project.features
    .map((feature) => `<span class="chip">${feature}</span>`)
    .join("");
  document.getElementById("modal-gallery").innerHTML = project.gallery
    .map(
      (label, index) => `
      <div class="modal-shot" style="background:${project.gradient}; opacity:${0.75 + index * 0.1}">
        ${label}
      </div>
    `,
    )
    .join("");
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function wireProjectCards() {
  projectGrid.querySelectorAll(".project-card").forEach((card) => {
    const id = card.getAttribute("data-project-id");
    const project = findProjectById(id);
    card.addEventListener("click", () => openModal(project));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(project);
      }
    });
  });
}

function updateCountdown() {
  const target = new Date("2026-04-08T17:30:00-07:00").getTime();
  const now = Date.now();
  const delta = target - now;

  if (delta <= 0) {
    countdownEl.textContent = "Showcase in progress or completed.";
    if (heroCountdownEl) heroCountdownEl.textContent = "Live";
    return;
  }

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((delta / (1000 * 60)) % 60);
  const seconds = Math.floor((delta / 1000) % 60);
  const compact = `${days}d ${hours}h ${minutes}m`;
  countdownEl.textContent = `${compact} ${seconds}s`;
  if (heroCountdownEl) heroCountdownEl.textContent = compact;
}

function animateStat(element, target) {
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    element.textContent = String(Math.round(target * eased));
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function observeReveal() {
  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function observeStats() {
  const statsContainer = document.querySelector(".stats");
  if (!statsContainer) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    stats.forEach((stat) => {
      const target = Number(stat.dataset.target);
      stat.textContent = String(target);
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || statsAnimated) return;
        statsAnimated = true;
        stats.forEach((stat) => {
          const target = Number(stat.dataset.target);
          animateStat(stat, target);
        });
        observer.disconnect();
      });
    },
    { threshold: 0.36 },
  );

  observer.observe(statsContainer);
}

function scrollToSelector(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeightOffset;
  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      event.preventDefault();
      scrollToSelector(href);
    });
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const selector = button.getAttribute("data-jump");
      if (!selector) return;
      scrollToSelector(selector);
    });
  });
}

function setupHeroInteractions() {
  if (!heroSection) return;

  if (!prefersReducedMotion) {
    heroSection.addEventListener("pointermove", (event) => {
      const rect = heroSection.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      heroSection.style.setProperty("--mx", `${x}%`);
      heroSection.style.setProperty("--my", `${y}%`);
    });

    heroSection.addEventListener("pointerleave", () => {
      heroSection.style.setProperty("--mx", "50%");
      heroSection.style.setProperty("--my", "45%");
    });
  }

  if (!heroRotatorEl) return;
  let idx = 0;
  const cycle = () => {
    const client = clients[idx % clients.length];
    heroRotatorEl.textContent = `Now Spotlighting: ${client.name}`;
    idx += 1;
  };
  cycle();
  if (!prefersReducedMotion) {
    window.setInterval(cycle, 2100);
  }
}

function confettiBurst() {
  const count = 42;
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.className = "confetti";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${35 + Math.random() * 20}%`;
    particle.style.background = `hsl(${Math.floor(Math.random() * 360)}, 92%, 64%)`;
    particle.style.transform = `translateY(0) rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(particle);

    const drift = (Math.random() - 0.5) * 260;
    const drop = 280 + Math.random() * 320;
    requestAnimationFrame(() => {
      particle.style.opacity = "1";
      particle.style.transform = `translate(${drift}px, ${drop}px) rotate(${Math.random() * 720}deg)`;
    });

    window.setTimeout(() => {
      particle.remove();
    }, 1400);
  }
}

function setupRsvpForm() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      formStatus.textContent = "Please complete the required fields.";
      form.reportValidity();
      return;
    }

    const values = new FormData(form);
    const payload = {
      fullName: values.get("fullName"),
      email: values.get("email"),
      role: values.get("role"),
      source: values.get("source"),
      needs: values.get("needs"),
      updates: values.get("updates") === "on",
      createdAt: new Date().toISOString(),
    };
    const records = readJSON(storageKeys.rsvps, []);
    records.push(payload);
    writeJSON(storageKeys.rsvps, records);
    updateRsvpCount();

    submitButton.classList.add("submitted");
    formStatus.textContent = "RSVP captured locally. Connect this form to Formspree or Apps Script for production.";
    confettiBurst();
    window.setTimeout(() => {
      form.hidden = true;
      formSuccess.hidden = false;
      showToast("You're in. See you at the showcase.");
    }, 420);
  });
}

function setupEasterEgg() {
  const sequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let idx = 0;

  window.addEventListener("keydown", (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (key === sequence[idx]) {
      idx += 1;
      if (idx === sequence.length) {
        idx = 0;
        confettiBurst();
        showToast("Secret unlocked: people's choice mode coming soon.");
      }
      return;
    }
    idx = 0;
  });
}

function initThreeBackground() {
  if (prefersReducedMotion || !window.THREE) {
    return;
  }

  const canvas = document.getElementById("orb-canvas");
  if (!canvas) return;

  let renderer;
  try {
    renderer = new window.THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch {
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  const scene = new window.THREE.Scene();
  const camera = new window.THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 16);

  const orbGeometry = new window.THREE.SphereGeometry(1, 24, 24);
  const pastelColors = [0xc4b5fd, 0x93c5fd, 0xfca5a5, 0x6ee7b7, 0xfdba74];
  const orbCount = window.innerWidth < 760 ? 4 : 6;
  const orbs = [];

  for (let i = 0; i < orbCount; i += 1) {
    const material = new window.THREE.MeshBasicMaterial({
      color: pastelColors[i % pastelColors.length],
      transparent: true,
      opacity: 0.18,
    });
    const orb = new window.THREE.Mesh(orbGeometry, material);
    orb.scale.setScalar(1.6 + Math.random() * 1.6);
    const baseX = (Math.random() - 0.5) * 12;
    const baseY = (Math.random() - 0.5) * 7;
    const baseZ = -6 + Math.random() * 3;
    orb.position.set(baseX, baseY, baseZ);
    orb.userData = {
      baseX,
      baseY,
      baseZ,
      phase: Math.random() * Math.PI * 2,
    };
    scene.add(orb);
    orbs.push(orb);
  }

  const shape = new window.THREE.Mesh(
    new window.THREE.TorusKnotGeometry(1.2, 0.34, 90, 14),
    new window.THREE.MeshBasicMaterial({
      color: 0x0055b7,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    }),
  );
  shape.position.set(5.2, 1.7, -1.5);
  scene.add(shape);

  const pointer = { x: 0, y: 0 };
  window.addEventListener("pointermove", (event) => {
    pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
    pointer.y = (event.clientY / window.innerHeight - 0.5) * -2;
  });

  function animate(time) {
    const t = time * 0.00035;

    orbs.forEach((orb) => {
      const { baseX, baseY, baseZ, phase } = orb.userData;
      const targetX = baseX + Math.sin(t * 2 + phase) * 0.9 + pointer.x * 0.7;
      const targetY = baseY + Math.cos(t * 1.8 + phase) * 0.65 + pointer.y * 0.45;
      orb.position.x += (targetX - orb.position.x) * 0.03;
      orb.position.y += (targetY - orb.position.y) * 0.03;
      orb.position.z += (baseZ - orb.position.z) * 0.03;
    });

    shape.rotation.x += 0.003;
    shape.rotation.y += 0.0025;
    shape.position.x = 5.2 + pointer.x * 0.3;
    shape.position.y = 1.7 + pointer.y * 0.3;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, false);
  });
}

function wireModal() {
  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

function setup() {
  applyTheme();
  themeToggle.addEventListener("click", toggleTheme);

  renderClients();
  renderFilters();
  renderProjects();
  wireModal();
  observeReveal();
  observeStats();
  setupSmoothScrolling();
  setupHeroInteractions();
  updateVisitCount();
  updateRsvpCount();
  setupRsvpForm();
  setupEasterEgg();
  updateCountdown();
  initThreeBackground();

  window.setInterval(updateCountdown, 1000);
}

setup();
