import Link from "next/link";

const videos = [
  ["Thriller", "Michael Jackson - Thriller (Official 4K Video)", "https://www.youtube.com/watch?v=sOnqjkJTMaA"],
  ["Marcel Vanthilt & MTV", "Marcel Vanthilt & the chili peppers", "https://www.youtube.com/watch?v=mNTfBnRHYsA"],
  ["Fast Car", "Tracy Chapman - Fast Car", "https://www.youtube.com/watch?v=AIOAlaACuv4"],
  ["Push It", "Salt-N-Pepa - Push It", "https://www.youtube.com/watch?v=vCadcBR95oU"],
  ["U Can't Touch This", "M.C. Hammer", "https://www.youtube.com/watch?v=otCpCn0l4Wo"],
  ["We Are The World", "U.S.A. For Africa", "https://www.youtube.com/watch?v=9AjkUyX0rVw"],
  ["New Beat Scene", "Belgian New Beat TV reportage", "https://www.youtube.com/watch?v=5KPfjmJewg0"],
  ["Yo! MTV Raps", "Yo! MTV Raps Intro", "https://www.youtube.com/watch?v=spcwG5DxoG4"],
  ["Kurt Cobain News", "First reports of Kurt Cobain found deceased", "https://www.youtube.com/watch?v=ZtA7SYwyDvo"],
  ["Max Mix", "MAX MIX 12 (1992)", "https://www.youtube.com/watch?v=ODse-vITyNI"],
  ["Megatron", "Megatron Mix - Toni Peret & Jose Mª Castells", "https://www.youtube.com/watch?v=T902VWr9I8M&list=PLfDRnWytoRL4mlRAeH8pkIgy4PWHsx5PN&index=1"],
  ["Thunderdome", "Thunderdome 1997 Live Registration", "https://www.youtube.com/watch?v=ZclaXQWVRCg"],
  ["Gabber", "1995 Gabber documentary", "https://www.youtube.com/watch?v=iO1oLIOS-kY"],
  ["DJ Sneak", "You Can't Hide From Your Bud", "https://www.youtube.com/watch?v=3HOb4VnkA7Y"],
  ["Louie Vega", "Classic House & Disco at Jackies", "https://www.youtube.com/watch?v=E0_WRdPXZNY"],
  ["Fuse Club", "The History of Belgium's Premier Techno Club", "https://www.youtube.com/watch?v=o4V9GaRMPPQ"],
  ["DJ Pierre @ Fuse", "DJ Pierre - 13 June 1998", "https://www.youtube.com/watch?v=SJb3AwHgftA"],
  ["DJ Trish @ Fuse", "DJ Trish - 28 March 1998", "https://www.youtube.com/watch?v=yGOvjDseJlA"],
  ["Laurent Garnier @ Fuse", "Laurent Garnier at Fuse 1995", "https://www.youtube.com/watch?v=urIzWdZ-oME"],
  ["Kenny Hawkes @ Food", "Live at Food (1997)", "https://www.youtube.com/watch?v=INBoSO7nak4"],
  ["F Communications", "Jori Hulkkonen - Heights (1996)", "https://www.youtube.com/watch?v=NVIuonciphk"],
  ["Merciless World of Trance", "Tranceparents - Polymorph (Cyberbach Mix)", "https://www.youtube.com/watch?v=e5IToz3hHY0&list=PLhh-MbiXG80sAEkfghr6YP8hLBcOUUcyF&index=8"],
  ["DJ Jef K", "Portrait de JEF K", "https://www.youtube.com/watch?v=0oRLdlXvwpo&t=603s"],
  ["Vinyl 1997", "Trankilou - Champagne (1997)", "https://www.youtube.com/watch?v=gCbwHPjr7Dc&list=PLnL-KH1SZ9_5mqhmdd_ZAhETqa0idWR-a&index=3"],
  ["Wim LP", "Marcel Krieg - Take A Ride II", "https://www.youtube.com/watch?v=sxCu0YBpyhE"],
  ["Carl Cox @ Techno Parade", "Carl Cox in Paris (1998)", "https://www.youtube.com/watch?v=m5deLze1YEQ"],
  ["Raoul @ Food", "Raoul at Food Club, Leuven (1998)", "https://www.youtube.com/watch?v=H6zXQzRaG1g"],
  ["Cobra Trailer", "Cobra (1986) Official Trailer", "https://www.youtube.com/watch?v=pgqeBMNyJhQ&list=PLZbXA4lyCtqr6-nWc1hw1u3sFCay7XL9L&index=11"],
  ["Disco LP", "Suzy Q - I Can't Give You More (1981)", "https://www.youtube.com/watch?v=nXSnqov6PNA"],
  ["Soufflé", "Wiz Khalifa - video reference", "https://www.youtube.com/shorts/xfxB-5gSRAg"],
  ["Koyaanisqatsi", "Official Trailer", "https://www.youtube.com/watch?v=tDW-1JIa2gI"],
  ["Baraka", "Baraka - Kecak", "https://www.youtube.com/watch?v=aGXcnWUqV-Y&list=PLFHwu1AOB4nI8aUNs_TcTqm7jnXEjQyE0&index=5"],
  ["Stomp", "Stomp - Out Loud", "https://www.youtube.com/watch?v=fN5T8y8bCJ4"],
  ["Mayumana", "Scenes from the original show", "https://www.youtube.com/watch?v=rOj1D8gWBjY"],
  ["Stacey Pullen DJ-Kicks", "House & Techno DJ-Kicks (1996)", "https://www.youtube.com/watch?v=2rCYoaAkoYA"],
  ["Sangre por Sangre", "Video reference", "https://www.youtube.com/watch?v=9bHBDT82StE"],
  ["Gazpachuelo", "Video reference", "https://www.youtube.com/watch?v=CGlAHPm83So"],
  ["Gilles Peterson", "Journeys By DJ - Desert Island Mix", "https://www.youtube.com/watch?v=rFE84a8LC_I&list=RDrFE84a8LC_I&start_radio=1"],
  ["Kultür", "Marmion - Schö (Kultür Elektro Remix)", "https://www.youtube.com/watch?v=Rf2S7ZjOznE"],
  ["Mundo Evassion", "DJ Kultür - Historical Anniversary Set (2001)", "https://www.youtube.com/watch?v=kJuXhLayAdQ&list=PLXkpfUrnAvaRezkI7ZcuKK-O6AnjQjEob"],
  ["Fela Anikulapo Kuti", "Interview with Fela Kuti", "https://www.youtube.com/watch?v=LtLJfKDN4x8"],
  ["Bootsy Collins @ Couleur Café", "Bootsy Collins & The Funk Unity Band (2014)", "https://www.youtube.com/watch?v=K0oUtkDE7-k"],
  ["2manydjs @ Werchter", "Live at Rock Werchter (2004)", "https://www.youtube.com/watch?v=jIDCxDACp2Y"],
  ["Funk The World", "Fort Knox Five - Funk The World mixes", "https://soundcloud.com/fortknoxfive/sets/funk-the-world"],
  ["Funk Hunters @ Shambala", "The Funk Hunters - Full A/V Set (2015)", "https://www.youtube.com/watch?v=cHNau2OWjEc&list=FLZi_HgfAVOJ3nr0siFCw2MQ&index=8"],
  ["Featurecast", "The Main Event! Promo Mix", "https://www.youtube.com/watch?v=Q-1D9iFrQlQ&t=243s"],
  ["Jalapeño Records", "Official YouTube channel", "https://www.youtube.com/@jalapenorecords/videos"],
  ["James Brown Regrooved", "Superbad - The Sly Players", "https://www.youtube.com/watch?v=0Kf0HxQcndc"],
  ["GAMM - Young Pulse", "Paris Edits Vol. 5", "https://www.youtube.com/watch?v=Rlr0qyia71Y"],
  ["GAMM - Opolopo", "George Duke - Cravo e Canela (Opolopo Tweak)", "https://www.youtube.com/watch?v=aJGsNjcZsus"],
  ["GAMM - 7 Samurai", "Muzic (Panoptikum Remix)", "https://www.youtube.com/watch?v=szPv0hLgGbM"],
  ["Omar Kattan", "Darbuka Solo #2", "https://www.youtube.com/watch?v=S65bZK_OCtY"],
  ["Willy Homes Darbuka Solo", "Gospel 4 Cors - Hlonolofatsa", "https://www.youtube.com/watch?v=vZEmBemjNFs&list=FLZi_HgfAVOJ3nr0siFCw2MQ&index=9"],
  ["Kali GM Rodel", "Interview with GM Rodel", "https://www.youtube.com/watch?v=LSHuKhSOZ40&list=PLkG7iPP4BfFmAuU284Jv1yoorJnqWBF5s"],
  ["Problema", "Freddie Aguilar - Problema", "https://www.youtube.com/watch?v=GXznoGiKCj8"],
  ["In-Edit Festival 2012", "Festival trailer", "https://www.youtube.com/watch?v=bq_mGy3zCQU"],
  ["Brunch Electronik", "Nuestra razón de celebrar", "https://www.youtube.com/watch?v=r1y_6AlyNeA"],
  ["Anderson .Paak", "Live at Sónar 2017", "https://www.youtube.com/watch?v=1hDYoHwdRAo"],
  ["DGTL", "Frequency - Official Aftermovie (2016)", "https://www.youtube.com/watch?v=2pWMsuFHJXU"],
  ["Honey Dijon @ DGTL", "Tech It Deep TV - Barcelona (2018)", "https://www.youtube.com/watch?v=ZNC9D5_fxDc"],
  ["Long Live Boogaloo", "Long Live Boogaloo compilation", "https://www.youtube.com/watch?v=5szMN5xjS34"],
  ["Ballicki Bone", "Hypnotic Brass Ensemble in NYC", "https://www.youtube.com/watch?v=KWJOZELBaB8"],
  ["Milano Cocktail Bar", "Milano Jazz Club - Barcelona", "https://www.youtube.com/watch?v=AUhUBAHZmvE"],
  ["Cosmic Slop", "Funkadelic - Cosmic Slop (Moodymann Mix)", "https://www.youtube.com/watch?v=T2X9WGOP5gE"],
  ["Impulse", "Tributo a Pink Floyd", "https://www.youtube.com/watch?v=Zy5A9MVM_oU"],
  ["Cruïlla", "Festival Cruïlla 2016 - Aftermovie", "https://www.youtube.com/watch?v=8XtE8uHcLTw"],
  ["KEXP", "Khruangbin - Full Performance", "https://www.youtube.com/watch?v=DyWhFB9ijzA"],
  ["Tiny Desk - Sampha", "Sampha: Tiny Desk Concert", "https://www.youtube.com/watch?v=WyXFfKYbtQU"],
  ["Beyoncé @ Coachella", "BeyChella Show 2 (2018)", "https://www.youtube.com/watch?v=lC9JUCHzC3s"],
  ["Coke Studio", "Alif Allah Chambay Di Booti", "https://www.youtube.com/watch?v=gjaH2iuoYWE"],
  ["Terminator Dance", "Afronitaaa x King Nature", "https://www.youtube.com/shorts/C6q0_ZrYOr0"],
  ["Tomorrowland", "Tomorrowland Belgium 2025 - Aftermovie", "https://www.youtube.com/watch?v=ryIz5jiT6Pc"],
  ["Glastonbury", "Glastonbury in 4 minutes (2024)", "https://www.youtube.com/watch?v=SvCd6HQN-eg"],
];

const collections = [
  {
    id: "streaming",
    title: "Streaming",
    intro: "Playlists, mixes and other places to discover music.",
    items: [
      ["¡No Entraron pero se Quedaron!", "The songs that didn't make the main playlist but stayed with us.", "https://open.spotify.com/playlist/4f6u4Qa0CsMmO9zj5nD4Yx?si=689c4bde40444415"],
      ["Músicas Sospechosas", "Sarah DJ Conga on Spotify.", "https://open.spotify.com/user/sarahdjconga"],
      ["SoundCloud", "Discover mixes and music.", "https://soundcloud.com/discover"],
      ["Mixcloud", "DJ mixes and radio shows.", "https://www.mixcloud.com/"],
    ],
  },
  {
    id: "platforms",
    title: "Music platforms",
    intro: "Places to find, buy and collect music.",
    items: [
      ["Discogs", "Music database and marketplace.", "https://www.discogs.com/"],
      ["Traxsource", "Electronic music store.", "https://www.traxsource.com/"],
      ["Beatport", "Electronic music store.", "https://www.beatport.com/es"],
      ["Bandcamp", "Discover and support artists and labels.", "https://gammenterprises.bandcamp.com/"],
    ],
  },
  {
    id: "blogs",
    title: "Music blogs & magazines",
    intro: "Publications and websites for further discoveries.",
    items: [
      ["AOTY", "Album of the Year.", "https://www.albumoftheyear.org/"],
      ["Magnetic Magazine", "Electronic music and culture.", "https://magneticmag.com/"],
      ["Pitchfork", "Music reviews and features.", "https://pitchfork.com/"],
      ["DJ Mag", "Electronic music and DJ culture.", "https://djmag.com/"],
      ["Flamencópolis", "Flamenco culture and knowledge.", "https://expoflamenco.com/flamencopolis/"],
      ["Maqam World", "Arabic music theory and rhythms.", "https://www.maqamworld.com/en/iqaa.php"],
      ["MondoSonoro", "Music magazine.", "https://www.mondosonoro.com/"],
    ],
  },
  {
    id: "books",
    title: "Books",
    intro: "Books and reading references connected to music.",
    items: [
      ["Mickey Hart - Drumming at the Edge of Magic", "Mickey Hart", "https://www.goodreads.com/book/show/24796573-drumming-at-the-edge-of-magic"],
      ["Questlove - Music Is History", "Questlove", "https://www.goodreads.com/book/show/60310732-music-is-history"],
      ["Jude Rogers - The Sound of Being Human", "Jude Rogers", "https://www.goodreads.com/book/show/61023165-the-sound-of-being-human"],
      ["En el estómago de la bestia", "Profesor Angel Dust - Aventuras y desventuras de un DJ", "https://www.goodreads.com/book/show/254912891-en-el-est-mago-de-la-bestia"],
    ],
  },
  {
    id: "labels",
    title: "Record labels",
    intro: "Labels that have been part of the musical journey.",
    items: [
      ["Warp Records", "Electronic music and experimental sounds.", "https://warp.net/"],
      ["R&S Records", "Belgian electronic music label.", "https://www.rsrecords.com/"],
      ["!K7 Records", "Music label and DJ-Kicks series.", "https://k7.com/"],
      ["Verve Records", "Jazz and beyond.", "https://www.ververecords.com/"],
      ["Blue Note Records", "Jazz record label.", "https://www.bluenote.com/"],
      ["Mr Bongo Records", "Global sounds, funk and soul.", "https://www.mrbongo.com/"],
      ["Habibi Funk Records", "Music from the Arab world.", "https://habibifunk.com/"],
    ],
  },
  {
    id: "festivals",
    title: "Festivals",
    intro: "Festivals and live experiences.",
    items: [
      ["Rock Werchter", "Belgium.", "https://www.rockwerchter.be/en/"],
      ["Couleur Café", "Belgium.", "https://www.couleurcafe.be/en/"],
      ["Dour Festival", "Belgium.", "https://www.dourfestival.eu/en/"],
      ["Reggae Geel", "Belgium.", "https://www.reggaegeel.com/"],
      ["Sónar", "Barcelona.", "https://sonar.es/es"],
      ["DGTL", "Electronic music festival.", "https://dgtl-festival.com/es/"],
      ["Brunch Electronik", "Barcelona.", "https://barcelona.brunchelectronik.com/"],
      ["Cruïlla", "Barcelona.", "https://www.cruillabarcelona.cat/es/"],
      ["Primavera Sound", "Barcelona.", "https://www.primaverasound.com/es"],
      ["Cross The Tracks", "London.", "https://www.xthetracks.com/"],
    ],
  },
  {
    id: "misc",
    title: "Miscellaneous",
    intro: "Other references, tools and inspirations.",
    items: [
      ["Shaman Roel Crabbé", "Roel Crabbé.", "https://www.roelcrabbe.com/"],
      ["Every Noise at Once", "Explore musical genres.", "https://everynoise.com/"],
      ["Milano Cocktail Bar", "Barcelona.", "https://www.tripadvisor.es/Restaurant_Review-g187497-d2623980-Reviews-Milano_Cocktail_Bar-Barcelona_Catalonia.html"],
      ["Suno AI", "Music creation tool.", "https://suno.com/s/EjE8q30Mdf3F0Xlo"],
      ["WhoSampled", "Discover samples and musical connections.", "https://www.whosampled.com/"],
    ],
  },
];

function ResourceSection({
  id,
  title,
  intro,
  items,
}: {
  id: string;
  title: string;
  intro: string;
  items: string[][];
}) {
  return (
    <section id={id} className="scroll-mt-8 border-t pt-12">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-3 opacity-70">{intro}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map(([name, description, url]) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border p-4 transition hover:bg-black/5"
          >
            <p className="font-semibold">{name}</p>
            <p className="mt-2 text-sm opacity-65">{description}</p>
            <p className="mt-3 text-xs underline underline-offset-4 opacity-60">
              Explore link ↗
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function MusicalMapPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-5xl">

        {/* INTRO */}
        <p className="text-sm uppercase tracking-widest opacity-60">
          The Makings of Willy Homes
        </p>

        <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
          The Musical Map
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed opacity-75">
          A lifetime of music, memories and discoveries.
          A collection of sounds, artists, places, records,
          performances and ideas that have shaped a musical journey.
        </p>

        {/* VISUAL JOURNEY */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white/30 p-6">
            <p className="text-3xl">🎬</p>
            <h2 className="mt-4 text-xl font-bold">Watch</h2>
            <p className="mt-2 text-sm opacity-70">
              Performances, documentaries, interviews and music videos.
            </p>
          </div>

          <div className="rounded-2xl border bg-white/30 p-6">
            <p className="text-3xl">🎧</p>
            <h2 className="mt-4 text-xl font-bold">Listen</h2>
            <p className="mt-2 text-sm opacity-70">
              Playlists, DJ mixes and musical discoveries.
            </p>
          </div>

          <div className="rounded-2xl border bg-white/30 p-6">
            <p className="text-3xl">📚</p>
            <h2 className="mt-4 text-xl font-bold">Explore</h2>
            <p className="mt-2 text-sm opacity-70">
              Books, record labels, festivals and sources of inspiration.
            </p>
          </div>
        </div>

        {/* CATEGORY NAVIGATION */}
        <section className="mt-16">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Explore the collection
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              ["Videos", "videos"],
              ["Streaming", "streaming"],
              ["Music platforms", "platforms"],
              ["Music blogs", "blogs"],
              ["Books", "books"],
              ["Record labels", "labels"],
              ["Festivals", "festivals"],
              ["Miscellaneous", "misc"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border px-4 py-2 text-sm transition hover:bg-black hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* VIDEOS */}
        <section id="videos" className="mt-20 scroll-mt-8 border-t pt-12">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Watch
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Videos & Documentaries
          </h2>
          <p className="mt-3 opacity-70">
            73 video references: music videos, DJ sets, interviews,
            documentaries and moments in music history.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {videos.map(([name, description, url], index) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 rounded-xl border p-4 transition hover:bg-black/5"
              >
                <span className="text-sm tabular-nums opacity-40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-semibold">{name}</span>
                  <span className="mt-1 block text-sm opacity-65">
                    {description}
                  </span>
                  <span className="mt-3 block text-xs underline underline-offset-4 opacity-60">
                    Watch ↗
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* OTHER COLLECTIONS */}
        {collections.map((collection) => (
          <ResourceSection
            key={collection.id}
            id={collection.id}
            title={collection.title}
            intro={collection.intro}
            items={collection.items}
          />
        ))}

        {/* BACK TO BOOK */}
        <div className="mt-20 border-t pt-8">
          <Link
            href="/book"
            className="text-sm underline underline-offset-4 opacity-70 hover:opacity-100"
          >
            ← Back to the book
          </Link>
        </div>

      </div>
    </main>
  );
}
