// Pure Web Audio API Synthesizer for Zero-Latency Cybernetic Sound FX
// Each page/section has its own unique sci-fi acoustic signature!

class CyberAudioController {
    constructor() {
        this.ctx = null;
        this.enabled = false; // Default off until user toggles or enables
    }

    init() {
        if (!this.ctx && typeof window !== 'undefined') {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        if (this.enabled) {
            this.init();
            this.playLaserChirp();
        }
        return this.enabled;
    }

    isEnabled() {
        return this.enabled;
    }

    playClick() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.05);
        } catch (e) {}
    }

    playLaserChirp() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(1400, now);
            osc.frequency.exponentialRampToValueAtTime(150, now + 0.18);

            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.18);
        } catch (e) {}
    }

    playTerminalKey() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(1200 + Math.random() * 200, now);

            gain.gain.setValueAtTime(0.03, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.03);
        } catch (e) {}
    }

    playSuccess() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            [440, 660, 880].forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + i * 0.06);

                gain.gain.setValueAtTime(0.06, now + i * 0.06);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.15);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now + i * 0.06);
                osc.stop(now + i * 0.06 + 0.15);
            });
        } catch (e) {}
    }

    // ==========================================
    // UNIQUE SOUND SIGNATURES FOR EVERY PAGE
    // ==========================================

    // 1. HOME: Quantum Core Re-boot Sub-Bass Surge
    playHomeSound() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(120, now);
            osc.frequency.exponentialRampToValueAtTime(560, now + 0.25);

            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.35);
        } catch (e) {}
    }

    // 2. ABOUT: Holographic Data Uplink Chime
    playAboutSound() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            [350, 520, 780].forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + i * 0.05);

                gain.gain.setValueAtTime(0.08, now + i * 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.22);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now + i * 0.05);
                osc.stop(now + i * 0.05 + 0.22);
            });
        } catch (e) {}
    }

    // 3. PROJECTS: Cyber Core Reactor / Overdrive Pulse
    playProjectsSound() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(650, now);
            osc.frequency.exponentialRampToValueAtTime(220, now + 0.2);

            gain.gain.setValueAtTime(0.09, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.24);
        } catch (e) {}
    }

    // 4. EVENTS: Laser Shutter & Fast Frequency Warp
    playEventsSound() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(1200, now);
            osc.frequency.exponentialRampToValueAtTime(280, now + 0.18);

            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.2);
        } catch (e) {}
    }

    // 5. ACHIEVEMENTS: Triumphant Radiant Fanfare (Major Chord Arpeggio)
    playAchievementsSound() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            // C5, E5, G5, C6 triumphant chord sequence
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + i * 0.06);

                gain.gain.setValueAtTime(0.08, now + i * 0.06);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.28);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now + i * 0.06);
                osc.stop(now + i * 0.06 + 0.28);
            });
        } catch (e) {}
    }

    // 6. TEAM: Neural Biometric Handshake Ping
    playTeamSound() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            [440, 554.37].forEach((freq) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now);
                osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.15);

                gain.gain.setValueAtTime(0.07, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + 0.2);
            });
        } catch (e) {}
    }

    // 7. FAQ: Tactical HUD Sonar Query Blip
    playFaqSound() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            [880, 1320].forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + i * 0.08);

                gain.gain.setValueAtTime(0.08, now + i * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.12);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now + i * 0.08);
                osc.stop(now + i * 0.08 + 0.12);
            });
        } catch (e) {}
    }

    // 8. CONTACT: Quantum Sub-Space Carrier Wave
    playContactSound() {
        if (!this.enabled) return;
        this.init();
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, now);
            osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(440, now + 0.25);

            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.3);
        } catch (e) {}
    }

    // Main Router: Plays specific acoustic signature for given section ID
    playSectionSound(sectionId) {
        if (!this.enabled) return;
        switch (sectionId) {
            case 'home':
                this.playHomeSound();
                break;
            case 'about':
                this.playAboutSound();
                break;
            case 'projects':
                this.playProjectsSound();
                break;
            case 'events':
                this.playEventsSound();
                break;
            case 'achievements':
                this.playAchievementsSound();
                break;
            case 'team':
                this.playTeamSound();
                break;
            case 'faq':
                this.playFaqSound();
                break;
            case 'contact':
                this.playContactSound();
                break;
            default:
                this.playLaserChirp();
                break;
        }
    }
}

export const audioFx = new CyberAudioController();
