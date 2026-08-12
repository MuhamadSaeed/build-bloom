"use client";

import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";

const differences = [
  {
    title: "Business First",
    description:
      "We solve business problems, not just technical requirements.",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and visibility throughout development.",
  },
  {
    title: "Long-Term Support",
    description:
      "We stay involved after launch to help your product evolve.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="why-build-bloom">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              What Makes Us Different
            </h2>
          </ScrollView>

          <ScrollView delay={0.2}>
            <p>
              We don&apos;t just build software. We focus on understanding your
              business, solving the right problems, and building solutions that
              can grow with you.
            </p>
          </ScrollView>
        </div>

        <ScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            {differences.map((difference) => (
              <motion.div
                key={difference.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.8,
                    filter: "blur(10px)",
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  },
                }}
                className="space-y-4 px-4"
              >
                <div className="text-3xl font-bold md:text-4xl">
                  {difference.title}
                </div>

                <p className="text-muted-foreground">
                  {difference.description}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}