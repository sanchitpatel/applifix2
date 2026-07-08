import { createFileRoute } from "@tanstack/react-router";
import heroBroken from "@/assets/hero-broken.jpg";
import heroRestored from "@/assets/hero-restored.png";
import serviceIphone from "@/assets/service-iphone.jpg";
import serviceMacbook from "@/assets/service-macbook.jpg";
import serviceIpad from "@/assets/service-ipad.jpg";
import serviceWatch from "@/assets/service-watch.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Applifix — Premium Apple Device Repair" },
      {
        name: "description",
        content:
          "Apple-certified technicians restoring iPhone, MacBook, iPad and Watch with genuine parts. Same-day repair. 90-day warranty.",
      },
      { property: "og:title", content: "Applifix — Premium Apple Device Repair" },
      {
        property: "og:description",
        content:
          "Precision Apple repair with genuine parts, same-day service, and a 90-day warranty. Trusted by 250,000+ device owners.",
      },
      { property: "og:image", content: heroRestored },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroRestored },
    ],
  }),
  component: Landing,
});

const services = [
  {
    title: "Screen & Battery",
    desc: "Instant display swaps and high-capacity battery replacements.",
    price: "From ₹2,500",
    img: serviceIphone,
    label: "iPhone Service",
  },
  {
    title: "Logic Board",
    desc: "Microsoldering and liquid damage recovery specialists.",
    price: "Free Estimate",
    img: serviceMacbook,
    label: "MacBook Service",
  },
  {
    title: "Glass Bonding",
    desc: "Restoring iPad Pro and Air models to original structural integrity.",
    price: "From ₹6,900",
    img: serviceIpad,
    label: "iPad Service",
  },
  {
    title: "Complex Repairs",
    desc: "Precision fixes for the world's most compact technology.",
    price: "From ₹3,900",
    img: serviceWatch,
    label: "Watch Service",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-x-0 border-t-0">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight">
              APPLIFIX<span className="text-primary text-2xl leading-none">.</span>
            </span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition-colors">iPhone</a>
              <a href="#services" className="hover:text-foreground transition-colors">MacBook</a>
              <a href="#services" className="hover:text-foreground transition-colors">iPad</a>
              <a href="#services" className="hover:text-foreground transition-colors">Watch</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs font-semibold tracking-widest text-muted-foreground">
              EXPERT CARE
            </span>
            <a
              href="#book"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-all"
            >
              Book Repair
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SAME-DAY REPAIR AVAILABLE
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              <span className="text-gradient">
                Precision
                <br />
                Revived.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
              Expert Apple-certified technicians restoring your devices with surgical precision and genuine parts.
            </p>

            <div className="flex flex-wrap gap-6 items-center mb-12">
              <a
                id="book"
                href="#book"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95"
              >
                Schedule Your Repair
              </a>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold">★ 4.9/5 Rating</span>
                <span className="text-xs text-muted-foreground">From 12,000+ Customers</span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold">90-Day</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Full Warranty
                </span>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold">45min</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Avg Fix Time
                </span>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Genuine Parts
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-20 bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="relative h-[600px]">
              <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden flex shadow-2xl">
                <div className="relative w-1/2 h-full overflow-hidden">
                  <img
                    src={heroBroken}
                    alt="Shattered iPhone screen before repair"
                    width={640}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white/60 bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                    Broken
                  </div>
                </div>
                <div className="comparison-line h-full z-20"></div>
                <div className="relative w-1/2 h-full overflow-hidden">
                  <img
                    src={heroRestored}
                    alt="Restored iPhone after Applifix repair"
                    width={640}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 backdrop-blur-md px-2 py-1 rounded">
                    Restored
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 glass-card px-5 py-3 rounded-2xl flex items-center gap-3">
                  <div className="size-10 bg-primary/20 rounded-full grid place-items-center">
                    <div className="size-4 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-tighter">
                      Certified Repair
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      No Touch-ID / Face-ID issues
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-t border-white/5 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-light tracking-tight">
              <span className="font-bold">250k+</span> Devices
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Restored to factory standards since 2014. We handle what others call unfixable.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-4xl font-light tracking-tight">
              <span className="font-bold">12</span> Locations
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Premium walk-in centers across the country with white-glove service waiting for you.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-4xl font-light tracking-tight">
              <span className="font-bold">5 Star</span> Support
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated concierge for all MacBook and enterprise repairs. Your data is always safe.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-4">
            <h2 className="text-4xl font-bold tracking-tight">Specialist Solutions</h2>
            <a href="#book" className="text-primary font-semibold hover:underline">
              View all services →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group glass-card p-8 rounded-3xl hover:bg-white/5 transition-all"
              >
                <div className="w-full aspect-square rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.label}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground mb-6">{s.desc}</p>
                <div className="text-primary text-xs font-bold tracking-widest uppercase">
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-muted-foreground flex flex-wrap gap-6 justify-center md:justify-start">
            <span>© 2026 Applifix Premium Systems</span>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Service Terms</a>
            <a href="#" className="hover:text-foreground">Enterprise</a>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Independent repair provider. Apple is a registered trademark.
          </div>
        </div>
      </footer>
    </div>
  );
}