import type { Metadata } from "next";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Ilham Maulana Akbar",
  description:
    "Contact Ilham Maulana Akbar for web application and data system projects.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="rounded-lg border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-black">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Let&apos;s talk about web applications, data systems, or a new
          project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-5 py-3 font-bold text-blue-500 transition hover:-translate-y-0.5 dark:bg-blue-500/10"
            href="mailto:ilham@example.com"
          >
            <MailIcon size={20} />
            Email
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-5 py-3 font-bold text-blue-500 transition hover:-translate-y-0.5 dark:bg-blue-500/10"
            href="https://wa.me/"
          >
            <PhoneIcon size={20} />
            WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
