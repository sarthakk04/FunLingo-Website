import * as React from "react";
import { Button } from "@/components/ui/button";

export const About = (): React.JSX.Element => {
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
            <a href="/roadmap" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textbody text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-colors">Roadmap</a>
            <a href="/feedback" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textbody text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-colors">Feedback</a>
            <a href="/about" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textwhite text-base tracking-[0.16px] leading-[26px] whitespace-nowrap">About</a>
          </nav>
          <Button className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-10 px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <span className="relative flex items-center justify-center w-fit font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textwhite text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)]">
              Download Extension
            </span>
          </Button>
        </div>
      </header>

      <main className="flex flex-col w-full items-center justify-center py-24 px-10 relative">
        <div className="flex flex-col max-w-[1200px] w-full items-center gap-20">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-textwhite text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              About Funlingo
            </h1>
            <p className="font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-textbody text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)] max-w-[700px]">
              Making language learning natural, effortless, and fun through the content you already love
            </p>
          </div>

          <div className="flex flex-col gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 flex flex-col gap-6">
                <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)]">
                  Our Mission
                </h3>
                <p className="font-body-normal-regular text-textbody leading-relaxed">
                  Funlingo was born from a simple idea: language learning shouldn't feel like studying. 
                  By integrating seamlessly with the videos you already watch, we transform passive entertainment 
                  into active learning opportunities. Every show, every video becomes a chance to improve 
                  your language skills naturally and contextually.
                </p>
                <p className="font-body-normal-regular text-textbody leading-relaxed">
                  We believe that the best way to learn a language is through immersion and real-world context. 
                  That's why we've built a tool that meets you where you are—watching your favorite content—and 
                  helps you learn without disrupting your experience.
                </p>
              </div>
              <div className="flex-1 p-8 rounded-2xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading-h6 text-textwhite mb-2">Innovation</h4>
                      <p className="font-body-small-regular text-textbody">
                        Pioneering AI-powered language learning through video content
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading-h6 text-textwhite mb-2">Community</h4>
                      <p className="font-body-small-regular text-textbody">
                        Building a global community of passionate language learners
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading-h6 text-textwhite mb-2">Speed</h4>
                      <p className="font-body-small-regular text-textbody">
                        Instant translations and explanations without slowing you down
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm text-center">
                <div className="text-5xl font-heading-h1 text-transparent bg-[linear-gradient(135deg,rgba(115,208,185,1)_0%,rgba(0,145,189,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                  1,000+
                </div>
                <h4 className="font-heading-h6 text-textwhite">Active Users</h4>
                <p className="font-body-small-regular text-textbody">
                  Language learners worldwide trust Funlingo
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm text-center">
                <div className="text-5xl font-heading-h1 text-transparent bg-[linear-gradient(135deg,rgba(115,208,185,1)_0%,rgba(0,145,189,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                  50+
                </div>
                <h4 className="font-heading-h6 text-textwhite">Languages</h4>
                <p className="font-body-small-regular text-textbody">
                  Supported language pairs and growing
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm text-center">
                <div className="text-5xl font-heading-h1 text-transparent bg-[linear-gradient(135deg,rgba(115,208,185,1)_0%,rgba(0,145,189,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                  10M+
                </div>
                <h4 className="font-heading-h6 text-textwhite">Translations</h4>
                <p className="font-body-small-regular text-textbody">
                  Words and phrases translated to date
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-12 rounded-2xl border border-brandblue-light bg-[rgba(2,91,207,0.1)] backdrop-blur-sm text-center">
              <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)]">
                Join Our Journey
              </h3>
              <p className="font-body-large-regular text-textbody max-w-[700px] mx-auto">
                We're just getting started. Be part of the revolution in language learning and 
                help us make Funlingo better for everyone.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Button className="bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-12 px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  <span className="font-body-normal-medium text-textwhite">
                    Download Extension
                  </span>
                </Button>
                <Button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] h-12 px-8 py-3 rounded-lg transition-all">
                  <a href="/feedback" className="font-body-normal-medium text-textwhite">
                    Share Feedback
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
