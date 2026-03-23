export type SponsorTier = "gold" | "silver" | "bronze";

type Sponsor = {
  name: string;
  href: string;
  tier: SponsorTier;
  logoSrc: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Samsara",
    tier: "gold",
    href: "https://get.samsara.com/overview",
    logoSrc: "/sponsor-logos/samsara-logo.jpeg",
  },
  {
    name: "Jane Street",
    href: "https://www.janestreet.com/",
    tier: "silver",
    logoSrc: "/sponsor-logos/janestreet.png",
  },
  {
    name: "Capital One",
    href: "https://www.capitalone.com/",
    tier: "silver",
    logoSrc: "/sponsor-logos/capitalone.png",
  },
  {
    name: "Roblox",
    href: "https://www.roblox.com/",
    tier: "bronze",
    logoSrc: "/sponsor-logos/roblox.png",
  },
  {
    name: "Google",
    tier: "bronze",
    href: "https://www.google.com/about/careers/applications/",
    logoSrc: "/sponsor-logos/google.png",
  },
  {
    name: "Stevens Capital Management",
    tier: "bronze",
    href: "https://www.scm-lp.com/",
    logoSrc: "/sponsor-logos/scm.svg",
  },
];

// const sponsors: Sponsor[] = [
//   {
//     name: "Deloitte",
//     href: "https://www2.deloitte.com/us/en.html",
//     tier: "gold",
//     logoSrc: "/sponsor-logos/deloitte.png",
//   },
//   {
//     name: "Jane Street",
//     href: "https://www.janestreet.com/",
//     tier: "gold",
//     logoSrc: "/sponsor-logos/janestreet.png",
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/",
//     tier: "gold",
//     logoSrc: "/sponsor-logos/linkedin.png",
//   },
//   {
//     name: "Uber",
//     href: "https://www.uber.com/",
//     tier: "silver",
//     logoSrc: "/sponsor-logos/uber.png",
//   },
//   {
//     name: "Bloomberg",
//     href: "https://www.bloomberg.com/",
//     tier: "bronze",
//     logoSrc: "/sponsor-logos/bloomberg.png",
//   },
//   {
//     name: "Green Hills Software",
//     href: "https://www.ghs.com/",
//     tier: "bronze",
//     logoSrc: "/sponsor-logos/greenHillsSoftware.png",
//   },
//   {
//     name: "P&G",
//     href: "https://us.pg.com/",
//     tier: "bronze",
//     logoSrc: "/sponsor-logos/p&g.png",
//   },
//   {
//     name: "SambaNova",
//     href: "https://sambanova.ai/",
//     tier: "bronze",
//     logoSrc: "/sponsor-logos/samba.png",
//   },
//   {
//     name: "Capital One",
//     href: "https://www.capitalone.com/",
//     tier: "bronze",
//     logoSrc: "/sponsor-logos/capitalone.png",
//   },
//   {
//     name: "Roblox",
//     href: "https://www.roblox.com/",
//     tier: "bronze",
//     logoSrc: "/sponsor-logos/roblox.png",
//   },
//   {
//     name: "Palantir",
//     href: "https://www.palantir.com/",
//     tier: "bronze",
//     logoSrc: "/sponsor-logos/palantir.png",
//   },
// ];
