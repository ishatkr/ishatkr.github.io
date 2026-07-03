# Data Science Portfolio Website

This is a static GitHub Pages portfolio for a telecom engineer moving into data scientist, BI, cloud AI, GenAI, chatbot, DevOps, and automation roles.

## What is included

- Attractive single-page portfolio website
- Clickable project cards with detailed case study modals
- Starter resume PDF attachment
- Local hero image and project thumbnails
- GitHub Pages friendly structure with no build step

## Files to edit before publishing

1. Open `app.js`.
2. Update the `profile` object:
   - `name`
   - `initials`
   - `email`
   - `github`
   - `linkedin`
3. Replace `assets/resume/TK_Isha_Rehman_Resume.pdf` with an updated resume PDF whenever needed.
4. Replace `repo` and `demo` values for each project after you create the individual GitHub repositories.
5. Update project descriptions to match what you have actually built and can explain in interviews.

## Recommended project repos to create

- `air-quality-forecasting-ml`
- `telecom-customer-churn-prediction`
- `network-kpi-anomaly-detection`
- `world-cup-2026-match-prediction-simulator`
- `snowflake-telecom-analytics-warehouse`
- `powerbi-telecom-executive-dashboard`
- `rag-telecom-support-chatbot`
- `azure-ml-model-deployment-pipeline`
- `genai-report-automation-assistant`

Each repo should include:

- `README.md` with business problem, approach, results, and screenshots
- Dataset note or synthetic data generator
- Notebook or scripts
- Architecture diagram
- Screenshots of model results, dashboard, chatbot, or automation output

## Deploy on GitHub Pages

Option A: user site

1. Create a GitHub repository named `ishatkr.github.io`.
2. Upload the contents of this folder to the repository root.
3. Go to `Settings -> Pages`.
4. Select `Deploy from a branch`.
5. Choose `main` and `/root`.
6. Your site will be available at `https://ishatkr.github.io`.

Option B: project site

1. Create a repository named `data-science-portfolio`.
2. Upload the contents of this folder to the repository root.
3. Go to `Settings -> Pages`.
4. Select `Deploy from a branch`.
5. Choose `main` and `/root`.
6. Your site will be available at `https://ishatkr.github.io/data-science-portfolio`.

## GitHub profile README

Create a separate repository with the same name as your GitHub username, then add this short profile README:

```md
# Hi, I am TK Isha Rehman

Telecommunication engineer with around 5 years of data analysis experience, focused on Python, Snowflake, Power BI, Azure ML Studio, Azure AI, RAG, LLMs, GenAI tools, chatbots, DevOps, and automation scripting.

## Featured Portfolio

- Portfolio website: https://ishatkr.github.io
- Air Quality Monitoring and Forecasting using ML
- Telecom Customer Churn Prediction
- RAG Chatbot for Telecom Support
- Power BI Telecom Executive Dashboard

## Tech Stack

Python | SQL | Snowflake | Power BI | Azure ML Studio | Azure AI Search | Azure OpenAI | RAG | LLMs | GitHub Actions | Automation
```


## Live configuration used

- GitHub username: `ishatkr`
- User-site repository: `ishatkr/ishatkr.github.io`
- Expected live URL: `https://ishatkr.github.io`
- Contact email currently set in site: `ishatk.rehman@gmail.com`
- LinkedIn currently set in site: `https://www.linkedin.com/in/t-k-isha-rehman-2764ba1aa/`

## Assets folder checklist

Upload the final `assets` folder to the repository root. It should contain:

```text
assets/
  images/
    hero-data-ai-telecom.png
    projects/
      air-quality.png
      telecom-churn.png
      network-anomaly.png
      world-cup-2026.png
      snowflake-warehouse.png
      powerbi-dashboard.png
      rag-chatbot.png
      azure-mlops.png
      genai-automation.png
  resume/
    TK_Isha_Rehman_Resume.pdf
```

Do not rename these files unless you also update the paths inside `index.html` and `app.js`.
