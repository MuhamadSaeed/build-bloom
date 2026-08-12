import { Circle } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Business First",
    description:
      "We start by understanding your business, goals, and challenges before writing a single line of code.",
  },
  {
    title: "Built to Solve",
    description:
      "We focus on practical software that solves real problems—not unnecessary features.",
  },
  {
    title: "Clear & Transparent",
    description:
      "You stay informed throughout the project with clear communication, scope, and progress.",
  },
  {
    title: "Built to Grow",
    description:
      "We create maintainable and scalable solutions that can evolve with your business.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              About Build Bloom
            </h2>
          </ScrollView>

          <ScrollView>
            <p>
              We turn ideas and business challenges into software that works.
              Build Bloom is a software house focused on building reliable
              digital products for businesses of all sizes. We combine
              business understanding, thoughtful design, and modern technology
              to create solutions that solve real problems, simplify workflows,
              and support long-term growth.
            </p>
          </ScrollView>
        </div>

        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/office.jpeg"
            alt="Build Bloom team working together"
            height="480"
            width="720"
            loading="lazy"
          />
        </ScrollView>

        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">
                    {principle.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}