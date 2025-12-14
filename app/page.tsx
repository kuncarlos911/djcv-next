import Link from "next/link";
import Image from "next/image";

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
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06] text-neutral-900"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
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

            {/* CTA BUTTONS (ligeros) */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* DJ: llevar a /dj para no cargar la home */}
              <Link
                href="/dj"
                className="rounded-2xl border bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                DJ
              </Link>

              {/* Darbuka: llevar a /darbuka */}
              <Link
                href="/darbuka"
                className="rounded-2xl border px-6 py-3 font-semibold opacity-80 transition hover:opacity-100"
              >
                Darbuka
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="rounded-2xl border px-6 py-3 font-semibold opacity-80 transition hover:opacity-100"
              >
                Contact
              </Link>
            </div>

            {/* QUICK INFO */}
            <div className="mt-10 rounded-2xl border bg-white/30 p-6 backdrop-blur">
              <p className="font-semibold">Quick info</p>
              <ul className="mt-3 space-y-2 opacity-80">
                <li>• Based in Barcelona (EU travel possible)</li>
                <li>• DJ styles: funk / disco / house</li>
                <li>• DJ sets: 60–180 minutes</li>
                <li>• Workshops: darbuka / rhythm experiences</li>
              </ul>
            </div>
          </div>

          {/* Right: image card */}
          <div className="rounded-2xl border bg-white/40 p-4 backdrop-blur">
            <Image
              src="/og.png"
              alt="Willy Homes — DJ & Darbuka"
              width={1200}
              height={630}
              className="h-auto w-full rounded-xl"
              priority
            />
            <p className="mt-3 text-sm opacity-70">DJ sets + darbuka workshops.</p>

            {/* Mini links, por si alguien no ve los botones */}
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <Link className="underline underline-offset-4 opacity-80 hover:opacity-100" href="/dj">
                DJ page
              </Link>
              <span className="opacity-40">·</span>
              <Link
                className="underline underline-offset-4 opacity-80 hover:opacity-100"
                href="/darbuka"
              >
                Darbuka page
              </Link>
              <span className="opacity-40">·</span>
              <Link
                className="underline underline-offset-4 opacity-80 hover:opacity-100"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* DARBUKA SECTION (resumen corto, no pesado) */}
        <div className="mt-12 rounded-2xl border bg-white/30 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-widest opacity-60">Darbuka</p>

          <h2 className="mt-3 text-2xl font-bold">Classes & rhythm workshops</h2>

          <p className="mt-3 opacity-80">
            Private lessons and group workshops inspired by Maghreb rhythms — technique, groove and
            musicality. Beginner-friendly.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/darbuka" className="rounded-2xl border px-6 py-3 font-semibold">
              Darbuka info
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border px-6 py-3 font-semibold opacity-80 transition hover:opacity-100"
            >
              Ask for availability
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
