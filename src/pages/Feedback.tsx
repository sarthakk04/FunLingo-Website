import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export const Feedback = (): React.JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "feature",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", category: "feature", message: "" });
  };

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
            <a href="/feedback" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textwhite text-base tracking-[0.16px] leading-[26px] whitespace-nowrap">Feedback</a>
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
        <div className="flex flex-col max-w-[800px] w-full items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-textwhite text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              We'd Love Your Feedback
            </h1>
            <p className="font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-textbody text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)] max-w-[600px]">
              Your input helps us build a better language learning experience for everyone
            </p>
          </div>

          {submitted && (
            <div className="w-full p-4 rounded-lg bg-brandlime-green border border-brandlime-green">
              <p className="font-body-normal-medium text-black text-center">
                Thank you for your feedback! We'll review it carefully.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 p-8 rounded-2xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              <label className="font-body-normal-medium text-textwhite">
                Name
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[rgba(0,0,0,0.3)] border-[#ffffff1a] text-textwhite placeholder:text-textbody"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body-normal-medium text-textwhite">
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[rgba(0,0,0,0.3)] border-[#ffffff1a] text-textwhite placeholder:text-textbody"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body-normal-medium text-textwhite">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="h-10 px-3 py-2 rounded-lg bg-[rgba(0,0,0,0.3)] border border-[#ffffff1a] text-textwhite font-body-normal-regular"
              >
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
                <option value="improvement">Improvement Suggestion</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body-normal-medium text-textwhite">
                Your Feedback
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-[rgba(0,0,0,0.3)] border-[#ffffff1a] text-textwhite placeholder:text-textbody min-h-[200px]"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-12 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <span className="font-body-normal-medium text-textwhite">
                Submit Feedback
              </span>
            </Button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm text-center">
              <svg className="w-10 h-10 text-brandblue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h4 className="font-heading-h6 text-textwhite">Email Us</h4>
              <p className="font-body-small-regular text-textbody">support@funlingo.com</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm text-center">
              <svg className="w-10 h-10 text-brandblue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h4 className="font-heading-h6 text-textwhite">Discord</h4>
              <p className="font-body-small-regular text-textbody">Join our community</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ffffff1a] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm text-center">
              <svg className="w-10 h-10 text-brandblue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-heading-h6 text-textwhite">Vote on Features</h4>
              <p className="font-body-small-regular text-textbody">Check our roadmap</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
