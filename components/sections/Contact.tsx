import { Download, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { siteConfig } from "@/lib/constants";

const contactLinks = [
  {
    label: "Email",
    href: siteConfig.links.email,
    icon: Mail,
    external: false,
  },
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
  {
    label: "Resume",
    href: siteConfig.links.resume,
    icon: Download,
    external: false,
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" size="large">
      <SectionHeading
        label="Contact"
        title="Let's Connect"
        subtitle="Open to internships, collaborations, and interesting projects."
        align="center"
      />

      <FadeIn>
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/30 hover:bg-surface/80"
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
