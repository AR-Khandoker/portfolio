import svgPaths from "./svg-fxse3hutbp";
import img10Dark1 from "figma:asset/5b4230f73318bdf0c631a8f213c0c96ea3426616.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[calc(50%+0.5px)] px-[20px] py-0 top-[43px] translate-x-[-50%] w-[610px]">
      <div className="h-[26px] relative shrink-0 w-[32px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 26">
          <path d={svgPaths.p2763a600} fill="var(--fill-0, #1E1E1E)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] w-[132px]">
        <span>{`Branding / `}</span>
        <span className="text-[#737373]">2025</span>
      </p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="overflow-clip relative rounded-[36px] size-full">
      <div className="absolute bg-[#f4f5f7] h-[716px] left-0 rounded-[36px] top-0 w-[429px]" />
      <div className="absolute h-[1226px] left-[156px] top-[122px] w-[1201px]">
        <div className="absolute inset-[-8.16%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1401 1426">
            <g filter="url(#filter0_f_33_192)" id="Ellipse 1">
              <ellipse cx="700.5" cy="713" fill="url(#paint0_linear_33_192)" rx="600.5" ry="613" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1426" id="filter0_f_33_192" width="1401" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_33_192" stdDeviation="50" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_33_192" x1="700.5" x2="700.5" y1="100" y2="1326">
                <stop stopColor="#FA3154" />
                <stop offset="1" stopColor="#FADA74" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[971px] left-[calc(50%+0.5px)] top-[249px] translate-x-[-50%] w-[902px]" data-name="10 (dark, 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.49%] left-[-30.86%] max-w-none top-[-10.86%] w-[167.19%]" src={img10Dark1} />
        </div>
      </div>
      <Frame />
    </div>
  );
}