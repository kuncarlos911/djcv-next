import Image from "next/image";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-5xl">

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

            <p className="mt-6 leading-relaxed opacity-70">
              From Belgium to Andalucía, and eventually Barcelona,
              this is the story of a life shaped by music.
              A journey through different cultures, musical scenes,
              personal memories and the sounds that helped define
              an identity.
            </p>

            <p className="mt-4 leading-relaxed opacity-70">
              More than a DJ biography, this book is a personal
              journey through the music, people and experiences
              that made Willy Homes.
            </p>
          </div>
        </div>

        {/* THE STORY */}
        <section id="story" className="mt-24 border-t pt-12">
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
          className="mt-20 rounded-2xl border bg-white/30 p-8 backdrop-blur"
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
        <section className="mt-12 rounded-2xl border p-8">
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
        <section className="mt-20 border-t pt-12 text-center">
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
        <div className="mt-16 border-t pt-8">
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
