import type { Metadata } from "next";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Ilham Maulana Akbar",
  description:
    "About Ilham Maulana Akbar, a Full Stack Web Developer focused on Laravel and WordPress.",
};

const organizationEntries = [
  {
    name: "DPM FTI UNISKA",
    role: "Staff Commission",
    period: "Jan 2025 - Dec 2025",
    associatedWith:
      "Universitas Islam Kalimantan Moch. Arsyad Al Banjari",
    bullets: [],
  },
  {
    name: "BEM FTI UNISKA MAB",
    role: "Head of Household Division",
    period: "Jan 2024 - Dec 2024",
    associatedWith:
      "Universitas Islam Kalimantan Moch. Arsyad Al Banjari",
    bullets: [
      "Collected data on inventory items.",
      "Planned the procurement of new inventory items according to organizational needs.",
      "Recorded borrowed inventory items and monitored their return status.",
    ],
  },
  {
    name: "HMP-TI UNISKA MAB",
    role: "Programming Division Coordinator",
    period: "Dec 2022 - Dec 2023",
    associatedWith:
      "Universitas Islam Kalimantan Moch. Arsyad Al Banjari",
    bullets: [
      "Provided ideas and suggestions for work programs related to programming.",
      "Organized learning activities about programming.",
      "Organized knowledge-sharing activities related to programming and technology.",
    ],
  },
];

const educationHighlights = [
  "Active in student organizations at study program and faculty level.",
  "Completed Student Management Skills Training at Pre-Basic and Basic Level.",
  "Received funding for the 2023 Student Creativity Program in Entrepreneurship from BELMAWA - Dikti.",
];

function SectionHeading({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}

function InstitutionBadge() {
  return (
    <Image
      alt="Logo UNISKA MAB"
      className="h-6 w-6 shrink-0 object-contain"
      height={24}
      src="/logo-uniska.png"
      width={24}
    />
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          title="About Me"
          description="A concise professional profile based on my portfolio."
        />

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-black">
          <div className="h-24 bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent dark:from-blue-500/20 dark:via-slate-900 dark:to-black" />
          <div className="grid gap-8 p-6 pt-0 md:grid-cols-[0.85fr_1.15fr] md:p-8 md:pt-0">
            <div className="-mt-12">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-sm dark:border-black dark:bg-slate-900">
                <Image
                  alt="Ilham Maulana Akbar"
                  className="object-cover"
                  fill
                  priority
                  src="/profile.jpeg"
                />
              </div>
              <h1 className="mt-5 text-2xl font-bold text-slate-950 dark:text-white">
                Ilham Maulana Akbar
              </h1>
              <p className="mt-2 text-sm font-semibold text-blue-500">
                Full Stack Web Developer
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <MapPinIcon size={16} />
                Banjarmasin, Indonesia
              </div>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                I am a Full Stack Web Developer focused on Laravel and WordPress,
                with experience in web application development, database
                management, and digital solutions that support effective,
                integrated workflows. I work with a structured approach, adapt
                to new technologies, and collaborate effectively in software
                development teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading
          title="Organizational Experience"
          description="Campus organization experience focused on coordination, documentation, programming, and operational support."
        />

        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {organizationEntries.map((entry, index) => (
            <article className="py-5 first:pt-0 last:pb-0" key={entry.name}>
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_max-content] sm:items-start">
                <div>
                  <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                    {entry.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {entry.role}
                  </p>
                </div>
                <span className="whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 sm:text-right">
                  {entry.period}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                <InstitutionBadge />
                <span>Associated with {entry.associatedWith}</span>
              </div>

              {entry.bullets.length > 0 ? (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {entry.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {index === 0 ? (
                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Contributed to organizational activities through structured
                  coordination, documentation, and commission-based support.
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading
          title="Education"
          description="Academic background and student development activities."
        />

        <div className="flex gap-3 border-b border-slate-200 pb-5 dark:border-slate-800">
          <Image
            alt="Logo UNISKA MAB"
            className="h-14 w-14 shrink-0 object-contain"
            height={56}
            src="/logo-uniska.png"
            width={56}
          />
          <div>
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">
              Universitas Islam Kalimantan Muhammad Arsyad Al Banjari
              Banjarmasin
            </h3>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
              Bachelor of Informatics Engineering
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              GPA: 3.72/4.00
            </p>

            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {educationHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
