import svgPaths from "./svg-922xanf5dl";
import imgImage0008NoBg1 from "figma:asset/de483ad88ae9c8867aef57d9c81a64cf7c28aea3.png";
import imgLandingPage1 from "figma:asset/d8b2ca4e96f91c6526cef6ebe8c3581f93303ecb.png";

function Frame() {
  return (
    <div className="h-[132px] relative shrink-0 w-[544px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 544 132">
        <g id="Frame 1190">
          <path d={svgPaths.p17537a00} fill="var(--fill-0, #551F06)" id="Vector" />
          <path d={svgPaths.pab9e280} fill="var(--fill-0, #551F06)" id="Vector_2" />
          <path d={svgPaths.p1fc2db80} fill="var(--fill-0, #551F06)" id="Vector_3" />
          <path d={svgPaths.p2478a600} fill="var(--fill-0, #551F06)" id="Vector_4" />
          <path d={svgPaths.p21a08e80} fill="var(--fill-0, #551F06)" id="Vector_5" />
          <path d={svgPaths.p2f1b4a00} fill="var(--fill-0, #DA5010)" id="Vector_6" />
          <path d={svgPaths.p9abaa00} fill="var(--fill-0, #551F06)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[205px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center leading-[1.4] not-italic px-[252px] py-0 relative size-full text-[#291c43] text-center">
          <p className="font-['Satoshi:Medium',sans-serif] relative shrink-0 text-[32px] w-[413px]">HRM Landing Page Design</p>
          <p className="absolute font-['Satoshi:Bold',sans-serif] left-[calc(50%+0.5px)] text-[64px] top-0 translate-x-[-50%] w-[986px]">{`Conversion Focused `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[66px] items-center left-[calc(50%+0.5px)] top-[109px] translate-x-[-50%] w-[917px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function ThankYou() {
  return (
    <div className="relative size-full" data-name="Thank you">
      <div className="absolute h-[1080px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1920px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 1920 1080\\\' preserveAspectRatio=\\\'none\\\'><g transform=\\\'matrix(-157.05 84.85 -84.85 -157.05 1993 -84)\\\'><foreignObject x=\\\'-99.464\\\' y=\\\'-99.464\\\' width=\\\'198.93\\\' height=\\\'198.93\\\'><div xmlns=\\\'http://www.w3.org/1999/xhtml\\\' style=\\\'background-image: conic-gradient(from 90deg, rgba(251, 204, 182, 1) -0.67226%, rgba(254, 237, 230, 1) 4.7572%, rgba(254, 238, 231, 1) 17.558%, rgba(254, 238, 231, 1) 90.926%, rgba(251, 204, 182, 1) 99.328%, rgba(254, 237, 230, 1) 104.76%); opacity:1; height: 100%; width: 100%;\\\'></div></foreignObject></g></svg>')" }} />
      <div className="absolute h-[1692px] left-[-128px] top-[35px] w-[2256px]" data-name="Image0008 no bg 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage0008NoBg1} />
      </div>
      <div className="absolute h-[6822px] left-[875px] shadow-[-33px_-10px_25px_-5px_rgba(0,0,0,0.1)] top-[-6914px] w-[1021px]" data-name="Landing page 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLandingPage1} />
      </div>
      <div className="absolute h-[2596px] left-[1437px] top-[-2650px] w-[389px]" data-name="Landing page 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLandingPage1} />
      </div>
      <Frame2 />
    </div>
  );
}