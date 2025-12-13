export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16">
      {/* Background: soft gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #fbbf24 0%, transparent 60%), radial-gradient(circle at 70% 40%, #60a5fa 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Background: rhythm wave pattern */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="waves" width="140" height="140" patternUnits="userSpaceOnUse">
            <path
              d="M0 70 C 25 45, 50 45, 70 70 S 115 95, 140 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M0 105 C 25 80, 50 80, 70 105 S 115 130, 140 105"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="22" cy="63" r="2.5" fill="currentColor" />
            <circle cx="92" cy="98" r="2.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>

      <div className="mx-auto max-w-4xl">
        {/* HERO */}
        <p className="text-sm uppercase tracking-widest opacity-60">
          DJ · Darbuka · Barcelona
        </p>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_280px] md:items-start">
          {/* Left: text */}
          <div>
            <h1 className="text-5xl font-bold leading-tight">Willy Homes</h1>

            <p className="mt-4 text-lg opacity-80">
              Funk · Disco · House DJ for clubs, private events and corporate bookings.
              Darbuka workshops and rhythm experiences.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://calendly.com/kuncarlos/dj-booking-call"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Book DJ
              </a>

              <a
                href="/contact"
                className="rounded-2xl border px-6 py-3 font-semibold opacity-80 transition hover:opacity-100"
              >
                Contact
              </a>

              <a
                href="/darbuka"
                className="rounded-2xl border px-6 py-3 font-semibold opacity-80 transition hover:opacity-100"
              >
                Darbuka
              </a>
            </div>

            {/* QUICK INFO */}
            <div className="mt-10 rounded-2xl border bg-white/30 p-6 backdrop-blur">
              <p className="font-semibold">Quick info</p>
              <ul className="mt-3 space-y-2 opacity-80">
                <li>• Based in Barcelona (EU travel possible)</li>
                <li>• Styles: funk / disco / house</li>
                <li>• DJ sets: 60–180 minutes</li>
              </ul>
            </div>
          </div>

          {/* Right: image card */}
          <div className="rounded-2xl border bg-white/40 p-4 backdrop-blur">
            <img
              src="/og.png"
              alt="Willy Homes — DJ & Darbuka"
              className="h-auto w-full rounded-xl"
            />
            <p className="mt-3 text-sm opacity-70">
              DJ sets + darbuka workshops.
            </p>
          </div>
        </div>

        {/* DARBUKA SECTION */}
        <div className="mt-12 rounded-2xl border bg-white/30 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Darbuka · Workshops
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Darbuka classes & rhythm workshops
          </h2>

          <p className="mt-3 opacity-80">
            Private darbuka lessons and group workshops inspired by Maghreb rhythms.
            Focus on technique, groove and musicality. Ideal for beginners and intermediate players.
          </p>

          <ul className="mt-4 space-y-2 opacity-80">
            <li>• Private lessons (60 min)</li>
            <li>• Group workshops (2–3h)</li>
            <li>• Corporate &amp; team rhythm workshops</li>
            <li>• English / Spanish / French</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/darbuka"
              className="rounded-2xl border px-6 py-3 font-semibold"
            >
              Darbuka info
            </a>

            <a
              href="/contact"
              className="rounded-2xl border px-6 py-3 font-semibold opacity-80 transition hover:opacity-100"
            >
              Ask for availability
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
