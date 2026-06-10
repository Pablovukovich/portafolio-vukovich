
import { Card } from "@/components/ui/card";



export const Skills = () => {
  return (
    <section className="grid gap-5 lg:grid-cols-3">
        {[
          {
            title: "Frontend",
            items: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Next.js", "TypeScript", "Java"],
          },
          {
            title: "Backend",
            items: ["Node.js", "Express", "MongoDB", "Postgres", "Spring Boot"],
          },
          {
            title: "Diseño y herramientas",
            items: ["Figma", "Photoshop", "Illustrator", "Git"],
          },
        ].map((group) => (
          <Card
            key={group.title}
            className="rounded-3xl border-border/50 bg-card/35 p-6 shadow-[0_18px_40px_-22px_rgba(40,10,20,0.22)]"
          >
            <h3 className="mb-4 text-sm font-extrabold tracking-wide">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-xl bg-[rgba(140,52,78,0.18)] px-4 py-3 text-xs font-semibold text-foreground/90 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </section>
  )
}
