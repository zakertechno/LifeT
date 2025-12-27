// Generate retro 8-bit "Coin Collect" sound
// Generate Cinematic "Deep Ocean" Ambient Sound
// Generate Cinematic "Deep Ocean" Ambient Sound
function generateEpicSound() {
    // Prevent double playing (Idempotency)
    if (window._splashSoundPlayed) return;
    window._splashSoundPlayed = true;

    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const now = ctx.currentTime;
        const dest = ctx.destination;

        // 1. Create Convolution Reverb (Atmosphere)
        const convolver = ctx.createConvolver();
        const rate = ctx.sampleRate;
        const length = rate * 3.0; // 3 seconds reverb tail
        const impulse = ctx.createBuffer(2, length, rate);
        const left = impulse.getChannelData(0);
        const right = impulse.getChannelData(1);
        for (let i = 0; i < length; i++) {
            const decay = Math.pow(1 - i / length, 3);
            left[i] = (Math.random() * 2 - 1) * decay;
            right[i] = (Math.random() * 2 - 1) * decay;
        }
        convolver.buffer = impulse;
        convolver.connect(dest);

        // 2. Master Output Gain
        const masterGain = ctx.createGain();
        masterGain.gain.value = 0.6; // Moderate volume
        masterGain.connect(dest);
        masterGain.connect(convolver);

        // 3. Sub-bass Sine Layers (The "Deep" part)
        // Two oscillators slightly detuned for richness
        const osc1 = ctx.createOscillator();
        osc1.frequency.setValueAtTime(65, now); // Deep C (C2 approx)
        const osc2 = ctx.createOscillator();
        osc2.frequency.setValueAtTime(66, now); // Detuned

        [osc1, osc2].forEach(osc => {
            const g = ctx.createGain();
            g.gain.setValueAtTime(0, now);
            g.gain.linearRampToValueAtTime(0.4, now + 2.0); // Slow swell
            g.gain.linearRampToValueAtTime(0, now + 5.0);  // Fade out

            osc.connect(g);
            g.connect(masterGain);
            osc.start(now);
            osc.stop(now + 6.0);
        });

        // 4. Ocean Noise (Filtered White Noise)
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, now); // Start muffled underwater
        filter.frequency.linearRampToValueAtTime(400, now + 2.5); // Open slightly

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0, now);
        noiseGain.gain.linearRampToValueAtTime(0.15, now + 1.5); // Fade in
        noiseGain.gain.linearRampToValueAtTime(0, now + 5.0);    // Fade out

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(masterGain);

        noise.start(now);
        noise.stop(now + 6.0);

    } catch (err) {
        console.log('Web Audio API error:', err);
    }
}

function showSplashScreen() {
    // Skip splash on mobile devices
    if (window.innerWidth <= 768) {
        document.body.classList.remove('splash-active');
        // Initialize mobile features
        if (typeof PullToRefresh !== 'undefined') {
            setTimeout(() => PullToRefresh.init(), 500);
        }
        return;
    }

    // Hide all content until splash finishes
    document.body.classList.add('splash-active');

    // Create a full-screen overlay (highest z-index)
    const overlay = document.createElement('div');
    overlay.id = 'splash-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2147483647; /* Maximum possible z-index */
        background: #000;
        display: block;
        visibility: visible;
    `;

    // Create splash container with background image approach
    const splash = document.createElement('div');
    splash.id = 'splash-screen';
    splash.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #000;
        background-image: url('assets/splash-screen.jpg');
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        backface-visibility: hidden;
        -webkit-font-smoothing: antialiased;
        opacity: 0;
        /* ANIMATION: Combine Fade In + Ken Burns (Zoom) */
        animation: splashFadeIn 0.8s ease-out 0.5s forwards, kenBurns 6s ease-out forwards;
    `;

    // Terminal Text Container
    const terminalText = document.createElement('div');
    terminalText.style.cssText = `
        position: absolute;
        bottom: 15%;
        left: 0;
        width: 100%;
        text-align: center;
        font-family: 'Courier New', monospace;
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        letter-spacing: 2px;
        z-index: 10;
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        opacity: 0; 
        animation: textFadeIn 0.5s ease-out 1.2s forwards;
    `;
    terminalText.innerHTML = '> <span id="cursor">_</span>'; // Start empty (cursor only)

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes splashFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes kenBurns {
            from { transform: scale(1.0); }
            to { transform: scale(1.05); } /* Subtle zoom */
        }
        @keyframes textFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes blinkCursor {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        @keyframes fadeInBlack {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        #cursor {
            animation: blinkCursor 0.8s infinite;
        }
        .blink {
            animation: blinkCursor 1s infinite;
            color: #0f0; /* Matrix green or similar for the prompt */
            text-shadow: 0 0 5px #0f0;
        }
        /* Ensure overlay stays on top */
        #splash-overlay {
            display: block !important;
            visibility: visible !important;
        }
    `;
    document.head.appendChild(style);

    // Build overlay structure
    overlay.appendChild(splash);
    overlay.appendChild(terminalText);

    // Inject immediately into body at the very start
    // This is crucial for the race condition - we prioritize this element
    const injectOverlay = () => {
        if (document.body) {
            // Prepend to ensure it's the first element in DOM order (helper for z-index)
            document.body.insertBefore(overlay, document.body.firstChild);
        } else {
            // Wait for body if script runs in head (fallback)
            window.addEventListener('load', () => document.body.insertBefore(overlay, document.body.firstChild));
        }
    };
    injectOverlay();

    // Typing Effect Logic with Credits
    const messages = [
        " A GAME DESIGNED & DEVELOPED BY SERGIO GARCIA", // Show First!
        " INITIALIZING SYSTEM...", // Now second
        " LOADING ASSETS...",
        " SECURING CONNECTION...",
        " WELCOME CEO."
    ];
    let msgIndex = 0;
    const typeNextMessage = () => {
        if (msgIndex >= messages.length) return;

        // Add special styling for the credit line to make it impactful
        let content = messages[msgIndex];
        if (content.includes("SERGIO GARCIA")) {
            terminalText.style.color = "#FFD700"; // Gold color for the name
            terminalText.style.textShadow = "0 0 15px rgba(255, 215, 0, 0.7)";
            terminalText.style.fontSize = "16px"; // Slightly larger
            // Ensure it stays on screen a bit longer by delaying next
        } else {
            // Reset styles for other lines
            terminalText.style.color = "rgba(255, 255, 255, 0.8)";
            terminalText.style.textShadow = "0 0 10px rgba(0, 255, 0, 0.5)";
            terminalText.style.fontSize = "14px";
        }

        terminalText.innerHTML = `> ${content}<span id="cursor">_</span>`;
        msgIndex++;

        // Calculate delay based on message importance
        let nextDelay = 1500;
        if (content.includes("SERGIO GARCIA")) nextDelay = 4000; // Show credit for MUCH longer (4s)

        if (msgIndex < messages.length) {
            setTimeout(typeNextMessage, nextDelay);
        } else {
            // Sequence finished. Add "CLICK TO START" and wait for user interaction
            setTimeout(() => {
                terminalText.innerHTML += '<br><br><span class="blink">> CLICK TO START_</span>';

                // Add click listener to exit
                const onStartClick = () => {
                    document.removeEventListener('click', onStartClick);
                    finishSplashScreen(overlay);
                };

                // Small delay to prevent accidental clicks from previous interactions
                setTimeout(() => {
                    document.addEventListener('click', onStartClick);
                    // Also allow Enter key
                    document.addEventListener('keydown', function onEnter(e) {
                        if (e.key === 'Enter') {
                            document.removeEventListener('keydown', onEnter);
                            onStartClick();
                        }
                    });
                }, 500);

            }, 1000);
        }
    };
    // Start typing next messages quickly (almost immediately after fade in)
    setTimeout(typeNextMessage, 500);

    // Play retro sound logic (remains independent to try playing early)
    setTimeout(() => {
        const playSound = () => {
            try {
                generateEpicSound();
            } catch (err) {
                console.log('Sound play failed:', err);
            }
        };
        playSound();
        // We don't strictly need the fallback listener here since the user MUST click to start now,
        // but we keep it to try playing sound during the typing phase if possible.
        document.addEventListener('click', function playOnClick() {
            playSound();
            document.removeEventListener('click', playOnClick);
        }, { once: true });
    }, 1200);

    // REMOVED AUTO TIMEOUT 
    // The exit is now handled by finishSplashScreen called on click
}

function finishSplashScreen(overlay) {
    // Create final black overlay for smooth exit
    const finalBlack = document.createElement('div');
    finalBlack.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 20;
        opacity: 0;
        animation: fadeInBlack 0.8s ease-out forwards;
    `;
    overlay.appendChild(finalBlack);

    // Remove entire splash overlay and show content
    setTimeout(() => {
        overlay.remove();
        document.body.classList.remove('splash-active');
        // Initialize mobile features (for desktop users who resize later)
        if (typeof PullToRefresh !== 'undefined') {
            PullToRefresh.init();
        }
    }, 1000);
}

// Ensure it runs properly
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    showSplashScreen();
} else {
    document.addEventListener('DOMContentLoaded', showSplashScreen);
}
