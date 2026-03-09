import { ArrowRight, Medal } from "lucide-react";
import { sponsors } from "./utils";
import Link from "next/link";
export default function Home() {
  const duplicatedSponsors = [...sponsors, ...sponsors];

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "gold":
        return {
          color: "text-yellow-500",
          medalColor: "text-yellow-500",
        };
      case "silver":
        return {
          color: "text-gray-400",
          medalColor: "text-gray-400",
        };
      case "bronze":
        return {
          color: "text-orange-600",
          medalColor: "text-orange-600",
        };
      default:
        return {
          color: "text-gray-500",
          medalColor: "text-gray-500",
        };
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gates-hall.jpg"
            alt="Bill and Melinda Gates Hall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="w-24 h-24 mx-auto mb-8">
            <img
              src="/acsu-logo.png"
              alt="ACSU Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className=" text-5xl md:text-7xl text-white mb-6">
            Association of
            <br />
            Computer Science
            <br />
            Undergraduates
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-mono">
            Building community, opportunity, and support for Cornell CS
            undergraduates.
          </p>
        </div>
      </section>

      {/* Sponsor Scroll Belt */}
      <div className="bg-black py-6 overflow-hidden border-b border-gray-800">
        <div className="relative">
          <div className="flex animate-scroll-sponsors">
            {duplicatedSponsors.map((sponsor, index) => {
              const badge = getTierBadge(sponsor.tier);
              return (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 flex items-center space-x-3 bg-gray-900 px-4 py-2 rounded-lg border border-gray-800"
                >
                  <span className="text-white font-mono text-lg whitespace-nowrap">
                    {sponsor.name}
                  </span>
                  <Medal className={badge.medalColor} size={20} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* We Are ACSU Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Gates Hall Sketch */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-lg p-8 overflow-hidden">
                {/* Sketch overlay effect */}
                <div className="relative">
                  <img
                    src="/gates-hall.jpg"
                    alt="Gates Hall"
                    className="w-full h-auto opacity-40 grayscale mix-blend-screen"
                    style={{
                      filter: "contrast(1.5) brightness(0.7)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Building label */}
                <div className="mt-4 text-center">
                  <p className="text-gray-400 font-mono text-sm">
                    Building community, opportunity, & support for Cornell CS
                    undergraduates.
                  </p>
                </div>
              </div>

              {/* Decorative corner elements */}
              {/* <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-gray-600"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-gray-600"></div> */}
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                WE ARE ACSU
              </h2>

              <div className="space-y-4 text-gray-300 mb-8">
                <p>
                  The{" "}
                  <span className="text-white font-bold">
                    Association of Computer Science Undergraduates (ACSU)
                  </span>{" "}
                  promotes educational, professional, and social interaction
                  among undergraduate students interested in computer science.
                </p>
                <p>
                  We facilitate student communication with faculty, alumni, and
                  corporate partners to enhance the undergraduate experience in
                  computer science.
                </p>
                <p>
                  ACSU is Cornell's chapter of the Association for Computing
                  Machinery (ACM) and serves the undergraduate CS student
                  community with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Faculty dinners and guest speakers</li>
                  <li>Resume reviews and career guidance</li>
                  <li>Mentorship programs</li>
                  <li>Academic resources and support</li>
                  <li>Social events and community building</li>
                </ul>
              </div>

              <Link href="/team">
                <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all inline-flex items-center space-x-2">
                  <span>Meet the team!</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join us for events throughout the semester
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <p className="text-white font-mono">faculty dinners</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <p className="text-white font-mono">guest speakers</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <p className="text-white font-mono">resume reviews</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <p className="text-white font-mono">mentorship</p>
            </div>
          </div>

          <div className="flex w-full justify-center align-center p-1">
            <Link href="/events">
              <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all inline-flex items-center space-x-2">
                <span>Learn more about ACSU</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-gray-400 mb-8">
            Join us for faculty dinners, guest speakers, resume reviews, and
            mentorship opportunities throughout the semester.
          </p>
          <Link href="/join">
            <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg transition-all font-semibold">
              Join ACSU Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
