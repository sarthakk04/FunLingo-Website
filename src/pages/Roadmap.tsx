import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roadmapItems = [
  {
    quarter: "Q1 2024",
    status: "Completed",
    items: [
      { title: "Chrome Extension Launch", description: "Initial release with YouTube support", completed: true },
      { title: "Basic Translation Features", description: "Word and phrase translations in 10 languages", completed: true },
      { title: "User Authentication", description: "Secure login and progress tracking", completed: true }
    ]
  },
  {
    quarter: "Q2 2024",
    status: "Completed",
    items: [
      { title: "Netflix Support", description: "Extend functionality to Netflix platform", completed: true },
      { title: "AI-Powered Explanations", description: "Context-aware grammar and usage tips", completed: true },
      { title: "Pronunciation Guides", description: "Audio pronunciation for all translations", completed: true }
    ]
  },
  {
    quarter: "Q3 2024",
    status: "In Progress",
    items: [
      { title: "Firefox Extension", description: "Cross-browser support for Firefox users", completed: true },
      { title: "Mobile Apps (iOS & Android)", description: "Native mobile experience", completed: false },
      { title: "Advanced Vocabulary Builder", description: "Spaced repetition learning system", completed: false }
    ]
  },
  {
    quarter: "Q4 2024",
    status: "Planned",
    items: [
      { title: "Amazon Prime Video Support", description: "Expand to more streaming platforms", completed: false },
      { title: "Conversation Practice Mode", description: "Interactive dialogue practice", completed: false },
      { title: "Learning Analytics Dashboard", description: "Track your progress with detailed insights", completed: false }
    ]
  },
  {
    quarter: "Q1 2025",
    status: "Planned",
    items: [
      { title: "Community Features", description: "Connect with other learners", completed: false },
      { title: "Custom Content Upload", description: "Learn from your own videos", completed: false },
      { title: "API Access", description: "Integrate Funlingo into your apps", completed: false }
    ]
  }
];

export const Roadmap = (): React.JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-[linear-gradient(180deg,#000000_0%,#0a1628_50%,#025bcf_100%)] min-h-screen">
      <header className="relative self-stretch w-full h-16 bg-[rgba(0,0,0,0.8)] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] border-b border-[#ffffff1a] sticky top-0 z-50">
        <div className="flex items-center justify-between h-full max-w-[1200px] mx-auto px-6">
          <a href="/">
            <h1 className="relative flex items-center justify-center w-fit bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(115,208,185,1)_40%,rgba(0,145,189,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-transparent text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
              Funlingo
            </h1>
          </a>
          <nav className="flex items-center justify-center gap-8">
            <a href="/" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textbody text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-colors">Home</a>
            <a href="/pricing" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textbody text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-colors">Pricing</a>
            <a href="/roadmap" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textwhite text-base tracking-[0.16px] leading-[26px] whitespace-nowrap">Roadmap</a>
            <a href="/feedback" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textbody text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-colors">Feedback</a>
            <a href="/about" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textbody text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-colors">About</a>
          </nav>
          <Button className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-10 px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <span className="relative flex items-center justify-center w-fit font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textwhite text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)]">
              Download Extension
            </span>
          </Button>
        </div>
      </header>

      <main className="flex flex-col w-full items-center justify-center py-24 px-10 relative">
        <div className="flex flex-col max-w-[1200px] w-full items-center gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-textwhite text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Product Roadmap
            </h1>
            <p className="font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-textbody text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)] max-w-[600px]">
              Our journey to make language learning accessible to everyone
            </p>
          </div>

          <div className="flex flex-col w-full gap-12">
            {roadmapItems.map((quarter, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)]">
                    {quarter.quarter}
                  </h3>
                  <Badge className={`${
                    quarter.status === "Completed" ? "bg-brandlime-green" :
                    quarter.status === "In Progress" ? "bg-brandblue-light" :
                    "bg-[rgba(255,255,255,0.1)]"
                  } border-0`}>
                    <span className={`${
                      quarter.status === "Completed" ? "text-black" : "text-textwhite"
                    } font-body-xs-medium`}>
                      {quarter.status}
                    </span>
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {quarter.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex flex-col p-6 rounded-xl border ${
                        item.completed
                          ? "border-brandlime-green bg-[rgba(115,208,185,0.05)]"
                          : "border-[#ffffff1a] bg-[rgba(255,255,255,0.05)]"
                      } backdrop-blur-sm`}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 ${
                          item.completed
                            ? "border-brandlime-green bg-brandlime-green"
                            : "border-textbody"
                        }`}>
                          {item.completed && (
                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div className="flex flex-col gap-2 flex-grow">
                          <h4 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-textwhite text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)]">
                            {item.title}
                          </h4>
                          <p className="font-body-small-regular text-textbody">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 text-center mt-8">
            <p className="font-body-normal-regular text-textbody max-w-[600px]">
              Have a feature request? We'd love to hear from you!
            </p>
            <Button className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-10 px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
              <a href="/feedback" className="font-body-normal-medium text-textwhite">
                Submit Feedback
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
