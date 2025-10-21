import { siteData } from "@/data/siteData";
import { Section } from "./section";

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="space-y-5">
        {siteData.certifications.map((c) => (
          <li key={c.name} className="rounded-2xl border border-black/5 dark:border-white/10 p-5 md:p-6">
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <h3 className="font-medium">{c.name}</h3>
              <p className="text-sm text-black/60 dark:text-white/60">{c.issued}</p>
            </div>
            <p className="text-sm text-black/75 dark:text-white/75">{c.org}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
