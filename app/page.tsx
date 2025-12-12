export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest opacity-60">
          DJ · Barcelona
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Willy Homes
        </h1>

        <p className="mt-4 text-lg opacity-80">
          Funk · Disco · House DJ available for clubs, private events and corporate bookings.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://calendly.com/kuncarlos/dj-booking-call"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border px-6 py-3 font-semibold"
          >
            BOOK ME
          </a>

          <a
            href="/contact"
            className="rounded-2xl border px-6 py-3 font-semibold opacity-70"
          >
            Contact
          </a>
        </div>

        <div className="mt-12 rounded-2xl border p-6">
          <p className="font-semibold">Quick info</p>
          <ul className="mt-3 space-y-2 opacity-80">
            <li>• Based in Barcelona (EU travel possible)</li>
            <li>• Styles: funk / disco / house</li>
            <li>• Sets: 60–180 minutes</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
