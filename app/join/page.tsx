import { CheckCircle } from "lucide-react";

export default function JoinPage() {
  return (
    <div className="min-h-screen py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Join ACSU!</h1>
          <p className="text-xl text-gray-400">
            Become part of Cornell's premier computer science undergraduate
            community
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Member Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Faculty dinners and connection with professors",
              "Resume outreach through our resume book",
              "Networking with industry professionals",
              "Tech talks from top companies",
              "Peer mentorship",
              "Social events and community building",
              "Academic resources and support",
              "Weekly newsletter of latest career opportunities",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle
                  className="text-red-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Join Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-12 mb-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 rounded-full mb-6">
                <img
                  src="/acsu-logo.png"
                  alt="ACSU Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Join?
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out our membership application to become part of the ACSU
                community. The form takes just a few minutes to complete.
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScK27uMvjakGJhxYXnQFS58GTVz4_fhKHDYHbV2E5Sbfokr8Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block items-center justify-center gap-2 rounded-lg 0 px-6 py-3 bg-red-600 hover:bg-red-700 text-white transition-all duration-300 text-lg font-bold shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/50 hover:scale-105"
            >
              Complete Membership Application
            </a>

            <p className="text-sm text-gray-500 mt-6">
              Opens in Google Forms • Only takes 3-5 minutes
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center text-gray-400">
          <p className="mb-2">Questions about membership?</p>
          <a
            href="mailto:acsu@cornell.edu"
            className="text-red-500 hover:text-red-400"
          >
            acsu@cornell.edu
          </a>
        </div>
      </div>
    </div>
  );
}
