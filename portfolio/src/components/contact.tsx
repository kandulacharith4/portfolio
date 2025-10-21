import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Section } from "./section";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-5 md:p-6 space-y-6">
        <p className="text-black/80 dark:text-white/80">I’m open to roles in AI/ML and full‑stack development. Let’s talk.</p>
        <ContactForm />
        <div className="flex flex-wrap gap-3">
          <a className="rounded-full border px-4 h-9 inline-flex items-center hover:bg-black/5 dark:hover:bg-white/5" href={`mailto:${siteData.email}`}>{siteData.email}</a>
          {siteData.links.linkedin && (
            <Link className="rounded-full border px-4 h-9 inline-flex items-center hover:bg-black/5 dark:hover:bg-white/5" href={siteData.links.linkedin} target="_blank">LinkedIn</Link>
          )}
        </div>
      </div>
    </Section>
  );
}
