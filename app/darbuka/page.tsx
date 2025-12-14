export default function DarbukaPage() {
  return (
    <main className="relative min-h-screen px-6 py-16 overflow-hidden">
      {/* Background: same vibe as home */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #fbbf24 0%, transparent 60%), radial-gradient(circle at 70% 60%, #60a5fa 0%, transparent 55%)",
          }}
        />
      </div>

      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="waves2" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M0 60 C 20 40, 40 40, 60 60 S 100 80, 120 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M0 90 C 20 70, 40 70, 60 90 S 100 110, 120 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="18" cy="52" r="2.5" fill="currentColor" />
            <circle cx="78" cy="82" r="2.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves2)" />
      </svg>

      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm opacity-80 hover:opacity-100 transition"
        >
          ← Back home
        </a>

        <p className="mt-10 text-sm uppercase tracking-widest opacity-60">
          Darbuka · Barcelona
        </p>

        <h1 className="mt-3 text-5xl font-bold leading-tight">
          Darbuka classes & rhythm workshops
        </h1>

        <p className="mt-4 text-lg opacity-80">
          Private lessons and group workshops inspired by Maghreb rhythms.
          Technique, groove and musicality — simple, practical, and fun.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white/40 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-widest opacity-60">What you get</p>
            <ul className="mt-4 space-y-2 opacity-80">
              <li>• Solid technique (hands, tone, control)</li>
              <li>• Core rhythms (slow → fast, clean → musical)</li>
              <li>• Exercises to practice at home</li>
              <li>• Groove & improvisation (feel, not just notes)</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white/40 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-widest opacity-60">Formats</p>
            <ul className="mt-4 space-y-2 opacity-80">
              <li>• Private lessons (60 min)</li>
              <li>• Group workshops (2–3h)</li>
              <li>• Corporate / team rhythm sessions</li>
              <li>• English / Spanish / French</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-white/40 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-widest opacity-60">Who is it for?</p>
          <p className="mt-3 opacity-80">
            Beginners who want a strong base, and intermediate players who want cleaner technique
            and more musical phrasing. If you like rhythm and you want to feel it in your hands,
            this is for you.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-2xl border px-6 py-3 font-semibold bg-black text-white hover:opacity-90 transition"
          >
            Ask for availability
          </a>

          <a
            href="https://calendly.com/kuncarlos/dj-booking-call"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border px-6 py-3 font-semibold opacity-80 hover:opacity-100 transition"
          >
            Book DJ (Calendly)
          </a>
        </div>

        <p className="mt-10 text-sm opacity-60">
          Tip: if you already have a darbuka, bring it. If not, tell me and we figure it out.
        </p>
      </div>
    </main>
  );
}
