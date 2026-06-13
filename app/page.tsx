import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DatabaseIcon,
  DatabaseZapIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  KeyRoundIcon,
  Layers3Icon,
  MapPinIcon,
  PhoneIcon,
  ServerCogIcon,
  ShieldCheckIcon,
  WorkflowIcon,
} from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  ThreadsIcon,
} from "@/components/BrandIcons";
import { projects } from "@/data/projects";

type TechIcon = ComponentType<SVGProps<SVGSVGElement>>;

function HtmlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2Z" fill="#E34F26" />
      <path d="M12 4v15.9l5.9-1.6L19.2 4H12Z" fill="#EF652A" />
      <path d="M7.2 8.7h4.8v2.2H9.6l.2 2.1H12v2.2H7.7L7.2 8.7Z" fill="#EBEBEB" />
      <path d="M12 8.7h4.8l-.2 2.2H12V8.7Zm0 4.3h2.3l-.2 2.5-2.1.6v2.3l4.1-1.1.6-6.4H12V13Z" fill="#FFFFFF" />
    </svg>
  );
}

function CssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2Z" fill="#1572B6" />
      <path d="M12 4v15.9l5.9-1.6L19.2 4H12Z" fill="#33A9DC" />
      <path d="M7.2 8.7h4.8v2.2H9.6l.1 1.2H12v2.2H7.8L7.2 8.7Z" fill="#EBEBEB" />
      <path d="M12 8.7h4.7l-.2 2.2H12V8.7Zm0 3.4h4.3l-.5 5.2-3.8 1.1v-2.3l1.9-.5.1-1.3H12v-2.2Z" fill="#FFFFFF" />
    </svg>
  );
}

function JavaScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect fill="#F7DF1E" height="20" rx="3" width="20" x="2" y="2" />
      <path d="M8.8 17.2c.4.7.9 1.2 1.8 1.2.8 0 1.3-.4 1.3-1.8V9.3h2.3v7.4c0 2.3-1.3 3.7-3.5 3.7-1.9 0-3-1-3.6-2.3l1.7-.9Zm6.4-.2c.6.9 1.4 1.4 2.4 1.4.8 0 1.3-.3 1.3-.9 0-.7-.5-.9-1.5-1.3l-.6-.3c-1.6-.7-2.6-1.5-2.6-3.3 0-1.7 1.3-3 3.3-3 1.4 0 2.5.5 3.2 1.8l-1.7 1.1c-.4-.7-.8-1-1.5-1s-1.1.4-1.1.9c0 .7.4.9 1.4 1.3l.6.3c1.9.8 2.9 1.6 2.9 3.4 0 1.9-1.5 3-3.6 3-2 0-3.3-1-4-2.2l1.5-1.2Z" fill="#111827" />
    </svg>
  );
}

function PhpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <ellipse cx="12" cy="12" fill="#777BB4" rx="10" ry="5.6" />
      <text fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="6.2" fontWeight="700" x="5" y="14.1">
        PHP
      </text>
    </svg>
  );
}

function LaravelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M4 6.3 8.4 4l4.4 2.3v5L8.4 14 4 11.3v-5Z" stroke="#FF2D20" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="m12.8 6.3 3.2-1.7 4 2.2v5l-4 2.3-3.2-1.8" stroke="#FF2D20" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M8.4 14v4.2l4.4 2.3 4-2.2v-4.2" stroke="#FF2D20" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M8.4 4v10m8.4.1V4.6" stroke="#FF2D20" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function TailwindIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 6.2c-2.6 0-4.2 1.3-5 3.8 1-.8 2-.9 3.1-.3.6.4 1.1 1 1.7 1.4 1 .8 2.2 1.2 3.7 1.2 2.6 0 4.2-1.3 5-3.8-1 .8-2 .9-3.1.3-.6-.4-1.1-1-1.7-1.4-1-.8-2.2-1.2-3.7-1.2Zm-5 5.5c-2.6 0-4.2 1.3-5 3.8 1-.8 2-.9 3.1-.3.6.4 1.1 1 1.7 1.4 1 .8 2.2 1.2 3.7 1.2 2.6 0 4.2-1.3 5-3.8-1 .8-2 .9-3.1.3-.6-.4-1.1-1-1.7-1.4-1-.8-2.2-1.2-3.7-1.2Z" fill="#06B6D4" />
    </svg>
  );
}

function BootstrapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect fill="#7952B3" height="18" rx="4" width="20" x="2" y="3" />
      <path d="M8.2 6.7h4.7c2.4 0 3.7 1 3.7 2.7 0 1.2-.7 2-1.8 2.3 1.4.3 2.2 1.2 2.2 2.7 0 1.9-1.5 3-4 3H8.2V6.7Zm2.2 4.4h2.1c1.2 0 1.8-.4 1.8-1.3s-.6-1.3-1.8-1.3h-2.1v2.6Zm0 4.5h2.4c1.2 0 1.9-.5 1.9-1.4 0-1-.7-1.5-2-1.5h-2.3v2.9Z" fill="#FFFFFF" />
    </svg>
  );
}

function VsCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="m17.7 3.2-8.3 7.9-4.1-3.2-2 1.5 4.3 4.1-4.3 4.1 2 1.5 4.1-3.2 8.3 7.9 3.3-1.4V4.6l-3.3-1.4Z" fill="#007ACC" />
      <path d="M17.8 8.2v7.6l-5.1-3.8 5.1-3.8Z" fill="#FFFFFF" opacity=".35" />
    </svg>
  );
}

function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="9" cy="5" fill="#F24E1E" r="3" />
      <circle cx="15" cy="5" fill="#FF7262" r="3" />
      <circle cx="9" cy="12" fill="#A259FF" r="3" />
      <circle cx="15" cy="12" fill="#1ABCFE" r="3" />
      <circle cx="9" cy="19" fill="#0ACF83" r="3" />
    </svg>
  );
}

const techGroups = [
  {
    title: "Programming Languages",
    items: [
      { name: "HTML5", icon: HtmlIcon },
      { name: "CSS3", icon: CssIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "PHP", icon: PhpIcon },
    ],
  },
  {
    title: "Backend Technologies",
    items: [
      { name: "Laravel", icon: LaravelIcon },
      { name: "REST API", icon: ServerCogIcon },
      { name: "Authentication", icon: KeyRoundIcon },
      { name: "CRUD System", icon: WorkflowIcon },
    ],
  },
  {
    title: "Styling",
    items: [
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Bootstrap 5", icon: BootstrapIcon },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: DatabaseIcon },
      { name: "Database Design", icon: DatabaseZapIcon },
      { name: "Database Management", icon: Layers3Icon },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git", icon: GitBranchIcon },
      { name: "Github", icon: GithubIcon },
      { name: "Laragon", icon: ShieldCheckIcon },
      { name: "VSCode", icon: VsCodeIcon },
      { name: "Figma", icon: FigmaIcon },
    ],
  },
];

const socials = [
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/iiammlna/" },
  { label: "Threads", icon: ThreadsIcon, href: "https://www.threads.com/@iiammlna/" },
  { label: "Github", icon: GithubIcon, href: "https://github.com/IlhamMaulanaAkbar/" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/ilhammaulanaakbar/" },
];

function TechBadge({ icon: Icon, name }: { icon: TechIcon; name: string }) {
  return (
    <span className="inline-flex h-10 min-w-32 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 transition hover:border-blue-500 dark:border-slate-700 dark:bg-black dark:text-white">
      <span className="grid h-8 min-w-8 place-items-center rounded bg-blue-500/10 text-blue-500">
        <Icon className="h-5 w-5" />
      </span>
      <span>{name}</span>
    </span>
  );
}

const featuredProjects = [...projects]
  .sort((projectA, projectB) => Number(projectB.year) - Number(projectA.year))
  .slice(0, 3);

export default function Home() {
  return (
    <main>
      <section className="dotted-bg">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.25fr_0.75fr] md:py-28">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <MapPinIcon className="text-blue-500" size={16} />
              Banjarmasin, Indonesia
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              Hi, I&apos;m
              <span className="block text-blue-500">Ilham Maulana Akbar</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-snug text-slate-950 dark:text-slate-100 md:text-xl">
              I build scalable web applications, solve technical problems, and
              continuously learn new technologies to grow as a developer.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    aria-label={item.label}
                    className="grid h-8 w-8 place-items-center rounded-lg bg-blue-50 text-slate-950 transition hover:-translate-y-0.5 hover:text-blue-500 dark:bg-slate-800 dark:text-white"
                    href={item.href}
                    key={item.label}
                  >
                    <Icon height={18} width={18} />
                  </Link>
                );
              })}
              <Link
                className="inline-flex h-9 items-center gap-2 rounded-lg bg-blue-50 px-4 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-slate-700"
                href="/contact"
              >
                Contact
                <PhoneIcon size={15} />
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-blue-400 bg-slate-100 shadow-sm transition hover:-translate-y-1 dark:bg-slate-800 md:h-58 md:w-58">
              <Image
                alt="Ilham Maulana Akbar"
                className="object-cover"
                fill
                priority
                src="/profile.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14" id="about">
        <h2 className="text-2xl font-bold">What I Do?</h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
          I develop responsive and efficient digital solutions for web platforms
          and business systems.
        </p>
        <div className="mt-6 rounded-lg bg-blue-50 p-6 transition hover:-translate-y-1 dark:bg-slate-900">
          <h3 className="text-lg font-bold">Full Stack Web Development</h3>
          <p className="mt-4 max-w-5xl text-base font-semibold leading-7 text-slate-700 dark:text-slate-300">
            Experienced in full stack web development, including frontend
            design, backend development, database management, authentication
            systems, and deployment workflows to deliver complete and functional
            applications.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14" id="projects">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Featured Project</h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              Some of the projects I&apos;ve worked on recently.
            </p>
          </div>
          <Link
            className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
            href="/projects"
          >
            See More
          </Link>
        </div>

        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              className="flex h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-black dark:text-white"
              key={`${project.slug}-${project.year}-${index}`}
            >
              <div className="flex min-h-full w-full flex-col">
                <div className="relative aspect-[1.7/1] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
                  <Image
                    alt={project.title}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw"
                    src={project.thumbnail}
                  />
                </div>

                <div className="flex flex-1 flex-col pt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-500 dark:bg-blue-500/10">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-5 mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-bold text-blue-500 transition hover:bg-blue-500 hover:text-white dark:bg-blue-500/10"
                    href={`/projects/${project.slug}`}
                  >
                    View Detail
                    <ExternalLinkIcon size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">Technical Skills</h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
          Skills, technologies, and tools I work with in web development and
          digital solutions.
        </p>
        <div className="mt-8 space-y-10 text-slate-950 dark:text-white">
          {techGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-lg font-bold">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <TechBadge icon={item.icon} key={item.name} name={item.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
