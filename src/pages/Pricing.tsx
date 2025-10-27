import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Funlingo",
    features: [
      "Basic translations",
      "YouTube support",
      "Up to 50 words per day",
      "Community support",
      "Limited language pairs"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Best for serious language learners",
    features: [
      "Unlimited translations",
      "YouTube & Netflix support",
      "AI-powered explanations",
      "Pronunciation guides",
      "All language pairs",
      "Priority support",
      "Offline mode",
      "Advanced grammar tips"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Lifetime",
    price: "$149",
    period: "one-time payment",
    description: "Pay once, learn forever",
    features: [
      "Everything in Pro",
      "Lifetime updates",
      "Early access to features",
      "Premium support",
      "Custom vocabulary lists",
      "Export learning progress"
    ],
    cta: "Get Lifetime Access",
    popular: false
  }
];

export const Pricing = (): React.JSX.Element => {
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
            <a href="/pricing" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textwhite text-base tracking-[0.16px] leading-[26px] whitespace-nowrap">Pricing</a>
            <a href="/roadmap" className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textbody text-base tracking-[0.16px] leading-[26px] whitespace-nowrap hover:text-textwhite transition-colors">Roadmap</a>
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
              Choose Your Learning Plan
            </h1>
            <p className="font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-textbody text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)] max-w-[600px]">
              Start learning languages naturally. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 rounded-2xl border ${
                  plan.popular 
                    ? "border-brandblue-light bg-[rgba(2,91,207,0.1)] relative" 
                    : "border-[#ffffff1a] bg-[rgba(255,255,255,0.05)]"
                } backdrop-blur-sm`}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] border-0">
                    <span className="text-textwhite font-body-xs-medium">Most Popular</span>
                  </Badge>
                )}

                <div className="flex flex-col gap-4 mb-6">
                  <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)]">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-textwhite text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)]">
                      {plan.price}
                    </span>
                    <span className="font-body-normal-regular text-textbody">
                      {plan.period}
                    </span>
                  </div>
                  <p className="font-body-normal-regular text-textbody">
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brandlime-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-body-normal-regular text-textwhite">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${
                  plan.popular
                    ? "bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)]"
                    : "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]"
                } h-12 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity`}>
                  <span className="font-body-normal-medium text-textwhite">
                    {plan.cta}
                  </span>
                </Button>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 text-center mt-8">
            <p className="font-body-normal-regular text-textbody">
              All plans include a 14-day money-back guarantee
            </p>
            <p className="font-body-small-regular text-textbody">
              Questions? Contact us at support@funlingo.com
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
