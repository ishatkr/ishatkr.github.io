const profile = {
  name: "TK Isha Rehman",
  initials: "TK",
  role: "Data Scientist | Telecom Analytics Engineer | BI, ML and Automation",
  summary:
    "I combine telecommunications engineering, business analysis, BI reporting, forecasting, and automation to turn operational data into decisions that improve revenue visibility, service performance, and executive reporting.",
  resume: "assets/resume/TK_Isha_Rehman_Resume.pdf",
  github: "https://github.com/ishatkr",
  linkedin: "https://www.linkedin.com/in/t-k-isha-rehman-2764ba1aa/",
  email: "ishatk.rehman@gmail.com",
};

const skills = [
  {
    group: "Analytics and BI",
    items: ["Power BI", "Advanced Excel", "KPI dashboards", "Executive reporting", "Forecasting", "Variance analysis"],
  },
  {
    group: "Data and Automation",
    items: ["Python", "SQL", "Pandas", "NumPy", "VBA", "Automation scripting"],
  },
  {
    group: "Machine Learning",
    items: ["Time-series forecasting", "Classification", "Anomaly detection", "Feature engineering", "Model evaluation"],
  },
  {
    group: "Business Systems",
    items: ["Oracle Fusion", "ERP reporting", "Procurement controls", "PR/PO workflows", "Data quality checks"],
  },
  {
    group: "Domain Strength",
    items: ["Telecom KPIs", "Revenue analytics", "Operations performance", "Service quality", "Stakeholder reporting"],
  },
  {
    group: "Applied AI Direction",
    items: ["RAG", "LLMs", "Prompt engineering", "Chatbots", "Azure AI concepts", "Human-in-the-loop review"],
  },
];

const projects = [
  {
    id: "air-quality-forecasting",
    title: "Air Quality Monitoring and Forecasting Using ML",
    category: "Machine Learning",
    status: "Final Year Project | Built",
    image: "assets/images/projects/air-quality.png",
    summary:
      "Built an IoT and ML-based air quality monitoring concept using sensor readings, Python analysis, forecasting logic, and visual trend reporting.",
    stack: ["Python", "Arduino", "Raspberry Pi", "Sensors", "Forecasting", "Visualization"],
    challenge:
      "Air pollution data is difficult to act on when readings are scattered, noisy, and not converted into clear trends or forecast signals.",
    solution:
      "I worked on a monitoring and forecasting workflow that collected air quality readings, prepared the data for analysis, compared trends, and converted the output into practical environmental insight.",
    architecture: ["CO, CO2, Ozone and PM2.5 sensor readings", "Arduino and Raspberry Pi collection layer", "Python cleaning and feature preparation", "Forecasting and trend analysis", "Dashboard-ready environmental insights"],
    outcomes: [
      "Anchors my machine learning portfolio with an actual engineering project.",
      "Demonstrates sensor data handling, time-based analysis, and practical forecasting thinking.",
      "Can be extended into a live dashboard, Azure ML endpoint, or Power BI monitoring view.",
    ],
    detail:
      "Evidence to add: project report, architecture diagram, sample readings, Python notebook, forecasting charts, model comparison table, and a short explanation of evaluation metrics.",
    repo: "#",
    demo: "#",
  },
  {
    id: "predictive-maintenance-dashboard",
    title: "Predictive Maintenance Dashboard",
    category: "Machine Learning",
    status: "GitHub Project | Built",
    image: "assets/images/projects/predictive-maintenance.png",
    summary:
      "A machine-learning dashboard concept for predicting equipment failure risk and helping operations teams prioritize maintenance activity.",
    stack: ["Python", "Scikit-learn", "Plotly", "Flask", "Dashboarding"],
    challenge:
      "Maintenance teams need early warning indicators before equipment failure creates downtime, cost escalation, or service disruption.",
    solution:
      "I built a project structure that applies predictive modeling to maintenance data and presents risk indicators through a dashboard-style interface.",
    architecture: ["Maintenance history", "Feature preparation", "ML risk model", "Failure probability output", "Interactive dashboard view"],
    outcomes: [
      "Shows my ability to move from data preparation to model output and visual presentation.",
      "Connects machine learning to an operations problem that recruiters can understand quickly.",
      "Provides a GitHub evidence point that can be improved with screenshots, metrics, and deployment notes.",
    ],
    detail:
      "Evidence to add: README with problem statement, sample dataset, model notebook, dashboard screenshots, performance metrics, and instructions to run locally.",
    repo: "https://github.com/ishatkr/Predictive-Maintenance-Dashboard",
    demo: "#",
  },
  {
    id: "budget-forecasting-automation",
    title: "Budgeting and Forecasting Automation for Visa Operations",
    category: "BI and Analytics",
    status: "Professional Case Study",
    image: "assets/images/projects/budget-forecasting.png",
    summary:
      "Developed forecasting and reporting workflows for revenue, cost, headcount, and business-unit performance used in management reviews.",
    stack: ["Excel", "Power BI", "Forecasting", "Variance Analysis", "Executive Reporting"],
    challenge:
      "Leadership needed faster, clearer visibility into revenue movement, operating cost, applicant volume, and forecast gaps across multiple business units.",
    solution:
      "I created structured forecasting templates, monthly review packs, variance analysis views, and executive summaries that reduced manual reporting effort and improved decision visibility.",
    architecture: ["Raw finance and operations inputs", "Data validation and mapping", "Forecast and budget models", "Variance and trend analysis", "Management reporting pack"],
    outcomes: [
      "Reduced reporting turnaround by converting recurring analysis into reusable templates.",
      "Improved budget discussion quality through clear variance drivers and performance commentary.",
      "Demonstrates my ability to translate numbers into business decisions, not just charts.",
    ],
    detail:
      "Evidence to add: sanitized workbook screenshots, sample forecast template, KPI dictionary, variance bridge, and a short case-study README using dummy data.",
    repo: "#",
    demo: "#",
  },
  {
    id: "visa-kpi-dashboard",
    title: "Operational KPI and Revenue Performance Dashboard",
    category: "BI and Analytics",
    status: "Professional Case Study",
    image: "assets/images/projects/powerbi-dashboard.png",
    summary:
      "Built KPI reporting views for applicant volume, value-added service conversion, revenue performance, SLA adherence, and operational efficiency.",
    stack: ["Power BI", "Excel", "DAX", "KPI Design", "Operations Analytics"],
    challenge:
      "Operations and leadership teams needed a consistent view of performance instead of disconnected spreadsheets and ad-hoc updates.",
    solution:
      "I structured KPI definitions, dashboard pages, drill-down views, and management commentary so teams could track performance by service, region, and time period.",
    architecture: ["Operations and revenue extracts", "KPI definition layer", "Power BI / Excel model", "Trend and drill-down views", "Executive action summary"],
    outcomes: [
      "Highlights practical BI experience with business context and stakeholder impact.",
      "Shows dashboard design, KPI ownership, and performance storytelling.",
      "Recruiters can see direct relevance to BI Analyst, Data Analyst, and Analytics Engineer roles.",
    ],
    detail:
      "Evidence to add: mock dashboard screenshots, DAX examples, data dictionary, before/after reporting process, and sanitized sample data.",
    repo: "#",
    demo: "#",
  },
  {
    id: "oracle-procurement-reporting",
    title: "Oracle Fusion Procurement Reporting and Controls Rollout",
    category: "Automation",
    status: "Professional Implementation",
    image: "assets/images/projects/oracle-procurement.png",
    summary:
      "Supported Oracle Fusion reporting and procurement controls by standardizing vendor, quotation, PR/PO, and reporting workflows.",
    stack: ["Oracle Fusion", "ERP Reporting", "Procurement Analytics", "Process Controls", "Data Quality"],
    challenge:
      "Procurement reporting can become unreliable when vendor onboarding, item codes, quotation controls, approvals, and PO tracking are inconsistent.",
    solution:
      "I helped convert manual procurement follow-ups into a more structured process with system-based records, reporting discipline, and clearer control points.",
    architecture: ["Vendor registration", "Item and category mapping", "PR/PO workflow", "Quotation and approval controls", "ERP reporting outputs"],
    outcomes: [
      "Demonstrates business-system understanding beyond dashboard creation.",
      "Shows experience with control design, data quality, and process adoption.",
      "Useful for analytics roles that require ERP, finance, procurement, or operations exposure.",
    ],
    detail:
      "Evidence to add: process flow diagram, sample PR/PO tracker, control checklist, reporting mockup, and a sanitized implementation summary.",
    repo: "#",
    demo: "#",
  },
  {
    id: "applicant-volume-analytics",
    title: "Applicant Volume, VAS Conversion and Revenue Analytics",
    category: "BI and Analytics",
    status: "Professional Case Study",
    image: "assets/images/projects/revenue-analytics.png",
    summary:
      "Analyzed applicant volumes, service mix, value-added service conversion, and revenue trends to support staffing, targets, and performance reviews.",
    stack: ["Excel", "Power BI", "Revenue Analytics", "Conversion Analysis", "Operations Planning"],
    challenge:
      "High-volume operations need visibility into demand, conversion, staffing pressure, and revenue movement so managers can act quickly.",
    solution:
      "I converted recurring operational extracts into structured performance views, highlighting demand trends, conversion gaps, revenue drivers, and station-level performance.",
    architecture: ["Applicant and service extracts", "Revenue and conversion mapping", "Trend and station analysis", "Management commentary", "Action tracking"],
    outcomes: [
      "Reflects my strongest professional analytics experience with measurable business relevance.",
      "Shows how I connect operational data to revenue and staffing decisions.",
      "Positions me for BI, revenue analytics, operations analytics, and FP&A analytics roles.",
    ],
    detail:
      "Evidence to add: sanitized service mix dataset, conversion funnel chart, station comparison dashboard, monthly commentary sample, and KPI definitions.",
    repo: "#",
    demo: "#",
  },
  {
    id: "stock-reconciliation-automation",
    title: "IT Asset and Stock Reconciliation Analytics",
    category: "Automation",
    status: "Professional Case Study",
    image: "assets/images/projects/stock-reconciliation.png",
    summary:
      "Designed a reconciliation approach for monitors, mini PCs, docking stations, and peripheral inventory across office locations.",
    stack: ["Excel", "Data Cleaning", "Reconciliation", "Controls", "Operational Reporting"],
    challenge:
      "Distributed stock records become difficult to trust when items move between locations and teams rely on separate manual updates.",
    solution:
      "I structured reconciliation logic to compare stock records, identify gaps, support transfer decisions, and create a cleaner view for stakeholders.",
    architecture: ["Location-wise stock extracts", "Item normalization", "Variance checks", "Transfer recommendation view", "Stakeholder summary"],
    outcomes: [
      "Shows practical data cleaning and reconciliation skills that are valuable in real operations.",
      "Demonstrates control mindset, stakeholder communication, and decision support.",
      "Can be converted into a strong Excel/Power BI portfolio artifact using dummy inventory data.",
    ],
    detail:
      "Evidence to add: dummy inventory dataset, reconciliation workbook, variance rules, transfer recommendation table, and dashboard screenshot.",
    repo: "#",
    demo: "#",
  },
  {
    id: "genai-reporting-assistant",
    title: "GenAI Reporting Assistant for KPI Commentary",
    category: "Applied AI",
    status: "Portfolio Build | In Progress",
    image: "assets/images/projects/genai-automation.png",
    summary:
      "A planned assistant that turns structured KPI tables into first-draft management commentary with human review before sharing.",
    stack: ["Python", "LLMs", "Prompt Engineering", "CSV Analysis", "Report Automation"],
    challenge:
      "Analysts spend significant time converting monthly KPI movements into concise stakeholder-ready explanations.",
    solution:
      "I am building a human-in-the-loop workflow that profiles KPI extracts, identifies important movements, and drafts commentary that an analyst can validate before use.",
    architecture: ["CSV or Excel input", "Python profiling", "Movement detection", "Prompt template", "Draft commentary", "Human validation"],
    outcomes: [
      "Shows my direction toward practical GenAI rather than generic chatbot demos.",
      "Fits naturally with my reporting, BI, and stakeholder communication background.",
      "Can be demonstrated safely with dummy data and clear validation rules.",
    ],
    detail:
      "Evidence to add: sample KPI input, prompt template, generated commentary examples, validation checklist, and README explaining responsible AI review.",
    repo: "#",
    demo: "#",
  },
];

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function tagList(items) {
  return items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
}

function listItems(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function applyProfile() {
  document.querySelectorAll("[data-name]").forEach((node) => {
    node.textContent = profile.name;
  });
  document.querySelector("[data-initials]").textContent = profile.initials;
  document.querySelector("[data-role]").textContent = profile.role;
  document.querySelector("[data-summary]").textContent = profile.summary;
}

function renderSkills() {
  const target = document.querySelector("[data-skills]");
  target.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-group">
          <h3>${escapeHtml(skill.group)}</h3>
          <div class="skill-tags">${tagList(skill.items)}</div>
        </article>
      `
    )
    .join("");
}

function renderFilters() {
  const target = document.querySelector("[data-filters]");
  target.innerHTML = filters
    .map(
      (filter, index) => `
        <button class="filter-btn ${index === 0 ? "is-active" : ""}" type="button" data-filter="${escapeHtml(filter)}">
          ${escapeHtml(filter)}
        </button>
      `
    )
    .join("");

  target.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    target.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
}

function renderProjects(filter = "All") {
  const target = document.querySelector("[data-projects]");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  target.innerHTML = visible
    .map(
      (project) => `
        <button class="project-card" type="button" data-project-id="${escapeHtml(project.id)}">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} thumbnail" loading="lazy" />
          <span class="project-card-body">
            <span class="project-status">${escapeHtml(project.status)}</span>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <span class="project-tags">${tagList(project.stack.slice(0, 4))}</span>
            <span class="project-more">Open case study</span>
          </span>
        </button>
      `
    )
    .join("");
}

function projectById(id) {
  return projects.find((project) => project.id === id);
}

function openProject(project) {
  const modal = document.querySelector("[data-modal]");
  const content = document.querySelector("[data-modal-content]");
  const repoClass = project.repo === "#" ? " disabled-link" : "";
  const demoClass = project.demo === "#" ? " disabled-link" : "";

  content.innerHTML = `
    <div class="modal-hero">
      <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} visual" />
      <div class="modal-title-block">
        <p class="eyebrow">${escapeHtml(project.category)} | ${escapeHtml(project.status)}</p>
        <h2 id="modal-title">${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.summary)}</p>
        <div class="modal-tags">${tagList(project.stack)}</div>
        <div class="modal-actions">
          <a class="btn btn-primary${repoClass}" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">Repository</a>
          <a class="btn btn-secondary${demoClass}" href="${escapeHtml(project.demo)}" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
    <div class="modal-grid">
      <section class="detail-block">
        <h3>Business Problem</h3>
        <p>${escapeHtml(project.challenge)}</p>
      </section>
      <section class="detail-block">
        <h3>Solution</h3>
        <p>${escapeHtml(project.solution)}</p>
      </section>
      <section class="detail-block">
        <h3>Architecture</h3>
        <ul>${listItems(project.architecture)}</ul>
      </section>
      <section class="detail-block">
        <h3>Portfolio Value</h3>
        <ul>${listItems(project.outcomes)}</ul>
      </section>
    </div>
    <section class="detail-block">
      <h3>Evidence and Deliverables</h3>
      <p>${escapeHtml(project.detail)}</p>
    </section>
  `;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
  document.body.classList.add("modal-open");
}

function closeProject() {
  const modal = document.querySelector("[data-modal]");
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
  document.body.classList.remove("modal-open");
}

function bindProjectModal() {
  const grid = document.querySelector("[data-projects]");
  const modal = document.querySelector("[data-modal]");

  grid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-id]");
    if (!card) return;
    const project = projectById(card.dataset.projectId);
    if (project) openProject(project);
  });

  document.querySelector("[data-close-modal]").addEventListener("click", closeProject);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeProject();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.open) closeProject();
  });
}

function bindMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

applyProfile();
renderSkills();
renderFilters();
renderProjects();
bindProjectModal();
bindMenu();
