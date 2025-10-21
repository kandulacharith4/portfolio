import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {siteData.projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-black/5 dark:border-white/10 p-5 md:p-6 flex flex-col gap-3">
            <header>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight">{p.title}</h3>
              {p.period && <p className="text-sm text-black/60 dark:text-white/60">{p.period}</p>}
            </header>
            <p className="text-sm md:text-base text-black/80 dark:text-white/80">{p.summary}</p>
            {(p.tags?.length ?? 0) > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {p.tags!.map((t) => (
                  <span key={t} className="text-xs rounded-full border px-2 h-6 inline-flex items-center">
                    {t}
                  </span>
                ))}
              </div>
            )}
            {(p.links?.length ?? 0) > 0 && (
              <div className="flex gap-3 pt-1">
                {p.links!.map((l) => (
                  <Link key={l.href} className="text-sm underline underline-offset-4" href={l.href} target="_blank">{l.label}</Link>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
