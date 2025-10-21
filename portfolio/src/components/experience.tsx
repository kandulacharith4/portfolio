import { siteData } from "@/data/siteData";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="space-y-8">
        {siteData.experiences.map((exp) => (
          <article key={exp.company + exp.start} className="rounded-2xl border border-black/5 dark:border-white/10 p-5 md:p-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight">{exp.role} · {exp.company}</h3>
              <p className="text-sm text-black/60 dark:text-white/60">{exp.start} – {exp.end}</p>
            </header>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm md:text-base">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
