import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ChevronDown, PlayCircle } from "lucide-react";
import { useState } from "react";
import { getCourseStructure, getLessonById } from "@/data/courses";

export const Route = createFileRoute("/aula/$lessonId")({
  loader: ({ params }) => {
    const lesson = getLessonById(params.lessonId);
    if (!lesson) throw notFound();
    return lesson;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — MétodoDone`
          : "Aula — MétodoDone",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Sala de aula MétodoDone.",
      },
      {
        property: "og:title",
        content: loaderData
          ? `${loaderData.title} — MétodoDone`
          : "Aula — MétodoDone",
      },
      {
        property: "og:description",
        content: loaderData?.description ?? "Sala de aula MétodoDone.",
      },
      { property: "og:type", content: "video.episode" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Classroom,
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <h1 className="text-2xl font-bold text-foreground">Aula não encontrada</h1>
      <Link to="/" className="text-primary underline">
        Voltar ao início
      </Link>
    </div>
  ),
});

function Classroom() {
  const lesson = Route.useLoaderData();
  const [openModules, setOpenModules] = useState<Set<string>>(
    () => new Set([lesson.module]),
  );
  const structure = getCourseStructure(lesson.category);

  const toggleModule = (name: string) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background lg:flex-row">
      {/* Sidebar */}
      <aside className="order-2 w-full shrink-0 border-t border-border bg-card lg:order-1 lg:h-screen lg:w-80 lg:overflow-y-auto lg:border-r lg:border-t-0">
        <div className="sticky top-0 z-10 border-b border-border bg-card p-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao início
          </Link>
          <h2 className="mt-3 font-display text-base font-bold uppercase tracking-tight text-foreground">
            {lesson.category}
          </h2>
        </div>

        <nav className="p-3">
          {structure.map((mod) => {
            const open = openModules.has(mod.name);
            return (
              <div key={mod.name} className="mb-2">
                <button
                  onClick={() => toggleModule(mod.name)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {mod.name}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <ul className="mt-1 flex flex-col gap-1">
                    {mod.lessons.map((item) => {
                      const active = item.id === lesson.id;
                      return (
                        <li key={item.id}>
                          <Link
                            to="/aula/$lessonId"
                            params={{ lessonId: item.id }}
                            className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                              active
                                ? "bg-primary/15 font-semibold text-primary"
                                : "text-foreground/80 hover:bg-accent"
                            }`}
                          >
                            {active ? (
                              <PlayCircle className="h-4 w-4 shrink-0" />
                            ) : (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                            )}
                            <span className="min-w-0 flex-1 truncate">
                              {item.title}
                            </span>
                            <span className="shrink-0 text-xs text-muted-foreground">
                              {item.duration}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="order-1 min-w-0 flex-1 lg:order-2 lg:h-screen lg:overflow-y-auto">
        <div className="animate-fade-up mx-auto max-w-5xl p-4 sm:p-8">
          <div className="overflow-hidden rounded-xl border border-border bg-black shadow-2xl shadow-primary/10">
            <video
              key={lesson.id}
              src={lesson.videoUrl}
              poster={lesson.thumbnail}
              controls
              autoPlay
              className="aspect-video w-full"
            />
          </div>

          <div className="mt-6">
            <span className="rounded bg-primary px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground">
              {lesson.module}
            </span>
            <h1 className="mt-3 font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              {lesson.title}
            </h1>
            <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
              <span>{lesson.duration}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{lesson.category}</span>
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              {lesson.description}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
