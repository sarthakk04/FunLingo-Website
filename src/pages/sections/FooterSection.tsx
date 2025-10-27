import * as React from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "About", href: "/about" },
];

const informationLinks = [
  { label: "How It Works", href: "/#features" },
  { label: "Feedback", href: "/feedback" },
  { label: "Download Extension", href: "#download" },
];

const followLinks = [
  { label: "Twitter", href: "https://twitter.com/funlingo" },
  { label: "Discord", href: "https://discord.gg/funlingo" },
  { label: "GitHub", href: "https://github.com/funlingo" },
];

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center gap-10 pt-12 pb-6 px-24 bg-transparent [background:radial-gradient(50%_50%_at_50%_138%,rgba(0,145,189,1)_0%,rgba(2,91,207,0.5)_24%,rgba(0,0,0,1)_100%)]">
      <div className="flex w-full max-w-[1008px] items-start justify-center gap-5">
        <div className="flex flex-col items-start gap-3 flex-1">
          <div className="flex items-center justify-center w-fit mt-[-1.00px] bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(115,208,185,1)_40%,rgba(0,145,189,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-transparent text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
            Funlingo
          </div>

          <p className="font-[number:var(--body-normal-regular-font-weight)] text-[length:var(--body-normal-regular-font-size)] leading-[var(--body-normal-regular-line-height)] flex items-center justify-center self-stretch font-body-normal-regular text-textbody tracking-[var(--body-normal-regular-letter-spacing)] [font-style:var(--body-normal-regular-font-style)]">
            Learn languages naturally <br />
            through the content you love
          </p>
        </div>

        <nav className="flex flex-col w-[216px] items-start gap-4">
          <h3 className="flex items-center justify-center w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-textwhite text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
            Quick Links
          </h3>

          <ul className="inline-flex flex-col items-start gap-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="flex items-center justify-center w-fit font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textbody text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)] hover:text-textwhite transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col w-[216px] items-start gap-4">
          <h3 className="flex items-center justify-center w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-textwhite text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
            Information
          </h3>

          <ul className="inline-flex flex-col items-start gap-3">
            {informationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="flex items-center justify-center w-fit font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textbody text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)] hover:text-textwhite transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col w-[216px] items-start gap-4">
          <h3 className="flex items-center justify-center w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-textwhite text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
            Follow
          </h3>

          <ul className="inline-flex flex-col items-start gap-3">
            {followLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-textbody text-base tracking-[0] leading-[26px] underline whitespace-nowrap hover:text-textwhite transition-colors"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="flex items-center justify-center w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-textwhite text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
        ©2024 Funlingo. All rights reserved.
      </p>
    </footer>
  );
};
