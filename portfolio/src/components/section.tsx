import { cn } from "@/lib/utils";

export function Section({ id, title, className, children }: { id: string; title: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-14 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 md:mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}
