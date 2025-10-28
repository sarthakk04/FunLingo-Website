import * as React from "react";
import { Button } from "@/components/ui/button";
import { FunlingoFeaturesSection } from "./sections/FunlingoFeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { FunlingoProductSection } from "./sections/FunlingoProductSection";
import { FunlingoTestimonialsSection } from "./sections/FunlingoTestimonialsSection";
import { WhyChooseFunlingoSection } from "./sections/WhyChooseFunlingoSection";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Feedback", href: "/feedback" },
  { label: "About", href: "/about" },
];

const featureBadges = [
  {
    icon: "/figmaAssets/svg-12.svg",
    text: "Learn while you watch",
  },
  {
    icon: "/figmaAssets/svg-1.svg",
    text: "1000+ active users",
  },
  {
    icon: "/figmaAssets/svg-6.svg",
    text: "Free trial available",
  },
  {
    icon: "/figmaAssets/svg-5.svg",
    text: "Works on YouTube & Netflix",
  },
  // {
  //   icon: "/figmaAssets/svg-12.svg",
  //   text: "Multiple languages",
  // },
  // {
  //   icon: "/figmaAssets/svg-1.svg",
  //   text: "Smart AI translations",
  // },
];

export const HomeDesktop = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-start relative bg-[#000000]">
      {/* Navigation Header */}
      <header
        className={`relative self-stretch w-full h-16 bg-[rgba(0,0,0,0.8)] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] border-b border-[#ffffff1a] sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-2xl shadow-blue-500/20" : ""
        }`}
      >
        <div className="flex items-center justify-between h-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className="animate-fade-in-down hover:scale-105 transition-transform duration-300"
          >
            <h1 className="relative flex items-center justify-center w-fit bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(115,208,185,1)_40%,rgba(0,145,189,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-transparent text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
              <img
                src={logo}
                width={55}
                alt="Funlingo Logo"
                className="drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
              />
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            {[
              { label: "Home", href: "/", active: true },
              { label: "Pricing", href: "/pricing", active: false },
              { label: "Roadmap", href: "/roadmap", active: false },
              { label: "Feedback", href: "/feedback", active: false },
              { label: "About", href: "/about", active: false },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative flex items-center justify-center w-fit font-inter font-medium ${
                  item.active ? "text-textwhite" : "text-textbody"
                } text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-all duration-300 group animate-fade-in-down`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#73d0b9] to-[#0091bd] transition-all duration-300 group-hover:w-full ${
                    item.active ? "w-full" : ""
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div
            className="hidden md:block animate-fade-in-down"
            style={{ animationDelay: "700ms" }}
          >
            <Button className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-10 px-5 py-2 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group overflow-hidden relative">
              <span className="relative z-10 flex items-center justify-center w-fit font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textwhite text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)]">
                Download Extension
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0091bd] to-[#025bcf] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 group animate-fade-in-down"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-[2px] bg-textwhite shadow-sm shadow-white/50 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`w-5 h-[2px] bg-textwhite shadow-sm shadow-white/50 transition-all duration-300 my-1.5 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-5 h-[2px] bg-textwhite shadow-sm shadow-white/50 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-[rgba(0,0,0,0.95)] backdrop-blur-xl border-b border-[#ffffff1a] transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center py-6 space-y-6">
            {[
              { label: "Home", href: "/", active: true },
              { label: "Pricing", href: "/pricing", active: false },
              { label: "Roadmap", href: "/roadmap", active: false },
              { label: "Feedback", href: "/feedback", active: false },
              { label: "About", href: "/about", active: false },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative flex items-center justify-center w-fit font-inter font-medium text-lg ${
                  item.active ? "text-textwhite" : "text-textbody"
                } hover:text-textwhite transition-all duration-300 transform hover:scale-105`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[#73d0b9] to-[#0091bd] rounded-full"></span>
                )}
              </a>
            ))}
            <Button className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-12 px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 mt-4">
              <span className="relative flex items-center justify-center w-fit font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textwhite text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)]">
                Download Extension
              </span>
            </Button>
          </nav>
        </div>
      </header>

      {/* Feature Badges Section */}
      <section className="flex flex-col w-full items-center justify-center relative bg-backgroundbackdrop overflow-hidden border-b border-[#ffffff1a]">
        <div className="max-w-[1200px] w-full py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-14 animate-fade-in-up">
            {featureBadges.map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group cursor-pointer"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <img
                  className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300 filter brightness-0 invert group-hover:invert-0 group-hover:brightness-100"
                  alt="Feature icon"
                  src={badge.icon}
                />
                <p className="relative flex items-center justify-center w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-textwhite text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#73d0b9] group-hover:to-[#0091bd] transition-all duration-300">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your sections */}
      <HeroSection />
      <WhyChooseFunlingoSection />
      <FunlingoProductSection />
      <FunlingoFeaturesSection />
      <FunlingoTestimonialsSection />
      <FooterSection />

      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};
