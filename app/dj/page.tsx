import Link from "next/link";

export default function DjPage() {
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
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06] text-neutral-900"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
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
        <p className="text-sm uppercase tracking-widest opacity-60">DJ · Barcelona</p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">DJ sets & mixes</h1>
        <p className="mt-3 text-sm opacity-70">
          DJ in Barcelona for private events, cocktail bars and cultural venues.
          Long-form DJ sets focused on funk, disco and house.
        </p>

        <p className="mt-4 text-lg opacity-80">
          Groove-driven sets — jazz, funk, disco and house. Focused on flow, warmth and
          long-form selection.
        </p>

        {/* Proof / venue */}
        <div className="mt-10 rounded-2xl border bg-white/60 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-widest opacity-60">Proof</p>
          <h2 className="mt-3 text-2xl font-bold">Past residency</h2>

          <p className="mt-3 opacity-80">
            Former resident DJ · Milano Cocktail Bar (Barcelona). The venue is now closed, but this
            post is a public proof from the venue.
          </p>

          <a
            href="https://www.facebook.com/camparimilano/posts/este-s%C3%A1bado-y-despu%C3%A9s-de-nuestros-conciertos-habituales-es-el-turno-de-%EF%B8%8Fdj-willy/2828508647159794/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block underline underline-offset-4 hover:opacity-80"
          >
            Milano Cocktail Bar · Facebook post
          </a>
        </div>

        {/* SoundCloud */}
        <div className="mt-10 rounded-2xl border bg-white/60 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-widest opacity-60">SoundCloud</p>
          <h2 className="mt-3 text-2xl font-bold">Listen to mixes</h2>

          <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-black/10">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              loading="lazy"
              allow="autoplay"
              title="Willy Homes / Kuncarlos – SoundCloud mixes"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kuncarlos&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-black text-white hover:opacity-90 transition"
            >
              Book DJ
            </Link>

            <a
              href="https://soundcloud.com/kuncarlos"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 hover:bg-white/60 transition"
            >
              SoundCloud profile
            </a>
          </div>

          <p className="mt-3 text-xs text-neutral-600">
            If you want a specific vibe (jazz-funk, disco, deep house…), tell me and I’ll tailor the
            set.
          </p>
        </div>

        {/* BACK */}
        <div className="mt-10">
          <Link
            href="/"
            className="rounded-2xl border px-6 py-3 font-semibold opacity-80 hover:opacity-100 transition inline-block"
          >
            Volver a Home
          </Link>
        </div>
      </div>
    </main>
  );
}
