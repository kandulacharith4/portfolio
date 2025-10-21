import { siteData } from "@/data/siteData";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-5">
        {siteData.education.map((e) => (
          <li key={e.school + e.period} className="rounded-2xl border border-black/5 dark:border-white/10 p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">{e.degree}</h3>
            <p className="text-sm md:text-base">{e.school}</p>
            <p className="text-sm text-black/60 dark:text-white/60">{e.period}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
