import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectPreviewImage from "@/components/ProjectPreviewImage";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Ilham Maulana Akbar`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid items-center gap-14 md:grid-cols-[1fr_1.05fr]">
        <div>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wide text-blue-400">
            <span className="text-slate-300">01</span>
            <span className="h-px w-8 bg-slate-300" />
            <span>{project.category}</span>
          </div>

          <h1 className="mt-20 max-w-lg text-3xl font-bold leading-tight text-slate-700 dark:text-slate-100 md:text-4xl">
            {project.detailTitle}
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-black text-sm font-bold text-white">
              BB
            </div>
            <div className="border-r border-slate-200 pr-9 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-300">CLIENT</p>
              <p className="font-bold text-slate-500 dark:text-slate-300">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-300">YEAR</p>
              <p className="font-bold text-slate-500 dark:text-slate-300">
                {project.year}
              </p>
            </div>
          </div>

          <Link
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-slate-700 pb-2 font-bold text-slate-700 dark:border-slate-100 dark:text-slate-100"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon width={18} height={18} />
            View on GitHub
            <ArrowUpRightIcon size={18} />
          </Link>
        </div>

        <ProjectPreviewImage alt={project.title} src={project.image} />
      </section>

      <section className="mt-20">
        <h2 className="border-b border-slate-700 pb-3 text-xl font-bold">
          About Project
        </h2>

        <div className="mt-7 max-w-5xl text-base font-normal leading-8 text-slate-700 dark:text-slate-300">
          <h3 className="font-bold">
            {project.title} — {project.detailTitle.replace(/\s?\(.+\)/, "")}
          </h3>
          <p className="mt-5 text-justify">{project.description}</p>
          <p className="mt-5 text-justify">
            The platform was designed to simplify the management of training
            activities, participant registration, alumni data, and mentoring
            processes through an integrated and well-documented digital system.
          </p>

          <h3 className="mt-5 font-bold">Key Features</h3>
          <ul className="mt-2 list-disc space-y-2 pl-7">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h3 className="mt-5 font-bold">Technologies Used</h3>
          <ul className="mt-2 list-disc space-y-2 pl-7">
            <li>Backend: PHP (Laravel)</li>
            <li>Frontend: HTML, CSS, JavaScript</li>
            <li>Database: MySQL</li>
          </ul>

          <h3 className="mt-5 font-bold">My Role</h3>
          <ul className="mt-2 list-disc space-y-2 pl-7">
            {project.role.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

          <h3 className="mt-5 font-bold">Impact</h3>
          <ul className="mt-2 list-disc space-y-2 pl-7">
            {project.impact.map((impact) => (
              <li key={impact}>{impact}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="border-b border-slate-700 pb-3 text-xl font-bold">
          Images
        </h2>

        <ProjectGallery images={project.gallery} title={project.title} />
      </section>
    </main>
  );
}
