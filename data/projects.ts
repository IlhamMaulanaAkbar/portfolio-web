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
  github: string;
  description: string;
  technologies: string[];
  features: string[];
  role: string[];
  impact: string[];
};

const sidakGallery = [
  "/projects/sidak/sidak.png",
];

const eLatmasGallery = [
  "/projects/e-latmas/home.png",
  "/projects/e-latmas/beranda.png",
  "/projects/e-latmas/dashboard.png",
  "/projects/e-latmas/pelatihan.png",
  "/projects/e-latmas/pembelajaran.png",
];

const sidakMonitoringGallery = [
  "/projects/sidak-monitoring/dashboard.png",
];

const inventoryGallery = [
  "/projects/inventory/dashboard.png",
  "/projects/inventory/kelola-akun.png",
  "/projects/inventory/laporan.png",
];

export const projects: Project[] = [
  {
    slug: "inventory",
    title: "INVENTORY APP",
    detailTitle: "Inventory Management System",
    category: "Web Development",
    date: "June 2026",
    client: "Customer",
    year: "2026",
    thumbnail: inventoryGallery[0],
    image: inventoryGallery[0],
    gallery: inventoryGallery,
    github: "https://github.com/IlhamMaulanaAkbar",
    description:
      "A comprehensive web-based inventory management system designed to efficiently track and manage stock movement, including incoming and outgoing goods. The application provides complete control over product catalogs, categories, item types, supplier data, and stock request workflows — enabling businesses to maintain accurate inventory records and streamline procurement processes.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Dashboard with real-time inventory statistics and stock overview",
      "Incoming Goods — track and record stock arrivals from suppliers",
      "Outgoing Goods — manage and log stock dispatches and distributions",
      "Stock Request — submit and approve item requisition workflows",
      "Product Catalog — comprehensive item master data management",
      "Category Management — organize products into structured categories",
      "Item Type — classify items by type for better organization",
      "Supplier Management — maintain supplier profiles, contacts, and purchase history",
      "Stock Reports — generate detailed reports on inventory levels and movements",
      "Role-based access control and user management",
    ],
    role: [
      "Designed and developed the full-stack web application using Laravel and MySQL",
      "Built CRUD modules for products, categories, item types, and suppliers",
      "Implemented stock movement tracking for incoming and outgoing goods",
      "Developed the stock request and approval workflow system",
      "Created the dashboard with real-time inventory analytics and visualizations",
      "Implemented role-based access control for admin and staff users",
    ],
    impact: [
      "Digitalized manual stock tracking into an automated system",
      "Reduced stock discrepancies through accurate movement logging",
      "Streamlined procurement with structured request and approval workflows",
      "Improved visibility into inventory levels with real-time dashboard analytics",
      "Enabled efficient supplier management and purchase history tracking",
    ],
  },
  {
    slug: "sidak",
    title: "SIDAK",
    detailTitle: "Sistem Informasi Data Kegiatan (SIDAK)",
    category: "Web Development",
    date: "March 2026",
    client: "Regional Secretary of Banjarmasin City ",
    year: "2026",
    thumbnail: sidakGallery[0],
    image: sidakGallery[0],
    gallery: sidakGallery,
    github: "https://github.com/IlhamMaulanaAkbar",
    description:
      "SIDAK (Sistem Informasi Data Kegiatan) is a comprehensive web-based administrative system built for BPPMDDTT Banjarmasin to digitalize and streamline the management of operational financial and administrative data. The system covers everything from payment receipts, bank accounts, attendance records, and work orders to invoices, official reports, and PNBP (Non-Tax State Revenue) data — all in one centralized platform.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Dashboard with real-time statistics (total master data, verified, unverified, visitor profiles)",
      "Activity Log — audit trail for all user actions",
      "Centralized reporting module",
      "User account and access control",
    ],
    role: [
      "Designed and developed the full-stack web application using Laravel and MySQL",
      "Built all CRUD modules for master data (receipts, attendance, orders, invoices)",
      "Implemented role-based access control and account management",
      "Developed the dashboard with dynamic statistics and data visualization",
      "Created structured reporting workflows and official document generation",
    ],
    impact: [
      "Centralized 115+ master data records into a single digital platform",
      "Reduced manual administrative workload significantly",
      "Improved data accuracy through validation and verification workflows",
      "Enabled real-time monitoring of financial and operational activity",
      "Streamlined official document and report generation processes",
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
    thumbnail: eLatmasGallery[0],
    image: eLatmasGallery[0],
    gallery: eLatmasGallery,
    github: "https://github.com/IlhamMaulanaAkbar",
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
];
