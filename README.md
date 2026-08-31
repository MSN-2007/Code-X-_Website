<div align="center">

  <img src="./public/assets/codex_dark_theme.png" alt="Code{X} Logo" width="380" />

  # ⚡ Code{X} — The Premier Programming Club
  ### **School of Technology • [Woxsen University](https://woxsen.edu.in/)**

  <p align="center">
    <strong>Code. Create. Innovate.</strong><br>
    The premier student-led programming club and innovation lab at <a href="https://woxsen.edu.in/">Woxsen University</a>.
  </p>

  <p align="center">
    <a href="https://codex-wou.vercel.app/"><img src="https://img.shields.io/badge/🌐_Live_Portal-codex--wou.vercel.app-d20000?style=for-the-badge" alt="Live Portal"></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19"></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7"></a>
    <a href="https://woxsen.edu.in/"><img src="https://img.shields.io/badge/Woxsen-University-d20000?style=for-the-badge" alt="Woxsen University"></a>
  </p>

  <p align="center">
    <a href="https://codex-wou.vercel.app/"><strong>Explore Portal »</strong></a> •
    <a href="https://woxsen.edu.in/">Woxsen.edu.in</a> •
    <a href="https://www.linkedin.com/company/codex-wou">LinkedIn</a> •
    <a href="https://www.instagram.com/codex_wou">Instagram</a> •
    <a href="https://github.com/CODEX-WoU/">GitHub Org</a> •
    <a href="https://x.com/CodeX_WOU">X (Twitter)</a>
  </p>

</div>

---

## ⚡ About Code{X}

**Code{X}** is the official programming club and student innovation incubator at **[Woxsen University](https://woxsen.edu.in/) (School of Technology)**. We build production-grade software, host high-stakes competitive hackathons, lead cybersecurity CTF operations, and run developer bootcamps.

The **Code{X} Portal** is an interactive web experience featuring real-time Web Audio API soundscapes, an interactive terminal drawer, a dynamic project explorer, and fluid micro-interactions.

---

## 🚀 Key Highlights & Architecture

<table>
  <tr>
    <td width="50%">
      <h3>💻 Interactive Hacker Terminal (<code>>_</code>)</h3>
      <ul>
        <li><b>Hotkey Activated:</b> Press <code>`</code> or <code>~</code> or click the floating HUD.</li>
        <li><b>Command Suite:</b> <code>help</code>, <code>projects</code>, <code>events</code>, <code>team</code>, <code>achievements</code>, <code>contact</code>, <code>matrix</code>, <code>join</code>.</li>
        <li><b>Digital Matrix Rain:</b> Fullscreen canvas stream toggle.</li>
        <li><b>CLI History & Autocomplete:</b> Up/Down arrow command recall.</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🔊 Procedural Audio FX Engine</h3>
      <ul>
        <li><b>Native Web Audio API:</b> Synthesizes real-time soundscapes without external audio assets.</li>
        <li><b>Dynamic Page Signatures:</b> Unique resonant frequencies for every section navigation.</li>
        <li><b>Cyber HUD Dock:</b> Floating bottom-left audio controller and terminal launcher.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔬 Innovation Lab & Projects</h3>
      <ul>
        <li>🧠 <b>JARVIS AI Core:</b> Voice & desktop agent with LLM orchestration.</li>
        <li>⚡ <b>AlgoArena:</b> Real-time 1v1 lightning code battles & sandbox runner.</li>
        <li>🛡️ <b>CyberSentinel:</b> Automated CTF recon & vulnerability scanner.</li>
        <li>👁️ <b>NeuroVision Edge:</b> Edge CV inference running at 60fps.</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🏆 Hackathons & Flagship Events</h3>
      <ul>
        <li>🏎️ <b>BUG-X 2026:</b> Flagship debugging grand prix with COTD (200+ coders).</li>
        <li>🥇 <b>SIH Hackathons:</b> Smart India Hackathon internal rounds (500+ participants).</li>
        <li>🚀 <b>Core Bootcamps:</b> Hands-on Web, CyberSec, and Algo workshops.</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🏛️ Leadership & Community

Code{X} is guided by the mentorship of **[Woxsen University's](https://woxsen.edu.in/) School of Technology** faculty and driven by collegiate student leaders, core domain architects, and executive teams across AI/ML, Cybersecurity, Web Engineering, Competitive Programming, and Creative Design.

* 🎓 **Faculty Mentorship**: School of Technology, [Woxsen University](https://woxsen.edu.in/)
* 👥 **Explore the Active Team**: View the current leadership roster, core domain architects, and executive board on the **[Live Team Portal](https://codex-wou.vercel.app/#team)**.

---

## 🛠️ Tech Stack & Dependencies

```text
├── UI Framework:      React 19 (react, react-dom)
├── Bundler & Tooling: Vite 7 (rolldown-vite, Lightning CSS)
├── Motion & Physics:  Framer Motion 12
├── Web Audio API:     Pure procedural oscillator synthesizer (audioFx.js)
├── 3D & Shaders:      Three.js / OGL (ogl) Canvas Engines
└── Typography:        Space Grotesk, JetBrains Mono, Space Mono, Bruno Ace
```

---

## 📂 Project Structure

```text
codex-website/
├── public/                      # Static assets, manifests, and portraits
│   ├── assets/                  # Brand logos, posters, and team portraits
│   ├── .well-known/security.txt # RFC 9116 ethical disclosure specification
│   ├── favicon.png              # Site favicon
│   ├── llms.txt                 # AI agent summary & crawler guidance
│   └── robots.txt               # Search engine crawler policies
├── src/
│   ├── components/              # Modular UI components
│   │   ├── Achievements.jsx     # Hall of fame & CTF milestone cards
│   │   ├── ContactUs.jsx        # Direct transmission channels & contact form
│   │   ├── CyberHUDDock.jsx     # Floating audio & terminal controller HUD
│   │   ├── DecryptedText.jsx    # Kinetic text scrambler and decoder
│   │   ├── ErrorBoundary.jsx    # Crash isolation boundary with 1-click reboot
│   │   ├── EventModal.jsx       # Event deep-dive modal
│   │   ├── FAQ.jsx              # Domain induction tracks & interactive FAQ
│   │   ├── Footer.jsx           # Legal links, social coordinates & copyright
│   │   ├── Hero.jsx             # Parallax hero section with decrypted tagline
│   │   ├── LaserFlow.tsx        # High-performance laser flow canvas shader
│   │   ├── Navbar.jsx           # Glassmorphism header with section links
│   │   ├── NotFoundPage.jsx     # Futuristic 404 route error recovery page
│   │   ├── PageTransition.jsx   # Futuristic page transition overlay
│   │   ├── ParticleBackground.jsx # Ambient particle starfield
│   │   ├── PrivacyModal.jsx     # Data governance & privacy policy modal
│   │   ├── ProjectModal.jsx     # Innovation lab deep dive modal
│   │   ├── Projects.jsx         # Project showcase cards & domain filters
│   │   ├── ScrollToTop.jsx      # Smooth scroll-to-top floating trigger
│   │   ├── Team.jsx             # Leadership & executive grid
│   │   ├── TeamCard.jsx         # 3D interactive team card
│   │   ├── TerminalDrawer.jsx   # Interactive CLI drawer with Matrix rain mode
│   │   └── TermsModal.jsx       # Collegiate code of conduct & terms modal
│   ├── utils/
│   │   └── audioFx.js           # Procedural Web Audio API sound generator
│   ├── App.jsx                  # Main application orchestrator & state manager
│   ├── index.css                # Global cyber design system & CSS tokens
│   └── main.jsx                 # React DOM mount point
├── index.html                   # HTML entry point with JSON-LD SEO schemas
├── package.json                 # Dependency definitions & scripts
└── vite.config.js               # Vite build configuration
```

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/MSN-2007/Code-X-_Website.git
cd Code-X-_Website/codex-website
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build & Preview
```bash
npm run build
npm run preview
```

---

## 📬 Contact & Socials

* 📧 **Email**: [codex@woxsen.edu.in](mailto:codex@woxsen.edu.in)
* 🌐 **University Website**: [woxsen.edu.in](https://woxsen.edu.in/)
* 📸 **Instagram**: [@codex_wou](https://www.instagram.com/codex_wou)
* 💼 **LinkedIn**: [Code{X} Woxsen](https://www.linkedin.com/company/codex-wou)
* 💻 **GitHub**: [@CODEX-WoU](https://github.com/CODEX-WoU/)
* 𝕏 **Twitter / X**: [@CodeX_WOU](https://x.com/CodeX_WOU)
* 📍 **Location**: School of Technology, Woxsen University, Hyderabad, India

---

<div align="center">

© 2026 **Code{X}** — The Programming Club, [Woxsen University](https://woxsen.edu.in/). All rights reserved.  
*Built with ❤️ & caffeine by the Code{X} Engineering Squad.*

</div>
