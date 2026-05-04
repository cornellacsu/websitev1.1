"use client";

import { Dialog } from "@/app/components/custom/dialog";
import { Calendar, Mail } from "lucide-react";
import { useState } from "react";

const NEWSLETTER_EMAIL = "acsu-l@list.cornell.edu";
const joinHref = `mailto:${NEWSLETTER_EMAIL}?subject=${encodeURIComponent("join")}`;
const leaveHref = `mailto:${NEWSLETTER_EMAIL}?subject=${encodeURIComponent("leave")}`;

export function NewsletterSubscribe() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-[500px] h-[400px] flex flex-col items-center bg-gradient-to-br from-red-600/10 to-red-800/10 border border-red-600/30 rounded-2xl p-12 text-center">
        <Calendar className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-white mb-4">
          Never Miss an Update
        </h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
          Subscribe to our weekly newsletter and add ACSU events to your
          calendar
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-red-600/80 hover:bg-red-800 text-sm text-white px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            Subscribe to Newsletter
          </button>
          <a href="https://calendar.google.com/calendar/u/0/r?cid=c_57a6507b1e9c36a6bfd510214b38c5358a1ab6f0ab59651d9d40a84254fb57e3@group.calendar.google.com">
            <button className="bg-gray-800/80 hover:bg-gray-700/60 text-sm text-white px-8 py-3 rounded-lg transition-colors font-semibold">
              Add ACSU Calendar
            </button>
          </a>
        </div>
      </div>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto max-w-2xl text-left">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/15 text-red-400">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Newsletter Subscription
              </h2>
              <p className="text-sm text-gray-400">
                Use your Cornell email client to join or leave the ACSU mailing
                list.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
              <h3 className="mb-2 text-lg font-semibold text-white">Join</h3>
              <p className="text-gray-300">
                Email{" "}
                <span className="font-semibold text-white">
                  {NEWSLETTER_EMAIL}
                </span>{" "}
                with the subject{" "}
                <span className="font-semibold text-white">
                  &quot;join&quot;
                </span>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-gray-700 bg-gray-800/60 p-5">
              <h3 className="mb-2 text-lg font-semibold text-white">Leave</h3>
              <p className="text-gray-300">
                To unsubscribe, email{" "}
                <span className="font-semibold text-white">
                  {NEWSLETTER_EMAIL}
                </span>{" "}
                with the subject{" "}
                <span className="font-semibold text-white">
                  &quot;leave&quot;
                </span>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={joinHref}
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Email to Join
            </a>
            <a
              href={leaveHref}
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              Email to Leave
            </a>
          </div>
        </div>
      </Dialog>
    </>
  );
}
