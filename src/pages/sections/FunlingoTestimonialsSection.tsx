import * as React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Funlingo has transformed how I learn Japanese. I can finally understand anime without subtitles, and I'm learning naturally through content I actually enjoy!",
    name: "Sarah Chen",
    role: "Japanese Learner",
    avatar: "/figmaAssets/avatar.png",
    size: "small",
  },
  {
    id: 2,
    quote:
      "As a language teacher, I recommend Funlingo to all my students. It's the perfect complement to traditional learning methods. The AI explanations are incredibly accurate and contextual, helping students understand not just what words mean, but how they're used in real conversations. My students' comprehension has improved dramatically.",
    name: "Michael Rodriguez",
    role: "Spanish Teacher",
    avatar: "/figmaAssets/avatar-1.png",
    size: "large",
  },
  {
    id: 3,
    quote:
      "I've been using Funlingo for French learning and it's amazing! The pronunciation guides are so helpful, and I love how it works seamlessly with Netflix.",
    name: "Emma Thompson",
    role: "French Learner",
    avatar: "/figmaAssets/avatar-2.png",
    size: "small",
  },
  {
    id: 4,
    quote:
      "Learning Korean has never been easier. Funlingo makes it so natural - I just watch my favorite K-dramas and learn along the way. Highly recommend!",
    name: "David Park",
    role: "Korean Learner",
    avatar: "/figmaAssets/avatar-3.png",
    size: "small",
  },
  {
    id: 5,
    quote:
      "I bought the lifetime plan and it's worth every penny. The vocabulary builder feature is brilliant for reviewing words I've learned while watching shows.",
    name: "Lisa Mueller",
    role: "German Learner",
    avatar: "/figmaAssets/avatar-4.png",
    size: "small",
  },
];

export const FunlingoTestimonialsSection = (): React.JSX.Element => {
  const firstRowTestimonials = testimonialsData.slice(0, 2);
  const secondRowTestimonials = testimonialsData.slice(2, 5);

  return (
    <section className="flex flex-col w-full items-center justify-center gap-14 pt-0 pb-24 px-24 relative [background:radial-gradient(50%_50%_at_0%_100%,rgba(0,145,189,1)_0%,rgba(2,91,207,1)_24%,rgba(0,0,0,1)_100%)]">
      <header className="inline-flex flex-col max-w-screen-sm items-center justify-center gap-5 relative flex-[0_0_auto]">
        <Badge className="inline-flex items-center justify-center px-4 py-1.5 relative flex-[0_0_auto] rounded-[99px] border border-solid border-[#ffffff1a] shadow-[inset_0px_-1px_4px_#00000040,inset_0px_0px_0px_#e5e5e8] bg-[linear-gradient(118deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)] h-auto">
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-xs-medium font-[number:var(--body-xs-medium-font-weight)] text-textwhite text-[length:var(--body-xs-medium-font-size)] tracking-[var(--body-xs-medium-letter-spacing)] leading-[var(--body-xs-medium-line-height)] whitespace-nowrap [font-style:var(--body-xs-medium-font-style)]">
            Testimonials
          </span>
        </Badge>

        <h2 className="relative flex items-center justify-center w-[572px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-textwhite text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
          Language Learners Love Funlingo
        </h2>
      </header>

      <div className="inline-flex flex-col items-center justify-center gap-6 relative flex-[0_0_auto]">
        <div className="inline-flex gap-6 flex-[0_0_auto] items-start relative">
          {firstRowTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`flex flex-col items-start gap-6 p-8 bg-textwhite rounded-xl overflow-hidden border-0 ${
                testimonial.size === "small" ? "w-80" : "w-[664px]"
              }`}
            >
              <CardContent className="p-0 flex flex-col gap-6 w-full">
                <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textwhite text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] [font-style:var(--body-normal-medium-font-style)]">
                  {testimonial.quote}
                </p>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Star rating"
                  src="/figmaAssets/star.svg"
                />

                <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <Avatar className="relative w-10 h-10 rounded-[28px]">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </Avatar>

                  <div className="flex flex-col items-start relative flex-1 grow">
                    <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-body-small-medium text-textwhite text-[length:var(--body-small-medium-font-size)] leading-[var(--body-small-medium-line-height)] font-[number:var(--body-small-medium-font-weight)] tracking-[var(--body-small-medium-letter-spacing)] [font-style:var(--body-small-medium-font-style)]">
                      {testimonial.name}
                    </p>

                    <p className="relative flex items-center justify-center self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-textwhite text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="inline-flex gap-6 flex-[0_0_auto] items-start relative">
          {secondRowTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex flex-col w-80 items-start gap-6 p-8 bg-textwhite rounded-xl overflow-hidden border-0"
            >
              <CardContent className="p-0 flex flex-col gap-6 w-full">
                <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-textblack text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] [font-style:var(--body-normal-medium-font-style)]">
                  {testimonial.quote}
                </p>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Star rating"
                  src="/figmaAssets/star.svg"
                />

                <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <Avatar className="relative w-10 h-10 rounded-[28px]">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </Avatar>

                  <div className="flex flex-col items-start relative flex-1 grow">
                    <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-body-small-medium text-textblack text-[length:var(--body-small-medium-font-size)] leading-[var(--body-small-medium-line-height)] font-[number:var(--body-small-medium-font-weight)] tracking-[var(--body-small-medium-letter-spacing)] [font-style:var(--body-small-medium-font-style)]">
                      {testimonial.name}
                    </p>

                    <p className="relative flex items-center justify-center self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-textblack text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
