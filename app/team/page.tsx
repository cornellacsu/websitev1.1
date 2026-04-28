"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import teamData from "../../data/team.json";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  year: number;
  position_type: string | null;
  image: string;
  email: string;
  linkedin: string;
}

const categories = [
  "Eboard",
  "Academic",
  "Corporate",
  "ProdOps",
  "Social",
  "Web Dev",
  "Faculty",
];

/* Year selections are disabled until we have reliable year data.
const years = [2026, 2027, 2028, 2029, "All Years"];

const CLASS_YEAR_LABELS: Record<number, string> = {
  2026: "Senior",
  2027: "Junior",
  2028: "Sophomore",
  2029: "Freshman",
};
*/

const getCategoryId = (category: string) =>
  category.toLowerCase().replace(/\s+/g, "-");

const isLead = (member: TeamMember) =>
  member.position.toLowerCase().includes("lead");

const filterMembers = (category: string) => {
  const filtered = teamData.team.filter((member) => {
    const categoryMatch =
      category === "Eboard"
        ? member.position_type === "EBOARD"
        : member.department === category;
    return categoryMatch;
  });

  const sortLeadsFirst = (a: TeamMember, b: TeamMember) => {
    const aLead = isLead(a) ? 0 : 1;
    const bLead = isLead(b) ? 0 : 1;
    if (aLead !== bLead) return aLead - bLead;
    return a.name.localeCompare(b.name);
  };

  if (category === "Web Dev") {
    return filtered.sort((a, b) => {
      if (a.name === "Rhea Agrawal") return -1;
      if (b.name === "Rhea Agrawal") return 1;
      return sortLeadsFirst(a, b);
    });
  }

  return filtered.sort(sortLeadsFirst);
};

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState("Eboard");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const showDepartment = activeCategory === "Eboard";

  const filteredTeam = filterMembers(activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-mono">
            Dedicated students working to build community, opportunity, and
            support for Cornell CS undergraduates.
          </p>
          <img
            src="events-images/team.jpg"
            className="w-[80%] ml-[10%] mt-10"
          ></img>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-gray-800 text-white border-gray-700 shadow-lg"
                    : "text-gray-400 border-gray-700 hover:text-white hover:border-gray-600 hover:bg-gray-800/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Year filter removed until years are confirmed */}

      {/* Team Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white font-mono">
                {activeCategory}
              </h2>
              <p className="text-sm text-gray-500 font-mono mt-2">
                {filteredTeam.length} member
                {filteredTeam.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>
          {filteredTeam.length === 0 ? (
            <p className="text-center text-gray-500 py-16">
              No members found for this filter.
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {filteredTeam.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  showDepartment={showDepartment}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function TeamCard({
  member,
  showDepartment,
}: {
  member: TeamMember;
  showDepartment: boolean;
}) {
  // Year labels are disabled until we confirm member year data.
  // const classLabel = CLASS_YEAR_LABELS[member.year];

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
      {/* Photo */}
      <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden mb-4 relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = "/placeholder-avatar.png";
          }}
        />
        {member.position_type === "EBOARD" && !showDepartment && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white text-[10px] font-mono px-2 py-1 rounded uppercase tracking-wider border border-gray-700">
            EBOARD
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-3">
        {/* Name */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-white font-mono">
              {member.name}
            </h3>
            <a
              href={`mailto:${member.email}`}
              className="shrink-0 p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded border border-gray-700 hover:border-gray-600 transition-all duration-200"
              title={`Email ${member.name}`}
            >
              <Mail size={14} />
            </a>
          </div>
          <p className="text-sm text-gray-400 font-mono mt-1">
            {member.position}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {showDepartment && (
            <span className="px-2 py-1 bg-gray-800 text-gray-300 border border-gray-700 rounded text-xs font-mono">
              {member.department}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
