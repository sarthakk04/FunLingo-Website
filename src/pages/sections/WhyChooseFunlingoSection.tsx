import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";


const progressItems = [
  {
    title: "Contextual Learning",
    description:
      "Learn words and phrases in the context of real conversations.",
    progress: "95%",
  },
  {
    title: "Fun & Engaging",
    description: "Turn your favorite videos into language lessons.",
    progress: "92%",
  },
  {
    title: "AI-Powered Insights",
    description: "Get instant explanations and grammar tips from our AI.",
    progress: "88%",
  },
];

export const WhyChooseFunlingoSection = (): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars sequentially
          progressItems.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedProgress((prev) => {
                const newProgress = [...prev];
                newProgress[index] = parseInt(progressItems[index].progress);
                return newProgress;
              });
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col w-full items-center gap-8 sm:gap-10 lg:gap-14 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-24 bg-backgroundbackdrop overflow-hidden"
    >
      {/* Header Section */}
      <div
        className={`inline-flex flex-col max-w-screen-sm items-center justify-center gap-4 sm:gap-5 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Badge className="inline-flex items-center justify-center px-4 py-1.5 rounded-[99px] border border-solid border-[#ffffff1a] shadow-[inset_0px_-1px_4px_#00000040,inset_0px_0px_0px_#e5e5e8] bg-[linear-gradient(118deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)] h-auto hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 animate-fade-in-up">
          <span className="font-body-xs-medium text-textwhite">
            Why Funlingo
          </span>
        </Badge>
        <h2 className="font-heading-h3 text-textwhite text-center text-2xl sm:text-3xl lg:text-4xl xl:text-[length:var(--heading-h3-font-size)] leading-tight sm:leading-normal">
          The Smartest Way to Learn a Language
        </h2>
      </div>

      {/* Content Section */}
      <div
        className={`flex flex-col lg:flex-row w-full max-w-4xl xl:max-w-[1008px] items-stretch gap-6 lg:gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Progress Cards */}
        <Card className="flex-1 rounded-2xl overflow-hidden border border-solid border-[#ffffff33] [background:radial-gradient(50%_50%_at_51%_-14%,rgba(0,77,101,1)_0%,rgba(2,8,22,1)_100%)] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-[#ffffff66] transition-all duration-500 group">
          <CardContent className="flex flex-col h-full p-6 sm:p-8 lg:p-10 gap-6 sm:gap-8">
            {progressItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 w-full group-hover:scale-[1.02] transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200 + 500}ms` }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-heading-h6 text-textwhite text-lg sm:text-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#73d0b9] hover:to-[#0091bd] transition-all duration-300 cursor-default">
                    {item.title}
                  </h4>
                  <span className="font-body-small-medium text-brandlime-green text-sm sm:text-base animate-pulse">
                    {animatedProgress[index]}%
                  </span>
                </div>
                <p className="font-body-normal-regular text-textbody text-sm sm:text-base leading-relaxed hover:text-textwhite transition-colors duration-300 cursor-default">
                  {item.description}
                </p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 sm:h-3 overflow-hidden group-hover:bg-gray-600 transition-colors duration-300">
                  <div
                    className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-2.5 sm:h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/50"
                    style={{
                      width: `${animatedProgress[index]}%`,
                      transitionDelay: `${index * 300}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Image Section */}
        <div
          className={`flex-1 relative rounded-2xl overflow-hidden group transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src="/figmaAssets/abstract-fluid-art-1.png"
            alt="Funlingo in action"
            className="rounded-2xl w-full h-full min-h-[300px] sm:min-h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="font-heading-h6 text-textwhite mb-2">
                See Funlingo in Action
              </h3>
              <p className="font-body-small-regular text-textbody">
                Real-time translations and learning insights while you watch
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Grid for Mobile */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl mt-8">
        {[
          { icon: "🎯", text: "Personalized Learning" },
          { icon: "⚡", text: "Instant Translations" },
          { icon: "🤖", text: "AI Powered" },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[#ffffff1a] hover:bg-[rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 150 + 800}ms` }}
          >
            <span className="text-2xl mb-2">{feature.icon}</span>
            <span className="font-body-small-medium text-textwhite">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
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
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
