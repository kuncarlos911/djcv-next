
import Image from "next/image";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16">

      {/* BACKGROUND GRADIENT */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #fbbf24 0%, transparent 60%), radial-gradient(circle at 70% 40%, #60a5fa 0%, transparent 55%)",
          }}
        />
      </div>

      {/* MUSICAL BACKGROUND PATTERN */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-neutral-900 opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="musical-pattern"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            {/* Vinyl grooves */}
            <circle
              cx="45"
              cy="45"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="45"
              cy="45"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="45"
              cy="45"
              r="5"
              fill="currentColor"
            />

            {/* Sound waves */}
            <path
              d="M90 45 C110 20, 130 20, 150 45 S170 70, 190 45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M-10 125 C10 100, 30 100, 50 125 S90 150, 110 125"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            {/* Musical notes */}
            <path
              d="M130 100 V125 Q130 135 120 132 Q110 129 118 122 Q122 118 130 121"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle cx="15" cy="155" r="2" fill="currentColor" />
            <circle cx="165" cy="155" r="2" fill="currentColor" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#musical-pattern)" />
      </svg>

      <div className="relative mx-auto max-w-5xl">

        {/* INTRO */}
        <p className="text-sm uppercase tracking-widest opacity-60">
          A book by Willy Homes
        </p>

        {/* HERO */}
        <div className="mt-8 grid gap-12 md:grid-cols-2 md:items-center">

          {/* BOOK COVER */}
          <div className="flex justify-center">
            <Image
              src="/portada.png"
              alt="The Makings of Willy Homes book cover"
              width={700}
              height={1000}
              className="h-auto w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
          </div>

          {/* BOOK INTRO */}
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              The Makings of Willy Homes
            </h1>

            <p className="mt-6 text-xl opacity-80">
              A musical journey through life, memories and discovery.
            </p>

            <p className="mt-6 leading-relaxed opacity-75">
              From Belgium to Andalucía, and eventually Barcelona,
              this is the story of a life shaped by music.
              A journey through different cultures, musical scenes,
              personal memories and the sounds that helped define
              an identity.
            </p>

            <p className="mt-4 leading-relaxed opacity-75">
              More than a DJ biography, this book is a personal
              journey through the music, people and experiences
              that made Willy Homes.
            </p>
          </div>
        </div>

        {/* THE STORY */}
        <section
          id="story"
          className="mt-24 rounded-2xl border bg-white/40 p-8 backdrop-blur"
        >
          <p className="text-sm uppercase tracking-widest opacity-60">
            The story
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Many lives. Many musical journeys.
          </h2>

          <p className="mt-6 max-w-3xl leading-relaxed opacity-75">
            Music is more than a soundtrack. It is memory, identity,
            discovery and connection. Every chapter brings together
            the people, places and sounds that shaped a life across
            Belgium, Andalucía and Barcelona.
          </p>
        </section>

        {/* SOUNDTRACK */}
        <section
          id="soundtrack"
          className="mt-12 rounded-2xl border bg-white/50 p-8 backdrop-blur"
        >
          <p className="text-sm uppercase tracking-widest opacity-60">
            The soundtrack
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            444 songs. One life.
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed opacity-75">
            Every musical journey needs a soundtrack.
            Discover the songs that accompany the stories
            and memories throughout the book.
          </p>

          {/* SPOTIFY PLAYER */}
          <div className="mt-8 overflow-hidden rounded-xl">
            <iframe
              title="The Makings of Willy Homes Spotify playlist"
              src="https://open.spotify.com/embed/playlist/0AW8BZWMwQrVoNKxtzM9bG?utm_source=generator"
              width="100%"
              height="352"
              style={{ borderRadius: "12px" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        {/* MUSICAL MAP */}
        <section className="mt-12 rounded-2xl border bg-white/50 p-8 backdrop-blur">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Explore
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            The Musical Map
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed opacity-75">
            Explore the musical influences, places and discoveries
            behind the story. A collection of videos, playlists,
            artists, record labels, festivals and inspirations.
          </p>

          <div className="mt-6">
            <Link
              href="/book/musical-map"
              className="inline-block rounded-2xl border bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Explore the Musical Map →
            </Link>
          </div>
        </section>

        {/* GET THE BOOK */}
        <section className="mt-20 rounded-2xl border bg-white/40 p-8 text-center backdrop-blur">
          <h2 className="text-3xl font-bold">
            Get the book
          </h2>

          <p className="mt-4 opacity-70">
            Available soon in Paperback and Kindle editions.
          </p>

          <p className="mt-6 text-sm uppercase tracking-widest opacity-50">
            Coming soon on Amazon
          </p>
        </section>

        {/* BACK HOME */}
        <div className="mt-16 border-t border-black/10 pt-8">
          <Link
            href="/"
            className="text-sm underline underline-offset-4 opacity-70 hover:opacity-100"
          >
            ← Back to Homes
          </Link>
        </div>

      </div>
    </main>
  );
}
