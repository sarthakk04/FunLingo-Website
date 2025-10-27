import * as React from "react";
// import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FunlingoFeaturesSection } from "./sections/FunlingoFeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { FunlingoProductSection } from "./sections/FunlingoProductSection";
import { FunlingoTestimonialsSection } from "./sections/FunlingoTestimonialsSection";
import { WhyChooseFunlingoSection } from "./sections/WhyChooseFunlingoSection";

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
  {
    icon: "/figmaAssets/svg-12.svg",
    text: "Multiple languages",
  },
  {
    icon: "/figmaAssets/svg-1.svg",
    text: "Smart AI translations",
  },
];

export const HomeDesktop = (): React.JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-[#000000]">
      <header className="relative self-stretch w-full h-16 bg-[rgba(0,0,0,0.8)] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] border-b border-[#ffffff1a]">
        <div className="flex items-center justify-between h-full max-w-[1200px] mx-auto px-6">
          <a href="/">
            <h1 className="relative flex items-center justify-center w-fit bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(115,208,185,1)_40%,rgba(0,145,189,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-transparent text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
              Funlingo
            </h1>
          </a>

          <nav className="flex items-center justify-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium ${
                  item.active ? "text-textwhite" : "text-textbody"
                } text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-10 px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <span className="relative flex items-center justify-center w-fit font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textwhite text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)]">
              Download Extension
            </span>
          </Button>
        </div>
      </header>

      <section className="flex flex-col max-w-[1200px] items-center justify-center gap-2 relative w-full flex-[0_0_auto] bg-backgroundbackdrop overflow-hidden">
        <div className="max-w-[1200px] w-[1200px] h-10 items-center justify-center gap-14 px-0 py-2.5 flex relative">
          {featureBadges.map((badge, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
            >
              <img
                className="relative w-4 h-4"
                alt="Feature icon"
                src={badge.icon}
              />
              <p className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-textwhite text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <HeroSection />
      <WhyChooseFunlingoSection />
      <FunlingoProductSection />
      <FunlingoFeaturesSection />
      <FunlingoTestimonialsSection />
      <FooterSection />
    </div>
  );
};
