import * as React from "react";
import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  "Works on YouTube",
  "Works on Netflix",
  "Instant translations",
];

const stats = [
  {
    number: "50+",
    title: "Languages Supported",
    description:
      "Learn any language you want with our extensive language database and growing collection.",
  },
  {
    number: "1000+",
    title: "Active Learners",
    description:
      "Join thousands of language learners who are mastering new languages through content they love.",
  },
];

export const FunlingoProductSection = (): React.JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-24 pt-0 pb-24 px-24 bg-[#000000]">
      <div className="flex w-full max-w-[1008px] items-center justify-center gap-12">
        <div className="flex flex-col max-w-[480px] items-start justify-center gap-5 flex-1">
          <Badge className="inline-flex items-center justify-center px-4 py-1.5 rounded-[99px] border border-solid border-[#ffffff1a] shadow-[inset_0px_-1px_4px_#00000040,inset_0px_0px_0px_#e5e5e8] bg-[linear-gradient(118deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)] h-auto">
            <span className="font-body-xs-medium font-[number:var(--body-xs-medium-font-weight)] text-textwhite text-[length:var(--body-xs-medium-font-size)] tracking-[var(--body-xs-medium-letter-spacing)] leading-[var(--body-xs-medium-line-height)] [font-style:var(--body-xs-medium-font-style)]">
              How It Works
            </span>
          </Badge>

          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
              Learn From Your<br />
              Favorite Content
            </h2>

            <p className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-textbody text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
              Simply install the extension and start watching videos in your target<br />
              language. Funlingo does the rest automatically.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 w-full">
                <CheckIcon className="w-5 h-5 text-brandlime-green flex-shrink-0" />
                <span className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-textbody text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-[480px] h-[440.47px] flex-shrink-0 flex items-center justify-center">
          <div className="w-full h-full rounded-2xl overflow-hidden border border-[#ffffff1a] bg-[radial-gradient(50%_50%_at_51%_-14%,rgba(2,91,207,0.2)_0%,rgba(0,0,0,1)_100%)] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-9xl mb-6">🌐</div>
              <p className="text-textwhite text-2xl font-heading-h5">Universal Language Learning</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[1008px] items-center justify-center gap-12">
        <div className="relative w-[480px] h-[400px] flex-shrink-0 flex items-center justify-center">
          <div className="w-full h-full rounded-2xl overflow-hidden border border-[#ffffff1a] bg-[radial-gradient(50%_50%_at_51%_-14%,rgba(2,91,207,0.2)_0%,rgba(0,0,0,1)_100%)] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-9xl mb-6">⚡</div>
              <p className="text-textwhite text-2xl font-heading-h5">Lightning Fast</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-[480px] items-start justify-center gap-5 flex-1">
          <Badge className="inline-flex items-center justify-center px-4 py-1.5 rounded-[99px] border border-solid border-[#ffffff1a] shadow-[inset_0px_-1px_4px_#00000040,inset_0px_0px_0px_#e5e5e8] bg-[linear-gradient(118deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)] h-auto">
            <span className="font-body-xs-medium font-[number:var(--body-xs-medium-font-weight)] text-textwhite text-[length:var(--body-xs-medium-font-size)] tracking-[var(--body-xs-medium-letter-spacing)] leading-[var(--body-xs-medium-line-height)] [font-style:var(--body-xs-medium-font-style)]">
              Our Impact
            </span>
          </Badge>

          <h2 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
            Trusted by Language<br />
            Learners Worldwide
          </h2>

          <div className="flex items-start gap-10 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 flex-1"
              >
                <div className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-brandlime-green text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                  {stat.number}
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-textwhite text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                    {stat.title}
                  </h3>

                  <p className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-textbody text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
