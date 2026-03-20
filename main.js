const clients = [
  {
    name: "Benevity",
    acronym: "BE",
    url: "https://benevity.com/",
    description:
      "Benevity is a software company that provides a corporate purpose platform supporting corporate social responsibility initiatives. The platform enables organizations to engage employees, customers, and communities through vetted nonprofit partnerships.",
    color: "#0055B7",
  },
  {
    name: "Surrey Food Bank",
    acronym: "SF",
    url: "https://surreyfoodbank.org/",
    description:
      "Serving since 1983, The Surrey Food Bank Society is a non-profit organization whose mission is to provide food assistance and support services to individuals and families in need within Surrey and North Delta, British Columbia.",
    color: "#34A853",
  },
  {
    name: "Aunt Leah's",
    acronym: "AL",
    url: "https://auntleahs.org/",
    description:
      "Aunt Leah's Place is a nonprofit organization that supports supporting at-risk youth and mothers. They provide housing, education, and life skills training to help young people and mothers transition to independent living.",
    color: "#E65100",
  },
  {
    name: "FeathersJS",
    acronym: "FJ",
    url: "https://feathers.dev/",
    description:
      "FeathersJS is an open source full-stack web-framework for creating APIs and real-time applications with TypeScript or JavaScript. It can interact with any backend and frontend technology, and supports many databases out of the box.",
    color: "#7C3AED",
  },
  {
    name: "Open WebUI",
    acronym: "OW",
    url: "https://openwebui.com/",
    description:
      "Open WebUI is a self-hosted AI platform that provides a web-based workspace for interacting with LLMs and integrating AI into internal workflows. The platform emphasizes privacy, offline or controlled deployments, and flexibility.",
    color: "#0EA5A4",
  },
];

const projects = [
  {
    id: "benevity-a",
    team: "Team A",
    client: "Benevity",
    url: "https://benevity-reach.vercel.app/",
    members: ["Sarah Yu", "Gordon Chieng", "Anahita Golshani", "Kevin Liu", "Rafael Park"],
    gradient: "linear-gradient(135deg, #1C64F2, #0B1C38)",
    gallery: ["Dashboard", "Story Builder", "Campaign Insights"],
  },
  {
    id: "benevity-b",
    team: "Team B",
    client: "Benevity",
    url: "https://benevity-impact-project.web.app/",
    members: ["Meera Jheeta", "Michealla Koan", "Nicholas Januar", "Nathan Jiang", "Trung Nguyen"],
    gradient: "linear-gradient(145deg, #2563EB, #60A5FA)",
    gallery: ["Matching Engine", "Availability Planner", "Shift Snapshot"],
  },
  {
    id: "benevity-c",
    team: "Team C",
    client: "Benevity",
    url: "https://frontend-1000716781297.us-central1.run.app/",
    members: ["Jack Do", "Kshitij Gomber", "Connor Morrison", "Tim Sabanshi", "Manan Sharma"],
    gradient: "linear-gradient(140deg, #1D4ED8, #0F172A)",
    gallery: ["Submission Queue", "Review Panel", "Decision Log"],
  },
  {
    id: "surrey-a",
    team: "Team A",
    client: "Surrey Food Bank",
    url: "https://annaliese8.github.io/CPSC319_Project/#/entrance-portal-1M8F/login",
    members: ["Annaliese Ferchau", "Mehrshad Esmaeilzadeh", "Kathrina Pillay", "Ishan Singh", "Nina Trochtchanovitch"],
    gradient: "linear-gradient(145deg, #15803D, #86EFAC)",
    gallery: ["Request Intake", "Route Board", "Volunteer Assignments"],
  },
  {
    id: "surrey-b",
    team: "Team B",
    client: "Surrey Food Bank",
    url: "http://surreyfoodbank.duckdns.org/",
    members: ["Hsiang-chen Alan Wu", "Aric Chan", "Kevin Xu", "Aman Dhaddey", "Eric Zhang"],
    gradient: "linear-gradient(130deg, #16A34A, #14532D)",
    gallery: ["Forecasting", "Low Stock Feed", "Campaign Planner"],
  },
  {
    id: "surrey-c",
    team: "Team C",
    client: "Surrey Food Bank",
    url: "https://surrey-food-bank-frontend.onrender.com/",
    members: ["Allison Ko", "Lokesh Sandhu", "Pia Lo", "Sanyu Lin", "John Man"],
    gradient: "linear-gradient(150deg, #22C55E, #065F46)",
    gallery: ["Agency Portal", "Intake Packet", "Referral Status"],
  },
  {
    id: "auntleahs-a",
    team: "Team A",
    client: "Aunt Leah's",
    url: "https://aunt-leah-content-management-system.vercel.app/",
    members: ["Ericson Ho", "Pranav Laiya", "Dylan Medjnoun", "Lin Wang", "Angelina Zoght"],
    gradient: "linear-gradient(125deg, #FB923C, #9A3412)",
    gallery: ["Case Overview", "Timeline", "Outcome Summary"],
  },
  {
    id: "auntleahs-b",
    team: "Team B",
    client: "Aunt Leah's",
    url: "https://aunt-leah-b.vercel.app/",
    members: ["Shreyan Das", "Aryan Saini", "David Falade", "Kyaw Min Oo", "Michael Sam"],
    gradient: "linear-gradient(145deg, #F97316, #FDBA74)",
    gallery: ["Impact Dashboard", "Donor Segments", "Campaign Results"],
  },
  {
    id: "auntleahs-c",
    team: "Team C",
    client: "Aunt Leah's",
    url: "https://d3jqquumsq5ngm.cloudfront.net/",
    members: ["Kaicheng Lu", "Vitor Wakamatsu", "Howard Sun", "Ch Muhammad Daud Virk", "Zishan Wang"],
    gradient: "linear-gradient(150deg, #EA580C, #7C2D12)",
    gallery: ["Onboarding", "Task Board", "Shift Planner"],
  },
  {
    id: "feathers-a",
    team: "Team A",
    client: "FeathersJS",
    url: "https://github.com/paipeng05/Feathers-MCP-System",
    members: ["Tanner Bowie", "Thien Buathong", "Yikai Fang", "Jack Ferneyhough", "Pai Peng"],
    gradient: "linear-gradient(135deg, #8B5CF6, #312E81)",
    gallery: ["Registry Index", "Package Details", "Validation Report"],
  },
  {
    id: "feathers-b",
    team: "Team B",
    client: "FeathersJS",
    url: "https://github.com/nazifishrak/FeathersMCP",
    members: ["Nazif Ishrak", "Maharaj Haider", "Dinh Nam Khanh Le", "Nariman Tavakoli", "Maggie Weng"],
    gradient: "linear-gradient(145deg, #7C3AED, #1E1B4B)",
    gallery: ["Event Stream", "Latency View", "Alert Center"],
  },
  {
    id: "feathers-c",
    team: "Team C",
    client: "FeathersJS",
    url: "https://github.com/TeaBreeze00/cspc319_feathersJS_C",
    members: ["Kush Sharma", "Sirjak Poudel", "Kavyansh Bansal", "Martin de Juan", "Shams Tibriz"],
    gradient: "linear-gradient(130deg, #9333EA, #111827)",
    gallery: ["CLI Diagnostics", "Migration Plan", "Generated Codemods"],
  },
  {
    id: "openwebui-a",
    team: "Team A",
    client: "Open WebUI",
    url: "https://tabularag.vercel.app/",
    members: ["Charmaine Halim", "Angela Felicia", "Marie Fidelia", "Suhayl Patel", "Jessica Patricia"],
    gradient: "linear-gradient(140deg, #0EA5A4, #1E3A8A)",
    gallery: ["Prompt Library", "Policy Checks", "Session Reports"],
  },
  {
    id: "openwebui-b",
    team: "Team B",
    client: "Open WebUI",
    url: "https://cpsc319.jaskiratgill.ca/",
    members: ["Crystal Zhao", "Rui Xia", "Shibo Ai", "Jaskirat Gill"],
    gradient: "linear-gradient(145deg, #14B8A6, #164E63)",
    gallery: ["Model Catalog", "Approvals", "Audit Timeline"],
  },
];

const stats = Array.from(document.querySelectorAll(".stat-number[data-target]"));
const clientGrid = document.getElementById("client-grid");
const projectGrid = document.getElementById("project-grid");
const filterBar = document.getElementById("project-filters");
const themeToggle = document.getElementById("theme-toggle");
const navToggle = document.getElementById("nav-toggle");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.getElementById("site-nav");
const heroShell = document.querySelector(".hero-shell");
const heroContent = document.querySelector(".hero-content");
const heroVisual = document.querySelector(".hero-visual");
const aboutSection = document.getElementById("about");
const aboutAnchor = document.getElementById("about-anchor");
const heroSection = document.getElementById("hero");
const heroRotatorEl = document.getElementById("hero-rotator");
const heroCountdownEl = document.getElementById("hero-countdown");
const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");
const countdownEl = document.getElementById("countdown");
const visitCountEl = document.getElementById("visit-count");
const rsvpCountEl = document.getElementById("rsvp-count");
const form = document.getElementById("rsvp-form");
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

const projectImageSets = {
  "benevity-a": ["images/benevityA1.png", "images/benevityA2.png"],
  "benevity-b": ["images/benevityB1.png", "images/benevityB2.png"],
  "benevity-c": ["images/benevityC2.jpeg", "images/benevityC1.jpeg"],
  "surrey-a": ["images/surreyA1.png", "images/surreyA2.png"],
  "surrey-b": ["images/surreyB1.png", "images/surreyB2.png"],
  "surrey-c": ["images/surreyC1.png", "images/surreyC2.png"],
  "auntleahs-a": ["images/leahA1.png", "images/leahA2.png"],
  "auntleahs-b": ["images/leahB1.png", "images/leahB2.png"],
  "auntleahs-c": ["images/leahC1.png", "images/leahC2.png"],
  "feathers-a": ["images/feathersA1.png", "images/feathersA2.png"],
  "feathers-b": ["images/feathersB1.png", "images/feathersB2.png"],
  "feathers-c": ["images/feathersC1.png", "images/feathersC2.png"],
  "openwebui-a": ["images/openA1.png", "images/openA2.png"],
  "openwebui-b": ["images/openB1.png", "images/openB2.png"],
};

function getProjectImages(project) {
  return projectImageSets[project.id] || [];
}

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
  if (!visitCountEl) return;
  let visits = Number(localStorage.getItem(storageKeys.visits) || 0);
  if (!sessionStorage.getItem(storageKeys.visitSessionFlag)) {
    visits += 1;
    localStorage.setItem(storageKeys.visits, String(visits));
    sessionStorage.setItem(storageKeys.visitSessionFlag, "1");
  }
  visitCountEl.textContent = String(visits);
}

function updateRsvpCount() {
  if (!rsvpCountEl) return;
  const records = readJSON(storageKeys.rsvps, []);
  rsvpCountEl.textContent = String(records.length);
}

function renderClients() {
  clientGrid.innerHTML = clients
    .map(
      (client) => `
      <article
        class="client-card glass reveal"
        data-client-name="${client.name}"
        tabindex="0"
        role="button"
        aria-label="${client.url ? `Open ${client.name} website` : client.name}"
        style="--client-color:${client.color}"
      >
        <h3>${client.name}</h3>
        <p>${client.description}</p>
      </article>
    `,
    )
    .join("");

  wireClientCards();
}

function openClientDestination(client) {
  if (!client?.url) return;
  window.open(client.url, "_blank", "noopener,noreferrer");
}

function wireClientCards() {
  clientGrid.querySelectorAll(".client-card").forEach((card) => {
    const clientName = card.getAttribute("data-client-name");
    const client = clients.find((entry) => entry.name === clientName);
    if (!client?.url) return;

    card.addEventListener("click", () => openClientDestination(client));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openClientDestination(client);
      }
    });
  });
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
  const images = getProjectImages(project);
  const hasImages = images.length > 0;
  const controls = hasImages
    ? `
      <button class="media-arrow prev" type="button" aria-label="Show previous image for ${project.title}">
        ‹
      </button>
      <button class="media-arrow next" type="button" aria-label="Show next image for ${project.title}">
        ›
      </button>
      <div class="media-dots" aria-hidden="true">
        ${images.map((_, index) => `<span class="media-dot${index === 0 ? " active" : ""}"></span>`).join("")}
      </div>
    `
    : `<span>Coming Soon</span>`;

  return `
    <article class="project-card glass" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Open details for ${project.client} ${project.team}">
      <div class="project-media${hasImages ? " has-images" : ""}" style="background:${project.gradient}" data-image-index="0">
        ${
          hasImages
            ? images
                .map(
                  (src, index) => `
          <img
            class="project-shot${index === 0 ? " active" : ""}"
            src="${src}"
            alt="${project.client} ${project.team} preview ${index + 1}"
            loading="lazy"
            draggable="false"
          />
        `,
                )
                .join("")
            : ""
        }
        ${controls}
      </div>
      <h3 class="project-title">${project.client} — ${project.team}</h3>
      <p class="team-line">${project.members.join(" · ")}</p>
    </article>
  `;
}

function renderProjects(withTransition = false) {
  const targetProjects = filteredProjects();
  const paint = () => {
    projectGrid.innerHTML = targetProjects.map(projectCardTemplate).join("");
    wireProjectCards();
    wireProjectCarousels();
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
  const images = getProjectImages(project);
  document.getElementById("modal-client").textContent = project.client;
  document.getElementById("modal-title").textContent = `${project.title} (${project.team})`;
  document.getElementById("modal-team").textContent = project.members.join(" · ");
  document.getElementById("modal-gallery").innerHTML = images.length
    ? images
        .map(
          (src, index) => `
      <img
        class="modal-shot"
        src="${src}"
        alt="${project.client} ${project.team} screenshot ${index + 1}"
        loading="lazy"
      />
    `,
        )
        .join("")
    : project.gallery
        .map(
          (label, index) => `
      <div class="modal-shot modal-shot-placeholder" style="background:${project.gradient}; opacity:${0.75 + index * 0.1}">
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

function openProjectDestination(project) {
  if (!project) return;
  if (project.url) {
    window.open(project.url, "_blank", "noopener,noreferrer");
    return;
  }
  openModal(project);
}

function wireProjectCards() {
  projectGrid.querySelectorAll(".project-card").forEach((card) => {
    const id = card.getAttribute("data-project-id");
    const project = findProjectById(id);
    card.addEventListener("click", () => openProjectDestination(project));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectDestination(project);
      }
    });
  });
}

function updateProjectMedia(media, nextIndex) {
  const shots = Array.from(media.querySelectorAll(".project-shot"));
  const dots = Array.from(media.querySelectorAll(".media-dot"));
  if (!shots.length) return;

  shots.forEach((shot, index) => {
    shot.classList.toggle("active", index === nextIndex);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === nextIndex);
  });
  media.dataset.imageIndex = String(nextIndex);
}

function wireProjectCarousels() {
  projectGrid.querySelectorAll(".project-media.has-images").forEach((media) => {
    const shots = Array.from(media.querySelectorAll(".project-shot"));
    if (shots.length < 2) return;

    const step = (direction) => {
      const currentIndex = Number(media.dataset.imageIndex || 0);
      const nextIndex = (currentIndex + direction + shots.length) % shots.length;
      updateProjectMedia(media, nextIndex);
    };

    media.querySelector(".media-arrow.prev")?.addEventListener("click", (event) => {
      event.stopPropagation();
      step(-1);
    });

    media.querySelector(".media-arrow.next")?.addEventListener("click", (event) => {
      event.stopPropagation();
      step(1);
    });

    let startX = 0;
    let pointerActive = false;

    media.addEventListener("pointerdown", (event) => {
      startX = event.clientX;
      pointerActive = true;
    });

    media.addEventListener("pointerup", (event) => {
      if (!pointerActive) return;
      const deltaX = event.clientX - startX;
      pointerActive = false;
      if (Math.abs(deltaX) < 30) return;
      step(deltaX < 0 ? 1 : -1);
    });

    media.addEventListener("pointercancel", () => {
      pointerActive = false;
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

function setNavOpen(isOpen) {
  if (!siteHeader || !navToggle) return;
  siteHeader.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function setupMobileNav() {
  if (!navToggle || !siteHeader || !siteNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.contains("nav-open");
    setNavOpen(!isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 760) {
        setNavOpen(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setNavOpen(false);
    }
  });
}

function placeAboutSection() {
  if (!aboutSection || !aboutAnchor || !heroShell || !heroContent || !heroVisual) return;

  if (window.innerWidth <= 760) {
    if (heroShell.contains(aboutSection)) return;
    heroShell.insertBefore(aboutSection, heroVisual);
    return;
  }

  if (aboutAnchor.parentNode && aboutAnchor.nextElementSibling !== aboutSection) {
    aboutAnchor.parentNode.insertBefore(aboutSection, aboutAnchor.nextSibling);
  }
}

function setupMobileAboutPlacement() {
  placeAboutSection();
  window.addEventListener("resize", placeAboutSection);
}

function setupHeroInteractions() {
  if (!heroSection) return;

  if (!prefersReducedMotion) {
    window.addEventListener("pointermove", (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      heroSection.style.setProperty("--mx", `${x}%`);
      heroSection.style.setProperty("--my", `${y}%`);
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
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reportValidity();
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
  setupMobileNav();
  setupMobileAboutPlacement();
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
