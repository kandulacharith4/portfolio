import { siteData } from "@/data/siteData";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-6">
        {siteData.skills.map((s) => (
          <div key={s.category} className="rounded-2xl border border-black/5 dark:border-white/10 p-5 md:p-6">
            <h3 className="font-medium mb-2">{s.category}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="text-xs rounded-full border px-2 h-6 inline-flex items-center">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
