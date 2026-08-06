import type { ComponentType, ReactNode, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppWindowIcon,
  ArrowRightIcon,
  BlocksIcon,
  BriefcaseBusinessIcon,
  CableIcon,
  DatabaseIcon,
  DatabaseZapIcon,
  FolderCheckIcon,
  GitBranchIcon,
  KeyRoundIcon,
  LayoutTemplateIcon,
  MailIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ServerCogIcon,
  ShieldCheckIcon,
  WorkflowIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { projects } from "@/data/projects";

type TechIcon = ComponentType<SVGProps<SVGSVGElement>>;

type SectionIntroProps = {
  action?: ReactNode;
  description: string;
  eyebrow: string;
  title: string;
};

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

function WordPressIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="m6.5 8 3.8 10 2.2-6M10 8l4.1 10L18 7.5" />
      <path d="M5.3 8h5.5M15.3 7.5h3.2" />
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

const services = [
  {
    title: "Web Application Development",
    description:
      "Building web-based systems for data management, administration, inventory, and operational workflows.",
    icon: AppWindowIcon,
  },
  {
    title: "WordPress Development",
    description:
      "Developing responsive institutional websites, landing pages, content management systems, and website migrations.",
    icon: BlocksIcon,
  },
  {
    title: "UI Implementation",
    description:
      "Transforming interface designs into responsive and accessible web pages using modern frontend technologies.",
    icon: LayoutTemplateIcon,
  },
];

const skills: {
  category: string;
  icon: TechIcon;
  name: string;
  primary?: boolean;
}[] = [
  { category: "Frontend", icon: HtmlIcon, name: "HTML5" },
  { category: "Frontend", icon: CssIcon, name: "CSS3" },
  { category: "Frontend", icon: JavaScriptIcon, name: "JavaScript", primary: true },
  { category: "Frontend", icon: TailwindIcon, name: "Tailwind CSS", primary: true },
  { category: "Frontend", icon: BootstrapIcon, name: "Bootstrap" },
  { category: "Backend", icon: PhpIcon, name: "PHP", primary: true },
  { category: "Backend", icon: LaravelIcon, name: "Laravel", primary: true },
  { category: "Backend", icon: ServerCogIcon, name: "REST API" },
  { category: "Backend", icon: WordPressIcon, name: "WordPress", primary: true },
  { category: "Database", icon: DatabaseIcon, name: "MySQL", primary: true },
  { category: "Database", icon: DatabaseZapIcon, name: "Database Design" },
  { category: "Tools", icon: GitBranchIcon, name: "Git" },
  { category: "Tools", icon: GithubIcon, name: "GitHub" },
  { category: "Tools", icon: VsCodeIcon, name: "VS Code" },
  { category: "Tools", icon: ShieldCheckIcon, name: "Laragon" },
  { category: "Tools", icon: FigmaIcon, name: "Figma" },
  { category: "Development Capabilities", icon: KeyRoundIcon, name: "Authentication" },
  { category: "Development Capabilities", icon: WorkflowIcon, name: "CRUD Development" },
  { category: "Development Capabilities", icon: MonitorSmartphoneIcon, name: "Responsive Design" },
  { category: "Development Capabilities", icon: CableIcon, name: "API Integration" },
  { category: "Development Capabilities", icon: RocketIcon, name: "Deployment" },
];

const featuredProjectConfigurations = [
  {
    slug: "inventory",
    title: "Inventory App",
    summary:
      "A web-based inventory system for managing stock movements, product data, suppliers, requests, and operational reporting through one centralized workflow platform.",
  },
  {
    slug: "sidak",
    title: "SIDAK",
    summary:
      "A centralized administrative system for managing operational, financial, reporting, and institutional activity data through structured workflows, dashboards, and secure role-based access.",
  },
  {
    slug: "bppmt-banjarmasin",
    title: "BPPMT Banjarmasin Official Website",
    summary:
      "A responsive WordPress website that replaced a Canva Site with structured institutional information, public services, news, programs, and easier content management.",
  },
];

const featuredProjects = featuredProjectConfigurations.flatMap((configuration) => {
  const project = projects.find((item) => item.slug === configuration.slug);
  return project ? [{ ...configuration, project }] : [];
});

const webApplicationCount = projects.filter((project) =>
  project.technologies.includes("Laravel"),
).length;

const wordpressProjectCount = projects.filter((project) =>
  project.technologies.includes("WordPress"),
).length;

const statistics = [
  {
    description: "Published portfolio case studies",
    icon: FolderCheckIcon,
    label: "Completed Projects",
    value: projects.length.toString(),
  },
  {
    description: "Laravel-based digital systems",
    icon: AppWindowIcon,
    label: "Web Applications",
    value: webApplicationCount.toString(),
  },
  {
    description: "Institutional website project",
    icon: BlocksIcon,
    label: "WordPress Projects",
    value: wordpressProjectCount.toString(),
  },
];

function SectionIntro({ action, description, eyebrow, title }: SectionIntroProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}

function SkillCard({
  category,
  icon: Icon,
  name,
  primary,
}: (typeof skills)[number]) {
  return (
    <article className="group flex min-h-36 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-800 dark:bg-black">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-500/10 dark:group-hover:bg-blue-500">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-sm font-bold leading-5 text-slate-950 dark:text-white">
        {name}
      </h3>
      <p className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">
        {category}
      </p>
      {primary ? (
        <span className="mt-3 w-fit rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-500 dark:bg-blue-500/10 dark:text-blue-400">
          Primary Stack
        </span>
      ) : null}
    </article>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="dotted-bg relative overflow-hidden">
        <div aria-hidden="true" className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20 lg:min-h-[calc(100svh-4rem)] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-500 dark:bg-blue-500/10 dark:text-blue-400">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for opportunities
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I’m <span className="text-blue-500">Ilham Maulana Akbar</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              I build responsive web applications and digital systems that simplify data management and operational workflows.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-500/90 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
                href="/projects"
              >
                View Projects
                <ArrowRightIcon aria-hidden="true" className="transition group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" size={17} />
              </Link>
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-500 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                href="/contact"
              >
                <MailIcon aria-hidden="true" size={17} />
                Contact Me
              </Link>
            </div>

          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-72 sm:max-w-80">
              <div aria-hidden="true" className="absolute -inset-4 rounded-full border border-blue-500/20" />
              <div aria-hidden="true" className="absolute -inset-8 rounded-full border border-blue-500/10" />
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-blue-400 bg-slate-100 shadow-xl dark:bg-slate-800">
                <Image
                  alt="Portrait of Ilham Maulana Akbar"
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 768px) 320px, 288px"
                  src="/profile.jpeg"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <BriefcaseBusinessIcon aria-hidden="true" className="text-blue-500" size={15} />
                Full Stack Web Developer
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="professional-statistics" className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
          <h2 className="sr-only" id="professional-statistics">
            Professional Statistics
          </h2>
          <ul className="grid gap-4 md:grid-cols-3" aria-label="Professional statistics">
            {statistics.map((statistic) => {
              const Icon = statistic.icon;

              return (
                <li className="flex min-h-36 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-black" key={statistic.label}>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-500 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-3xl font-bold tracking-tight text-blue-500 dark:text-blue-400">
                      {statistic.value}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-100">
                      {statistic.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {statistic.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20" id="services">
        <SectionIntro
          description="Practical web development services focused on useful, maintainable, and accessible digital products."
          eyebrow="Services"
          title="What I Do"
        />

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="group flex min-h-60 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-800 dark:bg-black" key={service.title}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-500/10 dark:group-hover:bg-blue-500">
                  <Icon aria-hidden="true" size={23} />
                </span>
                <h3 className="mt-6 text-lg font-bold text-slate-950 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40" id="projects">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionIntro
            action={
              <Link
                className="group inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
                href="/projects"
              >
                View All Projects
                <ArrowRightIcon aria-hidden="true" className="transition group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" size={16} />
              </Link>
            }
            description="Three selected projects that highlight application development, administrative systems, and WordPress delivery."
            eyebrow="Selected Work"
            title="Featured Projects"
          />

          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map(({ project, summary, title }) => (
              <article className="group flex h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-800 dark:bg-black" key={project.slug}>
                <div className="flex min-h-full w-full flex-col">
                  <div className="relative aspect-[8/5] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
                    <Image
                      alt={`${title} project preview`}
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw"
                      src={project.thumbnail}
                    />
                  </div>

                  <div className="flex flex-1 flex-col pt-5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-bold uppercase leading-5 tracking-wide text-blue-500 dark:text-blue-400">
                        {project.category}
                      </p>
                      <span className="shrink-0 rounded-full border border-blue-500/20 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-500 dark:bg-blue-500/10 dark:text-blue-400">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold leading-7 text-slate-950 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {summary}
                    </p>

                    <div className="mb-5 mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <Link
                      className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-bold text-blue-500 transition hover:bg-blue-500 hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
                      href={`/projects/${project.slug}`}
                    >
                      View Case Study
                      <ArrowRightIcon aria-hidden="true" className="transition group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20" id="skills">
        <SectionIntro
          description="Technologies, tools, and development capabilities used across my web application and WordPress projects."
          eyebrow="Technology"
          title="Technical Skills"
        />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 xl:grid-cols-6">
          {skills.map((skill) => (
            <SkillCard {...skill} key={`${skill.category}-${skill.name}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-12 text-center shadow-xl sm:px-10 sm:py-16 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950">
          <div aria-hidden="true" className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/20" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/20" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
              Let’s Build Something Useful
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              Have a project or opportunity in mind?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              I’m open to web development opportunities, collaborations, and freelance projects.
            </p>
            <Link className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-500/90 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:bg-white dark:text-slate-950 dark:hover:bg-blue-50" href="/contact">
              Let’s Work Together
              <ArrowRightIcon aria-hidden="true" className="transition group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
