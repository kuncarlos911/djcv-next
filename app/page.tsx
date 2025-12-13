export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">

        {/* HERO */}
        <p className="text-sm uppercase tracking-widest opacity-60">
          DJ · Darbuka · Barcelona
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Willy Homes
        </h1>

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
            className="rounded-2xl border px-6 py-3 font-semibold"
          >
            Book DJ
          </a>

          <a
            href="/contact"
            className="rounded-2xl border px-6 py-3 font-semibold opacity-70"
          >
            Contact
          </a>
        </div>

        {/* QUICK INFO */}
        <div className="mt-12 rounded-2xl border p-6">
          <p className="font-semibold">Quick info</p>
          <ul className="mt-3 space-y-2 opacity-80">
            <li>• Based in Barcelona (EU travel possible)</li>
            <li>• Styles: funk / disco / house</li>
            <li>• DJ sets: 60–180 minutes</li>
          </ul>
        </div>

        {/* DARBUKA SECTION */}
        <div className="mt-10 rounded-2xl border p-6">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Darbuka · Workshops
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Darbuka classes & rhythm workshops
          </h2>

          <p className="mt-3 opacity-80">
            Private darbuka lessons and group workshops inspired by Maghreb rhythms.
            Focus on technique, groove and musicality. Ideal for beginners and
            intermediate players.
          </p>

          <ul className="mt-4 space-y-2 opacity-80">
            <li>• Private lessons (60 min)</li>
            <li>• Group workshops (2–3h)</li>
            <li>• Corporate & team rhythm workshops</li>
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
              className="rounded-2xl border px-6 py-3 font-semibold opacity-70"
            >
              Ask for availability
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
