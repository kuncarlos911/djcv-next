export default function DarbukaPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest opacity-60">
          Darbuka · Barcelona
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Darbuka classes & workshops
        </h1>

        <p className="mt-4 text-lg opacity-80">
          I teach darbuka (doumbek) with a focus on Maghreb-inspired grooves,
          technique, and playing musically. Lessons can be private or in small groups.
        </p>

        <div className="mt-10 rounded-2xl border p-6">
          <p className="font-semibold">Formats</p>
          <ul className="mt-3 space-y-2 opacity-80">
            <li>• Private lesson (60 min)</li>
            <li>• Group workshop (2–3 hours)</li>
            <li>• Corporate / team events (rhythm workshop)</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-2xl border px-6 py-3 font-semibold"
          >
            Contact me
          </a>
          <a
            href="/"
            className="rounded-2xl border px-6 py-3 font-semibold opacity-70"
          >
            Back home
          </a>
        </div>
      </div>
    </main>
  );
}
