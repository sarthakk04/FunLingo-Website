import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Vocabulary Builder",
    description:
      "Save words and phrases you learn while watching. Review them later with our spaced repetition system for better retention.",
    isActive: true,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed analytics. See how many words you've learned and track your improvement over time.",
    isActive: false,
  },
  {
    title: "Pronunciation Guides",
    description:
      "Hear how words should be pronounced by native speakers. Perfect your accent with our audio pronunciation feature.",
    isActive: false,
  },
];

export const FunlingoFeaturesSection = (): React.JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-24 pt-0 pb-24 px-24 bg-[#000000]">
      <header className="flex flex-col max-w-[1008px] items-center justify-center gap-5">
        <Badge className="inline-flex items-center justify-center px-4 py-1.5 rounded-[99px] border border-solid border-[#ffffff1a] shadow-[inset_0px_-1px_4px_#00000040,inset_0px_0px_0px_#e5e5e8] bg-[linear-gradient(118deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)] h-auto">
          <span className="font-body-xs-medium font-[number:var(--body-xs-medium-font-weight)] text-textwhite text-[length:var(--body-xs-medium-font-size)] tracking-[var(--body-xs-medium-letter-spacing)] leading-[var(--body-xs-medium-line-height)]">
            Funlingo Features
          </span>
        </Badge>

        <div className="flex flex-col max-w-[800px] items-center gap-4">
          <h2 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
            Maximize Your Learning with
            <br />
            Powerful Features
          </h2>

          <p className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-textbody text-[length:var(--body-normal-regular-font-size)] text-center tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
            Everything you need to learn a language naturally through the content you already love watching.
          </p>
        </div>
      </header>

      <div className="flex flex-col items-start gap-24 w-full max-w-[1008px]">
        <div className="flex items-center justify-between w-full gap-8">
          <div className="flex w-full max-w-[488px] items-center gap-8">
            <div className="relative w-1 h-[520px] bg-textblack rounded-lg">
              <div className="h-[156px] rounded-lg bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)]" />
            </div>

            <div className="gap-14 flex-1 flex flex-col items-start">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="flex flex-col items-start justify-center gap-4 w-full"
                >
                  <h3
                    className={`[font-family:'Inter',Helvetica] font-normal text-xl tracking-[0] leading-7 ${feature.isActive ? "text-textwhite" : "text-textwhite"}`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)] ${feature.isActive ? "text-textwhite" : "text-textbody"}`}
                  >
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <Card className="w-full max-w-[487.19px] h-[481.24px] rounded-2xl overflow-hidden border border-solid border-[#ffffff33] [background:radial-gradient(50%_50%_at_51%_-14%,rgba(2,91,207,0.2)_0%,rgba(0,0,0,1)_100%)]">
            <CardContent className="p-8 flex items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center gap-8 text-center">
                <div className="text-9xl">📚</div>
                <h3 className="font-heading-h4 text-textwhite">
                  Learn While You Watch
                </h3>
                <p className="font-body-normal-regular text-textbody max-w-[300px]">
                  Turn every video into a language lesson with Funlingo's intelligent learning features
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
