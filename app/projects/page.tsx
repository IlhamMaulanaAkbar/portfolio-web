import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects - Ilham Maulana Akbar",
  description:
    "Project collection by Ilham Maulana Akbar, including web applications and training management systems.",
};

const sortedProjects = [...projects].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <section>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            A selection of web applications and digital systems I have worked
            on, built around data management, operational workflows, and
            documentation.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, index) => (
            <article
              className="group flex h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md active:border-blue-500 dark:border-slate-800 dark:bg-black"
              key={project.slug}
            >
              <div className="flex min-h-full w-full flex-col">
                <div className="relative aspect-[1.7/1] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
                  <Image
                    alt={project.title}
                    className="object-cover"
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1280px) 340px, (min-width: 768px) 50vw, 100vw"
                    src={project.thumbnail}
                  />
                </div>

                <div className="flex flex-1 flex-col pt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold text-slate-950 transition group-hover:text-blue-500 group-active:text-blue-500 dark:text-white">
                      {project.title}
                    </h2>
                    <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-500 dark:bg-blue-500/10">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-5 mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-bold text-blue-500 transition hover:bg-blue-500 hover:text-white dark:bg-blue-500/10"
                    href={`/projects/${project.slug}`}
                  >
                    View Detail
                    <ExternalLinkIcon size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
