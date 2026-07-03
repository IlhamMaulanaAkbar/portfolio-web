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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 3h16l-1.5 16L12 21l-6.5-2L4 3Z" />
      <path d="M8.5 8.5h7l-.3 3H9l.2 2.5 2.8.8 2.8-.8.2-1.5" />
    </svg>
  );
}

function CssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 3h16l-1.5 16L12 21l-6.5-2L4 3Z" />
      <path d="M15.5 8.5H8l.3 3h6.9l-.5 4-2.7.8-2.7-.8-.2-1.5" />
    </svg>
  );
}

function JavaScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 17c.3.6.9 1 1.7 1 1 0 1.3-.5 1.3-1.5V10" />
      <path d="M14 10v5c0 1 .5 2 2 2s2-.8 2-2" />
    </svg>
  );
}

function PhpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="5.5" />
      <path d="M7 10h2.5a1.5 1.5 0 0 1 0 3H7v-3Zm0 3v2" />
      <path d="M13 10h2.5a1.5 1.5 0 0 1 0 3H13v2" />
    </svg>
  );
}

function LaravelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 6.3 8.4 4l4.4 2.3v5L8.4 14 4 11.3v-5Z" />
      <path d="m12.8 6.3 3.2-1.7 4 2.2v5l-4 2.3-3.2-1.8" />
      <path d="M8.4 14v4.2l4.4 2.3 4-2.2v-4.2" />
      <path d="M8.4 4v10m8.4.1V4.6" />
    </svg>
  );
}

function TailwindIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 6.2c-2.6 0-4.2 1.3-5 3.8 1-.8 2-.9 3.1-.3.6.4 1.1 1 1.7 1.4 1 .8 2.2 1.2 3.7 1.2 2.6 0 4.2-1.3 5-3.8-1 .8-2 .9-3.1.3-.6-.4-1.1-1-1.7-1.4-1-.8-2.2-1.2-3.7-1.2Zm-5 5.5c-2.6 0-4.2 1.3-5 3.8 1-.8 2-.9 3.1-.3.6.4 1.1 1 1.7 1.4 1 .8 2.2 1.2 3.7 1.2 2.6 0 4.2-1.3 5-3.8-1 .8-2 .9-3.1.3-.6-.4-1.1-1-1.7-1.4-1-.8-2.2-1.2-3.7-1.2Z" />
    </svg>
  );
}

function BootstrapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 7h4.5a2 2 0 0 1 0 4H8V7Zm0 4h5a2 2 0 0 1 0 4H8v-4Z" />
    </svg>
  );
}

function VsCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m17.5 3.5-8 7.5-4-3-2 1.5 4 4-4 4 2 1.5 4-3 8 7.5 3-1.5V5l-3-1.5Z" />
      <path d="M17.5 8v8" />
    </svg>
  );
}

function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 2h6a3 3 0 0 1 0 6H9a3 3 0 0 1 0-6Z" />
      <path d="M6 11a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z" />
      <path d="M12 14h3a3 3 0 0 1 0 6h-3v-6Z" />
      <circle cx="9" cy="20" r="3" />
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
