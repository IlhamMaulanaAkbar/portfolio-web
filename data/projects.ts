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
  github?: string;
  liveWebsite?: string;
  description: string;
  aboutTitle?: string;
  about?: string[];
  technologies: string[];
  technologyDetails?: string[];
  features: string[];
  role: string[];
  impact: string[];
};

const bppmtBanjarmasinGallery = [
  "/projects/bppmt-banjarmasin/bppmt-banjarmasin-1.png",
  "/projects/bppmt-banjarmasin/bppmt-banjarmasin-2.png",
  "/projects/bppmt-banjarmasin/bppmt-banjarmasin-3.png",
  "/projects/bppmt-banjarmasin/bppmt-banjarmasin-4.png",
];

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

const inventoryGallery = [
  "/projects/inventory/dashboard.png",
  "/projects/inventory/kelola-akun.png",
  "/projects/inventory/laporan.png",
];

export const projects: Project[] = [
  {
    slug: "bppmt-banjarmasin",
    title: "BPPMT Banjarmasin Official Website",
    detailTitle: "BPPMT Banjarmasin Official Website",
    category: "Web WordPress Development",
    date: "2026",
    client: "BPPMT Banjarmasin",
    year: "2026",
    thumbnail: bppmtBanjarmasinGallery[0],
    image: bppmtBanjarmasinGallery[0],
    gallery: bppmtBanjarmasinGallery,
    liveWebsite: "https://www.transmigrasi.go.id/bppmtbanjarmasin/",
    description:
      "A WordPress-based official website developed for BPPMT Banjarmasin as a replacement for its previous Canva Site. The project focused on creating a more professional, responsive, structured, and easily manageable platform for publishing institutional information, public services, programs, news, and documentation.",
    aboutTitle:
      "BPPMT Banjarmasin Official Website — WordPress Website Development and Migration",
    about: [
      "This project involved redesigning and migrating the official BPPMT Banjarmasin website from Canva Site to WordPress. The previous platform had limitations in content management, navigation, scalability, and website organization. The new website was developed to provide a more professional digital presence and make institutional information easier for the public to access.",
      "The website presents organizational profiles, training and community empowerment programs, public information, public services, facilities, complaint services, innovations, announcements, ministry news, and publication galleries in a structured and accessible format. WordPress was selected to allow administrators to update content more efficiently without modifying the website source code directly.",
    ],
    technologies: [
      "WordPress",
      "Responsive Web Design",
      "Content Management System",
      "Website Migration",
    ],
    technologyDetails: [
      "CMS: WordPress",
      "Development: WordPress Theme and Page Customization",
      "Design: Responsive Web Design",
      "Content Management: WordPress CMS",
      "Migration: Canva Site to WordPress",
      "Deployment: Official Ministry of Transmigration domain",
    ],
    features: [
      "Responsive landing page for desktop, tablet, and mobile devices",
      "Structured navigation for institutional information and public services",
      "Organizational profile and leadership information",
      "Training and transmigration community empowerment program pages",
      "Public information and document publication sections",
      "Public service, facility, complaint, and innovation information",
      "News, announcements, and publication gallery management",
      "WordPress-based content management for easier administrative updates",
      "Direct access to important public information and transmigration registration",
      "Improved content organization compared to the previous Canva Site",
    ],
    role: [
      "Analyzed the structure and limitations of the previous Canva Site",
      "Designed the information architecture and navigation structure",
      "Developed and customized the website using WordPress",
      "Migrated institutional content from the previous website",
      "Created responsive layouts for desktop, tablet, and mobile devices",
      "Organized pages for profiles, programs, publications, services, facilities, complaints, and innovations",
      "Configured news, announcements, documents, and gallery content",
      "Improved content readability, accessibility, and visual consistency",
      "Tested navigation, links, responsive layouts, and content presentation",
      "Deployed the completed website to the official Ministry of Transmigration domain",
    ],
    impact: [
      "Replaced the limited Canva Site with a scalable WordPress platform",
      "Made institutional content easier for administrators to update",
      "Improved access to public information and services",
      "Provided clearer and more organized website navigation",
      "Improved the institution’s professional digital presence",
      "Enabled structured publication of news, documents, programs, and announcements",
      "Created a responsive experience across different screen sizes",
    ],
  },
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
    liveWebsite: "https://elatmas-balaibanjarmasin.web.id/",
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
