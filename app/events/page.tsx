"use client";
import { useState, useRef, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Briefcase,
  GraduationCap,
  PartyPopper,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Dialog } from "../components/custom/dialog";
import { EventCarousel } from "./components/event-carousel";

interface Newsletter {
  date: string;
  title: string;
  link: string;
  highlights: string[];
  content?: string;
}

export interface EventInfo {
  title: string;
  description: string;
  frequency: string;
  details: string;
  image: string;
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

export default function EventsPage() {
  const [showAllNewsletters, setShowAllNewsletters] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] =
    useState<Newsletter | null>(null);
  const [selectedEventInfo, setSelectedEventInfo] = useState<EventInfo | null>(
    null,
  );
  const newsletterRef = useRef<HTMLDivElement>(null);

  // Carousel scroll refs
  const academicScrollRef = useRef<HTMLDivElement>(null);
  const corporateScrollRef = useRef<HTMLDivElement>(null);
  const socialScrollRef = useRef<HTMLDivElement>(null);
  const upcomingEventsScrollRef = useRef<HTMLDivElement>(null);

  // Upcoming Events (all future events)
  const upcomingEvents = [
    {
      title: "Perplexity Campus Ambassadors Tabling",
      date: "February 27th, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "106 Statler Hotel Dr",
      attendees: 200,
      description:
        "Learn about Comet, Perplexity's AI-powered browser. Free Paris baguette for signups!",
      type: "corporate",
    },
    {
      title: "ACSU Welcome Social",
      date: "February 28th, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Gates Hall Atrium",
      attendees: 150,
      description:
        "Join us for our semester kickoff social! Meet fellow CS students and ACSU team members.",
      type: "social",
    },
    {
      title: "Cornell x Jane Street Guts++ Competition",
      date: "March 3rd, 2026",
      time: "5:30 PM - 8:00 PM",
      location: "Cornell Campus",
      attendees: 120,
      description:
        "Register as individuals for team-based problem solving. Food and swag provided!",
      type: "corporate",
    },
    {
      title: "Faculty Dinner with Prof. Johnson",
      date: "March 5th, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Statler Hotel",
      attendees: 20,
      description:
        "Intimate dinner discussion with Prof. Johnson about AI research and career paths.",
      type: "social",
    },
    {
      title: "CS Game Night",
      date: "March 12th, 2026",
      time: "7:00 PM - 10:00 PM",
      location: "Gates Hall Commons",
      attendees: 75,
      description:
        "Unwind with board games, video games, and snacks. Open to all CS students!",
      type: "social",
    },
    {
      title: "Citadel Global Quantitative Strategies Tech Talk",
      date: "March 15th, 2026",
      time: "5:30 PM - 7:00 PM",
      location: "142 Upson Hall",
      attendees: 85,
      description:
        "Join Citadel for an exclusive tech talk about their Global Quantitative Strategies team.",
      type: "corporate",
    },
    {
      title: "Cornell Quant Fund Trading Lecture Series",
      date: "March 20th, 2026",
      time: "6:00 PM - 7:30 PM",
      location: "TBD",
      attendees: 45,
      description:
        "5-week lecture series covering quantitative finance basics with guest lecture from IMC Trading.",
      type: "academic",
    },
  ];

  // Weekly Newsletters with full content
  const newsletters: Newsletter[] = [
    {
      date: "Thursday, February 19th, 2026",
      title: "Perplexity X Cornell, Trading Lecture Series & More!",
      link: "#",
      highlights: [
        "Perplexity Campus Ambassadors",
        "Cornell Quant Fund Trading Series",
        "Jane Street Guts++ Competition",
      ],
      content: `✨Thursday, February 19th, 2026✨

On-Campus Opportunities
• Perplexity X Cornell
• Trading Lecture Series, hosted by Cornell Quant Fund
• Cornell x Jane Street Guts++ Competition!
• [NEW] Cornell DTI Product Strategy Course
• Cornell DTI Trends in Web Development Course
• Cornell AppDev Spring Courses
• Citadel's Global Quantitative Strategies (GQS) Tech Talk

Off-Campus Opportunities
• The Beautiful Game is HIRING
• WeCode 2026 Conference
• Ramp is HIRING
• Hack The Impossible
• Upcoming Hackathons

Perplexity X Cornell
Perplexity Campus Ambassadors will be tabling on Friday, 2/27 at Statler Hall from 9:00AM to 5:00PM. Stop by, show your signup, and grab a free Paris baguette 🥖✨

Sign up for Comet, Perplexity's new AI-powered browser, at https://www.perplexity.ai/comet on your computer and submit your first question. It's free for students and great for research.

📍 Where: 106 Statler Hotel Dr, Ithaca, NY
📣 Sign up here
**Remember to bring your physical laptop to show the team!! Come say hey and grab some food :)

Trading Lecture Series, hosted by Cornell Quant Fund
Are you interested in a career in quantitative finance? Cornell Quant Fund is excited to announce our second iteration of the Trading Lecture Series, a 5-week lecture series covering the basics of quantitative finance.

Topics include market structure, systematic equities, options theory, and more. Our sponsor IMC Trading will also host an exclusive guest lecture from their full-time traders!

The course is instructed by our club's Director of Education, Anna Lin (CS & Math '27). Anna has experience as a Systematic Trading Intern at JPMorgan Chase, and will be interning as a Quantitative Trader at IMC this summer.

If you're interested, please fill out this brief application by Friday, February 20th at 11:59pm. Applications will be reviewed on a rolling basis.`,
    },
    {
      date: "Thursday, February 12th, 2026",
      title: "Tech Talks, Hackathons & Career Opportunities",
      link: "#",
      highlights: [
        "Citadel GQS Tech Talk",
        "Animal Health Hackathon",
        "WeCode 2026 Conference",
      ],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      date: "Thursday, February 5th, 2026",
      title: "Spring Courses, Workshops & Recruiting Events",
      link: "#",
      highlights: [
        "Cornell DTI Courses",
        "AppDev Spring Programs",
        "Multiple Company Tech Talks",
      ],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      date: "Thursday, January 29th, 2026",
      title: "Welcome Back! Spring 2026 Kickoff",
      link: "#",
      highlights: [
        "Semester Overview",
        "New Corporate Partners",
        "Upcoming Faculty Dinners",
      ],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Thursday, December 12th, 2025",
      title: "End of Semester Wrap-up & Winter Break Resources",
      link: "#",
      highlights: ["Final Events", "Winter Internship Tips", "Spring Preview"],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Thursday, December 5th, 2025",
      title: "Finals Week Support & Study Resources",
      link: "#",
      highlights: ["Study Groups", "Office Hours", "Exam Prep Materials"],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Thursday, November 28th, 2025",
      title: "Thanksgiving Break & November Opportunities",
      link: "#",
      highlights: [
        "Holiday Schedule",
        "Winter Break Internships",
        "Career Fair Recap",
      ],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Thursday, November 21st, 2025",
      title: "Career Fair Prep & Industry Insights",
      link: "#",
      highlights: [
        "Resume Workshop Results",
        "Company Spotlights",
        "Networking Tips",
      ],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const displayedNewsletters = showAllNewsletters
    ? newsletters
    : newsletters.slice(0, 3);

  // Event Information (Annual Events)
  const academicEvents: EventInfo[] = [
    {
      title: "Faculty Dinners",
      description: "Intimate dinners with Cornell CS faculty",
      frequency: "Monthly throughout semester",
      details:
        "Faculty Dinners provide students with unique opportunities to connect with Cornell CS professors in an intimate setting. These events feature small group discussions about research, career paths, and academic advice. Each dinner is limited to 15-20 students to ensure meaningful conversations. Past faculty guests have included professors from AI, systems, theory, and other specializations. Students often cite these dinners as highlights of their ACSU experience.",
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwbGVjdHVyZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcyMjI3MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Research Nights",
      description: "Learn about cutting-edge CS research at Cornell",
      frequency: "Twice per semester",
      details:
        "Research Nights showcase the incredible research happening across Cornell's CS department. Graduate students and faculty present their work in accessible formats, covering topics from machine learning to programming languages. Students learn about research opportunities, lab culture, and paths to graduate school. Previous topics have included neural networks, distributed systems, human-computer interaction, and computational biology. These events often lead to undergraduate research positions.",
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwbGVjdHVyZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcyMjI3MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Professor Panels",
      description: "Q&A sessions with multiple CS faculty",
      frequency: "Once per semester",
      details:
        "Professor Panels bring together 3-5 faculty members for moderated discussions and student Q&A. Topics range from choosing courses and specializations to navigating academia versus industry careers. The panel format allows students to hear diverse perspectives on similar questions. Past panels have focused on 'Choosing Your CS Path,' 'Graduate School vs Industry,' and 'Building Technical Skills Outside the Classroom.' These events consistently draw 100+ students.",
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwbGVjdHVyZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcyMjI3MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Study Sessions",
      description: "Collaborative study groups for CS courses",
      frequency: "Weekly during midterms and finals",
      details:
        "ACSU organizes collaborative study sessions for popular CS courses, especially during exam periods. Upper-level students and TAs help facilitate these sessions, which cover problem-solving strategies, concept review, and exam preparation. Study sessions are held in convenient campus locations with plenty of whiteboard space. Popular courses include CS 2110, CS 3110, CS 4820, and more. These sessions help build community while improving academic outcomes.",
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwbGVjdHVyZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcyMjI3MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const corporateEvents: EventInfo[] = [
    {
      title: "Tech Talks",
      description: "Company presentations and engineering insights",
      frequency: "2-3 times per month",
      details:
        "Tech Talks bring engineers from leading companies to campus to discuss their work, technology stacks, and company culture. Recent speakers have come from companies like Google, Microsoft, Jane Street, Citadel, and many startups. Presentations typically include technical deep-dives, career advice, and Q&A sessions. Many talks are followed by informal networking and recruiting opportunities. These events help students understand different career paths and company cultures in tech.",
      image:
        "https://images.unsplash.com/photo-1560523160-c4ef2f0c61a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwdGVjaCUyMHRhbGslMjBzcGVha2Vyc3xlbnwxfHx8fDE3NzIyMjcyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Career Fairs",
      description: "Connect with recruiting companies",
      frequency: "Fall and Spring semesters",
      details:
        "ACSU partners with Cornell Career Services to host CS-focused career fairs. Companies send recruiters and engineers to meet students, discuss opportunities, and collect resumes. Our fairs feature both large tech companies and growing startups across various sectors. We also host resume review sessions and interview prep workshops leading up to the fairs. Past exhibitors have included companies from fintech, software, AI/ML, and more. These events result in numerous internship and full-time offers.",
      image:
        "https://images.unsplash.com/photo-1560523160-c4ef2f0c61a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwdGVjaCUyMHRhbGslMjBzcGVha2Vyc3xlbnwxfHx8fDE3NzIyMjcyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Networking Events",
      description: "Casual meetups with industry professionals",
      frequency: "Monthly",
      details:
        "Networking Events create informal settings for students to meet Cornell CS alumni and industry professionals. These events feature coffee chats, panel discussions, and small group conversations about career paths, internships, and industry trends. We bring back successful alumni from various companies and roles. Past events have covered paths into product management, entrepreneurship, quantitative finance, and research. Students often make meaningful connections that lead to mentorship and opportunities.",
      image:
        "https://images.unsplash.com/photo-1560523160-c4ef2f0c61a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwdGVjaCUyMHRhbGslMjBzcGVha2Vyc3xlbnwxfHx8fDE3NzIyMjcyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Resume Workshops",
      description: "Get feedback on your technical resume",
      frequency: "Before career fair season",
      details:
        "Resume Workshops help students craft compelling technical resumes. Industry professionals and career counselors provide one-on-one feedback, review bullet points, and share best practices for technical resumes. We cover formatting, action verbs, quantifying impact, and tailoring resumes for different roles. Students leave with polished resumes ready for applications. Past workshops have helped hundreds of students land interviews at top companies. We provide resume templates and examples specific to CS roles.",
      image:
        "https://images.unsplash.com/photo-1560523160-c4ef2f0c61a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwdGVjaCUyMHRhbGslMjBzcGVha2Vyc3xlbnwxfHx8fDE3NzIyMjcyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const socialEvents: EventInfo[] = [
    {
      title: "Welcome Socials",
      description: "Semester kickoff celebrations",
      frequency: "Start of each semester",
      details:
        "Welcome Socials mark the beginning of each semester with food, games, and community building. These events are perfect for meeting other CS students, learning about ACSU, and connecting with upperclassmen. We provide pizza, snacks, and activities ranging from board games to casual conversations. New students often find their friend groups and study partners at these events. Past socials have drawn 150+ students and created lasting connections across class years.",
      image:
        "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG5ldHdvcmtpbmclMjBzb2NpYWwlMjBldmVudCUyMGNvbGxlZ2V8ZW58MXx8fHwxNzcyMjI3MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Game Nights",
      description: "Unwind with board games and video games",
      frequency: "Monthly",
      details:
        "Game Nights offer CS students a chance to relax and have fun together. We provide board games, video games, snacks, and a welcoming atmosphere. Popular games include Codenames, Among Us, Super Smash Bros, and more. These events help students de-stress during busy semesters and build friendships outside of academic contexts. Game Nights are open to all skill levels and gaming preferences. Many students cite these as their favorite ACSU events.",
      image:
        "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG5ldHdvcmtpbmclMjBzb2NpYWwlMjBldmVudCUyMGNvbGxlZ2V8ZW58MXx8fHwxNzcyMjI3MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Picnics & Outings",
      description: "Outdoor activities and community bonding",
      frequency: "Warm weather months",
      details:
        "When weather permits, ACSU organizes outdoor picnics and group outings. Past events have included picnics on the Arts Quad, trips to local gorges, and outdoor sports activities. These events showcase Ithaca's natural beauty while building CS community. We provide food, games, and transportation when needed. Students enjoy getting to know each other in relaxed outdoor settings. These events are particularly popular in spring semester.",
      image:
        "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG5ldHdvcmtpbmclMjBzb2NpYWwlMjBldmVudCUyMGNvbGxlZ2V8ZW58MXx8fHwxNzcyMjI3MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "End of Semester Celebrations",
      description: "Celebrate completing another semester",
      frequency: "End of each semester",
      details:
        "End of Semester Celebrations bring the CS community together to celebrate surviving another challenging semester. These events feature food, music, awards for community members, and reflections on the semester's accomplishments. We recognize outstanding contributors, celebrate successes, and look forward to the next semester. Past celebrations have included themed parties, talent shows, and community awards. These events provide closure and help students decompress after finals.",
      image:
        "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG5ldHdvcmtpbmclMjBzb2NpYWwlMjBldmVudCUyMGNvbGxlZ2V8ZW58MXx8fHwxNzcyMjI3MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  // Handle click outside newsletter section
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        newsletterRef.current &&
        !newsletterRef.current.contains(event.target as Node) &&
        showAllNewsletters
      ) {
        setShowAllNewsletters(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAllNewsletters]);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Events & Updates
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay connected with ACSU through our weekly newsletters and upcoming
            events
          </p>
        </div>

        {/* Upcoming Events Carousel */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Upcoming ACSU Events
          </h2>

          <div className="relative group">
            {/* Left Arrow */}
            <button
              onClick={() => scroll(upcomingEventsScrollRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll(upcomingEventsScrollRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>

            {/* Scrollable Container */}
            <div
              ref={upcomingEventsScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {upcomingEvents.map((event, idx) => {
                const getEventIcon = (type: string) => {
                  switch (type) {
                    case "corporate":
                      return <Briefcase className="text-red-500" size={16} />;
                    case "academic":
                      return (
                        <GraduationCap className="text-red-500" size={16} />
                      );
                    case "social":
                      return <PartyPopper className="text-red-500" size={16} />;
                    default:
                      return <Calendar className="text-red-500" size={16} />;
                  }
                };

                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-96 bg-gradient-to-r from-red-600/20 to-red-800/20 border-2 border-red-600/50 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20 pt-5 mt-3"
                  >
                    <div className="flex items-start gap-4">
                      {/* Flickering dot for first event */}
                      {idx === 0 && (
                        <div className="relative flex-shrink-0 mt-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap transition-all hover:-translate-y-1">
                          {idx === 0 && (
                            <>
                              <span className="text-red-500 font-bold text-xs uppercase tracking-wider">
                                Next Event
                              </span>
                              <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                                LIVE
                              </span>
                            </>
                          )}
                          <div className="flex items-center gap-1">
                            {getEventIcon(event.type)}
                            <span className="text-xs text-gray-400 capitalize">
                              {event.type}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 transition-colors">
                          {event.title}
                        </h3>

                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-300 mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} />
                            {event.time}
                          </span>
                        </div>

                        <div className="flex items-start gap-1.5 text-xs text-gray-300 mb-3">
                          <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>

                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs text-gray-400">
                            <Users size={12} />
                            {event.attendees} attending
                          </span>

                          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors">
                            Add to Calendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Weekly Newsletters Section */}
        <div ref={newsletterRef} className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">
              Weekly Newsletters
            </h2>
            <a
              href="#"
              className="text-red-500 hover:text-red-400 text-sm font-semibold flex items-center gap-1"
            >
              View Archive <ExternalLink size={14} />
            </a>
          </div>

          {/* Newsletters Grid - Medium Style */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
              {displayedNewsletters.slice(0, 3).map((newsletter, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedNewsletter(newsletter)}
                  className="group bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-red-600 transition-all hover:-translate-y-1 text-left"
                >
                  {/* Date Badge */}
                  <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border-b border-gray-800 px-4 py-3">
                    <span className="text-red-400 text-sm font-mono">
                      {newsletter.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                      {newsletter.title}
                    </h3>

                    <div className="space-y-1 mb-4">
                      {newsletter.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <span className="text-red-500 text-xs mt-1">▪</span>
                          <span className="text-gray-400 text-xs line-clamp-1">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-red-500 text-sm font-semibold">
                      Read more →
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Expanded newsletters with scrollbar */}
            {showAllNewsletters && displayedNewsletters.length > 3 && (
              <div className="max-h-96 overflow-y-auto pr-2 space-y-4 border-t border-gray-800 pt-6">
                {displayedNewsletters.slice(3).map((newsletter, idx) => (
                  <button
                    key={idx + 3}
                    onClick={() => setSelectedNewsletter(newsletter)}
                    className="group flex gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-red-600 transition-all w-full text-left"
                  >
                    <div className="flex-1">
                      <span className="text-red-400 text-xs font-mono mb-2 block">
                        {newsletter.date}
                      </span>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                        {newsletter.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {newsletter.highlights
                          .slice(0, 2)
                          .map((highlight, hIdx) => (
                            <span key={hIdx} className="text-gray-400 text-xs">
                              • {highlight}
                            </span>
                          ))}
                      </div>
                    </div>
                    <ExternalLink
                      className="text-gray-400 group-hover:text-red-500 transition-colors flex-shrink-0"
                      size={18}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Show More / Show Less Button */}
            <div className="text-center">
              <button
                onClick={() => setShowAllNewsletters(!showAllNewsletters)}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-600 text-white px-6 py-3 rounded-lg transition-all"
              >
                {showAllNewsletters ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Show More Newsletters <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* More About ACSU Events - Carousels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            More About ACSU Events
          </h2>

          <EventCarousel
            events={academicEvents}
            scrollRef={academicScrollRef}
            title="Academic Events"
            icon={GraduationCap}
            onClick={() => setSelectedEventInfo}
          />

          <EventCarousel
            events={corporateEvents}
            scrollRef={corporateScrollRef}
            title="Corporate Events"
            icon={Briefcase}
            onClick={() => setSelectedEventInfo}
          />

          <EventCarousel
            events={socialEvents}
            scrollRef={socialScrollRef}
            title="Social Events"
            icon={PartyPopper}
            onClick={() => setSelectedEventInfo}
          />
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
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
              Add ACSU Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Dialog */}
      <Dialog
        isOpen={!!selectedNewsletter}
        onClose={() => setSelectedNewsletter(null)}
      >
        {selectedNewsletter && (
          <>
            <div className="mb-6">
              <span className="text-red-400 text-sm font-mono">
                {selectedNewsletter.date}
              </span>
              <h2 className="text-3xl font-bold text-white mt-2">
                {selectedNewsletter.title}
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {selectedNewsletter.content ||
                  "Newsletter content will be displayed here."}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Want to publicize your event/opportunity to the ACSU community?
                Fill out{" "}
                <a href="#" className="text-red-500 hover:text-red-400">
                  this form
                </a>
              </p>
            </div>
          </>
        )}
      </Dialog>

      {/* Event Info Dialog */}
      <Dialog
        isOpen={!!selectedEventInfo}
        onClose={() => setSelectedEventInfo(null)}
      >
        {selectedEventInfo && (
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedEventInfo.title}
              </h2>
              <p className="text-red-500 font-semibold">
                {selectedEventInfo.frequency}
              </p>
            </div>

            <div className="relative h-64 mb-6 rounded-lg overflow-hidden"></div>

            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                {selectedEventInfo.description}
              </p>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-400 leading-relaxed">
                  {selectedEventInfo.details}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
                Get Notified About This Event
              </button>
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
}
