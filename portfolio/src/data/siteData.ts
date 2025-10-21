export type Link = { label: string; href: string };

export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  title: string;
  org?: string;
  period?: string;
  summary: string;
  links?: Link[];
  tags?: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  details?: string;
};

export type Certification = {
  name: string;
  org: string;
  issued: string;
  credentialId?: string;
  link?: string;
};

export type SiteData = {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  links: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: { category: string; items: string[] }[];
  certifications: Certification[];
};

export const siteData: SiteData = {
  name: "Charith Kandula",
  title: "AI/ML Engineer · Full‑Stack Developer",
  email: "Kandulacharith7@gmail.com",
  phone: "312-585-9340",
  links: {
    github: "https://github.com/kandulacharith4",
    // TODO: replace with your actual LinkedIn URL
    linkedin: "https://www.linkedin.com/in/your-linkedin",
  },
  summary:
    "AI/ML engineer with ~2 years training and deploying models and ~2 years building secure full‑stack apps. I deliver ML features end‑to‑end using PyTorch, FastAPI, Spring Boot, React, and Azure.",
  experiences: [
    {
      company: "Lid Vizion",
      role: "Generative AI Engineer",
      location: "Miami, FL (remote)",
      start: "Jan 2024",
      end: "Present",
      bullets: [
        "Designed and built Mealy App, a 3D model generation tool using React, Three.js, and AI‑powered generative models.",
        "Deployed front‑end and APIs on Azure App Services and Azure Storage for scalable hosting and content delivery.",
        "Integrated real‑time API feedback, 3D viewers (glTF/glb), and responsive UI components for interactive UX.",
        "Implemented Python‑based monitoring with Azure Monitor/Application Insights to track accuracy, latency, and GPU utilization.",
        "Fine‑tuned and served models with PyTorch + FastAPI; added quality metrics and usage analytics.",
        "Automated CI/CD with GitHub Actions for continuous deployment to Azure environments.",
      ],
    },
    {
      company: "University of South Dakota",
      role: "Graduate Research Assistant",
      location: "Vermillion, SD",
      start: "Aug 2023",
      end: "Dec 2023",
      bullets: [
        "Conducted research in climate forecasting using LSTM/Transformer hybrids and Python ML tooling.",
        "Performed large‑scale data wrangling, evaluation pipelines, and reproducible experiments.",
        "Created dataset auditing and annotation verification tools; automated batch processing scripts.",
      ],
    },
    {
      company: "Merkle",
      role: "Java Full‑Stack Developer",
      start: "Jul 2021",
      end: "Jul 2023",
      bullets: [
        "Developed secure RESTful microservices with Java, C++ and Spring Boot to bridge front‑end systems with legacy mainframes.",
        "Integrated JBPM, role‑based access, and optimized Oracle SQL for consistency and performance.",
        "Modernized legacy components to Java‑based microservices; contributed to UI/UX improvements.",
        "Built CI/CD pipelines with GitHub Actions for automated testing and deployment.",
      ],
    },
  ],
  projects: [
    {
      title: "AI Chatbot Install (Chatbase + WordPress)",
      org: "Freelance",
      period: "Aug 2025",
      summary:
        "Lead‑capture chatbot for a local services business. Trained on company profile/FAQs, added strict scheduling rules, and embedded in WordPress with a floating bubble.",
      tags: ["Chatbase", "GPT‑4o mini", "WordPress"],
    },
    {
      title: "CSV → 3D Object Pipeline",
      org: "Lid Vizion",
      period: "Mar 2025 – May 2025",
      summary:
        "Rebuilt a full‑stack pipeline that converts CSV inputs into AI‑generated Blender scripts and 3D models; included async processing and AWS S3 file delivery.",
      tags: ["Rails", "React", "Sidekiq", "AWS S3", "Blender"],
    },
    {
      title: "Stable Diffusion Text‑to‑Image Generator",
      org: "Lid Vizion",
      period: "Dec 2023 – Mar 2025",
      summary:
        "Python interface for SD 1.5 with GPU inference microservices for high‑res synthesis from natural‑language prompts.",
      tags: ["Python", "Stable Diffusion", "FastAPI"],
    },
    {
      title: "Mealy App – 3D Model Generator",
      org: "Lid Vizion",
      period: "Dec 2024 – Feb 2025",
      summary:
        "Interactive web app that generates 3D models from text/image. Accessible UX, responsive layout, and Azure‑hosted APIs supporting glb/gltf formats.",
      links: [{ label: "GitHub", href: "https://github.com/kandulacharith4" }],
      tags: ["React", "Three.js", "Azure", "CI/CD"],
    },
    {
      title: "3D Model Viewer Tool",
      org: "Lid Vizion",
      period: "Nov 2024 – Dec 2024",
      summary: "Web 3D viewer supporting glTF/glb with performant rendering and simple UI.",
      links: [
        {
          label: "Repo",
          href: "https://github.com/kandulacharith4/3D-Model-Viewer",
        },
      ],
      tags: ["Three.js", "React"],
    },
  ],
  education: [
    {
      school: "University of South Dakota",
      degree: "M.S., Computer Science (GPA 3.7)",
      period: "Aug 2023 – May 2025",
    },
    {
      school: "Sasi Institute of Technology, India",
      degree: "B.Tech, Computer Science (GPA 3.8)",
      period: "Jun 2018 – Jun 2022",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "Java",
        "Python",
        "C++",
        "JavaScript/TypeScript",
        "SQL",
        "Go",
        "C#",
        "HTML/CSS/SASS",
        "XML/JSON",
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React",
        "Node.js/Express",
        "Spring Boot",
        "Flask/FastAPI",
        "Three.js",
      ],
    },
    {
      category: "ML/AI",
      items: [
        "PyTorch",
        "TensorFlow",
        "Transformers/Hugging Face",
        "OpenAI API",
        "Stable Diffusion",
        "RAG/LLM",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Azure",
        "AWS",
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "Jenkins",
      ],
    },
    {
      category: "Datastores",
      items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Observability & Tools",
      items: [
        "Splunk",
        "Azure Application Insights",
        "OpenAPI/Swagger",
        "Jira",
        "Git/Maven",
      ],
    },
  ],
  certifications: [
    {
      name: "Oracle Certified Associate, Java SE 8 Programmer",
      org: "Oracle",
      issued: "Sep 2025",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      org: "Oracle",
      issued: "Dec 2025",
    },
  ],
};
