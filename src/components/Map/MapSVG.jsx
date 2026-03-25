/* eslint-disable react/no-unknown-property */
export default function MapSVG() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <defs>
        {/* Subtle grain over the image */}
        <filter id="mapGrain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.62" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>

        {/* Edge burn vignette */}
        <radialGradient id="burnEdge" cx="50%" cy="50%" r="68%">
          <stop offset="30%" stopColor="transparent" stopOpacity="0" />
          <stop offset="100%" stopColor="#140800" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* ── AI-GENERATED MAP IMAGE ── */}
      {/* Place your downloaded image at /public/images/map-bg.jpg */}
      <rect width="1440" height="900" fill="#1a0f00" />
      <image
        href="/images/map-bg.jpg"
        x="0" y="0"
        width="1440" height="900"
        preserveAspectRatio="xMidYMin slice"
      />

      {/* Subtle grain texture on top of image */}
      <rect width="1440" height="900" filter="url(#mapGrain)" opacity="0.08" fill="rgba(160,120,60,0.3)" />

      {/* Burn vignette — deepens the parchment edges */}
      <rect width="1440" height="900" fill="url(#burnEdge)" />

      {/* ── TORN EDGE BORDERS ── */}
      {/* Top */}
      <path d="M 0,0 H 1440 V 55 Q 1415,44 1392,56 Q 1368,66 1345,48 Q 1322,34 1298,52 Q 1275,66 1252,48 Q 1228,34 1205,52 Q 1182,66 1158,48 Q 1135,34 1112,54 Q 1088,67 1065,50 Q 1042,36 1018,55 Q 995,68 972,50 Q 948,36 925,55 Q 902,68 878,50 Q 855,36 832,55 Q 808,68 785,50 Q 762,36 738,55 Q 715,68 692,50 Q 668,36 645,52 Q 622,65 598,48 Q 575,36 552,55 Q 528,68 505,50 Q 482,36 458,52 Q 435,64 412,48 Q 388,36 365,55 Q 342,68 318,50 Q 295,36 272,55 Q 248,68 225,50 Q 202,36 178,52 Q 155,64 132,48 Q 108,36 85,55 Q 62,68 38,50 Q 18,38 0,54 Z"
        fill="#0e0600" />

      {/* Bottom */}
      <path d="M 0,900 H 1440 V 845 Q 1415,856 1392,844 Q 1368,834 1345,852 Q 1322,866 1298,848 Q 1275,834 1252,852 Q 1228,866 1205,848 Q 1182,834 1158,852 Q 1135,866 1112,846 Q 1088,833 1065,850 Q 1042,864 1018,845 Q 995,832 972,850 Q 948,864 925,845 Q 902,832 878,850 Q 855,866 832,845 Q 808,832 785,850 Q 762,866 738,845 Q 715,832 692,850 Q 668,866 645,848 Q 622,835 598,852 Q 575,866 552,845 Q 528,832 505,850 Q 482,866 458,848 Q 435,836 412,852 Q 388,866 365,845 Q 342,832 318,850 Q 295,866 272,845 Q 248,832 225,850 Q 202,866 178,848 Q 155,836 132,852 Q 108,866 85,845 Q 62,832 38,850 Q 18,862 0,846 Z"
        fill="#0e0600" />

      {/* Left */}
      <path d="M 0,0 V 900 H 38 Q 26,876 40,852 Q 52,830 30,808 Q 12,786 38,762 Q 58,740 30,718 Q 8,696 38,672 Q 60,650 30,628 Q 6,606 38,582 Q 62,558 30,535 Q 6,512 38,488 Q 62,464 30,442 Q 6,418 38,395 Q 62,372 30,348 Q 6,324 38,302 Q 62,278 30,255 Q 6,232 38,208 Q 62,185 30,162 Q 6,138 38,115 Q 62,90 30,68 Q 10,50 28,30 Z"
        fill="#0e0600" />

      {/* Right */}
      <path d="M 1440,0 V 900 H 1402 Q 1414,876 1400,852 Q 1388,830 1410,808 Q 1428,786 1402,762 Q 1382,740 1410,718 Q 1432,696 1402,672 Q 1380,650 1410,628 Q 1434,606 1402,582 Q 1378,558 1410,535 Q 1434,512 1402,488 Q 1378,464 1410,442 Q 1434,418 1402,395 Q 1378,372 1410,348 Q 1434,324 1402,302 Q 1378,278 1410,255 Q 1434,232 1402,208 Q 1378,185 1410,162 Q 1434,138 1402,115 Q 1378,90 1410,68 Q 1430,50 1412,30 Z"
        fill="#0e0600" />
    </svg>
  );
}
