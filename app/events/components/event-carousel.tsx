import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { EventInfo, scroll } from "../page";

export function EventCarousel({
  events,
  scrollRef,
  title,
  icon: Icon,
  onClick,
}: {
  events: EventInfo[];
  scrollRef: React.RefObject<HTMLDivElement | null>;
  title: string;
  icon: any;
  onClick: () => void;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-red-500" size={28} />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(scrollRef, "left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(scrollRef, "right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {events.map((event, idx) => (
            <button
              key={idx}
              onClick={onClick}
              className="flex-shrink-0 w-80 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-red-600 transition-all hover:-translate-y-1 text-left group"
            >
              {/* Image */}
              <div className="relative h-32 bg-gray-800 overflow-hidden"></div>

              {/* Content */}
              <div className="p-4">
                <h4 className="text-lg font-bold text-white mb-1 transition-colors">
                  {event.title}
                </h4>
                <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={12} className="mr-1" />
                  {event.frequency}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
