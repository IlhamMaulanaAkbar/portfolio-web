import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ilhammaulanaakbar/" },
  { label: "GitHub", href: "https://github.com/IlhamMaulanaAkbar" },
  { label: "Instagram", href: "https://www.instagram.com/iiammlna/" },
  { label: "Threads", href: "https://www.threads.com/@iiammlna/" },
];

const contactLinks = [
  { label: "Email", href: "mailto:contact.ilhammaulanaakbar@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white">
            Ilham Maulana Akbar
          </h3>
          <p className="mt-5 text-base text-slate-600 dark:text-slate-300">
            Full Stack Web Developer
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xl font-semibold text-slate-950 dark:text-white">
            Quick Links
          </h4>
          <div className="grid gap-4 text-base text-slate-600 dark:text-slate-300">
            {quickLinks.map((link) => (
              <Link className="transition hover:text-blue-500" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xl font-semibold text-slate-950 dark:text-white">
            Social Links
          </h4>
          <div className="grid gap-4 text-base text-slate-600 dark:text-slate-300">
            {socialLinks.map((link) => (
              <Link className="transition hover:text-blue-500" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xl font-semibold text-slate-950 dark:text-white">
            Get In Touch
          </h4>
          <div className="grid gap-4 text-base text-slate-600 dark:text-slate-300">
            {contactLinks.map((link) => (
              <Link className="transition hover:text-blue-500" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-base text-slate-600 dark:text-slate-300">
            Banjarmasin, Indonesia
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-slate-200 px-6 py-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © 2026 Ilham Maulana Akbar. All rights reserved.
      </div>
    </footer>
  );
}
