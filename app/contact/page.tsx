export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-3 text-lg opacity-80">
          Tell me about your event and I’ll get back to you.
        </p>

        <div className="mt-8 rounded-2xl border p-6">
          <form
            action="https://formspree.io/f/manrapda"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="text-sm opacity-70">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border p-3"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm opacity-70">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border p-3"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="text-sm opacity-70">Event details</label>
              <textarea
                name="message"
                className="mt-1 w-full rounded-xl border p-3 h-36"
                placeholder="Date, city, venue, schedule, vibe, budget..."
              />
            </div>

            <button
              type="submit"
              className="rounded-2xl border px-6 py-3 font-semibold"
            >
              Send
            </button>
          </form>
        </div>

        <div className="mt-6">
          <a href="/" className="opacity-70 underline">
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
