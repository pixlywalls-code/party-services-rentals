"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, AudioLines, BadgeCheck,
  Building2, CalendarDays, Camera, Check, CheckCircle2, ChevronDown, Globe2,
  ChevronLeft, ChevronRight, Clock3, Coffee, Copy, Gift, Heart, Mail,
  MapPin, Menu, MicVocal, Package, PartyPopper, Phone, Palette, Send,
  ShieldCheck, Sparkles, Star, Tent, UsersRound, UtensilsCrossed, X,
  type LucideIcon,
} from "lucide-react";

type Category = "Party experiences" | "Rentals & equipment" | "Corporate events";
type Filter = "All services" | Category;
type Service = { title: string; description: string; category: Category; icon: LucideIcon };
type Enquiry = {
  name: string; phone: string; email: string; eventType: string;
  date: string; location: string; guests: string; budget: string; message: string;
};

const services: Service[] = [
  { title: "Private Parties & Celebrations", description: "Personal milestones, birthdays and gatherings with their own personality.", category: "Party experiences", icon: PartyPopper },
  { title: "Themed Event Styling", description: "A cohesive look, from the first impression to the final detail.", category: "Party experiences", icon: Palette },
  { title: "Bouncy Castles & Inflatables", description: "A playful centerpiece for family days and younger guests.", category: "Rentals & equipment", icon: Gift },
  { title: "Tables, Chairs & Furniture", description: "Flexible seating and essential event furniture for your setup.", category: "Rentals & equipment", icon: Package },
  { title: "Canopies, Tents & Shelter", description: "Thoughtful outdoor coverage for sun, shade and changing weather.", category: "Rentals & equipment", icon: Tent },
  { title: "Balloon Decor & Backdrops", description: "Photo-ready styling designed around your event theme.", category: "Party experiences", icon: Sparkles },
  { title: "Photo Booth Experiences", description: "Interactive photo moments for guests to enjoy and remember.", category: "Party experiences", icon: Camera },
  { title: "Sound, Lighting & Stage", description: "The technical essentials behind a memorable occasion.", category: "Rentals & equipment", icon: AudioLines },
  { title: "Hosts, MCs & Entertainment", description: "Keep the energy moving and every guest engaged.", category: "Party experiences", icon: MicVocal },
  { title: "Food Stations & Catering", description: "Event food experiences planned to suit the occasion.", category: "Party experiences", icon: UtensilsCrossed },
  { title: "Family Days & Annual Dinners", description: "Bring your team together in a way that feels anything but ordinary.", category: "Corporate events", icon: UsersRound },
  { title: "Product Launches & Roadshows", description: "Branded moments that turn attention into connection.", category: "Corporate events", icon: Building2 },
  { title: "Company Team Building", description: "Shared experiences that help teams laugh, connect and collaborate.", category: "Corporate events", icon: Heart },
  { title: "Experiential Activations", description: "Make your brand something people can experience, not just see.", category: "Corporate events", icon: Star },
  { title: "Corporate Retreats", description: "Plan an escape that makes room for fresh thinking.", category: "Corporate events", icon: MapPin },
  { title: "Games & Carnival Experiences", description: "Fun-filled activities and interactive moments for every age.", category: "Party experiences", icon: Gift },
];

const categories: Filter[] = [
  "All services", "Party experiences", "Rentals & equipment", "Corporate events",
];

const ASSET_ROOT = "https://advertisingandmore.com/wp-content/uploads/2026/07/";
const brandLogos = [
  {name:"P&G",src:"old-pg.png"},{name:"TalentCorp",src:"old-talent.png"},
  {name:"Kementerian Sumber Manusia",src:"old-kemen.png"},{name:"Yonder Music",src:"old-yonder.png"},
  {name:"Celcom",src:"old-celcom.png"},{name:"AirAsia",src:"old-airasia.png"},
  {name:"Airbnb",src:"airbnb.png"},{name:"Universal Music Group",src:"old-unilogo.png"},
  {name:"Warner Music Group",src:"old-warner.png"},{name:"Kinibiz",src:"old-kinibiz.png"},
  {name:"Yusari Film",src:"old-yusari.png"},{name:"MERCY Malaysia",src:"old-mercylogo.png"},
  {name:"Asoke Finance",src:"old-asoke.png"},{name:"Mido",src:"old-mido.png"},
  {name:"Turning Heads",src:"old-turninghead.png"},{name:"Happy Hop",src:"old-happyhop.png"}
];
const companyStats = [
  {number:"12+",caption:"Years in business",icon:CalendarDays},
  {number:"150+",caption:"Countries advertised in",icon:Globe2},
  {number:"98%",caption:"Clients return to us",icon:UsersRound},
  {number:"100%",caption:"Project success rates",icon:BadgeCheck}
];
const agencyReviews = [
  {brand:"LinkedIn Corporation",position:"Regional Account Director, South East Asia",logo:"LI-Logo.png",note:"Recognised the team's work and thanked them for delivering."},
  {brand:"Bosch",position:"Corporate Communications & Brand Management",logo:"bosch-tc.png",note:"Praised the agency's professionalism and thoughtful digital-media advice."},
  {brand:"Universal Music Group",position:"Label Manager",logo:"universal-tc.png",note:"Appreciated genuine interest in their business and an open approach."},
  {brand:"Dentsu",position:"Associate Digital Director",logo:"dentsu-tc.png",note:"Commended the team for outstanding campaign performance."}
];
const drinks = [
  {name:"Coffee",image:"coffee.png"},{name:"Tea",image:"tea.png"},
  {name:"Beer",image:"beer.png"},{name:"White Wine",image:"whitewine.png"},
  {name:"Red Wine",image:"redwine.png"},{name:"Whiskey",image:"whiskey.png"},
  {name:"Gin & Tonic",image:"gintonic.png"},{name:"Martini",image:"martini.png"},
  {name:"Piña Colada",image:"pinacolada.png"}
];

const steps = [
  { eyebrow: "WE LISTEN", title: "Tell us your dream.", body: "Your vision, guests, date, venue and the feeling you want to create." },
  { eyebrow: "WE PLAN", title: "Find the right mix.", body: "A tailored combination of event ideas, practical rentals and details." },
  { eyebrow: "WE CREATE", title: "Bring it to life.", body: "Coordination, creative direction and all those finishing touches." },
  { eyebrow: "WE DELIVER", title: "Enjoy the moment.", body: "An organised event experience, with the important details covered." },
  { eyebrow: "WE CELEBRATE", title: "Make it memorable.", body: "A happy event deserves a very happy ending. Coffee, anyone?" },
];

const examples = [
  {
    eyebrow: "CELEBRATION CONCEPT", title: "A birthday full of wonder",
    description: "Colourful decor, playful activities and a picture-perfect party setting.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1100&q=85",
    alt: "A celebratory arrangement of colourful balloons",
    tags: ["Birthdays", "Decor", "Entertainment"],
  },
  {
    eyebrow: "CORPORATE CONCEPT", title: "Everyone's invited",
    description: "An open-air family day designed for teams, friends and family.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1100&q=85",
    alt: "People together at a large event",
    tags: ["Family days", "Games", "Logistics"],
  },
  {
    eyebrow: "PRIVATE EVENT CONCEPT", title: "An evening to remember",
    description: "Elegant tables, atmospheric lighting and details worth slowing down for.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85",
    alt: "An elegantly styled formal event",
    tags: ["Private events", "Styling", "Lighting"],
  },
  {
    eyebrow: "BRAND EXPERIENCE CONCEPT", title: "Make a grand entrance",
    description: "A launch moment that tells your story long after the event ends.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1100&q=85",
    alt: "A vibrant professionally lit event",
    tags: ["Launches", "Production", "Stage"],
  },
];

const faqs = [
  { q: "Can you help plan the entire event?", a: "The concept is designed to show both end-to-end planning and individual services. Final offerings and availability should be confirmed with the Advertising & More team." },
  { q: "What kinds of celebrations can I enquire about?", a: "Birthdays, themed gatherings, private celebrations, corporate family days, launches, annual dinners and team activities are all represented in this concept." },
  { q: "Can I request only one rental item?", a: "Yes, you can describe the particular item in the enquiry planner. This prototype does not confirm live inventory or rental availability." },
  { q: "Can you work with my event theme?", a: "Share your mood board, theme, colours or inspiration in the event brief. A more tailored conversation begins with those details." },
  { q: "How far in advance should I get in touch?", a: "As early as possible is best for busy event dates. Specific scheduling depends on the event size and team availability." },
];

const blankEnquiry: Enquiry = {
  name: "", phone: "", email: "", eventType: "", date: "",
  location: "", guests: "", budget: "", message: "",
};

function BrandCup({ small = false }: { small?: boolean }) {
  return <span className={small ? "brand-cup brand-cup-small" : "brand-cup"} aria-hidden="true">
    <img src={ASSET_ROOT + "coffee-cup.png"} alt="" className="brand-cup-image" />
  </span>;
}

function SectionHeading({ eyebrow, title, accent, subtitle }: { eyebrow: string; title: string; accent: string; subtitle?: string }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow"><span />{eyebrow}<span /></span>
      <h2>{title}<em>{accent}</em></h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function CoffeeButton({ children = "CLICK FOR COFFEE", onClick, href = "#contact", className = "" }: {
  children?: React.ReactNode; onClick?: () => void; href?: string; className?: string;
}) {
  const content = <><BrandCup small /><span>{children}</span><ArrowUpRight size={15} aria-hidden="true" /></>;
  return onClick
    ? <button type="button" onClick={onClick} className={"coffee-btn " + className}>{content}</button>
    : <a href={href} className={"coffee-btn " + className}>{content}</a>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState("Coffee");
  const [filter, setFilter] = useState<Filter>("All services");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeExample, setActiveExample] = useState<number | null>(null);
  const [enquiry, setEnquiry] = useState<Enquiry>(blankEnquiry);
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const enquiryRef = useRef<HTMLDivElement>(null);

  const shownServices = filter === "All services" ? services : services.filter((s) => s.category === filter);
  useEffect(() => {
    const syncHeader = () => setIsScrolled(window.scrollY > 36);
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActiveExample(null); setMenuOpen(false); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeExample !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeExample]);

  function chooseService(title: string) {
    setEnquiry((prev) => ({
      ...prev,
      eventType: title,
      message: prev.message || "I'm interested in " + title + ". Please tell me more about the options.",
    }));
    setPrepared(false);
    enquiryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateField(field: keyof Enquiry, value: string) {
    setEnquiry((prev) => ({ ...prev, [field]: value }));
    setPrepared(false);
  }

  const messageText = [
    "PARTY SERVICES & RENTALS — EVENT ENQUIRY",
    "Name: " + enquiry.name,
    "Phone: " + enquiry.phone,
    "Email: " + enquiry.email,
    "Event / service: " + (enquiry.eventType || "To be discussed"),
    "Date: " + (enquiry.date || "Flexible"),
    "Location: " + (enquiry.location || "To be confirmed"),
    "Guest count: " + (enquiry.guests || "To be confirmed"),
    "Budget: " + (enquiry.budget || "To be discussed"),
    "Details: " + (enquiry.message || "No additional details"),
  ].join("\n");

  function prepareEnquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPrepared(true);
    setCopied(false);
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
    } catch {
      const node = document.getElementById("enquiry-preview") as HTMLTextAreaElement | null;
      node?.focus();
      node?.select();
    }
  }

  return (
    <>
      <div className="demo-ribbon"><Sparkles size={13} /> Design concept • Inspired by Advertising & More • Not an official booking website</div>
      <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="nav-inner wrap">
          <a className="site-logo" href="#home" onClick={() => setMenuOpen(false)} aria-label="Advertising & More concept home">
            <span className="logo-mark"><BrandCup small /></span>
            <span>Advertising <strong>&amp; More</strong></span>
          </a>
          <nav className={menuOpen ? "desktop-nav is-open" : "desktop-nav"} aria-label="Main navigation">
            {[
              ["Home", "#home"], ["Services", "#services"], ["About", "#why-us"],
              ["Reviews", "#references"], ["Why Us", "#why-us"], ["Contact", "#contact"],
            ].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="nav-actions"><CoffeeButton className="nav-coffee" />
            <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} type="button">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-inner wrap">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="kicker-dot" /> A NEW WAY TO CELEBRATE <span className="line" /></div>
              <h1>Everything you need for <span>unforgettable</span> celebrations.</h1>
              <p className="hero-script">Under one happy roof.</p>
              <p className="hero-intro">From the intimate and meaningful to the wonderfully larger-than-life, beautiful events begin with a little imagination — and the right people by your side.</p>
              <div className="hero-buttons"><CoffeeButton /><a href="#services" className="outline-btn">Explore the possibilities <ArrowRight size={17} /></a></div>
              <div className="hero-promise"><span className="mini-avatars">✦ ✳ ✦</span><span>Big ideas. Happy moments.<br /><strong>Made for your kind of celebration.</strong></span></div>
            </div>
            <div className="hero-art">
              <div className="hero-image-wrap">
                <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1500&q=90" alt="Colourful balloons at a joyful party" />
                <span className="hero-image-vignette" />
              </div>
              <div className="hero-photo-small"><img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=580&q=85" alt="Decorated celebration venue" /></div>
              <span className="scribble-label">Let&apos;s make<br />it magical! <Heart size={16} /></span>
              <div className="hero-party-tag"><PartyPopper size={17} /> Your moment. Our imagination.</div>
              <div className="confetti confetti-1" /><div className="confetti confetti-2" /><div className="confetti confetti-3" />
            </div>
          </div>
          <a className="hero-scroll" href="#brandstrip"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></a>
        </section>

        <section id="brandstrip" className="brand-strip" aria-label="Brand images from Advertising & More's website">
          <div className="strip-topline"><span />TRUSTED BY THESE BRANDS, &amp; MORE…<span /></div>
          {[false, true].map((reverse, rowIndex) => (
            <div className="marquee-window" key={rowIndex}
              onMouseEnter={() => setMarqueePaused(true)} onMouseLeave={() => setMarqueePaused(false)}>
              <div className={["marquee-track", reverse ? "marquee-reverse" : "marquee-forward", marqueePaused ? "marquee-paused" : ""].join(" ")}>
                {[0, 1].map((copy) => (
                  <div className="marquee-set" key={copy} aria-hidden={copy === 1}>
                    {(reverse ? [...brandLogos].reverse() : brandLogos).map((brand) => (
                      <span className="marquee-logo" key={brand.name} title={brand.name}>
                        <img src={ASSET_ROOT + brand.src} alt={copy === 0 ? brand.name : ""} loading="lazy" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="brand-caption">Brand imagery reflects the original agency website, not endorsements of new party services.</p>
        </section>
        <section className="stats-section" aria-label="Existing agency highlights">
          <div className="wrap stats-grid">
            {companyStats.map(({number,caption,icon:Icon}) => (
              <div className="stat-item" key={caption}>
                <span className="stat-icon"><Icon size={22} aria-hidden="true" /></span>
                <span className="stat-text"><strong className="stat-number">{number}</strong><span>{caption}</span></span>
              </div>
            ))}
          </div>
          <p className="stat-attribution">Agency-wide figures shown on the existing Advertising &amp; More site.</p>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="THE POSSIBILITIES" title="Party Services " accent="& Rentals." subtitle="A world of experiences, essentials and extra-special touches. Mix and match what you love." />
            <div className="service-filters" role="group" aria-label="Filter services">
              {categories.map((category) => (
                <button key={category} type="button" className={filter === category ? "filter-chip active" : "filter-chip"} onClick={() => setFilter(category)} aria-pressed={filter === category}>{category}</button>
              ))}
            </div>
            <div className="services-grid">
              {shownServices.map(({ title, description, icon: Icon, category }) => (
                <button className="service-card" key={title} type="button" onClick={() => chooseService(title)} aria-label={"Enquire about " + title}>
                  <span className="service-icon"><Icon size={31} strokeWidth={1.65} aria-hidden="true" /></span>
                  <span className="service-category">{category}</span>
                  <strong>{title}</strong>
                  <span className="service-description">{description}</span>
                  <span className="service-link">Let's talk <ArrowUpRight size={15} /></span>
                </button>
              ))}
            </div>
            <div className="services-note"><Sparkles size={18} /><span>Every celebration is different. Can&apos;t see your idea here? <a href="#contact">Tell us your big idea.</a></span></div>
          </div>
        </section>

        <section className="statement-section" id="why-us">
          <div className="wrap statement-wrap">
            <div className="statement-visual">
              <div className="statement-image"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85" alt="Crowd enjoying vibrant event lighting" /></div>
              <div className="statement-sticker"><BrandCup /><span>Creativity<br />with a little<br />caffeine.</span></div>
            </div>
            <div className="statement-copy">
              <span className="section-eyebrow section-eyebrow-left">— A LITTLE ABOUT OUR THINKING</span>
              <h2>Not just an event.<br /><em>A feeling</em> to remember.</h2>
              <p>Advertising &amp; More&apos;s personality is bold, imaginative and deeply human. This page brings that same spirit to celebrations — with practical planning, beautiful details and memorable experiences.</p>
              <div className="value-list">
                <div><span><Sparkles size={21} /></span><div><strong>Creative down to the details.</strong><p>From the first idea to the finishing touch.</p></div></div>
                <div><span><ShieldCheck size={21} /></span><div><strong>A thoughtful approach.</strong><p>Style, comfort and the practicalities that matter.</p></div></div>
                <div><span><Heart size={21} /></span><div><strong>Always about people.</strong><p>Because the best part of any event is how it makes us feel.</p></div></div>
              </div>
              <a href="#process" className="text-link">Discover our process <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section id="process" className="process-section section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="HOW IT ALL COMES TOGETHER" title="Our " accent="Process." subtitle="Five simple steps, a little heart, and just enough caffeine." />
            <div className="steps-grid">
              {steps.map((step, i) => (
                <article className="step-card" key={step.eyebrow}>
                  <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="step-eyebrow">{step.eyebrow}</span>
                  <h3>{step.title}</h3><p>{step.body}</p>
                  <span className="step-decor">✳</span>
                </article>
              ))}
            </div>
            <div className="process-signoff">Dream it. Plan it. Make it happen. <span>Celebrate! ✦</span></div>
          </div>
        </section>

        <section id="showcase" className="showcase-section section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="INSPIRATION STATION" title="Imagine the " accent="possibilities." subtitle="Four event directions to spark an idea. These are illustrative concepts, not a portfolio of completed party events." />
            <div className="showcase-grid">
              {examples.map((example, i) => (
                <button key={example.title} className="showcase-card" onClick={() => setActiveExample(i)} type="button" aria-label={"Explore " + example.title}>
                  <div className="showcase-image"><img loading="lazy" src={example.image} alt={example.alt} /><span className="showcase-open"><ArrowUpRight size={21} /></span></div>
                  <div className="showcase-content"><span className="showcase-eyebrow">{example.eyebrow}</span><h3>{example.title}</h3><p>{example.description}</p><div className="tag-list">{example.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="references" className="proof-section section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="KIND WORDS" title="What our " accent="clients say." subtitle="Feedback from Advertising & More's existing agency clients. These are summaries of broader agency reviews, not testimonials for the new rental service." />
            <div className="proof-layout">
              <div className="proof-cards">
                {agencyReviews.map((review) => (
                  <article className="quote-card" key={review.brand}>
                    <div className="review-stars" aria-label="Five-star style used on the original website">★★★★★</div>
                    <p>{review.note}</p>
                    <div className="quote-footer">
                      <img src={ASSET_ROOT + review.logo} alt={review.brand + " logo"} loading="lazy" />
                      <div><strong>{review.brand}</strong><span>{review.position}</span></div>
                    </div>
                  </article>
                ))}
              </div>
              <aside className="team-feature">
                <span className="section-eyebrow">THE PEOPLE</span>
                <img src={ASSET_ROOT + "tanya.jpg"} alt="Tanya Hyacinth D’Silva-Fernandez" className="team-portrait" loading="lazy" />
                <h3>Meet your <em>dream team.</em></h3>
                <strong>Tanya Hyacinth D’Silva-Fernandez</strong>
                <p>Chief Executive Officer · Advertising &amp; More</p>
                <a href="https://advertisingandmore.com/#about" target="_blank" rel="noopener noreferrer">Get to know the agency <ArrowUpRight size={16} /></a>
              </aside>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="wrap faq-layout">
            <div className="faq-heading">
              <span className="section-eyebrow section-eyebrow-left">— GOOD TO KNOW</span>
              <h2>A few happy <em>answers.</em></h2>
              <p>Curious? Every great celebration starts with a question (or three).</p>
              <span className="faq-sketch">?</span>
            </div>
            <div className="faq-items">
              {faqs.map((item, i) => (
                <div className={activeFaq === i ? "faq-item open" : "faq-item"} key={item.q}>
                  <button type="button" aria-expanded={activeFaq === i} onClick={() => setActiveFaq(activeFaq === i ? null : i)}><span>{item.q}</span><ChevronDown size={19} /></button>
                  {activeFaq === i && <p>{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="drinks" className="drinks-section section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="THE DRINKS ARE ON US" title="Book a " accent="happy meeting." subtitle="A playful nod to the original site's coffee-first personality. Pick your preferred drink to make it yours." />
            <div className="drinks-grid">
              {drinks.map(({name,image}) => (
                <button type="button" aria-pressed={selectedDrink === name} key={name}
                  onClick={() => setSelectedDrink(name)}
                  className={selectedDrink === name ? "drink-choice selected" : "drink-choice"}>
                  <img src={ASSET_ROOT + image} alt="" loading="lazy" />
                  <strong>{name}</strong>
                  {selectedDrink === name && <span className="drink-tick"><Check size={12} /></span>}
                </button>
              ))}
            </div>
            <p className="drinks-caption">The drinks are on us — in spirit! Selecting a drink in this design demo doesn't place an order.</p>
            <CoffeeButton href="#contact">LET'S TALK OVER {selectedDrink.toUpperCase()}</CoffeeButton>
          </div>
        </section>
        <section id="contact" ref={enquiryRef} className="contact-section section-pad">
          <div className="wrap contact-outer">
            <div className="contact-copy">
              <span className="section-eyebrow section-eyebrow-left">— LET'S PLAN YOUR EVENT</span>
              <h2>Let&apos;s plan something <em>amazing.</em></h2>
              <p>Tell us about your occasion. We're ready to help you put the important details into one happy plan.</p>
              <div className="contact-coffee"><BrandCup /><span>Great events start<br />with a great<br /><b>conversation!</b></span></div>
              <div className="contact-location"><MapPin size={17} /> Inspired by the Kuala Lumpur-based Advertising &amp; More team.</div>
            </div>
            <div className="contact-form-panel">
              {!prepared ? (
                <form onSubmit={prepareEnquiry}>
                  <h3>Your event, your way.</h3>
                  <p className="form-intro">Prepare your request here, then send it through the official agency website.</p>
                  <div className="form-grid">
                    <label>Your full name <input required value={enquiry.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your name" maxLength={100} /></label>
                    <label>Phone number <input required type="tel" value={enquiry.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+60 ..." maxLength={30} /></label>
                    <label>Email address <input required type="email" value={enquiry.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@example.com" maxLength={120} /></label>
                    <label>Event / service <select required value={enquiry.eventType} onChange={(e) => updateField("eventType", e.target.value)}><option value="">Select your event type</option>{services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}<option value="Something else">Something else</option></select></label>
                    <label>Preferred date <input type="date" value={enquiry.date} onChange={(e) => updateField("date", e.target.value)} /></label>
                    <label>Event location <input value={enquiry.location} onChange={(e) => updateField("location", e.target.value)} placeholder="e.g. Kuala Lumpur" maxLength={140} /></label>
                    <label>Number of guests <input type="number" min="1" max="100000" value={enquiry.guests} onChange={(e) => updateField("guests", e.target.value)} placeholder="Approximate number" /></label>
                    <label>Estimated budget <select value={enquiry.budget} onChange={(e) => updateField("budget", e.target.value)}><option value="">Select a budget</option><option value="Under RM 2,000">Under RM 2,000</option><option value="RM 2,000 – RM 5,000">RM 2,000 – RM 5,000</option><option value="RM 5,000 – RM 10,000">RM 5,000 – RM 10,000</option><option value="RM 10,000+">RM 10,000+</option><option value="Need guidance">Need guidance</option></select></label>
                    <label className="form-wide">Tell us about your idea <textarea rows={4} value={enquiry.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your celebration and theme..." maxLength={2000} /></label>
                  </div>
                  <button className="submit-button" type="submit"><BrandCup small /><span>PREPARE MY ENQUIRY</span><ArrowRight size={19} /></button>
                  <p className="form-disclaimer"><ShieldCheck size={13} /> Prototype only. Your details aren't stored or sent to a server.</p>
                </form>
              ) : (
                <div className="prepared-panel" role="status">
                  <div className="prepared-icon"><CheckCircle2 size={38} /></div>
                  <h3>Looking good, {enquiry.name.split(" ")[0]}!</h3>
                  <p>Your enquiry is ready. Copy it and paste it into Advertising &amp; More&apos;s official contact form.</p>
                  <label htmlFor="enquiry-preview">Prepared enquiry</label>
                  <textarea id="enquiry-preview" readOnly value={messageText} rows={10} />
                  <div className="prepared-actions">
                    <button type="button" className="submit-button" onClick={copyEnquiry}>{copied ? <Check size={20} /> : <Copy size={20} />}{copied ? "COPIED!" : "COPY ENQUIRY"}<ArrowRight size={17} /></button>
                    <a href="https://advertisingandmore.com/#contactform" target="_blank" rel="noopener noreferrer" className="outline-btn">Open official website <ArrowUpRight size={17} /></a>
                  </div>
                  <button type="button" className="edit-button" onClick={() => setPrepared(false)}>← Edit details</button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      

        <footer className="site-footer">
        <div className="wrap footer-top">
          <div className="footer-brand"><a href="#home" className="site-logo"><span className="logo-mark"><BrandCup small /></span><span>Advertising <strong>&amp; More</strong></span></a><p>Everything you need,<br />under one happy roof.</p><div className="footer-emphasis">CREATIVE. HUMAN. HAPPY. ✦</div></div>
          <div className="footer-col"><h4>EXPLORE</h4><a href="#services">Services</a><a href="#showcase">Inspiration</a><a href="#process">Our Process</a><a href="#faq">Good to Know</a></div>
          <div className="footer-col"><h4>COMPANY</h4><a href="#why-us">Why Us</a><a href="#references">Agency References</a><a href="#contact">Plan Your Event</a><a href="https://advertisingandmore.com" target="_blank" rel="noopener noreferrer">Official Website ↗</a></div>
          <div className="footer-cup"><BrandCup /><span>See you<br /><em>over coffee!</em></span></div>
        </div>
        <div className="wrap footer-bottom"><span>© 2026 Party Services &amp; Rentals — independent design concept for Advertising &amp; More.</span><a href="#home">Back to top ↑</a></div>
      </footer>

      {activeExample !== null && (
        <div className="modal-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setActiveExample(null); }}>
          <div className="event-modal" role="dialog" aria-modal="true" aria-label={examples[activeExample].title}>
            <button className="modal-close" type="button" onClick={() => setActiveExample(null)} aria-label="Close event details"><X size={24} /></button>
            <div className="modal-image"><img src={examples[activeExample].image} alt={examples[activeExample].alt} /></div>
            <div className="modal-body"><span className="showcase-eyebrow">{examples[activeExample].eyebrow}</span><h2>{examples[activeExample].title}</h2><p>{examples[activeExample].description}</p><div className="tag-list">{examples[activeExample].tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p className="modal-note">Inspiration only — not a documented completed project or confirmed package.</p><CoffeeButton onClick={() => { chooseService(examples[activeExample].title); setActiveExample(null); }} >ASK ABOUT THIS IDEA</CoffeeButton></div>
            <div className="modal-arrows"><button type="button" aria-label="Previous inspiration" onClick={() => setActiveExample((activeExample + examples.length - 1) % examples.length)}><ChevronLeft size={22} /></button><button type="button" aria-label="Next inspiration" onClick={() => setActiveExample((activeExample + 1) % examples.length)}><ChevronRight size={22} /></button></div>
          </div>
        </div>
      )}
    </>
  );
}