import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = (): React.JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-48 pt-24 pb-0 px-10 relative overflow-hidden bg-[linear-gradient(180deg,#000000_0%,#0a1628_38%,#025bcf_74%,#0091bd_95%)]">
      <div className="absolute left-[-554px] bottom-[-725px] w-[2308px] h-[1014px] rounded-[1154px/507px] border border-solid border-[#0091bd] [background:radial-gradient(50%_50%_at_50%_50%,#000000_82%,#025bcf_100%)]" />

      <div className="flex max-w-[1008px] w-full items-center justify-center gap-[120px] relative z-10">
        <div className="flex flex-col max-w-[720px] items-start gap-10 relative flex-1">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
            <div className="inline-flex items-center justify-center gap-2 pl-2 pr-4 py-2 relative rounded-[84px] overflow-hidden border-[none] shadow-[0px_2px_4px_1px_#0000001a,0px_1px_3px_#0000000f] bg-[linear-gradient(118deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[84px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(229,229,232,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <Badge className="inline-flex flex-col items-start px-[7px] py-px relative rounded-[40px] bg-[linear-gradient(180deg,rgba(3,141,191,1)_0%,rgba(115,208,185,1)_100%)] border-0 h-auto">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-xs-medium font-[number:var(--body-xs-medium-font-weight)] text-textwhite text-[length:var(--body-xs-medium-font-size)] tracking-[var(--body-xs-medium-letter-spacing)] leading-[var(--body-xs-medium-line-height)] whitespace-nowrap [font-style:var(--body-xs-medium-font-style)]">
                  New
                </span>
              </Badge>

              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-textwhite text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                Now available for Chrome & Firefox
              </span>
            </div>

            <h1 className="relative flex items-center justify-center self-stretch font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-textwhite text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Learn Languages <br />
              While Watching <br />
              Your Favorite Shows
            </h1>

            <p className="relative flex items-center justify-center self-stretch font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-textbody text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
              Funlingo helps you master new languages naturally through <br />
              instant translations and AI-powered explanations on YouTube, Netflix, and more.
            </p>
          </div>

          <div className="inline-flex items-center justify-center gap-4 relative">
            <Button className="relative bg-[linear-gradient(135deg,rgba(2,91,207,1)_0%,rgba(0,145,189,1)_100%)] h-10 px-5 py-2 rounded-lg overflow-hidden border-0 hover:opacity-90 transition-opacity">
              <span className="relative flex items-center justify-center w-fit mt-[-2.00px] font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textwhite text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)]">
                Download Extension
              </span>
            </Button>

            <Button className="relative bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(229,229,232,1)_100%)] h-10 px-5 py-2 rounded-lg overflow-hidden border-0 hover:opacity-90 transition-opacity">
              <span className="relative flex items-center justify-center w-fit mt-[-2.00px] font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textblack text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] whitespace-nowrap [font-style:var(--body-normal-medium-font-style)]">
                Try Demo
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-[400px] h-[589.91px] flex-shrink-0">
          <div className="absolute top-0 left-0 w-[400px] h-[590px] flex justify-center rounded-2xl overflow-hidden [background:url(..//figmaAssets/background.png)_50%_50%_/_cover]">
            <img
              className="w-[885px] h-[590px] ml-[255px] object-cover"
              alt="Abstract color swirl"
              src="/figmaAssets/abstract-color-swirl-1.png"
            />
          </div>

          <div className="absolute top-[249px] left-[-78px] w-[400px] h-[343px] bg-[url(/figmaAssets/image-1.png)] bg-cover bg-[50%_50%]" />

          <div className="absolute top-16 left-[155px] w-[300px] h-[134px] bg-[url(/figmaAssets/image-2.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1120px] items-center justify-center gap-6 relative z-10">
        <div className="flex flex-col w-full items-start relative">
          <div className="flex flex-col items-center px-[353.86px] py-0 relative self-stretch w-full">
            <h5 className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-brandlime-green text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
              Trusted by 1,000+ language learners worldwide
            </h5>
          </div>
        </div>

        <img
          className="relative w-full max-w-[1120px]"
          alt="Container"
          src="/figmaAssets/container.svg"
        />
      </div>
    </section>
  );
};
