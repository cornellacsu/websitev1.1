import {
  Briefcase,
  Calendar,
  GraduationCap,
  Lightbulb,
  PartyPopper,
} from "lucide-react";
import { adminDb } from "@/lib/firebase-admin";
import { NewsletterCarousel } from "./components/newsletter-carousel";
import { SubteamCategorySection } from "./components/subteam-section";

export interface EventInfo {
  title: string;
  description: string;
  frequency: string;
  details: string;
  image: string;
}

export type EmailDoc = {
  id: string;
  sender: string;
  recipient: string;
  subject: string;
  strippedHtml: string;
  strippedText: string;
  source: string;
};

async function getEmails() {
  const snapshot = await adminDb
    .collection("mailgunEmails")
    .orderBy("receivedAt", "desc")
    .limit(25)
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      sender: String(data.sender ?? ""),
      recipient: String(data.recipient ?? ""),
      subject: String(data.subject ?? ""),
      strippedHtml: String(data.strippedHtml ?? ""),
      strippedText: String(data.strippedText ?? ""),
      source: String(data.source ?? ""),
    } satisfies EmailDoc;
  });
}

export const scroll = (
  ref: React.RefObject<HTMLDivElement | null>,
  direction: "left" | "right",
) => {
  if (ref.current) {
    const scrollAmount = 400;
    ref.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
};

// Event Category Descriptions
const subteamCategories = {
  corporate: {
    title: "Corporate",
    icon: Briefcase,
    description:
      "The Corporate subteam of ACSU focuses on creating and maintaining relationships with industry partners to create professional and career development opportunities for our members. By working closely with companies for sponsorships and to organize events such as information sessions, networking nights, technical workshops, and recruiting panels, our members gain firsthand insight into different career paths within tech and get the opportunity to connect directly with working professionals.",
    image: "/events-images/corporate.jpg",
  },
  social: {
    title: "Social",
    icon: PartyPopper,
    description:
      "The Social Team focuses on fostering community and connection within the Bowers community through both events and ongoing initiatives. Over the past year, we have helped in planning signature events such as the Bowers Formal and coordinated programs like the mentorship initiative to strengthen relationships among members. We aim to create inclusive, engaging spaces that bring people together.",
    image: "/events-images/social.jpg",
  },
  academic: {
    title: "Academic",
    icon: GraduationCap,
    description:
      "The Academic team plans and hosts large-scale events that connect students with academic and professional opportunities, often drawing over 100 attendees. Members organize initiatives like Research Night, student–faculty networking events, and panels on internships, research, graduate school, and alumni experiences.",
    image: "/events-images/academic.jpg",
  },
  prodops: {
    title: "ProdOps",
    icon: Lightbulb,
    description:
      "ProdOps is a low-commitment, multidisciplinary committee within ACSU that helps students explore the full lifecycle of user-facing products through hands-on projects, workshops, and talks from industry professionals. Members gain exposure to areas like web development, business analytics, product design, and marketing.",
    image: "/events-images/prodOps.jpg",
  },
};

const generalEvents = [
  "Research Night acquaints students with various research opportunities",
  "Student faculty luncheon helps students talk to faculty members",
  "Ed CS 0000 forum discussion helps students navigate the CS curriculum",
  "Graduate school events inform those interested in CS graduate school",
  "Faculty of the Year awards ceremony",
  "Alumni panels and mock interviews",
  "Corporate info sessions and recruitment events",
  "Resume book for connecting with recruiters",
  "Mentorship program pairing upperclassmen with underclassmen",
  "International Student Night to support and promote the international student community",
  "Bowers formal and social celebrations",
  "Seasonal events like trick or treating and holiday gatherings",
];

export default async function EventsPage() {
  // Newsletter Information
  const emails = await getEmails();

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Events & Updates
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Stay connected with ACSU through our weekly newsletters and upcoming
            events
          </p>
          <div className="flex items-center justify-between">
            <img
              src={"events-images/events1.jpg"}
              className="w-xl rounded-xl"
            />
            <img
              src={"events-images/events2.jpg"}
              className="w-xl rounded-xl"
            />
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterCarousel emails={emails} />

        {/* Subteam Descriptions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            More About ACSU Events
          </h2>

          <SubteamCategorySection
            category={subteamCategories.corporate}
            variant="right"
          />

          <SubteamCategorySection
            category={subteamCategories.social}
            variant="left"
          />

          <SubteamCategorySection
            category={subteamCategories.academic}
            variant="right"
          />

          <SubteamCategorySection
            category={subteamCategories.prodops}
            variant="left"
          />

          {/* General Events Section */}
          <div className="mb-12 relative overflow-hidden rounded-2xl">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/15 via-red-500/5 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent"></div>

            <div className="relative p-10">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="text-red-500" size={32} />
                <h3 className="text-3xl font-bold text-white">
                  General Events
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 max-w-6xl">
                {generalEvents.map((event, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(248,113,113,0.6)] transition-transform"></div>
                    </div>
                    <p className="cursor-default text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 bg-gradient-to-br from-red-600/10 to-red-800/10 border border-red-600/30 rounded-2xl p-12 text-center">
          <Calendar className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our weekly newsletter and add ACSU events to your
            calendar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
              Subscribe to Newsletter
            </button>
            <a href="https://calendar.google.com/calendar/u/0/r?cid=c_57a6507b1e9c36a6bfd510214b38c5358a1ab6f0ab59651d9d40a84254fb57e3@group.calendar.google.com">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
                Add ACSU Calendar
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
