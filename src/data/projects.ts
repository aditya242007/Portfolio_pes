export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features?: string[];
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "FinTech Risk & Fraud Analytics",
    category: "DATA SCIENCE / DATA ENGINEERING",
    description: "An end-to-end financial analytics platform that processes transaction, KYC, merchant and chargeback data to identify suspicious behavior and generate actionable risk insights.",
    technologies: ["Python", "SQL", "PostgreSQL", "Pandas", "Scikit-learn", "Power BI", "ETL"],
    features: ["Problem", "Pipeline", "ML", "Dashboard"],
    links: {
      caseStudy: "#",
      github: "#",
    },
  },
  {
    id: "02",
    title: "Retail Customer Behavior Prediction & Segmentation",
    category: "MACHINE LEARNING / ANALYTICS",
    description: "An end-to-end customer analytics system combining exploratory analysis, feature engineering, segmentation and predictive modeling to understand customer behavior.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Power BI"],
    links: {
      caseStudy: "#",
      github: "#",
    },
  },
  {
    id: "03",
    title: "Real-Time Data Engineering Pipeline",
    category: "DATA ENGINEERING",
    description: "An event-driven data pipeline designed to ingest, process, transform and store streaming data for downstream analytics.",
    technologies: ["Python", "Kafka", "PySpark", "Airflow", "PostgreSQL", "Docker", "AWS"],
    links: {
      caseStudy: "#",
      github: "#",
    },
  },
  {
    id: "04",
    title: "Full-Stack Data Application",
    category: "SOFTWARE ENGINEERING",
    description: "A production-style web application combining a modern frontend, backend APIs, database and data-driven functionality.",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    links: {
      live: "#",
      github: "#",
    },
  }
];
