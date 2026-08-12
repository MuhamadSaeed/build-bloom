"use client";

import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function FeaturesSection() {
  return (
    <section
      className="bg-gray-50 py-16 dark:bg-transparent md:py-32"
      id="contact"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  Let&apos;s Build Something Great
                </h2>
              </ScrollView>

              <ScrollView delay={0.15}>
                <p className="mt-6 text-muted-foreground">
                  Have a project in mind? Get in touch with Build Bloom and
                  let&apos;s discuss how we can turn your idea into a digital
                  product.
                </p>
              </ScrollView>
            </div>

            <ScrollView delay={0.25}>
              <ul className="mt-8 divide-y border-y">
                {/* Email */}
                <li className="py-4">
                  <Link
                    href="mailto:buildbloom11@gmail.com"
                    className="group flex items-center gap-3 transition-colors hover:text-accent-foreground"
                  >
                    <Mail className="size-5 shrink-0" />

                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">
                        buildbloom11@gmail.com
                      </p>
                    </div>
                  </Link>
                </li>

                {/* WhatsApp / Phone */}
                <li className="py-4">
                  <Link
                    href="https://wa.me/201509025186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 transition-colors hover:text-accent-foreground"
                  >
                    <PhoneCall className="size-5 shrink-0" />

                    <div>
                      <p className="text-sm text-muted-foreground">
                        WhatsApp
                      </p>
                      <p className="font-medium">+20 150 902 5186</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </ScrollView>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3">
            <ScrollView>
              <div className="mx-auto mt-12 flex max-w-lg flex-col items-center justify-center rounded-3xl border bg-background p-8 text-center shadow-md sm:p-16">
                <h3 className="text-2xl font-semibold">
                  Ready to start your project?
                </h3>

                <p className="mt-4 max-w-md text-sm text-muted-foreground">
                  Tell us about your idea, your business, or the problem you
                  want to solve. Our team will get in touch with you to discuss
                  the next steps.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://wa.me/201509025186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Chat on WhatsApp
                  </Link>

                  <Link
                    href="mailto:buildbloom11@gmail.com"
                    className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    Email Us
                  </Link>
                </div>
              </div>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}