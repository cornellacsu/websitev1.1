import { ArrowRight, Medal } from "lucide-react";
import { sponsors, SponsorTier } from "../utils";

const tierConfig: Record<
  SponsorTier,
  {
    title: string;
    badge: string;
    cardBorder: string;
    glow: string;
  }
> = {
  gold: {
    title: "Gold Sponsors",
    badge: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    cardBorder: "border-yellow-500/30",
    glow: "hover:shadow-[0_0_22px_rgba(234,179,8,0.24)]",
  },
  silver: {
    title: "Silver Sponsors",
    badge: "text-gray-300 bg-gray-400/10 border-gray-400/30",
    cardBorder: "border-gray-400/30",
    glow: "hover:shadow-[0_0_22px_rgba(156,163,175,0.24)]",
  },
  bronze: {
    title: "Bronze Sponsors",
    badge: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    cardBorder: "border-orange-500/30",
    glow: "hover:shadow-[0_0_22px_rgba(249,115,22,0.24)]",
  },
};

const tierOrder: SponsorTier[] = ["gold", "silver", "bronze"];

export default function SponsorsPage() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-red-900/30 bg-gradient-to-b from-black via-black to-gray-950">
        <div className="absolute inset-0">
          <img
            src="/gates-hall.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-red-950/40" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 px-4 py-20 sm:px-6 lg:px-8">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-red-300/80">
            ACSU Partners
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Sponsors Who Power
            <span className="block bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
              the ACSU Community
            </span>
          </h1>
          <p className="max-w-3xl text-base text-gray-300 sm:text-lg">
            Thank you to all our {year} sponsors. Your support makes our
            workshops, mentorship, social events, and career programming
            possible for Cornell CS undergraduates.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="https://forms.gle/iHAGSgSijE4RxFZo8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Become a Sponsor
            </a>
            <a
              href="/join"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 font-semibold text-white transition hover:border-red-500"
            >
              Get Involved
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {tierOrder.map((tier) => {
            const row = sponsors.filter((sponsor) => sponsor.tier === tier);
            const config = tierConfig[tier];

            if (row.length === 0) return null;

            return (
              <article key={tier} className="space-y-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${config.badge}`}
                  >
                    <Medal size={14} />
                    {config.title}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {row.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`sponsor-shine-onload group relative isolate flex min-h-[150px] items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-b from-gray-900 to-black p-5 transition duration-300 ${config.cardBorder} ${config.glow}`}
                    >
                      <img
                        src={sponsor.logoSrc}
                        alt={`${sponsor.name} logo`}
                        className="h-auto max-h-16 w-auto max-w-[190px] object-contain opacity-90 transition group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
