
export default function WattworksLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <SEO />

      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <BoltEmblem className="h-8 w-8" />
            <LogoWordmark className="w-36" />
          </div>
          <nav className="hidden gap-6 md:flex text-sm text-slate-600">
            <a href="#packages" className="hover:text-slate-900">Packages</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#why" className="hover:text-slate-900">Why Us</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="#quote" className="rounded-full bg-teal-500 px-4 py-2 font-medium text-white hover:bg-teal-600">Get Quote</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">EV charging, professionally installed.</h1>
            <p className="mt-4 text-lg text-slate-600">Compliance‑guaranteed TR25/LTA installs for homes, fleets & condos. 7–14 day turnaround. Clean containment. Documented tests. App ready.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#quote" className="rounded-xl bg-teal-500 px-5 py-3 font-medium text-white hover:bg-teal-600">Get a fixed quote</a>
              <a href="https://wa.me/65YOURNUMBER" target="_blank" rel="noreferrer" className="rounded-xl border px-5 py-3 font-medium hover:bg-slate-50">WhatsApp us</a>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
              <li className="flex items-center gap-2"><Check /> LTA registration & label included</li>
              <li className="flex items-center gap-2"><Check /> Test report: IR • loop • RCD</li>
              <li className="flex items-center gap-2"><Check /> OCPP chargers • app onboarding</li>
              <li className="flex items-center gap-2"><Check /> Optional AMC & SaaS</li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl border bg-white p-4 shadow-xl">
              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <div className="flex items-center gap-3"><BoltEmblem className="h-8 w-8" /><span className="text-xl font-semibold">Wattworks Install</span></div>
                <p className="mt-2 text-sm text-slate-300">From DB to drive—tidy, compliant, and fast.</p>
              </div>
              <div className="grid gap-3 p-4 text-sm">
                <div className="flex items-center justify-between"><span>Home Basic (7.4 kW)</span><span className="font-semibold">from $3,800</span></div>
                <div className="flex items-center justify-between"><span>Home Premium (11 kW)</span><span className="font-semibold">from $6,200</span></div>
                <div className="flex items-center justify-between"><span>Dual charger + load mgmt</span><span className="font-semibold">from $9,200</span></div>
                <p className="text-xs text-slate-500">Includes ≤15 m cable run, 1 penetration, RCBO + DC leakage compliance, commissioning & LTA registration. Variations itemised.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="border-t bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          <Feature title="Compliance‑first" desc="TR25/LTA-ready hardware, proper protection devices, documented tests & SLD." />
          <Feature title="Speed & craft" desc="7–14 day slots, tidy containment, neat terminations, labelled & logged." />
          <Feature title="Data‑ready" desc="OCPP chargers with app, RFID/QR, dashboards—future‑proof for fleets & condos." />
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold">Packages</h2>
          <p className="mt-2 text-slate-600">Fixed‑price bundles. Extras are transparent & itemised.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card title="Home Basic" price="from $3,800" bullets={[
              '7.4 kW smart wallbox',
              '≤15 m cable run, 1 penetration',
              'RCBO + DC leakage compliance',
              'Commissioning tests + report',
              'LTA registration & label'
            ]} cta="Get Quote"/>
            <Card title="Home Premium" price="from $6,200" highlight bullets={[
              '11 kW smart wallbox + app',
              'Load check & scheduling',
              'Neat surface containment',
              'Firmware & app onboarding',
              'AMC option $380/yr'
            ]} cta="Get Quote"/>
            <Card title="Dual / Pro" price="from $9,200" bullets={[
              'Two chargers or dual-port',
              'Load management included',
              'OCPP 1.6J / 2.0.1 capable',
              'Dashboards ready',
              'Best for 2-EV homes'
            ]} cta="Get Quote"/>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold">How it works</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-4">
            <Step n={1} title="Survey" desc="Share DB photo & location. We do load calc and route planning." />
            <Step n={2} title="Quote" desc="Transparent scope with any variations itemised." />
            <Step n={3} title="Install" desc="LEW‑supervised works, protection devices, tidy containment." />
            <Step n={4} title="Register & Charge" desc="Commissioning tests, as‑built SLD, LTA registration, app setup." />
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <FAQ q="Is the charger TR25/LTA compliant?" a="Yes—our recommended SKUs are TR25 compliant. We register your charger on LTA OneMotoring and affix the label at handover." />
            <FAQ q="How long does installation take?" a="Standard home jobs take ~3–5 hours on site. We target 7–14 day scheduling from confirmation." />
            <FAQ q="What if I need extra cable runs?" a="We itemise extras per metre and per additional wall/core penetration—no surprises." />
            <FAQ q="Do you offer maintenance?" a="Yes—Annual Maintenance Contracts (AMC) from $380/yr include inspection, firmware update, hotline, and priority call‑outs." />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Get a fixed quote</h2>
              <p className="mt-2 text-slate-600">Reply within 1 business day. For fastest service, attach a photo of your distribution board (DB).</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check /> Service areas: Island‑wide Singapore</li>
                <li className="flex items-center gap-2"><Check /> Lead time: typically 7–14 days</li>
                <li className="flex items-center gap-2"><Check /> Payment: 50/40/10 milestone billing</li>
              </ul>
            </div>
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="rounded-2xl border p-6 shadow-sm">
              <div className="grid gap-4">
                <Input name="name" label="Full name" required />
                <Input name="phone" label="Mobile" required />
                <Input name="email" label="Email" type="email" required />
                <Input name="postal" label="Postal code" required />
                <Input name="ev" label="EV make/model" />
                <Input name="power" label="Preferred power" placeholder="7.4 kW or 11 kW" />
                <div>
                  <label className="text-sm font-medium">DB photo (URL)</label>
                  <input name="db_photo_url" className="mt-1 w-full rounded-lg border p-2" placeholder="Paste a link to your DB photo (Google Drive/Photos)" />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea name="message" className="mt-1 w-full rounded-lg border p-2" rows={4} placeholder="Tell us about cable route / parking bay / condo rules" />
                </div>
                <button type="submit" className="rounded-xl bg-teal-500 px-5 py-3 font-medium text-white hover:bg-teal-600">Request quote</button>
                <p className="text-xs text-slate-500">By submitting, you consent to be contacted about your request. We do not sell your data. <a href="#" className="underline">Privacy policy</a>.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-10 text-sm">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2"><BoltEmblem className="h-6 w-6" /><span className="font-semibold">Wattworks</span></div>
            <p className="mt-2 text-slate-600">Safe. Compliant. Switched on.</p>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li>Email: hello@wattworks.sg</li>
              <li>WhatsApp: +65 YOUR NUMBER</li>
              <li>Hours: Mon–Sat 9:00–18:00 SGT</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li>ACRA: UEN TBC</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-6 text-slate-400">© {new Date().getFullYear()} Wattworks Energy Pte. Ltd.</div>
      </footer>
    </div>
  );
}

/* ---------------------- Components ---------------------- */
function SEO() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Wattworks',
    url: 'https://wattworks.sg',
    telephone: '+65 YOUR NUMBER',
    address: { '@type': 'PostalAddress', addressCountry: 'SG' },
    areaServed: 'Singapore',
    sameAs: ['https://www.linkedin.com/company/wattworks']
  };
  return (
    <>
      <title>Wattworks — EV Charger Installation Singapore</title>
      <meta name="description" content="TR25/LTA-compliant EV charger installs for homes, fleets & condos. 7–14 day turnaround. Documented tests. App ready." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}

function Card({ title, price, bullets, cta, highlight }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${highlight ? 'ring-2 ring-teal-500' : ''}`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-teal-600">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2"><Check /> {b}</li>
        ))}
      </ul>
      <a href="#quote" className="mt-6 inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">{cta}</a>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 font-semibold text-white">{n}</div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2"><BoltEmblem className="h-6 w-6" /><div className="text-lg font-semibold">{title}</div></div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <details className="rounded-xl border bg-white p-4">
      <summary className="cursor-pointer font-medium">{q}</summary>
      <p className="mt-2 text-sm text-slate-600">{a}</p>
    </details>
  );
}

function Input({ name, label, type = 'text', required = false, placeholder = '' }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-1 w-full rounded-lg border p-2" />
    </div>
  );
}

function BoltEmblem({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="100" cy="100" r="96" fill="#16D6C5" />
      <path d="M116 24L52 112h38l-6 64 64-88h-38l6-64z" fill="#0B1B2B" />
    </svg>
  );
}

function LogoWordmark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 820 140" xmlns="http://www.w3.org/2000/svg" aria-label="Wattworks">
      <text x="20" y="95" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui', fontWeight: 800, letterSpacing: 2, fill: '#0B1B2B', fontSize: 72 }}>WATT</text>
      <g transform="translate(310,0)">
        <text x="0" y="95" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui', fontWeight: 800, letterSpacing: 2, fill: '#0B1B2B', fontSize: 72 }}>WORKS</text>
        <rect x="51" y="25" width="6" height="18" fill="#16D6C5" rx="1" />
        <rect x="68" y="25" width="6" height="18" fill="#16D6C5" rx="1" />
      </g>
    </svg>
  );
}

function Check() {
  return (
    <svg className="h-4 w-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.42l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );
}
