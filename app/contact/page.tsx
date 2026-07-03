import type { Metadata } from "next";
import Link from "next/link";
import {
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  ArrowUpRightIcon,
  CheckCircle2Icon,
  ClockIcon,
} from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  ThreadsIcon,
} from "@/components/BrandIcons";

export const metadata: Metadata = {
  title: "Contact - Ilham Maulana Akbar",
  description:
    "Contact Ilham Maulana Akbar for web application and data system projects.",
};

const contactCards = [
  {
    id: "email-card",
    icon: MailIcon,
    label: "Email",
    value: "contact.ilhammaulanaakbar@gmail.com",
    href: "mailto:contact.ilhammaulanaakbar@gmail.com",
    description: "Best for detailed project inquiries",
    color: "blue",
  },
  {
    id: "whatsapp-card",
    icon: MessageCircleIcon,
    label: "WhatsApp",
    value: "Chat via WhatsApp",
    href: "https://wa.me/",
    description: "Quick questions and fast replies",
    color: "green",
  },
];

const socialLinks = [
  {
    id: "social-linkedin",
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/ilhammaulanaakbar/",
    username: "ilhammaulanaakbar",
    color: "#0A66C2",
  },
  {
    id: "social-github",
    label: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/IlhamMaulanaAkbar/",
    username: "IlhamMaulanaAkbar",
    color: "#333",
  },
  {
    id: "social-instagram",
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/iiammlna/",
    username: "@iiammlna",
    color: "#E1306C",
  },
  {
    id: "social-threads",
    label: "Threads",
    icon: ThreadsIcon,
    href: "https://www.threads.com/@iiammlna/",
    username: "@iiammlna",
    color: "#111",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero */}
      <section className="dotted-bg relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-8 py-16 text-center dark:border-slate-800 dark:bg-black">
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative">
          {/* Availability badge */}
          <span
            id="availability-badge"
            className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-600 dark:bg-green-500/10 dark:text-green-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to new opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Let&apos;s Work{" "}
            <span className="text-blue-500">Together</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            I&apos;m currently available for freelance projects and full-time
            opportunities. Whether it&apos;s a web app, data system, or just a
            conversation — I&apos;d love to connect.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="text-blue-500" size={14} />
              Banjarmasin, Indonesia
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="text-blue-500" size={14} />
              Typically replies within 24 hours
            </span>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-950 dark:text-white">
          Reach Me Directly
        </h2>
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
          Choose your preferred channel to get in touch.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const isBlue = card.color === "blue";
            return (
              <Link
                id={card.id}
                key={card.label}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-black dark:hover:border-blue-500"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-blue-500/10"
                />
                <div
                  className={`inline-grid h-12 w-12 place-items-center rounded-xl ${
                    isBlue
                      ? "bg-blue-50 text-blue-500 dark:bg-blue-500/10"
                      : "bg-green-50 text-green-500 dark:bg-green-500/10"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {card.label}
                  </p>
                  <p className="mt-1 break-all text-sm font-bold text-slate-800 dark:text-white">
                    {card.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {card.description}
                  </p>
                </div>
                <span className="absolute right-5 top-5 text-slate-300 transition group-hover:text-blue-500 dark:text-slate-600">
                  <ArrowUpRightIcon size={18} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Social Links */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-950 dark:text-white">
          Find Me Online
        </h2>
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
          Connect through social platforms.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                id={social.id}
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-sm dark:border-slate-800 dark:bg-black dark:hover:border-blue-500"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-500 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400">
                  <Icon width={18} height={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-800 dark:text-white">
                    {social.label}
                  </p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                    {social.username}
                  </p>
                </div>
                <ArrowUpRightIcon
                  size={14}
                  className="ml-auto shrink-0 text-slate-300 transition group-hover:text-blue-500 dark:text-slate-600"
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* What to expect */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-blue-50 p-8 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-950 dark:text-white">
          What to Expect
        </h2>
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
          Here&apos;s how our collaboration typically goes.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "You Reach Out",
              desc: "Send me a message via email or WhatsApp with your project idea or question.",
            },
            {
              step: "02",
              title: "We Discuss",
              desc: "I'll get back to you within 24 hours to better understand your needs and requirements.",
            },
            {
              step: "03",
              title: "We Build",
              desc: "After aligning on the scope, we kick off development with clear milestones.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-black"
            >
              <span className="mt-0.5 shrink-0 text-2xl font-black text-blue-500/30 dark:text-blue-400/30">
                {item.step}
              </span>
              <div>
                <p className="font-bold text-slate-950 dark:text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available for */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-black">
        <h2 className="text-xl font-bold text-slate-950 dark:text-white">
          I&apos;m Available For
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Full Stack Web Development",
            "Laravel & PHP Backend",
            "REST API Design & Integration",
            "Database Design & Management",
            "Frontend UI with Tailwind / Bootstrap",
            "Freelance & Contract Projects",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
            >
              <CheckCircle2Icon
                size={16}
                className="shrink-0 text-blue-500"
              />
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
