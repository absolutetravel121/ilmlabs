"use client";
import { FormEvent, ReactNode, useState } from "react";

type IconName =
  | "arrow"
  | "atom"
  | "book"
  | "braces"
  | "bulb"
  | "check"
  | "circuit"
  | "code"
  | "flask"
  | "layers"
  | "menu"
  | "message"
  | "rocket"
  | "spark"
  | "tools"
  | "x";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    atom: (
      <>
        <circle cx="12" cy="12" r="1.8" />
        <path d="M19.4 15c-2.2 3.8-7.3 5.6-10.8 3.6S4.1 11.7 6.4 7.8 13.7 2.3 17.2 4.3 21.7 11.2 19.4 15Z" />
        <path d="M4.6 15c-2.2-3.8-.9-8.9 2.6-10.9s8.5-.1 10.8 3.7.9 8.9-2.6 10.9S6.8 18.8 4.6 15Z" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5Z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5Z" />
      </>
    ),
    braces: (
      <>
        <path d="M8 3H6a2 2 0 0 0-2 2v4c0 1.1-.9 2-2 2 1.1 0 2 .9 2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M16 3h2a2 2 0 0 1 2 2v4c0 1.1.9 2 2 2-1.1 0-2 .9-2 2v6a2 2 0 0 1-2 2h-2" />
      </>
    ),
    bulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.7 14.5A7 7 0 1 1 15.3 14.5c-.8.6-1.3 1.5-1.3 2.5h-4c0-1-.5-1.9-1.3-2.5Z" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    circuit: (
      <>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 6h5v12h5" />
        <path d="M12 10h6V6" />
        <circle cx="19" cy="6" r="2" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    flask: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
        <path d="M7.5 16h9" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    message: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.3 9.3 0 0 1-3.8-.9L3 20l1.1-4.8A8.4 8.4 0 1 1 21 11.5Z" />
        <path d="M8.3 9.3c.8 2 2.4 3.6 4.4 4.4" />
      </>
    ),
    rocket: (
      <>
        <path d="M15 4.5c3-2 5.5-1.5 5.5-1.5s.5 2.5-1.5 5.5l-5.5 5.5-4-4Z" />
        <path d="m9.5 10-3.7.8L3 13.6l5.5 1.2" />
        <path d="m13.5 14 .7 4.2 2.8 2.8 1.2-5.5" />
        <circle cx="16.5" cy="7" r="1.4" />
        <path d="M8 17c-2 0-3 1-3 3 2 0 3-1 3-3Z" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7Z" />
        <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z" />
      </>
    ),
    tools: (
      <>
        <path d="m14.7 6.3 3-3a4 4 0 0 1-5 5l-7.4 7.4a2.1 2.1 0 1 0 3 3l7.4-7.4a4 4 0 0 1 5-5l-3 3Z" />
        <path d="m5 4 4 4" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const programs: {
  icon: IconName;
  tag: string;
  title: string;
  copy: string;
  tone: string;
}[] = [
  {
    icon: "flask",
    tag: "Classes 5–8",
    title: "Practical Science",
    copy: "A year-long, chapter-aligned journey from textbook ideas to working models.",
    tone: "mint",
  },
  {
    icon: "atom",
    tag: "Classes 9–10",
    title: "Advanced Science Lab",
    copy: "Deeper experiments, measurements and scientific thinking for curious minds.",
    tone: "blue",
  },
  {
    icon: "code",
    tag: "Coding",
    title: "Frontend Development",
    copy: "Design and build responsive websites with modern, industry-ready tools.",
    tone: "gold",
  },
  {
    icon: "braces",
    tag: "Coding",
    title: "Backend Development",
    copy: "Understand databases, APIs and the logic that powers real applications.",
    tone: "rose",
  },
  {
    icon: "layers",
    tag: "Career track",
    title: "Full Stack Development",
    copy: "Build complete digital products—from interface to database and deployment.",
    tone: "violet",
  },
  {
    icon: "tools",
    tag: "College & engineering",
    title: "Engineering Project Lab",
    copy: "Turn technical concepts into prototypes, portfolios and purposeful projects.",
    tone: "cyan",
  },
];

const faqs = [
  [
    "Is ILM Labs a tuition or coaching centre?",
    "No. ILM Labs complements school and college learning with practical demonstrations, experiments and projects. We focus on helping learners understand by doing.",
  ],
  [
    "Do students need prior experience?",
    "Not at all. Each program begins at the learner’s current level and builds confidence step by step through guided, hands-on activities.",
  ],
  [
    "Are materials included for science programs?",
    "Core lab materials are provided during offline sessions. For online learners, we share a simple material list and guide families toward safe, easy-to-find components.",
  ],
  [
    "Can my child attend a session before enrolling?",
    "Yes. The free workshop is designed for exactly that—students and parents can experience the ILM Labs teaching model before making a decision.",
  ],
  [
    "Do you offer both online and offline batches?",
    "Yes. Selected programs are available online and at our physical lab. Batch availability can be discussed during your workshop call.",
  ],
];

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span />
      <span>{children}</span>
    </div>
  );
}

// ILM Labs contact and Google Sheets integration settings.
const WHATSAPP_NUMBER = "919958544930"; // Country code + number, digits only.
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi ILM Labs, I would like to know more about your programs and free workshop.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Paste the deployed Google Apps Script Web App URL here (ends in /exec).
// The Google Sheets spreadsheet URL is NOT the Apps Script endpoint.
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw0xRyvlP6f3g1w620-KHtD-kfy2oFFydozS16DY4ZVHs69yZJUyL3OkLq82gza2CFX/exec";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams({
      parentName: String(formData.get("parentName") || ""),
      phone: String(formData.get("phone") || ""),
      studentName: String(formData.get("studentName") || ""),
      studentClass: String(formData.get("class") || ""),
      batch: String(formData.get("batch") || ""),
      mode: String(formData.get("mode") || "offline"),
    });

    setSubmitting(true);
    setSubmitError("");

    try {
      // Google Apps Script does not expose browser-readable CORS responses.
      // no-cors sends the form data, but the response cannot confirm the write.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("ILM Labs form submission failed:", error);
      setSubmitError(
        "We could not submit your request. Please try again or contact us on WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#f7f7f2] text-[#0b2530]">
      <header className="nav-shell">
        <nav className="site-nav container-wide" aria-label="Main navigation">
          <a
            href="#top"
            className="brand"
            onClick={closeMenu}
            aria-label="ILM Labs home"
          >
            <span className="brand-mark">
              <Icon name="spark" size={18} />
            </span>
            <span>
              <strong>ILM</strong> LABS<small>LEARN · BUILD · GROW</small>
            </span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#model" onClick={closeMenu}>
              Our Model
            </a>
            <a href="#programs" onClick={closeMenu}>
              Programs
            </a>
            <a href="#method" onClick={closeMenu}>
              How We Teach
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a
              href="#workshop"
              className="button button--nav"
              onClick={closeMenu}
            >
              Book Free Workshop <Icon name="arrow" size={16} />
            </a>
          </div>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "x" : "menu"} size={23} />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-pattern" />
          <div className="container-wide hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> Practical learning for Classes
                5–10 & beyond
              </div>
              <h1>
                Don’t Just Learn It.
                <br />
                <em>Experience It.</em>
              </h1>
              <p className="hero-lead">
                We turn textbook concepts into experiments, working models and
                real-world skills that stay with learners for life.
              </p>
              <p className="hero-line">
                Practical Skills. Real Projects. Better Future.
              </p>
              <div className="hero-actions">
                <a href="#workshop" className="button button--gold">
                  Book Free Workshop <Icon name="arrow" size={18} />
                </a>
                <a href="#programs" className="button button--ghost">
                  Explore Programs
                </a>
              </div>
              <div className="hero-trust">
                <div className="avatar-stack">
                  <span>A</span>
                  <span>S</span>
                  <span>R</span>
                  <span>+</span>
                </div>
                <p>
                  <strong>Built for curious minds</strong>
                  <br />
                  School · College · Coding learners
                </p>
              </div>
            </div>

            <div
              className="hero-visual"
              aria-label="From learning a concept to building a working circuit"
            >
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="floating-note note-one">
                <Icon name="bulb" size={18} />
                <span>
                  Concept
                  <br />
                  <strong>Electricity</strong>
                </span>
              </div>
              <div className="floating-note note-two">
                <Icon name="check" size={18} />
                <span>
                  Project
                  <br />
                  <strong>It works!</strong>
                </span>
              </div>
              <div className="lab-card">
                <div className="lab-card-top">
                  <span>LIVE LAB · 04</span>
                  <span className="live-dot">LIVE</span>
                </div>
                <div className="circuit-board">
                  <svg
                    viewBox="0 0 360 250"
                    role="img"
                    aria-label="Illustration of a simple electric circuit"
                  >
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M70 75h98c17 0 28 12 28 28v43c0 18 11 28 28 28h69"
                      className="wire"
                    />
                    <path
                      d="M70 174h54c16 0 27-11 27-27v-25c0-16 11-27 27-27h53"
                      className="wire wire-gold"
                    />
                    <rect
                      x="45"
                      y="55"
                      width="48"
                      height="140"
                      rx="12"
                      className="battery"
                    />
                    <path d="M59 78h20M63 88h12" className="battery-line" />
                    <circle
                      cx="282"
                      cy="105"
                      r="45"
                      className="bulb-glow"
                      filter="url(#glow)"
                    />
                    <path
                      d="M265 109c-10-7-13-18-8-28a28 28 0 0 1 51 8c2 10-3 18-11 24-4 3-6 7-6 12h-20c0-6-2-12-6-16Z"
                      className="bulb-shape"
                    />
                    <path d="M271 131h21M274 140h15" className="bulb-base" />
                    <circle cx="151" cy="174" r="7" className="node" />
                    <circle cx="196" cy="95" r="7" className="node" />
                    <path d="m205 157 21-20" className="switch" />
                    <circle cx="204" cy="158" r="4" className="node-small" />
                    <circle cx="230" cy="133" r="4" className="node-small" />
                  </svg>
                  <div className="circuit-caption">
                    <span>Closed circuit</span>
                    <strong>LED is glowing</strong>
                  </div>
                </div>
                <div className="lab-card-footer">
                  <span>
                    <i /> Battery
                  </span>
                  <span>
                    <i /> Switch
                  </span>
                  <span>
                    <i /> LED
                  </span>
                </div>
              </div>
              <div className="hero-seal">
                <Icon name="spark" size={18} />
                <span>
                  LEARN BY
                  <br />
                  <strong>DOING</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="hero-ribbon">
            <div>
              <span>CHAPTER</span>
              <b>→</b>
              <span>CONCEPT</span>
              <b>→</b>
              <span>DEMONSTRATION</span>
              <b>→</b>
              <span>EXPERIMENT</span>
              <b>→</b>
              <span>BUILD</span>
              <b>→</b>
              <span>REAL-LIFE APPLICATION</span>
            </div>
          </div>
        </section>

        <section className="section model-section" id="model">
          <div className="container">
            <div className="split-heading">
              <div>
                <SectionLabel>What is ILM Labs?</SectionLabel>
                <h2>
                  Your textbook is only
                  <br />
                  the <em>beginning.</em>
                </h2>
              </div>
              <p>
                ILM means knowledge. But knowledge becomes powerful when you can
                apply it. We bridge the gap between knowing a concept and using
                it to create something real.
              </p>
            </div>
            <div className="model-grid">
              {[
                [
                  "01",
                  "Chapter",
                  "Start with what students already learn at school.",
                  "book",
                ],
                [
                  "02",
                  "Concept",
                  "Break it down with stories, models and questions.",
                  "bulb",
                ],
                [
                  "03",
                  "Demonstrate",
                  "Watch the idea come alive in a guided lab demo.",
                  "spark",
                ],
                [
                  "04",
                  "Experiment",
                  "Test, observe, make mistakes and understand why.",
                  "flask",
                ],
                [
                  "05",
                  "Build",
                  "Create a working model with your own hands.",
                  "tools",
                ],
                [
                  "06",
                  "Apply",
                  "Connect learning to life beyond the classroom.",
                  "rocket",
                ],
              ].map(([number, title, copy, icon]) => (
                <article className="model-card" key={title}>
                  <span className="model-number">{number}</span>
                  <div className="model-icon">
                    <Icon name={icon as IconName} size={24} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section electricity-section">
          <div className="container electricity-grid">
            <div className="electricity-visual">
              <div className="visual-label">A real class example</div>
              <div className="book-card">
                <span>SCIENCE · CLASS 6</span>
                <Icon name="circuit" size={40} />
                <h3>
                  Electricity
                  <br />& Circuits
                </h3>
                <p>Chapter 12</p>
              </div>
              <div className="path-line">
                <span />
                <span />
                <span />
              </div>
              <div className="experiment-card">
                <span className="mini-label">THE LAB</span>
                <div className="mini-board">
                  <Icon name="bulb" size={52} />
                  <span className="ray r1" />
                  <span className="ray r2" />
                  <span className="ray r3" />
                </div>
                <p>Build a working circuit</p>
              </div>
            </div>
            <div className="electricity-copy">
              <SectionLabel>From page to possibility</SectionLabel>
              <h2>
                They read about electricity.
                <br />
                <em>Then they make it flow.</em>
              </h2>
              <p className="lead-copy">
                A Class 5–6 learner doesn’t stop at definitions. They see a live
                circuit, build one, test materials and turn the concept into a
                mini project.
              </p>
              <div className="lesson-list">
                {[
                  [
                    "Understand",
                    "Learn current, circuits and components with visual explanations.",
                  ],
                  [
                    "Experiment",
                    "Test conductors and insulators using safe, guided methods.",
                  ],
                  [
                    "Create",
                    "Build a mini torch, alarm or creative circuit project.",
                  ],
                  [
                    "Explain",
                    "Present how it works—because explaining proves understanding.",
                  ],
                ].map(([title, copy], index) => (
                  <div className="lesson-item" key={title}>
                    <span>{index + 1}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="center-heading">
              <SectionLabel>Why ILM Labs</SectionLabel>
              <h2>
                Learning that stays
                <br />
                <em>long after the lesson.</em>
              </h2>
            </div>
            <div className="why-grid">
              {[
                [
                  "bulb",
                  "Concept Understanding",
                  "Know the “why”, not just the right answer.",
                ],
                [
                  "flask",
                  "Hands-on Experiments",
                  "Learn through observation, testing and discovery.",
                ],
                [
                  "tools",
                  "Real Projects",
                  "Create working outcomes you can proudly show.",
                ],
                [
                  "rocket",
                  "Future Skills",
                  "Build confidence, creativity and problem-solving.",
                ],
              ].map(([icon, title, copy], i) => (
                <article className="why-card" key={title}>
                  <div className="why-top">
                    <span>0{i + 1}</span>
                    <Icon name={icon as IconName} size={28} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section programs-section" id="programs">
          <div className="container">
            <div className="split-heading programs-heading">
              <div>
                <SectionLabel>Programs</SectionLabel>
                <h2>
                  A lab for every
                  <br />
                  <em>kind of learner.</em>
                </h2>
              </div>
              <p>
                From a child’s first circuit to an engineer’s working
                prototype—each program is designed around outcomes, not just
                hours.
              </p>
            </div>
            <div className="program-grid">
              {programs.map((program, index) => (
                <article
                  className={`program-card program-card--${program.tone}`}
                  key={program.title}
                >
                  <div className="program-top">
                    <span className="program-icon">
                      <Icon name={program.icon} size={27} />
                    </span>
                    <span className="program-index">0{index + 1}</span>
                  </div>
                  <span className="program-tag">{program.tag}</span>
                  <h3>{program.title}</h3>
                  <p>{program.copy}</p>
                  <a href="#workshop">
                    View program <Icon name="arrow" size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section method-section" id="method">
          <div className="method-pattern" />
          <div className="container method-content">
            <div className="center-heading light-heading">
              <SectionLabel light>How we teach</SectionLabel>
              <h2>
                Four steps. One powerful
                <br />
                <em>learning habit.</em>
              </h2>
              <p>
                Every session is an active journey from curiosity to confidence.
              </p>
            </div>
            <div className="method-grid">
              {[
                [
                  "01",
                  "Learn",
                  "Understand the idea through clear, relatable explanations.",
                  "book",
                ],
                [
                  "02",
                  "Experiment",
                  "Try it, test it and discover what changes the outcome.",
                  "flask",
                ],
                [
                  "03",
                  "Build",
                  "Turn your understanding into something real and working.",
                  "tools",
                ],
                [
                  "04",
                  "Explain",
                  "Share how it works and make the learning truly yours.",
                  "message",
                ],
              ].map(([number, title, copy, icon]) => (
                <article className="method-card" key={title}>
                  <span className="method-number">{number}</span>
                  <div className="method-icon">
                    <Icon name={icon as IconName} size={26} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workshop-section" id="workshop">
          <div className="container workshop-grid">
            <div className="workshop-copy">
              <SectionLabel>Free discovery workshop</SectionLabel>
              <h2>
                Experience ILM Labs
                <br />
                <em>before you join.</em>
              </h2>
              <p>
                Let your child explore a real concept, try a guided activity and
                discover the joy of learning by doing.
              </p>
              <div className="workshop-points">
                {[
                  "A live, interactive mini lesson",
                  "Guidance on the right learning path",
                  "No pressure. Just a useful experience.",
                ].map((item) => (
                  <div key={item}>
                    <span>
                      <Icon name="check" size={15} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="contact-card">
                <span>
                  <Icon name="message" size={23} />
                </span>
                <div>
                  <small>Prefer WhatsApp?</small>
                  <strong>Chat with our learning advisor</strong>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with ILM Labs on WhatsApp"
                >
                  <Icon name="arrow" size={18} />
                </a>
              </div>
            </div>

            <div className="form-card">
              {submitted ? (
                <div className="success-state">
                  <span>
                    <Icon name="check" size={35} />
                  </span>
                  <h3>Thank you!</h3>
                  <p>
                    Your workshop request has been sent. Our learning advisor
                    will connect with you shortly.
                  </p>
                  <button
                    className="button button--dark"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-heading">
                    <span>FREE WORKSHOP</span>
                    <h3>Reserve your child’s spot</h3>
                    <p>
                      Share a few details. We’ll call to find a suitable batch.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <label>
                        Parent Name
                        <input
                          required
                          name="parentName"
                          type="text"
                          placeholder="Your full name"
                          minLength={2}
                          maxLength={60}
                          pattern="[A-Za-zÀ-ÿ\s.'-]+"
                          title="Please enter a valid name (2–60 characters)."
                          autoComplete="name"
                        />
                      </label>

                      <label>
                        WhatsApp Number
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          maxLength={10}
                          minLength={10}
                          pattern="[6-9][0-9]{9}"
                          title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9."
                          inputMode="numeric"
                          autoComplete="tel-national"
                        />
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        Student Name
                        <input
                          required
                          name="studentName"
                          type="text"
                          placeholder="Student’s name"
                          minLength={2}
                          maxLength={60}
                          pattern="[A-Za-zÀ-ÿ\s.'-]+"
                          title="Please enter a valid student name (2–60 characters)."
                          autoComplete="off"
                        />
                      </label>

                      <label>
                        Class
                        <select required name="class" defaultValue="">
                          <option value="" disabled>
                            Select class
                          </option>
                          <option>Class 5</option>
                          <option>Class 6</option>
                          <option>Class 7</option>
                          <option>Class 8</option>
                          <option>Class 9</option>
                          <option>Class 10</option>
                          <option>College / Engineering</option>
                          <option>Coding learner</option>
                        </select>
                      </label>
                    </div>

                    <label>
                      Preferred Batch
                      <select required name="batch" defaultValue="">
                        <option value="" disabled>
                          Select preferred time
                        </option>
                        <option>Weekday evening</option>
                        <option>Weekend morning</option>
                        <option>Weekend evening</option>
                      </select>
                    </label>

                    <fieldset>
                      <legend>Learning mode</legend>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            name="mode"
                            value="offline"
                            defaultChecked
                            required
                          />
                          <span>Offline Lab</span>
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="mode"
                            value="online"
                            required
                          />
                          <span>Online Live</span>
                        </label>
                      </div>
                    </fieldset>

                    {submitError && (
                      <p role="alert" className="form-error">
                        {submitError}
                      </p>
                    )}

                    <button
                      className="button button--dark form-submit"
                      type="submit"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Book My Free Workshop"}{" "}
                      {!submitting && <Icon name="arrow" size={18} />}
                    </button>

                    <small className="privacy-note">
                      By submitting, you agree to be contacted about this
                      workshop.
                    </small>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="section modes-section">
          <div className="container">
            <div className="mode-card">
              <div className="mode-copy">
                <SectionLabel light>Learn your way</SectionLabel>
                <h2>
                  One learning experience.
                  <br />
                  <em>Two ways to join.</em>
                </h2>
                <p>
                  Whether at our physical lab or live from home, every learner
                  gets thoughtful guidance and project-based instruction.
                </p>
              </div>
              <div className="mode-options">
                <article>
                  <span>
                    <Icon name="tools" size={27} />
                  </span>
                  <div>
                    <small>IMMERSIVE</small>
                    <h3>Offline Lab</h3>
                    <p>
                      Materials, tools, peers and face-to-face guidance in a
                      purpose-built space.
                    </p>
                  </div>
                </article>
                <article>
                  <span>
                    <Icon name="code" size={27} />
                  </span>
                  <div>
                    <small>FLEXIBLE</small>
                    <h3>Online Live</h3>
                    <p>
                      Interactive sessions, guided builds and mentor
                      feedback—wherever you are.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section founder-section" id="about">
          <div className="container founder-grid">
            <div className="founder-visual">
              <div className="portrait-shape">
                <div className="founder-monogram">ILM</div>
                <div className="portrait-lines" />
              </div>
              <div className="quote-badge">
                “Education should
                <br />
                create capability.”
              </div>
            </div>
            <div className="founder-copy">
              <SectionLabel>From the founder</SectionLabel>
              <h2>
                Built on a simple belief:
                <br />
                <em>understanding changes lives.</em>
              </h2>
              <blockquote>
                “Too many learners can write the definition but cannot show how
                it works. ILM Labs exists to change that—to make education
                active, useful and deeply memorable.”
              </blockquote>
              <p>
                Our goal is not to rush students through a syllabus. It is to
                nurture the confidence to ask questions, test ideas, solve
                problems and build a better future.
              </p>
              <div className="founder-sign">
                <strong>Founder, ILM Labs</strong>
                <span>Learn · Build · Grow</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div className="faq-heading">
              <SectionLabel>Frequently asked</SectionLabel>
              <h2>
                Good questions.
                <br />
                <em>Clear answers.</em>
              </h2>
              <p>
                Still curious? Send us a message and our team will be happy to
                help.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <Icon name="message" size={18} /> Ask on WhatsApp
              </a>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>
                    <span>{question}</span>
                    <i>+</i>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-pattern" />
          <div className="container final-content">
            <span className="final-kicker">
              <Icon name="spark" size={17} /> A better way to learn starts here
            </span>
            <h2>
              Let students experience
              <br />
              <em>what they learn.</em>
            </h2>
            <p>One free workshop could change how your child sees learning.</p>
            <div className="final-actions">
              <a href="#workshop" className="button button--gold">
                Book Free Workshop <Icon name="arrow" size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--ghost"
              >
                <Icon name="message" size={19} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a href="#top" className="brand brand--footer">
              <span className="brand-mark">
                <Icon name="spark" size={18} />
              </span>
              <span>
                <strong>ILM</strong> LABS<small>LEARN · BUILD · GROW</small>
              </span>
            </a>
            <p>
              Practical, project-based education for curious minds and future
              builders.
            </p>
          </div>
          <div className="footer-links">
            <strong>Explore</strong>
            <a href="#model">Our Model</a>
            <a href="#programs">Programs</a>
            <a href="#method">How We Teach</a>
          </div>
          <div className="footer-links">
            <strong>Programs</strong>
            <a href="#programs">School Science</a>
            <a href="#programs">Coding</a>
            <a href="#programs">Engineering Lab</a>
          </div>
          <div className="footer-contact">
            <strong>Ready to experience ILM?</strong>
            <a href="#workshop" className="button button--outline">
              Book a Free Workshop
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 ILM Labs. All rights reserved.</span>
          <span>Knowledge, made practical.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Icon name="message" size={24} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
