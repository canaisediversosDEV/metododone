import { useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Bell, Play, Search, X } from "lucide-react";
import {
  categories,
  getLessonsByCategory,
  heroBanner,
  heroLesson,
  lessons,
  type Lesson,
} from "@/data/courses";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MétodoDone — Área de Membros" },
      {
        name: "description",
        content:
          "Plataforma de aulas do MétodoDone: redirecionamento de USB, desbloqueio de conta Google e reparo de IMEI em vídeo.",
      },
      { property: "og:title", content: "MétodoDone — Área de Membros" },
      {
        property: "og:description",
        content:
          "Plataforma de aulas do MétodoDone: redirecionamento de USB, desbloqueio de conta Google e reparo de IMEI em vídeo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

function VideoCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      to="/aula/$lessonId"
      params={{ lessonId: lesson.id }}
      className="group relative w-[240px] shrink-0 snap-start overflow-hidden rounded-md bg-card transition-transform duration-300 ease-out hover:z-10 hover:scale-110 hover:shadow-2xl hover:shadow-primary/20 sm:w-[280px]"
    >
      <img
        src={lesson.thumbnail}
        alt={lesson.title}
        loading="lazy"
        width={1280}
        height={720}
        className="aspect-video w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="mb-1 inline-flex w-fit items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
          <Play className="h-2.5 w-2.5 fill-current" /> {lesson.duration}
        </span>
        <h3 className="text-sm font-bold leading-tight text-foreground">
          {lesson.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
          {lesson.description}
        </p>
      </div>
    </Link>
  );
}

function ContentRow({ title, items }: { title: string; items: Lesson[] }) {
  if (items.length === 0) return null;
  return (
    <section className="animate-fade-up">
      <h2 className="mb-3 px-4 font-display text-lg font-bold tracking-tight text-foreground sm:px-10 sm:text-xl">
        {title}
      </h2>
      <div className="scrollbar-hide flex snap-x gap-3 overflow-x-auto px-4 py-4 sm:px-10">
        {items.map((lesson) => (
          <VideoCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return lessons.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-background via-background/85 to-transparent">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:flex sm:px-10">
          <Link
            to="/"
            className="font-display text-xl font-black uppercase italic tracking-tighter text-primary text-glow-red sm:text-2xl"
          >
            Método<span className="text-foreground">Done</span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:ml-auto sm:gap-4">
            <div
              className={`flex items-center overflow-hidden rounded-full border border-input bg-background/80 backdrop-blur transition-all duration-300 ${
                searchOpen ? "w-44 px-3 sm:w-64" : "w-9 px-0"
              }`}
            >
              <button
                onClick={() => {
                  setSearchOpen((v) => !v);
                  if (searchOpen) setQuery("");
                }}
                className="grid h-9 w-9 shrink-0 place-items-center text-foreground transition-colors hover:text-primary"
                aria-label="Pesquisar"
              >
                {searchOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </button>
              {searchOpen && (
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar aula..."
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              )}
            </div>

            <button
              className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-accent"
              aria-label="Notificações"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
            </button>

            <button className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-primary/40 sm:text-sm">
              Solicitar Aula
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      {!filtered && (
        <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
          <img
            src={heroBanner}
            alt={heroLesson.title}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="hero-fade-bottom absolute inset-0" />
          <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end px-4 pb-24 sm:px-10">
            <span className="animate-fade-up mb-3 w-fit rounded bg-primary px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground">
              Lançamento da semana
            </span>
            <h1
              className="animate-fade-up font-display text-4xl font-black uppercase leading-none tracking-tight text-foreground sm:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              {heroLesson.title}
            </h1>
            <p
              className="animate-fade-up mt-4 max-w-lg text-sm text-muted-foreground sm:text-base"
              style={{ animationDelay: "0.2s" }}
            >
              {heroLesson.description} Domine o procedimento mais pedido pelos
              clientes, do início ao fim, com validação completa.
            </p>
            <div
              className="animate-fade-up mt-6"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                to="/aula/$lessonId"
                params={{ lessonId: heroLesson.id }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all duration-200 hover:scale-105 hover:brightness-110 hover:shadow-xl hover:shadow-primary/40"
              >
                <Play className="h-5 w-5 fill-current" />
                Assistir Agora
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Content rails */}
      <main
        className={`relative z-10 flex flex-col gap-6 pb-20 ${filtered ? "pt-24" : "-mt-16"}`}
      >
        {filtered ? (
          filtered.length > 0 ? (
            <ContentRow
              title={`Resultados para "${query}"`}
              items={filtered}
            />
          ) : (
            <p className="px-4 pt-10 text-center text-muted-foreground sm:px-10">
              Nenhuma aula encontrada para "{query}".
            </p>
          )
        ) : (
          categories.map((cat) => (
            <ContentRow
              key={cat}
              title={cat}
              items={getLessonsByCategory(cat)}
            />
          ))
        )}
      </main>
    </div>
  );
}
