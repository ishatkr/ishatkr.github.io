const profile = {
  name: "TK Isha Rehman",
  initials: "TK",
  role: "Data Scientist | Telecom Analytics Engineer | BI, ML, GenAI and Cloud Automation",
  summary:
    "Telecommunication engineer with around 5 years of data analysis experience, building dashboards, ML workflows, automation scripts, and AI-powered knowledge solutions for operational decision making.",
  resume: "assets/resume/TK_Isha_Rehman_Resume.pdf",
  github: "https://github.com/ishatkr",
  linkedin: "https://www.linkedin.com/in/t-k-isha-rehman-2764ba1aa/",
  email: "ishatk.rehman@gmail.com",
};

const skills = [
  {
    group: "Programming and Analytics",
    items: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "PowerShell", "Automation scripting"],
  },
  {
    group: "Data Platforms",
    items: ["Snowflake", "ETL design", "Data modeling", "Dimensional schemas", "Data quality checks"],
  },
  {
    group: "Business Intelligence",
    items: ["Power BI", "DAX", "KPI dashboards", "Executive reporting", "Operational analytics"],
  },
  {
    group: "Machine Learning",
    items: ["Forecasting", "Classification", "Anomaly detection", "Feature engineering", "Model evaluation"],
  },
  {
    group: "Azure AI and ML",
    items: ["Azure ML Studio", "Azure AI Search", "Azure OpenAI", "Cognitive Services", "Model endpoints"],
  },
  {
    group: "GenAI and DevOps",
    items: ["RAG", "LLMs", "Prompt engineering", "Chatbots", "GitHub Actions", "CI/CD concepts"],
  },
];

const projects = [
  {
    id: "air-quality-forecasting",
    title: "Air Quality Monitoring and Forecasting Using ML",
    category: "Machine Learning",
    status: "FYP Anchor Project",
    image: "assets/images/projects/air-quality.png",
    summary:
      "Forecasting workflow for air quality sensor readings, built around data cleaning, feature engineering, model comparison, and environmental insight reporting.",
    stack: ["Python", "Pandas", "Scikit-learn", "Time Series", "Visualization"],
    challenge:
      "Air quality readings can change quickly and are difficult to interpret without forecasting, trend detection, and clear monitoring views.",
    solution:
      "Built a machine learning workflow that prepares sensor data, creates lag and rolling features, trains forecasting models, and visualizes pollution trends for decision support.",
    architecture: ["Sensor readings", "Python cleaning pipeline", "Feature engineering", "Forecasting model", "Trend dashboard"],
    outcomes: [
      "Created a credible ML anchor for the portfolio based on your final year project.",
      "Shows practical handling of noisy sensor data and time-based features.",
      "Can be extended with live IoT ingestion, Azure ML deployment, and Power BI monitoring.",
    ],
    detail:
      "Use this as the deepest technical project. Add your original dataset, notebooks, model comparison table, charts, and a short write-up of how forecast accuracy was evaluated.",
    repo: "#",
    demo: "#",
  },
  {
    id: "telecom-churn",
    title: "Telecom Customer Churn Prediction",
    category: "Machine Learning",
    status: "Portfolio Case Study",
    image: "assets/images/projects/telecom-churn.png",
    summary:
      "Customer churn risk scoring using usage, billing, complaints, tenure, plan type, and customer interaction features.",
    stack: ["Python", "SQL", "Scikit-learn", "Power BI", "Feature Engineering"],
    challenge:
      "Telecom teams need early warning signals for customers who may leave, especially high-value segments with complaints or service degradation.",
    solution:
      "Designed a classification workflow that cleans customer data, engineers churn drivers, compares baseline and tree-based models, and publishes a churn score for reporting.",
    architecture: ["Customer data", "SQL feature layer", "Python model training", "Risk scoring", "Power BI segmentation"],
    outcomes: [
      "Frames churn as a business problem, not only a model exercise.",
      "Highlights explainable features such as complaints, payment pattern, tenure, plan changes, and usage drop.",
      "Pairs ML output with a BI dashboard for retention teams.",
    ],
    detail:
      "For GitHub, include a notebook, synthetic or public telecom churn dataset, feature importance chart, confusion matrix, and a sample dashboard screenshot.",
    repo: "#",
    demo: "#",
  },
  {
    id: "network-kpi-anomaly",
    title: "Telecom Network KPI Anomaly Detection",
    category: "Machine Learning",
    status: "Domain Case Study",
    image: "assets/images/projects/network-anomaly.png",
    summary:
      "Time-series anomaly detection concept for network KPIs such as dropped calls, latency, throughput, availability, and complaint spikes.",
    stack: ["Python", "Time Series", "Anomaly Detection", "Automation", "Telecom KPIs"],
    challenge:
      "Network KPI degradation needs fast detection so operations teams can identify regions, cells, or services showing abnormal behavior.",
    solution:
      "Created an anomaly monitoring pattern using rolling baselines, seasonal thresholds, and alert-ready outputs for service quality teams.",
    architecture: ["Daily KPI feed", "Rolling baselines", "Anomaly rules", "Alert export", "Ops dashboard"],
    outcomes: [
      "Connects telecom engineering knowledge with data science methods.",
      "Demonstrates automation scripting for recurring KPI checks.",
      "Supports practical alerting and root-cause investigation workflows.",
    ],
    detail:
      "Add sample KPI data, plots with highlighted anomalies, a thresholding script, and a README explaining what each KPI means operationally.",
    repo: "#",
    demo: "#",
  },
  {
    id: "world-cup-2026-simulator",
    title: "World Cup 2026 Match Prediction and Bracket Simulator",
    category: "Machine Learning",
    status: "Sports Analytics Project",
    image: "assets/images/projects/world-cup-2026.png",
    summary:
      "Predicts every match result, estimates team advancement probabilities, and simulates the full World Cup 2026 bracket thousands of times.",
    stack: ["Python", "Streamlit", "XGBoost", "Poisson Regression", "Monte Carlo"],
    challenge:
      "Tournament outcomes are uncertain because team strength, form, injuries, matchups, and knockout paths all interact. A useful simulator needs probabilities, not just one predicted winner.",
    solution:
      "Designed a modeling workflow that combines team strength features, historical results, ranking signals, goals for and against, market or manually curated context, and simulation logic to estimate match and tournament probabilities.",
    architecture: [
      "FIFA rankings and Elo ratings",
      "International results and team features",
      "Win-draw-loss and score models",
      "Knockout bracket simulator",
      "Streamlit probability dashboard",
    ],
    outcomes: [
      "Shows machine learning, probability, feature engineering, model evaluation, and Monte Carlo simulation in one memorable project.",
      "Produces dashboard outputs such as win probability, final probability, semi-final probability, and projected bracket paths.",
      "Creates a recruiter-friendly project outside telecom while still proving strong applied modeling ability.",
    ],
    detail:
      "Build a Streamlit dashboard with a table like Team, Win Probability, Final Probability, and Semi-Final Probability. Use FIFA rankings, Elo ratings, previous international results, goals scored and conceded, squad value, player form, bookmaker odds where available, and manually scraped injuries or news. Compare Poisson regression for score prediction, XGBoost or Random Forest for win-draw-loss, and a Bayesian uncertainty layer for probability calibration.",
    repo: "#",
    demo: "#",
  },
  {
    id: "snowflake-warehouse",
    title: "Snowflake Data Warehouse for Telecom Analytics",
    category: "Data Engineering",
    status: "Architecture Project",
    image: "assets/images/projects/snowflake-warehouse.png",
    summary:
      "Dimensional data model for telecom analytics covering customers, plans, usage, billing, complaints, network quality, and churn.",
    stack: ["Snowflake", "SQL", "ETL", "Star Schema", "Data Quality"],
    challenge:
      "Telecom analytics often depends on fragmented operational tables that are hard to query consistently for BI and ML use cases.",
    solution:
      "Designed a warehouse layer with fact and dimension tables, clear grain definitions, data quality checks, and analytics-ready marts.",
    architecture: ["Raw source tables", "Staging layer", "Dimension tables", "Fact tables", "BI and ML marts"],
    outcomes: [
      "Shows readiness for analytics engineering and data platform work.",
      "Creates a foundation for Power BI dashboards and churn model features.",
      "Demonstrates SQL design beyond simple querying.",
    ],
    detail:
      "For the repo, include schema diagrams, CREATE TABLE scripts, sample transformations, and example business queries.",
    repo: "#",
    demo: "#",
  },
  {
    id: "powerbi-dashboard",
    title: "Power BI Executive KPI Dashboard",
    category: "BI",
    status: "Dashboard Project",
    image: "assets/images/projects/powerbi-dashboard.png",
    summary:
      "Executive dashboard concept for telecom KPIs including ARPU, churn, complaint aging, revenue movement, network quality, and SLA adherence.",
    stack: ["Power BI", "DAX", "Data Modeling", "KPI Design", "Storytelling"],
    challenge:
      "Leadership needs fast, reliable visibility into revenue, customer experience, and network performance without digging through raw reports.",
    solution:
      "Built a dashboard structure with executive summary cards, drill-down slices, trend views, and KPI definitions aligned to business questions.",
    architecture: ["Snowflake mart", "Power BI model", "DAX measures", "Executive view", "Operational drill-downs"],
    outcomes: [
      "Demonstrates your 5 years of analysis experience in a visual, business-facing way.",
      "Shows KPI design, not only chart creation.",
      "Can be paired with downloadable PBIX screenshots in the project repo.",
    ],
    detail:
      "Add exported dashboard images, DAX measure examples, a data dictionary, and a short explanation of the audience for each page.",
    repo: "#",
    demo: "#",
  },
  {
    id: "rag-chatbot",
    title: "RAG Chatbot for Telecom Support Knowledge Base",
    category: "GenAI",
    status: "Applied AI Project",
    image: "assets/images/projects/rag-chatbot.png",
    summary:
      "Retrieval-augmented chatbot pattern for telecom FAQs, policy documents, troubleshooting guides, and internal support knowledge.",
    stack: ["Azure AI Search", "Azure OpenAI", "RAG", "Python", "Chatbot UX"],
    challenge:
      "Support teams and customers need answers grounded in approved documents instead of generic LLM responses.",
    solution:
      "Designed a RAG pipeline that chunks documents, creates embeddings, retrieves relevant passages, and generates grounded answers with citations.",
    architecture: ["Knowledge documents", "Chunking", "Embeddings", "Azure AI Search", "LLM response", "Chat interface"],
    outcomes: [
      "Shows modern GenAI capability with a practical business use case.",
      "Highlights grounding, retrieval, and answer quality rather than prompt demos alone.",
      "Can be extended with conversation memory, feedback capture, and escalation logic.",
    ],
    detail:
      "For GitHub, include a small document set, ingestion script, retrieval flow diagram, sample prompts, and screenshots of answer citations.",
    repo: "#",
    demo: "#",
  },
  {
    id: "azure-ml-pipeline",
    title: "Azure ML Studio Model Deployment Pipeline",
    category: "Cloud AI",
    status: "MLOps Project",
    image: "assets/images/projects/azure-mlops.png",
    summary:
      "Cloud ML workflow showing model training, experiment tracking, registration, deployment, and endpoint monitoring using Azure ML Studio.",
    stack: ["Azure ML Studio", "Python", "Model Registry", "Endpoints", "GitHub Actions"],
    challenge:
      "A portfolio ML model is stronger when it demonstrates a path from notebook to repeatable deployment.",
    solution:
      "Outlined a model lifecycle pipeline with reproducible training, registered artifacts, endpoint deployment, and basic monitoring checks.",
    architecture: ["Source repo", "Training script", "Azure ML experiment", "Model registry", "Online endpoint", "Monitoring"],
    outcomes: [
      "Signals production awareness for ML workflows.",
      "Connects Python modeling with DevOps and cloud operations.",
      "Creates a deployment pattern reusable across churn, forecasting, or classification projects.",
    ],
    detail:
      "Add Azure screenshots, environment YAML, training script, scoring script, endpoint test call, and a GitHub Actions workflow stub.",
    repo: "#",
    demo: "#",
  },
  {
    id: "genai-automation",
    title: "GenAI Report Automation Assistant",
    category: "Automation",
    status: "Automation Project",
    image: "assets/images/projects/genai-automation.png",
    summary:
      "Automation assistant that drafts KPI summaries, ticket digests, complaint themes, and stakeholder-ready reporting notes from structured data.",
    stack: ["Python", "LLMs", "Prompt Engineering", "PowerShell", "Reporting Automation"],
    challenge:
      "Recurring reports and support summaries take time, especially when analysts need to turn raw metrics into concise business language.",
    solution:
      "Designed scripts that pull data extracts, create metric summaries, pass controlled context to an LLM, and generate review-ready draft narratives.",
    architecture: ["CSV or SQL extract", "Python profiling", "Prompt template", "LLM summary", "Human review", "Report export"],
    outcomes: [
      "Shows practical automation beyond dashboards.",
      "Demonstrates human-in-the-loop GenAI usage for safe business reporting.",
      "Fits data analyst, data scientist, and AI automation roles.",
    ],
    detail:
      "Include sample inputs, generated summaries, prompt templates, and a safety note explaining validation before sending reports.",
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
      <h3>What To Add In The GitHub Repo</h3>
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
