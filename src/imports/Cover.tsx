import svgPaths from "./svg-ujfm75wj4o";
import imgTp1 from "figma:asset/181f2e07eb249b0cbccd30f7546a70fdd85ddc70.png";

function Container() {
  return <div className="absolute blur-3xl filter h-[554px] left-[calc(50%-623.5px)] opacity-50 rounded-[3.35544e+07px] top-[825px] translate-x-[-50%] w-[646px]" data-name="Container" style={{ backgroundImage: "linear-gradient(139.384deg, rgba(212, 255, 94, 0.3) 0%, rgba(163, 230, 53, 0.3) 100%)" }} />;
}

function Container1() {
  return <div className="absolute blur-3xl filter h-[627px] left-[1438px] opacity-60 rounded-[3.35544e+07px] top-[-25px] w-[707px]" data-name="Container" style={{ backgroundImage: "linear-gradient(138.432deg, rgba(233, 212, 255, 0.4) 0%, rgba(190, 219, 255, 0.4) 100%)" }} />;
}

function Finex() {
  return (
    <div className="absolute h-[448.266px] left-[291px] top-[52.42px] w-[1352.138px]" data-name="Finex">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1353 449">
        <g id="Finex">
          <path d={svgPaths.p18af4600} fill="url(#paint0_linear_32_58)" id="Vector" />
          <path d={svgPaths.p15cff800} fill="url(#paint1_linear_32_58)" id="Vector_2" />
          <path d={svgPaths.p34cdf400} fill="url(#paint2_linear_32_58)" id="Vector_3" />
          <path d={svgPaths.p12122800} fill="url(#paint3_linear_32_58)" id="Vector_4" />
          <path d={svgPaths.p25a3b580} fill="url(#paint4_linear_32_58)" id="Vector_5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_58" x1="1206.17" x2="1189.45" y1="212.998" y2="438.976">
            <stop offset="0.199049" stopColor="#D7D6D6" />
            <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_32_58" x1="885.521" x2="868.089" y1="209.386" y2="447.114">
            <stop offset="0.199049" stopColor="#D7D6D6" />
            <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_32_58" x1="551.83" x2="533.151" y1="207.106" y2="438.71">
            <stop offset="0.199049" stopColor="#D7D6D6" />
            <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_32_58" x1="311.309" x2="189.092" y1="135.26" y2="378.961">
            <stop offset="0.199049" stopColor="#D7D6D6" />
            <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_32_58" x1="130.46" x2="93.4331" y1="122.795" y2="435.882">
            <stop offset="0.199049" stopColor="#D7D6D6" />
            <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Cover() {
  return (
    <div className="bg-[#f5f5f0] relative size-full" data-name="Cover">
      <Container />
      <Container1 />
      <Finex />
      <div className="absolute bottom-[-50px] h-[875px] left-1/2 translate-x-[-50%] w-[901px]" data-name="tp 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.61%] left-[-26.08%] max-w-none top-[-13.61%] w-[147.12%]" src={imgTp1} />
        </div>
      </div>
    </div>
  );
}