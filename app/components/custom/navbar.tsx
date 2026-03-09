"use client";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Briefcase,
  Users,
  Code,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Resources", href: "/resources", hasDropdown: true },
    { label: "Events", href: "/events" },
    { label: "Join Us!", href: "/join" },
  ];

  const resourcesDropdownItems = [
    {
      icon: GraduationCap,
      title: "Academic Resources",
      description: "Course materials & study guides",
      link: "resources",
    },
    {
      icon: Briefcase,
      title: "Career Resources",
      description: "Resume help & interview prep",
      link: "resources",
    },
    {
      icon: Users,
      title: "Community",
      description: "Discord, Ed Discussion & events",
      link: "resources",
    },
    {
      icon: Code,
      title: "Technical Resources",
      description: "Code repos & development tools",
      link: "resources",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setResourcesDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <button className="flex items-center space-x-3 transition-opacity duration-300 hover:opacity-80">
              <div className="w-10 h-10">
                <img
                  src="/acsu-logo.png"
                  alt="ACSU Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white text-sm hidden sm:block font-mono">
                ACSU
              </span>
            </button>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() =>
                        setResourcesDropdownOpen(!resourcesDropdownOpen)
                      }
                      className={`px-4 py-2 rounded-full text-sm inline-flex items-center space-x-1 cursor-pointer ${
                        pathname === item.href
                          ? "bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] border border-white/10 font-semibold"
                          : "text-gray-300 text-white font-semibold nav-item-glass"
                      }`}
                    >
                      <span className="transition-all duration-300">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${resourcesDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {resourcesDropdownOpen && (
                      <div className="absolute top-full right-0 mt-3 w-80 bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="p-2">
                          <div className="px-3 py-2 mb-2">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                              Browse Resources
                            </h3>
                          </div>
                          {resourcesDropdownItems.map((dropdownItem, idx) => {
                            const Icon = dropdownItem.icon;
                            return (
                              <Link key={idx} href="\resources">
                                <button
                                  onClick={() => {
                                    setResourcesDropdownOpen(false);
                                  }}
                                  className="w-full flex items-start space-x-3 px-3 py-3 rounded-xl hover:bg-white/8 transition-all duration-300 text-left group cursor-pointer"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                                    <Icon
                                      className="text-gray-300 group-hover:text-white transition-colors duration-300"
                                      size={20}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-white mb-0.5">
                                      {dropdownItem.title}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </button>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="bg-zinc-950 px-3 py-3 border-t border-white/10">
                          <Link href="\resources">
                            <button
                              onClick={() => {
                                setResourcesDropdownOpen(false);
                              }}
                              className="w-full px-3 py-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] border border-white/10 cursor-pointer"
                            >
                              View All Resources
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={item.label} href={item.href}>
                  <button
                    className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                      pathname === item.href
                        ? "bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] border border-white/10 font-semibold"
                        : "text-gray-300 text-white font-semibold nav-item-glass"
                    }`}
                  >
                    <span className="transition-all duration-300">
                      {item.label}
                    </span>
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/60 backdrop-blur-2xl border-t border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-base transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] border border-white/10 font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5 hover:font-semibold"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
