import { Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { siteConfig } from "@/lib/constants";

const contactLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" size="large">
      <SectionHeading
        label="Contact"
        title="Let's Connect"
        subtitle="Open to software development and machine learning internship opportunities."
        align="center"
      />

      <FadeIn>
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Button href={siteConfig.links.email} variant="primary" icon={Mail}>
            Email me
          </Button>
          <a
            href={siteConfig.links.email}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ad282242@gmail.com
          </a>
        </div>
        <div className="mx-auto grid max-w-sm grid-cols-2 gap-3 sm:gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-4 transition-all duration-200 hover:border-accent/30 hover:bg-surface/80 sm:gap-3 sm:p-6"
            >
              <link.icon size={22} className="text-accent" />
              <span className="text-sm font-medium text-foreground">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
