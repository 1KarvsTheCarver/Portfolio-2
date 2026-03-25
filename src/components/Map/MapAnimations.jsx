import { useRef, useEffect } from 'react';
import {
  startWaveAnimations,
  startShipAnimation,
  startLighthouseAnimation,
  startWindAnimations,
} from '../../animations/mapAmbientAnimations';

// SVG viewBox matches MapSVG: 0 0 1440 900
// Lighthouse hotspot is at ~82% x, ~65% y  → (1181, 585)
// Ship visible in screenshot upper-right   → (~1260, 290)

const LH_X = 1181;
const LH_Y = 555;

export default function MapAnimations() {
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);
  const wave3Ref = useRef(null);
  const shipRef  = useRef(null);
  const beamRef  = useRef(null);
  const glowRef  = useRef(null);
  const wind1Ref = useRef(null);
  const wind2Ref = useRef(null);
  const wind3Ref = useRef(null);

  useEffect(() => {
    startWaveAnimations([wave1Ref.current, wave2Ref.current, wave3Ref.current]);
    startShipAnimation(shipRef.current);
    startLighthouseAnimation(beamRef.current, glowRef.current);
    startWindAnimations([wind1Ref.current, wind2Ref.current, wind3Ref.current]);
  }, []);

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMin slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}
      aria-hidden="true"
    >
      {/* ── WAVES ── 2x-wide paths so GSAP can loop by translating -1440 */}

      {/* Deep swell — slow, low opacity */}
      <g ref={wave1Ref}>
        <path
          d="M0 830 C180 818 360 842 540 830 C720 818 900 842 1080 830 C1260 818 1440 842 1620 830 C1800 818 1980 842 2160 830 C2340 818 2520 842 2700 830 C2880 818 3060 842 3240 830 L3240 900 L0 900Z"
          fill="rgba(60,120,180,0.10)"
        />
      </g>

      {/* Mid wave — medium speed */}
      <g ref={wave2Ref}>
        <path
          d="M0 850 C120 841 240 859 360 850 C480 841 600 859 720 850 C840 841 960 859 1080 850 C1200 841 1320 859 1440 850 C1560 841 1680 859 1800 850 C1920 841 2040 859 2160 850 C2280 841 2400 859 2520 850 C2640 841 2760 859 2880 850 L2880 900 L0 900Z"
          fill="rgba(80,160,200,0.10)"
        />
      </g>

      {/* Surface ripple — faster, lightest */}
      <g ref={wave3Ref}>
        <path
          d="M0 868 C90 863 180 873 270 868 C360 863 450 873 540 868 C630 863 720 873 810 868 C900 863 990 873 1080 868 C1170 863 1260 873 1350 868 C1440 863 1530 873 1620 868 C1710 863 1800 873 1890 868 C1980 863 2070 873 2160 868 C2250 863 2340 873 2430 868 C2520 863 2610 873 2700 868 C2790 863 2880 873 2880 868 L2880 900 L0 900Z"
          fill="rgba(120,200,230,0.07)"
        />
      </g>

      {/* ── SHIP (upper-right ocean area) ── */}
      <g ref={shipRef} transform="translate(1255,272)">
        {/* Hull */}
        <path d="M-28 18 Q0 26 28 18 L22 8 L-22 8 Z" fill="rgba(80,45,15,0.82)" />
        {/* Waterline */}
        <path d="M-30 20 Q0 28 30 20" stroke="rgba(100,180,220,0.5)" strokeWidth="1.5" fill="none" />
        {/* Main mast */}
        <line x1="0" y1="8" x2="0" y2="-28" stroke="rgba(70,40,10,0.8)" strokeWidth="2" />
        {/* Fore mast */}
        <line x1="-12" y1="6" x2="-12" y2="-18" stroke="rgba(70,40,10,0.8)" strokeWidth="1.5" />
        {/* Main sail */}
        <path d="M0 -26 L14 -8 L0 6 Z" fill="rgba(230,210,160,0.75)" />
        <path d="M0 -26 L-14 -8 L0 6 Z" fill="rgba(210,190,140,0.65)" />
        {/* Fore sail */}
        <path d="M-12 -16 L-2 -4 L-12 4 Z" fill="rgba(220,200,155,0.65)" />
        {/* Flag */}
        <path d="M0 -28 L8 -24 L0 -20 Z" fill="rgba(160,20,20,0.85)" />
      </g>

      {/* ── LIGHTHOUSE ── */}
      {/* Rotating beam cone */}
      <g transform={`translate(${LH_X} ${LH_Y})`}>
        <g ref={beamRef}>
          <path
            d="M0 0 L80 -30 L100 0 L80 30 Z"
            fill="url(#beamGrad)"
            opacity="0.35"
          />
        </g>
      </g>

      {/* Pulsing glow circle */}
      <circle
        ref={glowRef}
        cx={LH_X}
        cy={LH_Y}
        r="28"
        fill="rgba(255,240,120,0.45)"
        opacity="0.45"
      />

      {/* ── WIND STREAKS (scattered across map) ── */}
      <g ref={wind1Ref} transform="translate(320, 220)">
        <line x1="0" y1="0" x2="55" y2="-8"  stroke="rgba(220,200,160,0.22)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="6" y1="8" x2="48" y2="2"   stroke="rgba(220,200,160,0.14)" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      <g ref={wind2Ref} transform="translate(700, 160)">
        <line x1="0" y1="0" x2="64" y2="-6"  stroke="rgba(220,200,160,0.18)" strokeWidth="1.0" strokeLinecap="round" />
        <line x1="4" y1="7" x2="52" y2="1"   stroke="rgba(220,200,160,0.11)" strokeWidth="0.7" strokeLinecap="round" />
      </g>
      <g ref={wind3Ref} transform="translate(1050, 310)">
        <line x1="0" y1="0" x2="50" y2="-5"  stroke="rgba(220,200,160,0.16)" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="5" y1="6" x2="44" y2="1"   stroke="rgba(220,200,160,0.10)" strokeWidth="0.6" strokeLinecap="round" />
      </g>

      {/* ── DEFS ── */}
      <defs>
        <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(255,250,180,0.9)" />
          <stop offset="100%" stopColor="rgba(255,250,180,0)"   />
        </linearGradient>
      </defs>
    </svg>
  );
}
