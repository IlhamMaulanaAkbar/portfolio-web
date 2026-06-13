export type Project = {
  slug: string;
  title: string;
  detailTitle: string;
  category: string;
  date: string;
  client: string;
  year: string;
  thumbnail: string;
  image: string;
  gallery: string[];
  description: string;
  technologies: string[];
  features: string[];
  role: string[];
  impact: string[];
};

const sidakGallery = [
  "/projects/e-latmas-training.png",
];

const eLatmasGallery = [
  "/projects/e-latmas-home.png",
  "/projects/e-latmas-alumni.png",
  "/projects/home-e-latmas.png",
  "/projects/e-latmas-training.png",
];

export const projects: Project[] = [
  {
    slug: "sidak",
    title: "SIDAK",
    detailTitle: "Sistem Informasi Data Kegiatan (SIDAK)",
    category: "Web Development",
    date: "March 2026",
    client: "BPPMDDTT Banjarmasin",
    year: "2026",
    thumbnail: "/projects/e-latmas-training.png",
    image: "/projects/e-latmas-training.png",
    gallery: sidakGallery,
    description:
      "SIDAK is a web-based information system designed to improve the efficiency of training and post-training monitoring management at BPPMDDTT Banjarmasin.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    features: [
      "Training activity data management",
      "Monitoring and reporting workflow",
      "Centralized documentation",
      "Participant data validation",
    ],
    role: [
      "Developed application modules using Laravel and MySQL",
      "Built CRUD systems for operational data",
      "Designed structured reporting flows",
      "Collaborated with stakeholders on system requirements",
    ],
    impact: [
      "Improved training monitoring efficiency",
      "Reduced repeated manual data entry",
      "Created clearer documentation for operational reporting",
    ],
  },
  {
    slug: "e-latmas",
    title: "E-LATMAS",
    detailTitle: "Etalase Pelatihan Masyarakat (E-LATMAS)",
    category: "Web Development",
    date: "December 2024",
    client: "BPPMDDTT Banjarmasin",
    year: "2024",
    thumbnail: "/projects/home-e-latmas.png",
    image: "/projects/home-e-latmas.png",
    gallery: eLatmasGallery,
    description:
      "E-LATMAS is a web-based training management and post-training mentoring system developed for BPPMDDTT Banjarmasin.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    features: [
      "Web-based training registration",
      "Participant and alumni management",
      "Post-training mentoring system",
      "Centralized data management and documentation",
    ],
    role: [
      "Developed the web application using Laravel and MySQL",
      "Designed and implemented participant management features",
      "Built CRUD systems and integrated data modules",
      "Managed and validated 400+ alumni records",
      "Collaborated with the institution to align the system with operational needs",
    ],
    impact: [
      "Improved efficiency in training data management",
      "Simplified participant and alumni documentation processes",
      "Supported continuous evaluation and mentoring activities digitally",
    ],
  },
  {
    slug: "sidak-monitoring",
    title: "SIDAK",
    detailTitle: "Sistem Informasi Data Kegiatan (SIDAK)",
    category: "Web Development",
    date: "March 2026",
    client: "BPPMDDTT Banjarmasin",
    year: "2026",
    thumbnail: "/projects/e-latmas-home.png",
    image: "/projects/e-latmas-home.png",
    gallery: ["/projects/e-latmas-home.png"],
    description:
      "SIDAK is a web-based information system designed to improve the efficiency of training and post-training monitoring management at BPPMDDTT Banjarmasin.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    features: [
      "Training activity data management",
      "Monitoring and reporting workflow",
      "Centralized documentation",
      "Participant data validation",
    ],
    role: [
      "Developed application modules using Laravel and MySQL",
      "Built CRUD systems for operational data",
      "Designed structured reporting flows",
      "Collaborated with stakeholders on system requirements",
    ],
    impact: [
      "Improved training monitoring efficiency",
      "Reduced repeated manual data entry",
      "Created clearer documentation for operational reporting",
    ],
  },
];
