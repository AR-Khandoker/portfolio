import svgPaths from "./svg-0n1xze3ljz";
import imgNobg2 from "figma:asset/71d458ab48c2364307be66068100c5530bf7baa0.png";

function FlowTrack() {
  return (
    <div className="absolute h-[159px] left-[36px] top-[95px] w-[931.59px]" data-name="FlowTrack.">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 932 159">
        <g id="FlowTrack." opacity="0.6">
          <path d={svgPaths.p2a3a36e0} fill="url(#paint0_linear_30_23)" id="Vector" />
          <path d={svgPaths.p75f4840} fill="url(#paint1_linear_30_23)" id="Vector_2" />
          <path d={svgPaths.p22710000} fill="url(#paint2_linear_30_23)" id="Vector_3" />
          <path d={svgPaths.p95a6800} fill="url(#paint3_linear_30_23)" id="Vector_4" />
          <path d={svgPaths.p29199d00} fill="url(#paint4_linear_30_23)" id="Vector_5" />
          <path d={svgPaths.pdcd6a00} fill="url(#paint5_linear_30_23)" id="Vector_6" />
          <path d={svgPaths.p2028f00} fill="url(#paint6_linear_30_23)" id="Vector_7" />
          <path d={svgPaths.p2501a180} fill="url(#paint7_linear_30_23)" id="Vector_8" />
          <path d={svgPaths.p37589300} fill="url(#paint8_linear_30_23)" id="Vector_9" />
          <path d={svgPaths.p21b99700} fill="url(#paint9_linear_30_23)" id="Vector_10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_23" x1="918.514" x2="918.514" y1="159" y2="132.847">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_30_23" x1="848.821" x2="848.821" y1="156.291" y2="0">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_30_23" x1="744.075" x2="744.075" y1="159" y2="49.1797">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_30_23" x1="633.763" x2="633.763" y1="159" y2="49.1797">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_30_23" x1="549.43" x2="549.43" y1="156.291" y2="49.1797">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_30_23" x1="456.291" x2="456.291" y1="156.291" y2="10.4194">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_30_23" x1="323.281" x2="323.281" y1="156.291" y2="52.0967">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_30_23" x1="187.695" x2="187.695" y1="159" y2="49.1797">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_30_23" x1="109.899" x2="109.899" y1="156.291" y2="0">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_30_23" x1="43.0842" x2="43.0842" y1="156.291" y2="10.4196">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="overflow-clip relative rounded-[66px] size-full">
      <div className="absolute h-[1195px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1170px]" style={{ backgroundImage: "linear-gradient(181.883deg, rgb(231, 219, 205) 18.577%, rgb(255, 251, 244) 100.06%)" }} />
      <FlowTrack />
      <div className="absolute h-[1026px] left-[calc(50%+0.5px)] top-[107px] translate-x-[-50%] w-[1520px]" data-name="nobg 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNobg2} />
      </div>
    </div>
  );
}