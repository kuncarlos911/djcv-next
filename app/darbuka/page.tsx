import { Backpack, Globe, MapPin, Music2 } from "lucide-react";

export default function DarbukaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #f59e0b 0%, transparent 60%), radial-gradient(circle at 70% 60%, #60a5fa 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Rhythm dots pattern */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="rhythm" width="90" height="90" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="18" r="2.5" fill="currentColor" />
            <circle cx="44" cy="26" r="2" fill="currentColor" />
            <circle cx="70" cy="18" r="2.5" fill="currentColor" />
            <circle cx="22" cy="60" r="2" fill="currentColor" />
            <circle cx="54" cy="64" r="2.5" fill="currentColor" />
            <circle cx="78" cy="58" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rhythm)" />
      </svg>

      <div className="mx-auto max-w-4xl">
        {/* HERO */}
        <p className="text-sm uppercase tracking-widest opacity-60">
          Darbuka · Barcelona
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Darbuka classes & rhythm workshops
        </h1>

        <p className="mt-4 text-lg opacity-80">
          Private lessons and group workshops inspired by Maghreb rhythms.
          Technique, groove and musicality — simple, practical and fun.
        </p>

        {/* STRUCTURE + PRICING */}
        <div className="mt-10 rounded-2xl border bg-white/60 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Clases · Estructura
          </p>

          <h2 className="mt-3 text-2xl font-bold">Niveles, duración y precios</h2>

          <p className="mt-3 opacity-80">
            Precios orientativos. Ajusto el plan según tu nivel y objetivo (técnica, groove,
            repertorio).
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-white/70 p-5">
              <p className="font-semibold">Nivel 1 · Beginner</p>
              <ul className="mt-3 space-y-2 opacity-80">
                <li>• Sonido (dum/tek/ka) + postura</li>
                <li>• Patrones básicos y tempo</li>
                <li>• Ejercicios claros para casa</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white/70 p-5">
              <p className="font-semibold">Nivel 2 · Intermedio</p>
              <ul className="mt-3 space-y-2 opacity-80">
                <li>• Variaciones + fills</li>
                <li>• Acentos e independencia</li>
                <li>• Ritmos Maghreb / fusión</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white/70 p-5">
              <p className="font-semibold">Nivel 3 · Avanzado</p>
              <ul className="mt-3 space-y-2 opacity-80">
                <li>• Velocidad + control</li>
                <li>• Repertorio + improvisación</li>
                <li>• Preparación para show/estudio</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-white/70 p-5">
              <p className="font-semibold">Clases privadas</p>
              <p className="mt-2 opacity-80">60 min · 1 persona</p>
              <p className="mt-2 opacity-80">
                Desde <span className="font-semibold">35–50€</span>
              </p>
            </div>

            <div className="rounded-2xl border bg-white/70 p-5">
              <p className="font-semibold">Pack (recomendado)</p>
              <p className="mt-2 opacity-80">4×60 min</p>
              <p className="mt-2 opacity-80">
                Desde <span className="font-semibold">120–180€</span>
              </p>
            </div>

            <div className="rounded-2xl border bg-white/70 p-5">
              <p className="font-semibold">Workshops grupo</p>
              <p className="mt-2 opacity-80">2–3h · 4–12 personas</p>
              <p className="mt-2 opacity-80">
                Desde <span className="font-semibold">150–350€</span>
              </p>
            </div>
          </div>

          {/* Practical info */}
          <div className="mt-6 rounded-2xl border bg-white/70 p-6">
            <h3 className="text-lg font-bold">Info práctica</h3>

            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-black/5 p-2">
                  <Backpack size={20} />
                </div>
                <div>
                  <p className="font-semibold">Qué traer</p>
                  <p className="text-sm opacity-80">
                    Tu darbuka si tienes. Si no, te indico opciones (y préstamo según disponibilidad).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-black/5 p-2">
                  <Music2 size={20} />
                </div>
                <div>
                  <p className="font-semibold">Instrumento</p>
                  <p className="text-sm opacity-80">
                    Darbuka / doumbek. Técnica precisa + musicalidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-black/5 p-2">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="font-semibold">Idiomas</p>
                  <p className="text-sm opacity-80">
                    Español · English · Français
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-black/5 p-2">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-sm opacity-80">
                    Barcelona (presencial). Online posible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Darbuka CTA (separado del DJ) */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kuncarlos"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border px-6 py-3 font-semibold bg-black text-white hover:opacity-90 transition"
            >
              Reservar clase
            </a>

            <a
              href="/contact"
              className="rounded-2xl border px-6 py-3 font-semibold opacity-80 hover:opacity-100 transition"
            >
              Preguntar disponibilidad
            </a>
          </div>
        </div>

        {/* VISUAL GALLERY */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border">
            <img
              src="/darbuka/1.jpg"
              alt="Darbuka rhythm notation"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border">
            <video
              src="/darbuka/clip.mp4"
              className="h-full w-full object-cover"
              autoplay
	      muted
              loop
              playsinline
              controls
            />
          </div>

          <div className="overflow-hidden rounded-2xl border">
            <img
              src="/darbuka/3.jpg"
              alt="Darbuka workshop in Tarifa"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* BACK */}
        <div className="mt-10">
          <a
            href="/"
            className="rounded-2xl border px-6 py-3 font-semibold opacity-80 hover:opacity-100 transition inline-block"
          >
            Volver a Home
          </a>
        </div>
      </div>
    </main>
  );
}
