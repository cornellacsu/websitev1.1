import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Resources", href: "/resources" },
  { label: "Sponsorship", href: "/sponsors" },
  { label: "Events", href: "/events" },
  {
    label: "Join Us",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScK27uMvjakGJhxYXnQFS58GTVz4_fhKHDYHbV2E5Sbfokr8Q/viewform",
    external: true,
  },
];

const communityLinks = [
  {
    label: "GroupMe Community",
    href: "https://groupme.com/",
    icon: "/groupme.png",
  },
  {
    label: "Ed Discussion",
    href: "https://edstem.org/",
    icon: "/ed.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cornellacsu/",
    icon: "/ig.png",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <img
                src="/acsu-logo.png"
                alt="ACSU logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="text-base font-semibold tracking-tight">Association of Computer Science Undergraduates</p>
                <p className="text-sm text-gray-400">Cornell University</p>
              </div>
            </div>

            <Link
              href="/join"
              className="inline-flex items-center rounded-md border border-red-500/50 bg-red-950/25 px-3.5 py-1.5 text-sm font-medium text-red-200 transition hover:border-red-400 hover:bg-red-900/35 hover:text-white"
            >
              Donate / Support ACSU
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-gray-800 pt-8 md:grid-cols-3">
            <section>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm">
                {quickLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-gray-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </section>

            <section>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                Community
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                {communityLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 transition hover:text-white"
                  >
                    <img
                      src={link.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                    />
                    {link.label}
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                Contact
              </h4>
              <a
                href="mailto:acsu@cornell.edu"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                acsu@cornell.edu
              </a>
              <p className="mt-3 text-sm text-gray-400">© {year} ACSU at Cornell</p>
            </section>
          </div>

          <div className="border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
            <a
              href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              Equal Education and Employment
            </a>
            <span> | This organization is a registered student organization of Cornell University</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
