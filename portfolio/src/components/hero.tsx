import Link from "next/link";
import { siteData } from "@/data/siteData";

export function Hero() {
  return (
    <section className="relative pt-16 pb-10 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:gap-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-black/60 dark:text-white/60">Portfolio</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
              {siteData.name}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-black/70 dark:text-white/70">
              {siteData.title}
            </p>
            <p className="mt-4 max-w-3xl text-base md:text-lg text-black/75 dark:text-white/75">
              {siteData.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {siteData.links.github && (
              <Link className="rounded-full border px-4 h-9 inline-flex items-center hover:bg-black/5 dark:hover:bg-white/5" href={siteData.links.github} target="_blank">GitHub</Link>
            )}
            {siteData.links.linkedin && (
              <Link className="rounded-full border px-4 h-9 inline-flex items-center hover:bg-black/5 dark:hover:bg-white/5" href={siteData.links.linkedin} target="_blank">LinkedIn</Link>
            )}
            <a className="rounded-full border px-4 h-9 inline-flex items-center hover:bg-black/5 dark:hover:bg-white/5" href={`mailto:${siteData.email}`}>Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
