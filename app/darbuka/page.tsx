import Link from "next/link";
import Image from "next/image";
import { Backpack, Globe, MapPin, Music2 } from "lucide-react";

export default function DarbukaPage() {
  return (
    <main className="relative min-h-screen isolate overflow-hidden px-4 py-10 sm:px-6 sm:py-16">

      {/* ORIGINAL SOFT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #f59e0b 0%, transparent 60%), radial-gradient(circle at 70% 60%, #60a5fa 0%, transparent 55%)",
          }}
        />
      </div>

      {/* RHYTHM DOTS PATTERN */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06] text-neutral-900"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="rhythm"
            width="90"
            height="90"
            patternUnits="userSpaceOnUse"
          >
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

      <div className="mx-auto w-full max-w-4xl min-w-0">

        {/* HERO */}
        <p className="text-xs uppercase tracking-widest text-neutral-600 sm:text-sm">
          Darbuka · Barcelona
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-neutral-900 sm:text-5xl">
          Darbuka classes & rhythm workshops
        </h1>

        <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          Private lessons and group workshops inspired by Maghreb rhythms.
          Technique, groove and musicality — simple, practical and fun.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          Beginner-friendly. Darbuka classes in Barcelona — también opción online.
        </p>

        {/* STRUCTURE + PRICING */}
        <section className="mt-8 rounded-2xl border border-neutral-300 bg-white/95 p-4 shadow-md backdrop-blur sm:mt-10 sm:p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 sm:text-sm">
            Clases · Estructura
          </p>

          <h2 className="mt-3 text-xl font-extrabold text-neutral-900 sm:text-2xl">
            Niveles, duración y precios
          </h2>

          <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-700 sm:text-base">
            Precios orientativos. Ajusto el plan según tu nivel y objetivo
            (técnica, groove, repertorio). No hace falta experiencia previa.
          </p>

          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Si no tienes darbuka, te indico opciones y a veces puedo prestar
            una (según disponibilidad).
          </p>

          {/* LEVELS */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

            <div className="min-w-0 rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm sm:p-5">
              <p className="font-bold text-neutral-900">Nivel 1 · Beginner</p>
              <ul className="mt-3 space-y-2 text-sm font-medium leading-relaxed text-neutral-700 sm:text-base">
                <li>• Sonido (dum/tek/ka) + postura</li>
                <li>• Patrones básicos y tempo</li>
                <li>• Ejercicios claros para casa</li>
              </ul>
            </div>

            <div className="min-w-0 rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm sm:p-5">
              <p className="font-bold text-neutral-900">Nivel 2 · Intermedio</p>
              <ul className="mt-3 space-y-2 text-sm font-medium leading-relaxed text-neutral-700 sm:text-base">
                <li>• Variaciones + fills</li>
                <li>• Acentos e independencia</li>
                <li>• Ritmos Maghreb / fusión</li>
              </ul>
            </div>

            <div className="min-w-0 rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm sm:p-5">
              <p className="font-bold text-neutral-900">Nivel 3 · Avanzado</p>
              <ul className="mt-3 space-y-2 text-sm font-medium leading-relaxed text-neutral-700 sm:text-base">
                <li>• Velocidad + control</li>
                <li>• Repertorio + improvisación</li>
                <li>• Preparación para show/estudio</li>
              </ul>
            </div>

          </div>

          {/* PRICING */}
          <h3 className="mt-8 text-xl font-extrabold text-neutral-900 sm:text-2xl">
            Precios
          </h3>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">

            <div className="min-w-0 rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm sm:p-5">
              <p className="font-bold text-neutral-900">Clases privadas</p>
              <p className="mt-2 font-medium text-neutral-700">60 min · 1 persona</p>
              <p className="mt-2 text-neutral-800">
                Desde <span className="font-extrabold">35–50€</span>
              </p>
            </div>

            <div className="min-w-0 rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm sm:p-5">
              <p className="font-bold text-neutral-900">Pack (recomendado)</p>
              <p className="mt-2 font-medium text-neutral-700">4×60 min</p>
              <p className="mt-2 text-neutral-800">
                Desde <span className="font-extrabold">120–180€</span>
              </p>
            </div>

            <div className="min-w-0 rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm sm:p-5">
              <p className="font-bold text-neutral-900">Workshops grupo</p>
              <p className="mt-2 font-medium text-neutral-700">2–3h · 4–12 personas</p>
              <p className="mt-2 text-neutral-800">
                Desde <span className="font-extrabold">150–350€</span>
              </p>
            </div>

          </div>

          {/* PRACTICAL INFO */}
          <div className="mt-6 rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm sm:p-6">

            <h3 className="text-lg font-extrabold text-neutral-900">
              Info práctica
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div className="flex min-w-0 items-start gap-3">
                <div className="shrink-0 rounded-full bg-neutral-100 p-2" aria-hidden="true">
                  <Backpack size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-neutral-900">Qué traer</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-neutral-700">
                    Tu darbuka si tienes. Si no, te indico opciones
                    (y préstamo según disponibilidad).
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3">
                <div className="shrink-0 rounded-full bg-neutral-100 p-2" aria-hidden="true">
                  <Music2 size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-neutral-900">Instrumento</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-neutral-700">
                    Darbuka / doumbek. Técnica precisa + musicalidad.
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3">
                <div className="shrink-0 rounded-full bg-neutral-100 p-2" aria-hidden="true">
                  <Globe size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-neutral-900">Idiomas</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-neutral-700">
                    Español · English · Français
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3">
                <div className="shrink-0 rounded-full bg-neutral-100 p-2" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-neutral-900">Ubicación</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-neutral-700">
                    Barcelona (presencial). Online posible.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

            <a
              href="https://calendly.com/kuncarlos"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-2xl border border-black bg-black px-6 py-3 text-center font-bold text-white transition hover:opacity-90 sm:w-auto"
              aria-label="Reservar clase de darbuka (Calendly)"
            >
              Reservar clase
            </a>

            <Link
              href="/contact"
              className="w-full rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-center font-bold text-neutral-900 transition hover:bg-neutral-100 sm:w-auto"
            >
              Preguntar disponibilidad
            </Link>

          </div>

          <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-600">
            Respondo rápido. Podemos elegir formato (privada, pack o grupo)
            según tu objetivo y agenda.
          </p>

        </section>

        {/* VISUAL GALLERY - ORIGINAL IMAGE PROPORTIONS */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 md:grid-cols-3">

          <div className="min-w-0 overflow-hidden rounded-2xl border border-neutral-300 shadow-sm">
            <Image
              src="/darbuka/1.png"
              alt="Darbuka rhythm notation"
              width={800}
              height={800}
              className="block h-auto w-full object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>

          <div className="min-w-0 overflow-hidden rounded-2xl border border-neutral-300 shadow-sm">
            <video
              src="/darbuka/clip.mp4"
              className="block h-auto w-full"
              controls
              playsInline
              preload="metadata"
              aria-label="Darbuka playing clip with audio"
            />
          </div>

          <div className="min-w-0 overflow-hidden rounded-2xl border border-neutral-300 shadow-sm">
            <Image
              src="/darbuka/3.jpg"
              alt="Darbuka workshop in Tarifa"
              width={800}
              height={800}
              className="block h-auto w-full object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>

        </div>

        {/* BACK HOME */}
        <div className="mt-6">
          <Link
            href="/"
            className="text-sm font-semibold text-neutral-700 underline"
          >
            ← Back to Homes
          </Link>
        </div>

      </div>
    </main>
  );
}
