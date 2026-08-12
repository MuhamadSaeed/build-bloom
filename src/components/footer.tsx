"use client";

import { Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";
import { FOOTER_LINKS } from "@/content/footer";

export default function FooterSection() {
  return (
    <footer className="py-12 pb-28 md:py-24 md:pb-38">
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <ScrollView>
          <Link
            href="/"
            aria-label="Build Bloom home"
            className="mx-auto block size-fit"
          >
            <Logo />
          </Link>
        </ScrollView>

        {/* Footer Navigation */}
        <ScrollView stagger delay={0.1}>
          <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <motion.div
                key={link.title}
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
              >
                <Link
                  href={link.href}
                  className="text-muted-foreground block duration-150 hover:text-primary"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </ScrollView>

        {/* Contact */}
        <ScrollView delay={0.15}>
          <div className="my-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
            <Link
              href="mailto:buildbloom11@gmail.com"
              className="text-muted-foreground flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              <span>buildbloom11@gmail.com</span>
            </Link>

            <Link
              href="https://wa.me/201509025186"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground flex items-center gap-2 transition-colors hover:text-primary"
            >
              <MessageCircle className="size-4" />
              <span>+20 150 902 5186</span>
            </Link>
          </div>
        </ScrollView>

        {/* Copyright */}
        <ScrollView delay={0.2} viewMargin="0px 0px -20px 0px">
          <span className="text-muted-foreground block text-center text-sm">
            © {new Date().getFullYear()} Build Bloom. All rights reserved.
          </span>
        </ScrollView>
      </div>
    </footer>
  );
}