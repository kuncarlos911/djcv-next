export default function DarbukaPage() {
  return (
    <main className="relative min-h-screen px-6 py-16 overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #f59e0b 0%, transparent 60%), radial-gradient(circle at 70% 60%, #fb7185 0%, transparent 55%)",
          }}
        />
      </div>

      {/* rhythm dots pattern */}
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
        <p className="text-sm uppercase tracking-widest opacity-60">
          Darbuka · Barcelona
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Darbuka classes & rhythm workshops
        </h1>

        <p className="mt-4 text-lg opacity-80">
          Private darbuka lessons and group workshops inspired by Maghreb rhythms. We focus on sound, groove and feeling the rhythm in your hands — simple,
  practical and musical.
        </p>
{/* Classes structure */}
<div className="mt-10 rounded-2xl border bg-white/60 p-6 backdrop-blur">
  <p className="text-sm uppercase tracking-widest opacity-60">Clases · Estructura</p>

  <h2 className="mt-3 text-2xl font-bold">Niveles, duración y precios</h2>
  <p className="mt-3 opacity-80">
    Precios orientativos. Ajusto el plan según tu nivel y objetivo (técnica, groove, repertorio).
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border bg-white/70 p-5">
      <p className="font-semibold">Nivel 1 · Beginner</p>
      <ul className="mt-3 space-y-2 opacity-80">
        <li>• Postura + sonido (dum/tek/ka)</li>
        <li>• Patrones básicos y tempo</li>
        <li>• Ejercicios para casa</li>
      </ul>
    </div>

    <div className="rounded-2xl border bg-white/70 p-5">
      <p className="font-semibold">Nivel 2 · Intermedio</p>
      <ul className="mt-3 space-y-2 opacity-80">
        <li>• Variaciones + fills</li>
        <li>• Independencia y acentos</li>
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
      <p className="mt-2 opacity-80">Desde <span className="font-semibold">35–50€</span></p>
    </div>

    <div className="rounded-2xl border bg-white/70 p-5">
      <p className="font-semibold">Pack (recomendado)</p>
      <p className="mt-2 opacity-80">4×60 min</p>
      <p className="mt-2 opacity-80">Desde <span className="font-semibold">120–180€</span></p>
    </div>

    <div className="rounded-2xl border bg-white/70 p-5">
      <p className="font-semibold">Workshops grupo</p>
      <p className="mt-2 opacity-80">2–3h · 4–12 personas</p>
      <p className="mt-2 opacity-80">Desde <span className="font-semibold">150–350€</span></p>
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

{/* Visual gallery */}
<div className="mt-10 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl overflow-hidden border">
    <img
      src="/darbuka/1.jpg"
      alt="Darbuka rhythm notation"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="rounded-2xl overflow-hidden border">
    <img
      src="/darbuka/2.jpg"
      alt="Darbuka writing and rhythm patterns"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="rounded-2xl overflow-hidden border">
    <img
      src="/darbuka/3.jpg"
      alt="Darbuka workshop in Tarifa"
      className="h-full w-full object-cover"
    />
  </div>
</div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-2xl border px-6 py-3 font-semibold bg-black text-white hover:opacity-90 transition"
          >
            Ask for darbuka availability
          </a>

          <a
            href="/"
            className="rounded-2xl border px-6 py-3 font-semibold opacity-80 hover:opacity-100 transition"
          >
            Back to Home
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white/40 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-widest opacity-60">
              What you get
            </p>
            <h2 className="mt-3 text-2xl font-bold">A solid rhythm foundation</h2>
            <ul className="mt-4 space-y-2 opacity-80">
              <li>• Technique: hands, tones, speed and control</li>
              <li>• Groove: how to lock with music</li>
              <li>• Repertoire inspired by North African rhythms</li>
              <li>• Clear exercises to practice at home</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white/40 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-widest opacity-60">
              Formats
            </p>
            <h2 className="mt-3 text-2xl font-bold">Lessons & workshops</h2>
            <ul className="mt-4 space-y-2 opacity-80">
              <li>• Private lessons (60 min)</li>
              <li>• Group workshops (2–3h)</li>
              <li>• Corporate / team rhythm workshops</li>
              <li>• English / Spanish / French</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-white/40 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-widest opacity-60">
            For who
          </p>
          <h2 className="mt-3 text-2xl font-bold">
            Beginners & intermediate players
          </h2>
          <p className="mt-3 opacity-80">
            If you’re starting from zero, we build fundamentals fast. If you already
            play, we focus on clean sound, timing and musical phrasing.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-2xl border px-6 py-3 font-semibold"
            >
              Contact for Darbuka
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
