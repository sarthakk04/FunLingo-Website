import * as React from "react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import {
  Rocket,
  Users,
  Languages,
  Zap,
  Target,
  Heart,
  Globe,
  Lightbulb,
} from "lucide-react";

export const About = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      number: "1,000+",
      label: "Active Users",
      description: "Language learners worldwide trust Funlingo",
      icon: <Users className="w-6 h-6" />,
      delay: "600ms",
    },
    {
      number: "50+",
      label: "Languages",
      description: "Supported language pairs and growing",
      icon: <Languages className="w-6 h-6" />,
      delay: "800ms",
    },
    {
      number: "10M+",
      label: "Translations",
      description: "Words and phrases translated to date",
      icon: <Zap className="w-6 h-6" />,
      delay: "1000ms",
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description:
        "Pioneering AI-powered language learning through video content",
      gradient: "from-[#73d0b9] to-[#0091bd]",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Community",
      description:
        "Building a global community of passionate language learners",
      gradient: "from-[#025bcf] to-[#0091bd]",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed",
      description:
        "Instant translations and explanations without slowing you down",
      gradient: "from-[#73d0b9] to-[#025bcf]",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Driven by our love for languages and learning",
      gradient: "from-[#0091bd] to-[#025bcf]",
    },
  ];

  return (
    <div className="flex flex-col items-start relative bg-[linear-gradient(180deg,#000000_0%,#0a1628_50%,#025bcf_100%)] min-h-screen">
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
              { label: "Home", href: "/", active: false },
              { label: "Pricing", href: "/pricing", active: false },
              { label: "Roadmap", href: "/roadmap", active: false },
              { label: "Feedback", href: "/feedback", active: false },
              { label: "About", href: "/about", active: true },
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
              {/* <Rocket className="w-4 h-4 mr-2 relative z-10" /> */}
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
              { label: "Home", href: "/", active: false },
              { label: "Pricing", href: "/pricing", active: false },
              { label: "Roadmap", href: "/roadmap", active: false },
              { label: "Feedback", href: "/feedback", active: false },
              { label: "About", href: "/about", active: true },
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

      {/* Main Content */}
      <main
        ref={sectionRef}
        className="flex flex-col w-full items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="flex flex-col max-w-7xl w-full items-center gap-16 sm:gap-20">
          {/* Hero Section */}
          <div
            className={`flex flex-col items-center gap-6 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(115,208,185,0.1)] border border-[#73d0b9]/20 text-[#73d0b9] text-sm font-medium mb-2 animate-fade-in-up">
              <Target className="w-4 h-4" />
              Our Story
            </div>

            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-textwhite text-3xl sm:text-4xl lg:text-5xl xl:text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-tight sm:leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] animate-fade-in-up">
              About Funlingo
            </h1>

            <p
              className="font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-textbody text-lg sm:text-xl lg:text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-relaxed sm:leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)] max-w-3xl animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Making language learning natural, effortless, and fun through the
              content you already love
            </p>
          </div>

          {/* Mission Section */}
          <div className="w-full">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Mission Text */}
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-textwhite text-2xl sm:text-3xl lg:text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Our Mission
                </h3>

                <div className="space-y-4 font-body-normal-regular text-textbody text-[length:var(--body-normal-regular-font-size)] leading-relaxed">
                  <p>
                    Funlingo was born from a simple idea: language learning
                    shouldn't feel like studying. By integrating seamlessly with
                    the videos you already watch, we transform passive
                    entertainment into active learning opportunities.
                  </p>

                  <p>
                    Every show, every video becomes a chance to improve your
                    language skills naturally and contextually. We believe that
                    the best way to learn a language is through immersion and
                    real-world context.
                  </p>

                  <p>
                    That's why we've built a tool that meets you where you
                    are—watching your favorite content—and helps you learn
                    without disrupting your experience.
                  </p>
                </div>
              </div>

              {/* Values Grid */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-[#ffffff40]"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{value.icon}</div>
                    </div>

                    <h4 className="font-body-normal-medium text-textwhite text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#73d0b9] group-hover:to-[#0091bd] transition-all duration-300">
                      {value.title}
                    </h4>

                    <p className="font-body-normal-regular text-textbody text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-[#ffffff40] animate-fade-in-up"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(115,208,185,0.1)] border border-[#73d0b9]/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#73d0b9]">{stat.icon}</div>
                  </div>

                  <div className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-textwhite text-3xl sm:text-4xl lg:text-[length:var(--heading-h1-font-size)] mb-2 group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#73d0b9] group-hover:to-[#0091bd] transition-all duration-300">
                    {stat.number}
                  </div>

                  <h4 className="font-body-normal-medium text-textwhite text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#73d0b9] group-hover:to-[#0091bd] transition-all duration-300">
                    {stat.label}
                  </h4>

                  <p className="font-body-normal-regular text-textbody text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Story Section */}
          <div className="w-full max-w-4xl">
            <div
              className={`p-8 sm:p-12 rounded-2xl bg-[rgba(2,91,207,0.1)] border border-[#025bcf]/30 backdrop-blur-sm transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,145,189,0.2)] border border-[#0091bd]/30 text-[#0091bd] text-sm font-medium">
                  <Heart className="w-4 h-4" />
                  Behind the Scenes
                </div>

                <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-2xl sm:text-3xl">
                  The Team Behind Funlingo
                </h3>

                <div className="space-y-4 font-body-normal-regular text-textbody text-[length:var(--body-normal-regular-font-size)] leading-relaxed max-w-3xl mx-auto">
                  <p>
                    We're a passionate team of language enthusiasts, AI
                    researchers, and product builders who believe that learning
                    should be joyful and integrated into daily life.
                  </p>

                  <p>
                    Our journey started when we realized how much time we spent
                    consuming content in other languages and saw an opportunity
                    to turn that time into meaningful learning experiences.
                  </p>

                  <p>
                    Today, we're dedicated to making language learning
                    accessible to everyone, everywhere—one video at a time.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <div className="flex items-center justify-center gap-2 font-body-small-regular text-textbody text-sm">
                    <div className="w-2 h-2 bg-[#73d0b9] rounded-full animate-pulse"></div>
                    Remote First Team
                  </div>
                  <div className="flex items-center justify-center gap-2 font-body-small-regular text-textbody text-sm">
                    <div className="w-2 h-2 bg-[#0091bd] rounded-full animate-pulse"></div>
                    Global Community
                  </div>
                  <div className="flex items-center justify-center gap-2 font-body-small-regular text-textbody text-sm">
                    <div className="w-2 h-2 bg-[#025bcf] rounded-full animate-pulse"></div>
                    User-Focused Development
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`flex flex-col items-center gap-8 text-center transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4 max-w-2xl animate-fade-in-up">
              <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-2xl sm:text-3xl">
                Join Our Journey
              </h3>

              <p className="font-body-large-regular text-textbody text-[length:var(--body-large-regular-font-size)] leading-relaxed">
                We're just getting started. Be part of the revolution in
                language learning and help us make Funlingo better for everyone.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Button className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-12 px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group/btn overflow-hidden relative">
                <Rocket className="w-4 h-4 mr-2 relative z-10 group-hover/btn:scale-110 transition-transform" />
                <span className="relative z-10 font-body-normal-medium text-textwhite group-hover/btn:scale-105 transition-transform duration-300">
                  Download Extension
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0091bd] to-[#025bcf] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] text-textwhite font-body-normal-medium h-12 px-8 py-3 rounded-lg border border-[#ffffff1a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group">
                <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Share Feedback
              </Button>
            </div>

            {/* Social Proof */}
            <div
              className="flex flex-wrap items-center justify-center gap-6 mt-8 font-body-small-regular text-textbody text-sm animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-[#73d0b9] to-[#0091bd] border-2 border-[#0a1628]"
                    ></div>
                  ))}
                </div>
                <span>Join 1,000+ learners</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="text-yellow-400">
                      ★
                    </div>
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </main>

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
            transform: translateY(30px);
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
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};
