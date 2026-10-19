"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { serviceGroups, allPartyServices } from "@/data/party-services";
import { photoForService } from "@/data/service-images";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, AudioLines, BadgeCheck,
  Building2, CalendarDays, Camera, Check, CheckCircle2, ChevronDown, Globe2,
  Gamepad2, Search, Ticket, Target,
  ChevronLeft, ChevronRight, Clock3, Coffee, Copy, Gift, Heart, Mail,
  MapPin, Menu, MicVocal, Package, PartyPopper, Phone, Palette, Send,
  ShieldCheck, Sparkles, Star, Tent, UsersRound, UtensilsCrossed, X,
  type LucideIcon,
} from "lucide-react";

type Filter = "All services" | string;
type Enquiry = {
  name: string; phone: string; email: string; eventType: string;
  date: string; location: string; guests: string; budget: string; message: string;
  linkedin: string; emailCompanyProfile: boolean; marketingUpdates: boolean;
};

const categories: Filter[] = serviceGroups.map((group) => group.title);
const categoryShortNames = [
  "Giant games", "Carnival games", "Photo & video", "Performers",
  "Music & nightlife", "Food & tasting", "Foyer attractions",
  "Adrenaline & skill", "Pampering & novelty", "Big-ticket spectacles",
];
const categoryIcons = [
  Gamepad2, Ticket, Camera, MicVocal, AudioLines,
  UtensilsCrossed, Sparkles, Target, Heart, PartyPopper,
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
  linkedin: "", emailCompanyProfile: false, marketingUpdates: false,
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
  const [filter, setFilter] = useState<Filter>(serviceGroups[0].title);
  const [serviceQuery, setServiceQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeExample, setActiveExample] = useState<number | null>(null);
  const [enquiry, setEnquiry] = useState<Enquiry>(blankEnquiry);
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const enquiryRef = useRef<HTMLDivElement>(null);

  const normalizedQuery = serviceQuery.trim().toLocaleLowerCase();
  // Show one category at a time to avoid 100 long rows. Search spans all categories.
  const shownGroups = serviceGroups
    .filter((group) => Boolean(normalizedQuery) || group.title === filter)
    .map((group) => ({
      ...group,
      items: normalizedQuery
        ? group.items.filter((item) =>
            [item.name, item.description, group.title].some((value) =>
              value.toLocaleLowerCase().includes(normalizedQuery)
            )
          )
        : group.items,
    }))
    .filter((group) => group.items.length > 0);
  const visibleServiceCount = shownGroups.reduce((total, group) => total + group.items.length, 0);
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

  function updateField(field: keyof Enquiry, value: string | boolean) {
    setEnquiry((prev) => ({ ...prev, [field]: value }));
    setPrepared(false);
  }

  const messageText = [
    "PARTY SERVICES & RENTALS — EVENT ENQUIRY",
    "Name: " + enquiry.name,
    "Phone: " + enquiry.phone,
    "Work email: " + enquiry.email,
    "LinkedIn URL: " + (enquiry.linkedin || "Not supplied"),
    "Event / service: " + (enquiry.eventType || "To be discussed"),
    "Date: " + (enquiry.date || "Flexible"),
    "Location: " + (enquiry.location || "To be confirmed"),
    "Guest count: " + (enquiry.guests || "To be confirmed"),
    "Budget: " + (enquiry.budget || "To be discussed"),
    "Details: " + (enquiry.message || "No additional details"),
    "Requested company profile: " + (enquiry.emailCompanyProfile ? "Yes" : "No"),
    "Marketing updates requested: " + (enquiry.marketingUpdates ? "Yes" : "No"),
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
            <SectionHeading
              eyebrow="THE POSSIBILITIES"
              title="Party Services "
              accent="& Rentals."
              subtitle="An adult playground meets an unforgettable ballroom party. Explore every attraction from the client's 100-service brief — carefully organised, never crowded."
            />
            <div className="services-overview">
              <div className="services-overview-number"><strong>100</strong><span>experiences to explore<br />across <b>10 categories</b></span></div>
              <p>Games, live performers, immersive spaces, nightlife, tastings and extraordinary surprises — all in one happy place.</p>
            </div>
            <div className="services-toolbar">
              <label className="services-search" htmlFor="service-search">
                <Search size={19} aria-hidden="true" />
                <input
                  id="service-search"
                  type="search"
                  value={serviceQuery}
                  onChange={(event) => setServiceQuery(event.target.value)}
                  placeholder="Find an experience... e.g. silent disco, racing, photo booth"
                  autoComplete="off"
                />
                {serviceQuery && <button type="button" onClick={() => setServiceQuery("")} aria-label="Clear service search"><X size={17} /></button>}
              </label>
              <span className="services-result-count" aria-live="polite">
                {normalizedQuery ? (
                  <><strong>{visibleServiceCount}</strong> search matches across {shownGroups.length} {shownGroups.length === 1 ? "category" : "categories"} · {allPartyServices.length} total</>
                ) : (
                  <><strong>{allPartyServices.length} services</strong> in {serviceGroups.length} categories · {visibleServiceCount} in selected category</>
                )}
              </span>
            </div>
            <div className="category-browser-intro">
              <span>EXPLORE BY CATEGORY</span>
              <p>Choose a category to see its experiences. All 100 are accessible here without endless scrolling.</p>
            </div>
            <div className="service-category-grid" role="group" aria-label="Browse all ten party service categories">
              {categories.map((category, index) => {
                const CategoryIcon = categoryIcons[index];
                const selected = filter === category && !normalizedQuery;
                return (
                  <button
                    key={category}
                    type="button"
                    className={selected ? "category-tile selected" : "category-tile"}
                    onClick={() => {
                      setFilter(category);
                      setServiceQuery("");
                      requestAnimationFrame(() => {
                        document.getElementById("category-results")
                          ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      });
                    }}
                    aria-pressed={selected}
                    aria-controls="category-results"
                    title={category}
                  >
                    <span className="category-tile-top">
                      <span className="category-tile-index">{String(index + 1).padStart(2, "0")}</span>
                      <CategoryIcon size={23} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <strong>{categoryShortNames[index]}</strong>
                    <span className="category-tile-bottom">10 services <ArrowRight size={14} aria-hidden="true" /></span>
                  </button>
                );
              })}
            </div>
            <div id="category-results" className="category-results-heading" aria-live="polite">
              <div>
                <span>{normalizedQuery ? "SEARCH RESULTS" : "SELECTED CATEGORY"}</span>
                <strong>{normalizedQuery ? String(visibleServiceCount) + " matching experiences" : filter}</strong>
              </div>
              <span>{normalizedQuery ? String(shownGroups.length) + " matching categories" : String(visibleServiceCount) + " of 100 experiences · Select another category above"}</span>
            </div>
            {shownGroups.length ? (
              <div className="service-groups">
                {shownGroups.map((group) => {
                  const CategoryIcon = categoryIcons[group.number - 1];
                  return (
                    <article className="service-group-panel" id={group.id} key={group.id}>
                      <div className="service-group-header">
                        <div className="service-group-copy">
                          <div className="service-group-kicker">
                            <span>CATEGORY {String(group.number).padStart(2,"0")}</span>
                            <span>{group.items.length} EXPERIENCES</span>
                          </div>
                          <span className="service-group-icon"><CategoryIcon size={28} strokeWidth={1.8} aria-hidden="true" /></span>
                          <h3>{group.title}</h3>
                          <p>{group.intro}</p>
                          <span className="service-group-tagline">{group.tagline} <Sparkles size={15} /></span>
                        </div>
                        <div className={group.image ? "service-group-art with-photo" : "service-group-art with-icon"}>
                          {group.image
                            ? <img src={group.image} alt={"Illustrative party inspiration for " + group.title} loading="lazy" />
                            : <CategoryIcon size={83} strokeWidth={1.15} aria-hidden="true" />}
                          <span>{group.image ? "EVENT INSPIRATION" : "MAKE IT MEMORABLE"}</span>
                        </div>
                      </div>
                      <div className="service-offerings-grid">
                        {group.items.map((item) => (
                          <button
                            type="button"
                            className="service-offering"
                            key={item.number}
                            onClick={() => chooseService(item.name)}
                            aria-label={"Enquire about " + item.name}
                          >
                            <span className="offering-number">{String(item.number).padStart(2, "0")}</span>
                            <img
                              className="offering-photo"
                              src={photoForService(item.number)}
                              loading="lazy"
                              decoding="async"
                              alt={"Stock photo illustrating " + item.name}
                              onError={(event) => {
                                const image = event.currentTarget;
                                if (!image.dataset.fallback) {
                                  image.dataset.fallback = "1";
                                  image.src = group.image || "";
                                } else {
                                  image.style.opacity = "0";
                                }
                              }}
                            />
                            <span className="offering-copy">
                              <strong>{item.name}</strong>
                              <small>{item.description}</small>
                            </span>
                            <ArrowUpRight className="offering-arrow" size={17} aria-hidden="true" />
                          </button>
                        ))}
                      </div>
                      {!normalizedQuery && (
                        <div className="service-next-category">
                          <span>Category {String(group.number).padStart(2, "0")} of 10 · All 100 services are available above</span>
                          <button type="button" onClick={() => {
                            setFilter(serviceGroups[group.number % serviceGroups.length].title);
                            requestAnimationFrame(() => document.getElementById("category-results")?.scrollIntoView({ behavior: "smooth", block: "start" }));
                          }}>
                            Next: {categoryShortNames[group.number % serviceGroups.length]} <ArrowRight size={15} />
                          </button>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="services-empty">
                <Search size={28} />
                <h3>No attractions match that search.</h3>
                <p>Try another keyword or browse all categories.</p>
                <button type="button" className="outline-btn" onClick={() => { setFilter(serviceGroups[0].title); setServiceQuery(""); }}>Browse all 10 categories <ArrowRight size={17} /></button>
              </div>
            )}
            <div className="services-note"><Sparkles size={19} /><span>Looking for a one-of-a-kind party? <a href="#contact">Let's dream it up.</a> All options are from the supplied ideas brief; availability and pricing must be confirmed. Special attractions may require qualified operators, safety arrangements and venue approval.</span></div>
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
        <section id="contact" ref={enquiryRef} className="contact-section contact-reference section-pad">
          <div className="wrap">
            <div className="reference-form-heading">
              <span className="section-eyebrow">— THE DRINKS ARE ON US —</span>
              <h2>The drinks are on <em>us.</em></h2>
              <p>Have a party in mind? Tell us what you need, and let's start with a coffee.</p>
            </div>
            <div className="reference-form-card">
              {!prepared ? (
                <form onSubmit={prepareEnquiry} className="reference-form">
                  <div className="reference-field">
                    <label htmlFor="contact-name">Your Full Name</label>
                    <input id="contact-name" name="name" required autoComplete="name"
                      value={enquiry.name} onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your full name" maxLength={100} />
                  </div>
                  <div className="reference-field">
                    <label htmlFor="contact-phone">Your Phone Number</label>
                    <input id="contact-phone" name="phone" required type="tel" autoComplete="tel"
                      value={enquiry.phone} onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="🇲🇾  +60 10 800 8989" maxLength={30} />
                  </div>
                  <div className="reference-field reference-field-with-note">
                    <label htmlFor="contact-linkedin">Your LinkedIn URL
                      <span className="reference-field-note">Optional — add your profile if relevant</span>
                    </label>
                    <input id="contact-linkedin" name="linkedin" type="url" inputMode="url"
                      value={enquiry.linkedin} onChange={(e) => updateField("linkedin", e.target.value)}
                      placeholder="https://www.linkedin.com/in/yourname" maxLength={400} />
                  </div>
                  <div className="reference-field reference-spaced-field">
                    <label htmlFor="contact-service">Services You Require</label>
                    <select id="contact-service" name="service" required
                      value={enquiry.eventType} onChange={(e) => updateField("eventType", e.target.value)}>
                      <option value="">Select the services you require</option>
                      {allPartyServices.map((service) => <option key={service.number} value={service.name}>{service.name}</option>)}
                      <option value="Multiple services / custom package">Multiple services / custom package</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </div>
                  <div className="reference-field reference-field-with-note">
                    <label htmlFor="contact-email">Your Work Email Address
                      <span className="reference-field-note">Please use your company email address if you have one.</span>
                    </label>
                    <input id="contact-email" name="email" required type="email" autoComplete="email"
                      value={enquiry.email} onChange={(e) => updateField("email", e.target.value)}
                      placeholder="yourname@company.com" maxLength={120} />
                  </div>
                  <div className="reference-field reference-spaced-field">
                    <label htmlFor="contact-budget">Your Estimated Investment</label>
                    <select id="contact-budget" name="budget" value={enquiry.budget}
                      onChange={(e) => updateField("budget", e.target.value)}>
                      <option value="">Select your estimated investment</option>
                      <option value="Under RM 2,000">Under RM 2,000</option>
                      <option value="RM 2,000 – RM 5,000">RM 2,000 – RM 5,000</option>
                      <option value="RM 5,000 – RM 10,000">RM 5,000 – RM 10,000</option>
                      <option value="RM 10,000+">RM 10,000+</option>
                      <option value="Need guidance">Need guidance</option>
                    </select>
                  </div>
                  <div className="reference-field reference-message-field">
                    <label htmlFor="contact-message">Your Message To Us</label>
                    <textarea id="contact-message" name="message" rows={3}
                      value={enquiry.message} onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Message us & say hello. We would love to hear from you."
                      maxLength={2000} />
                  </div>
                  <div className="reference-optins">
                    <label><input type="checkbox" checked={enquiry.emailCompanyProfile}
                      onChange={(e) => updateField("emailCompanyProfile", e.target.checked)} />
                      <span>Email me Advertising &amp; More&apos;s Company Profile.</span></label>
                    <label><input type="checkbox" checked={enquiry.marketingUpdates}
                      onChange={(e) => updateField("marketingUpdates", e.target.checked)} />
                      <span>Send me monthly advertising, marketing, website/mobile app design &amp; development tips.</span></label>
                  </div>
                  <button className="submit-button reference-coffee-button" type="submit">
                    <BrandCup /><span>CLICK FOR COFFEE</span><ArrowRight size={19} />
                  </button>
                  <p className="form-disclaimer"><ShieldCheck size={13} />
                    Demo form — creates a copyable enquiry. It does not send your details or sign you up for emails.
                  </p>
                </form>
              ) : (
                <div className="prepared-panel reference-prepared" role="status">
                  <div className="prepared-icon"><CheckCircle2 size={38} /></div>
                  <h3>Your enquiry is ready, {enquiry.name.split(" ")[0]}!</h3>
                  <p>Copy the text below and paste it into Advertising &amp; More&apos;s official enquiry form.</p>
                  <label htmlFor="enquiry-preview">Prepared enquiry</label>
                  <textarea id="enquiry-preview" readOnly value={messageText} rows={11} />
                  <div className="prepared-actions">
                    <button type="button" className="submit-button" onClick={copyEnquiry}>
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                      {copied ? "COPIED!" : "COPY ENQUIRY"}<ArrowRight size={17} />
                    </button>
                    <a href="https://advertisingandmore.com/#contactform" target="_blank"
                      rel="noopener noreferrer" className="outline-btn">Open official website <ArrowUpRight size={17} /></a>
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