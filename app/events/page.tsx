import { Calendar } from "lucide-react";
import { Dialog } from "../components/custom/dialog";
import { EventCarousel } from "./components/event-carousel";
import { adminDb } from "@/lib/firebase-admin";
import { NewsletterCarousel } from "./components/newsletter-carousel";

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

export default async function EventsPage() {
  // Newsletter Information
  const emails = await getEmails();

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

        {/* Newsletter */}
        <NewsletterCarousel emails={emails} />

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
    </div>
  );
}
