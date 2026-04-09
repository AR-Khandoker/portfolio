import svgPaths from "./svg-0vmm024g69";
import imgFrame34 from "figma:asset/822279b7e86ceec6c1d51a3db16ee9114e086286.png";
import imgContainer from "figma:asset/0503f691a5dcaa8cc9b1e230b64c276befdaff8f.png";

function Container() {
  return <div className="absolute bg-[rgba(194,122,255,0.2)] blur-[100px] filter left-[-237px] rounded-[3.35544e+07px] size-[732px] top-[616px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(81,162,255,0.15)] blur-[100px] filter left-[calc(66.67%+4px)] rounded-[3.35544e+07px] size-[815px] top-[-293px]" data-name="Container" />;
}

function Home() {
  return <div className="absolute blur-3xl filter left-[240px] rounded-[3.35544e+07px] size-[160px] top-px" data-name="Home" style={{ backgroundImage: "linear-gradient(135deg, rgba(194, 122, 255, 0.3) 0%, rgba(166, 132, 255, 0.1) 100%)" }} />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_30_1111)" id="Icon">
          <path d={svgPaths.p1d19c880} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_30_1111">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative rounded-[36px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(173, 70, 255, 0.2) 0%, rgba(142, 81, 255, 0.1) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[63.438px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1f2937] text-[16px] text-nowrap top-[-1px]">AI Insight</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Heading2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[44.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[14px] text-[rgba(31,41,55,0.8)] top-[-1px] w-[275px]">{`You're 25% more consistent on weekdays. Try scheduling focus habits in the morning!`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[84.781px] relative shrink-0 w-[335px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container3 />
        <Paragraph />
      </div>
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute content-stretch flex h-[84.781px] items-start justify-between left-[21px] top-[21px] w-[359px]" data-name="Home">
      <Container4 />
    </div>
  );
}

function BentoCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[127px] relative rounded-[32px] shrink-0 w-[397px]" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Home />
        <Home1 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Insights() {
  return <div className="absolute bg-[rgba(255,137,4,0.2)] blur-2xl filter left-[97px] rounded-[3.35544e+07px] size-[96px] top-px" data-name="Insights" />;
}

function Text() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[37.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(31,41,55,0.7)] text-nowrap top-px">Streak</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12187900} id="Vector" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[19.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Icon1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f2937] text-[16px] text-nowrap top-[-1px]">15</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#00c950] text-[12px] text-nowrap top-0">+12%</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Text1 />
    </div>
  );
}

function Insights1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73.5px] items-start justify-center left-[20.5px] top-[calc(50%+0.25px)] translate-y-[-50%] w-[152.5px]" data-name="Insights">
      <Container5 />
      <Heading1 />
      <Container6 />
    </div>
  );
}

function BentoCard1() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] h-[127px] justify-self-stretch relative rounded-[32px] shrink-0" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights />
        <Insights1 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Insights2() {
  return <div className="absolute bg-[rgba(194,122,255,0.2)] blur-2xl filter left-[97px] rounded-[3.35544e+07px] size-[96px] top-px" data-name="Insights" />;
}

function Text2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[46px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(31,41,55,0.7)] text-nowrap top-px">Success</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_30_918)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_30_918">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[19.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Icon3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f2937] text-[16px] text-nowrap top-[-1px]">85%</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[4.89%_3.28%_23.86%_3.58%]" data-name="Group">
      <div className="absolute inset-[7.05%_3.28%_23.86%_3.58%]" data-name="recharts-area-:r18:">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 16">
          <path d={svgPaths.p36c89a00} fill="url(#paint0_linear_30_1053)" fillOpacity="0.6" id="recharts-area-:r18:" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_1053" x1="0" x2="0" y1="5.96406" y2="15.2">
              <stop offset="0.05" stopColor="#A78BFA" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#A78BFA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[4.89%_3.28%_38.98%_3.58%]" data-name="Vector">
        <div className="absolute inset-[-6.07%_-0.05%_-6.07%_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 14">
            <path d={svgPaths.p28f2e00} id="Vector" stroke="var(--stroke-0, #A78BFA)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[4.89%_3.28%_23.86%_3.58%]" data-name="Group">
      <Group />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Icon">
      <Group4 />
      <div className="absolute aspect-[5/5] left-[39.67%] right-[57.38%] top-[-1.5px]">
        <div className="absolute inset-[-22.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <g id="Ellipse 1">
              <circle cx="3.25" cy="3.25" fill="var(--fill-0, #A78BFA)" r="2.25" />
              <circle cx="3.25" cy="3.25" r="2.75" stroke="var(--stroke-0, #A78BFA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[5/5] left-[59.34%] right-[37.7%] top-[11.5px]">
        <div className="absolute inset-[-22.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <g id="Ellipse 1">
              <circle cx="3.25" cy="3.25" fill="var(--fill-0, #A78BFA)" r="2.25" />
              <circle cx="3.25" cy="3.25" r="2.75" stroke="var(--stroke-0, #A78BFA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Insights3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[75.5px] items-start justify-center left-[20.5px] top-[calc(50%+0.25px)] translate-y-[-50%] w-[152.5px]" data-name="Insights">
      <Container7 />
      <Heading3 />
      <Container8 />
    </div>
  );
}

function BentoCard2() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.4)] h-[127px] justify-self-stretch relative rounded-[32px] shrink-0" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights2 />
        <Insights3 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Insights4() {
  return <div className="absolute bg-[rgba(81,162,255,0.2)] blur-2xl filter left-[97px] rounded-[3.35544e+07px] size-[96px] top-px" data-name="Insights" />;
}

function Text3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(31,41,55,0.7)] text-nowrap top-px">Completed</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_30_1096)" id="Icon">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_30_1096">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[19.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Icon5 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f2937] text-[16px] text-nowrap top-[-1px]">142</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[rgba(81,162,255,0.2)] h-[9px] ml-[4.5px] mt-[0.25px] rounded-[36px] w-[145px]" />
      <div className="[grid-area:1_/_1] bg-[#60a5fa] h-[9px] ml-0 mt-0 rounded-[36px] w-[104px]" />
    </div>
  );
}

function Insights5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73.5px] items-start justify-center left-[20.5px] top-[calc(50%+0.75px)] translate-y-[-50%] w-[152.5px]" data-name="Insights">
      <Container9 />
      <Heading4 />
      <Group3 />
    </div>
  );
}

function BentoCard3() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(255,255,255,0.4)] h-[127px] justify-self-stretch relative rounded-[32px] shrink-0" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights4 />
        <Insights5 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Insights6() {
  return <div className="absolute bg-[rgba(5,223,114,0.2)] blur-2xl filter left-[97px] rounded-[3.35544e+07px] size-[96px] top-px" data-name="Insights" />;
}

function Text4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[35.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(31,41,55,0.7)] text-nowrap top-px">Active</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[19.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Icon6 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f2937] text-[16px] text-nowrap top-[-1px]">28</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[118px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 18">
        <g id="Group 10">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1148" r="1.5" />
          <circle cx="1.5" cy="6.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1154" r="1.5" />
          <circle cx="1.5" cy="11.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1160" r="1.5" />
          <circle cx="1.5" cy="16.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1166" r="1.5" />
          <circle cx="6.5" cy="1.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1149" r="1.5" />
          <circle cx="6.5" cy="6.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1155" r="1.5" />
          <circle cx="6.5" cy="11.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1161" r="1.5" />
          <circle cx="6.5" cy="16.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1167" r="1.5" />
          <circle cx="11.5" cy="1.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1150" r="1.5" />
          <circle cx="11.5" cy="6.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1156" r="1.5" />
          <circle cx="11.5" cy="11.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1162" r="1.5" />
          <circle cx="11.5" cy="16.5" fill="var(--fill-0, #05DF72)" id="Ellipse 1168" r="1.5" />
          <circle cx="16.5" cy="1.5" fill="var(--fill-0, #00C950)" id="Ellipse 1151" r="1.5" />
          <circle cx="16.5" cy="6.5" fill="var(--fill-0, #00C950)" id="Ellipse 1157" r="1.5" />
          <circle cx="16.5" cy="11.5" fill="var(--fill-0, #00C950)" id="Ellipse 1163" r="1.5" />
          <circle cx="16.5" cy="16.5" fill="var(--fill-0, #00C950)" id="Ellipse 1169" r="1.5" />
          <circle cx="21.5" cy="1.5" fill="var(--fill-0, #00C950)" id="Ellipse 1152" r="1.5" />
          <circle cx="21.5" cy="6.5" fill="var(--fill-0, #00C950)" id="Ellipse 1158" r="1.5" />
          <circle cx="21.5" cy="11.5" fill="var(--fill-0, #00C950)" id="Ellipse 1164" r="1.5" />
          <circle cx="21.5" cy="16.5" fill="var(--fill-0, #00C950)" id="Ellipse 1170" r="1.5" />
          <circle cx="26.5" cy="1.5" fill="var(--fill-0, #00C950)" id="Ellipse 1153" r="1.5" />
          <circle cx="26.5" cy="6.5" fill="var(--fill-0, #00C950)" id="Ellipse 1159" r="1.5" />
          <circle cx="26.5" cy="11.5" fill="var(--fill-0, #00C950)" id="Ellipse 1165" r="1.5" />
          <circle cx="26.5" cy="16.5" fill="var(--fill-0, #00C950)" id="Ellipse 1171" r="1.5" />
          <circle cx="31.5" cy="1.5" fill="var(--fill-0, #00C950)" id="Ellipse 1172" r="1.5" />
          <circle cx="31.5" cy="6.5" fill="var(--fill-0, #00C950)" id="Ellipse 1173" r="1.5" />
          <circle cx="31.5" cy="11.5" fill="var(--fill-0, #00C950)" id="Ellipse 1174" r="1.5" />
          <circle cx="31.5" cy="16.5" fill="var(--fill-0, #00C950)" id="Ellipse 1175" r="1.5" />
          <circle cx="36.5" cy="1.5" fill="var(--fill-0, #00C950)" id="Ellipse 1176" r="1.5" />
          <circle cx="41.5" cy="1.5" fill="var(--fill-0, #00C950)" id="Ellipse 1180" r="1.5" />
          <circle cx="36.5" cy="6.5" fill="var(--fill-0, #00C950)" id="Ellipse 1177" r="1.5" />
          <circle cx="41.5" cy="6.5" fill="var(--fill-0, #00C950)" id="Ellipse 1181" r="1.5" />
          <circle cx="36.5" cy="11.5" fill="var(--fill-0, #00C950)" id="Ellipse 1178" r="1.5" />
          <circle cx="41.5" cy="11.5" fill="var(--fill-0, #00C950)" id="Ellipse 1182" r="1.5" />
          <circle cx="36.5" cy="16.5" fill="var(--fill-0, #00C950)" id="Ellipse 1179" r="1.5" />
          <circle cx="41.5" cy="16.5" fill="var(--fill-0, #00C950)" id="Ellipse 1183" r="1.5" />
          <circle cx="46.5" cy="1.5" fill="var(--fill-0, #00C950)" id="Ellipse 1184" r="1.5" />
          <circle cx="51.5" cy="1.5" fill="var(--fill-0, #00C950)" id="Ellipse 1188" r="1.5" />
          <circle cx="56.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1192" r="1.5" />
          <circle cx="61.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1196" r="1.5" />
          <circle cx="66.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1200" r="1.5" />
          <circle cx="71.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1204" r="1.5" />
          <circle cx="76.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1208" r="1.5" />
          <circle cx="81.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1212" r="1.5" />
          <circle cx="86.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1216" r="1.5" />
          <circle cx="91.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1220" r="1.5" />
          <circle cx="96.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1224" r="1.5" />
          <circle cx="101.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1228" r="1.5" />
          <circle cx="106.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1232" r="1.5" />
          <circle cx="111.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1236" r="1.5" />
          <circle cx="116.5" cy="1.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1240" r="1.5" />
          <circle cx="46.5" cy="6.5" fill="var(--fill-0, #00C950)" id="Ellipse 1185" r="1.5" />
          <circle cx="51.5" cy="6.5" fill="var(--fill-0, #00C950)" id="Ellipse 1189" r="1.5" />
          <circle cx="56.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1193" r="1.5" />
          <circle cx="61.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1197" r="1.5" />
          <circle cx="66.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1201" r="1.5" />
          <circle cx="71.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1205" r="1.5" />
          <circle cx="76.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1209" r="1.5" />
          <circle cx="81.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1213" r="1.5" />
          <circle cx="86.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1217" r="1.5" />
          <circle cx="91.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1221" r="1.5" />
          <circle cx="96.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1225" r="1.5" />
          <circle cx="101.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1229" r="1.5" />
          <circle cx="106.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1233" r="1.5" />
          <circle cx="111.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1237" r="1.5" />
          <circle cx="116.5" cy="6.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1241" r="1.5" />
          <circle cx="46.5" cy="11.5" fill="var(--fill-0, #00C950)" id="Ellipse 1186" r="1.5" />
          <circle cx="51.5" cy="11.5" fill="var(--fill-0, #00C950)" id="Ellipse 1190" r="1.5" />
          <circle cx="56.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1194" r="1.5" />
          <circle cx="61.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1198" r="1.5" />
          <circle cx="66.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1202" r="1.5" />
          <circle cx="71.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1206" r="1.5" />
          <circle cx="76.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1210" r="1.5" />
          <circle cx="81.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1214" r="1.5" />
          <circle cx="86.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1218" r="1.5" />
          <circle cx="91.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1222" r="1.5" />
          <circle cx="96.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1226" r="1.5" />
          <circle cx="101.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1230" r="1.5" />
          <circle cx="106.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1234" r="1.5" />
          <circle cx="111.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1238" r="1.5" />
          <circle cx="116.5" cy="11.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1242" r="1.5" />
          <circle cx="46.5" cy="16.5" fill="var(--fill-0, #00C950)" id="Ellipse 1187" r="1.5" />
          <circle cx="51.5" cy="16.5" fill="var(--fill-0, #00C950)" id="Ellipse 1191" r="1.5" />
          <circle cx="56.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1195" r="1.5" />
          <circle cx="61.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1199" r="1.5" />
          <circle cx="66.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1203" r="1.5" />
          <circle cx="71.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1207" r="1.5" />
          <circle cx="76.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1211" r="1.5" />
          <circle cx="81.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1215" r="1.5" />
          <circle cx="86.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1219" r="1.5" />
          <circle cx="91.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1223" r="1.5" />
          <circle cx="96.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1227" r="1.5" />
          <circle cx="101.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1231" r="1.5" />
          <circle cx="106.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1235" r="1.5" />
          <circle cx="111.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1239" r="1.5" />
          <circle cx="116.5" cy="16.5" fill="var(--fill-0, #05DF72)" fillOpacity="0.2" id="Ellipse 1243" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Insights7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73.5px] items-start justify-center left-[20.5px] top-[calc(50%+0.75px)] translate-y-[-50%] w-[152.5px]" data-name="Insights">
      <Container10 />
      <Heading5 />
      <Group10 />
    </div>
  );
}

function BentoCard4() {
  return (
    <div className="[grid-area:1_/_4] bg-[rgba(255,255,255,0.4)] h-[127px] justify-self-stretch relative rounded-[32px] shrink-0" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights6 />
        <Insights7 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[117.5px] h-[127px] relative shrink-0 w-[779px]" data-name="Container">
      <BentoCard1 />
      <BentoCard2 />
      <BentoCard3 />
      <BentoCard4 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <BentoCard />
      <Container11 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute blur-[3.25px] filter h-[372px] left-0 rounded-[26px] top-0 w-[397px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[26px]">
        <div className="absolute inset-0 overflow-hidden rounded-[26px]">
          <img alt="" className="absolute h-[119.6%] left-0 max-w-none top-0 w-[106.05%]" src={imgFrame34} />
        </div>
        <div className="absolute bg-[#ad46ff] inset-0 mix-blend-hue rounded-[26px]" />
        <div className="absolute bg-gradient-to-b from-[57.737%] from-[rgba(0,0,0,0)] inset-0 rounded-[26px] to-[99.572%] to-[rgba(0,0,0,0.6)]" />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[24px] left-0 text-[18px] text-nowrap text-white top-[-1px]">Morning Meditation</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-start relative shrink-0 w-[144px]" data-name="Container">
      <Heading6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12187900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[79.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 w-[80px]">12 day streak</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Text5 />
    </div>
  );
}

function HugeIconTimeAndDateOutlineStopwatch() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Huge-icon/time and date/outline/stopwatch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Huge-icon/time and date/outline/stopwatch">
          <path d={svgPaths.p3b4b56f0} id="Ellipse 463" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p1e41df80} id="Ellipse 464" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          <path d={svgPaths.p3ae4d800} id="Ellipse 465" stroke="var(--stroke-0, white)" />
          <path d="M7 7V5.25" id="Vector 1179" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[61.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-nowrap text-white top-0">2 hours ago</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <HugeIconTimeAndDateOutlineStopwatch />
      <Text6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start px-0 py-[20px] relative shrink-0 w-[147px]">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[102px] items-end left-[9.5px] top-[19.5px]">
      <div className="bg-[#f0f4f8] h-[54px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#f0f4f8] h-[46px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#f0f4f8] h-[27px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#f0f4f8] h-[65px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#f0f4f8] h-[58px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#f0f4f8] h-[72px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.6)] h-[77px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.6)] h-[81px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.6)] h-[61px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.6)] h-[72px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.3)] h-[61px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.3)] h-[72px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.3)] h-[61px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.3)] h-[72px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.3)] h-[61px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(240,244,248,0.3)] h-[72px] rounded-[2px] shrink-0 w-[3px]" />
    </div>
  );
}

function HabitCard() {
  return (
    <div className="h-[130px] relative shrink-0 w-[152px]" data-name="HabitCard">
      <Frame9 />
      <div className="absolute aspect-[5/5] left-[47.37%] right-[49.67%] top-[29.98px]">
        <div className="absolute inset-[-66.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <g id="Ellipse 8">
              <circle cx="5.25" cy="5.25" fill="var(--fill-0, #F0F4F8)" r="2.25" />
              <circle cx="5.25" cy="5.25" r="3.75" stroke="var(--stroke-0, #F0F4F8)" strokeOpacity="0.4" strokeWidth="3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[59px] items-end justify-center relative shrink-0 w-full">
      <Frame15 />
      <HabitCard />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[170px] items-start left-[22px] top-[21.5px] w-[353px]">
      <Container12 />
      <Frame16 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[372px] overflow-clip relative rounded-[36px] shrink-0 w-full">
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#3e3830] text-[18px] text-nowrap top-[-1.02px]">This Week</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[20.8px] left-0 text-[13px] text-[rgba(62,56,48,0.6)] text-nowrap top-[-0.02px]">Daily completion rate</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[49.984px] relative shrink-0 w-[120.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading7 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[45px] not-italic text-[#3e3830] text-[20px] text-nowrap text-right top-[-0.02px] translate-x-[-100%]">85%</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[16.5px] left-[44.98px] text-[#00c950] text-[11px] text-nowrap text-right top-[-1.02px] translate-x-[-100%]">+5%</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[46.5px] relative shrink-0 w-[44.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Insights8() {
  return (
    <div className="content-stretch flex h-[49.984px] items-center justify-between relative shrink-0 w-full" data-name="Insights">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[70.05%_74.71%_22.61%_17.71%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[70.05%_74.71%_22.61%_17.71%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-center">Mon</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[70.05%_62.65%_22.61%_29.63%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[70.05%_62.65%_22.61%_29.63%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-center">Tue</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[70.05%_50.88%_22.61%_40.57%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[70.05%_50.88%_22.61%_40.57%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-center">Wed</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[70.05%_40.88%_22.61%_52.63%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[70.05%_40.88%_22.61%_52.63%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-center">Thu</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[70.05%_31.13%_22.61%_64.97%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[70.05%_31.13%_22.61%_64.97%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-center">Fri</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[70.05%_17.65%_22.61%_75.91%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[70.05%_17.65%_22.61%_75.91%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-center">Sat</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[70.05%_5.59%_22.61%_87.13%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[70.05%_5.59%_22.61%_87.13%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-center">Sun</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[70.05%_5.59%_22.61%_17.71%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group14 />
      <Group17 />
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[70.05%_5.59%_22.61%_17.71%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[57.55%_92.95%_35.11%_5.1%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[57.55%_92.95%_35.11%_5.1%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-right">0</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[34.95%_92.95%_57.71%_5.1%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[34.95%_92.95%_57.71%_5.1%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-right">2</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[2.89%_92.95%_89.77%_5.1%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[2.89%_92.95%_89.77%_5.1%] leading-[normal] not-italic text-[11px] text-[rgba(62,56,48,0.6)] text-right">5</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[2.89%_92.95%_35.11%_5.1%]" data-name="Group">
      <Group21 />
      <Group22 />
      <Group23 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[2.89%_92.95%_35.11%_5.1%]" data-name="Group">
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[22.01%_76.48%_32.79%_17.95%]" data-name="Group">
      <div className="absolute inset-[22.01%_76.48%_32.79%_17.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 80">
          <path d={svgPaths.p1e96fd00} fill="url(#paint0_linear_30_1057)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_1057" x1="0" x2="0" y1="0" y2="80">
              <stop stopColor="#51A2FF" stopOpacity="0.5" />
              <stop offset="0.663462" stopColor="#51A2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[33.31%_64.98%_32.79%_29.45%]" data-name="Group">
      <div className="absolute inset-[33.31%_64.98%_32.79%_29.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 60">
          <path d={svgPaths.p3de3a100} fill="url(#paint0_linear_30_1041)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_1041" x1="0" x2="0" y1="0" y2="60">
              <stop stopColor="#51A2FF" stopOpacity="0.5" />
              <stop offset="0.663462" stopColor="#51A2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[10.71%_53.48%_32.79%_40.95%]" data-name="Group">
      <div className="absolute inset-[10.71%_53.48%_32.79%_40.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 100">
          <path d={svgPaths.p11240a80} fill="url(#paint0_linear_30_866)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_866" x1="0" x2="0" y1="0" y2="100">
              <stop stopColor="#51A2FF" stopOpacity="0.5" />
              <stop offset="0.663462" stopColor="#51A2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[44.61%_41.98%_32.79%_52.45%]" data-name="Group">
      <div className="absolute inset-[44.61%_41.98%_32.79%_52.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 40">
          <path d={svgPaths.p3a6017c0} fill="url(#paint0_linear_30_1084)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_1084" x1="0" x2="0" y1="0" y2="40">
              <stop stopColor="#51A2FF" stopOpacity="0.5" />
              <stop offset="0.663462" stopColor="#51A2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[22.01%_30.48%_32.79%_63.95%]" data-name="Group">
      <div className="absolute inset-[22.01%_30.48%_32.79%_63.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 80">
          <path d={svgPaths.p2991aac0} fill="url(#paint0_linear_30_1094)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_1094" x1="0" x2="0" y1="0" y2="80">
              <stop stopColor="#51A2FF" stopOpacity="0.5" />
              <stop offset="0.663462" stopColor="#51A2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[33.31%_18.98%_32.79%_75.45%]" data-name="Group">
      <div className="absolute inset-[33.31%_18.98%_32.79%_75.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 60">
          <path d={svgPaths.p3ee6d5c0} fill="url(#paint0_linear_30_1049)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_1049" x1="0" x2="0" y1="0" y2="60">
              <stop stopColor="#51A2FF" stopOpacity="0.5" />
              <stop offset="0.663462" stopColor="#51A2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[22.01%_7.48%_32.79%_86.95%]" data-name="Group">
      <div className="absolute inset-[22.01%_7.48%_32.79%_86.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 80">
          <path d={svgPaths.p35ee5200} fill="url(#paint0_linear_30_1065)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_1065" x1="0" x2="0" y1="0" y2="80">
              <stop stopColor="#51A2FF" stopOpacity="0.5" />
              <stop offset="0.663462" stopColor="#51A2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[10.71%_7.48%_32.79%_17.95%]" data-name="Group">
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[10.71%_7.48%_32.79%_17.95%]" data-name="Group">
      <Group33 />
    </div>
  );
}

function RechartsBarR2G() {
  return (
    <div className="absolute contents inset-[10.71%_7.48%_32.79%_17.95%]" data-name="recharts-bar-:r2g:">
      <Group34 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[17.95%] right-[7.48%] top-[10.97px]">
      <RechartsBarR2G />
      <div className="absolute aspect-[5/5] left-[65.88%] right-[32.35%] top-[29.97px]">
        <div className="absolute inset-[-16.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <g id="Ellipse 3">
              <circle cx="4.12353" cy="4.12353" fill="var(--fill-0, #60A5FA)" r="3.12353" />
              <circle cx="4.12353" cy="4.12353" r="3.62353" stroke="var(--stroke-0, #60A5FA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[5/5] left-[54.41%] right-[43.82%] top-[69.97px]">
        <div className="absolute inset-[-16.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <g id="Ellipse 3">
              <circle cx="4.12353" cy="4.12353" fill="var(--fill-0, #60A5FA)" r="3.12353" />
              <circle cx="4.12353" cy="4.12353" r="3.62353" stroke="var(--stroke-0, #60A5FA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[5/5] left-[77.35%] right-[20.88%] top-[48.97px]">
        <div className="absolute inset-[-16.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <g id="Ellipse 3">
              <circle cx="4.12353" cy="4.12353" fill="var(--fill-0, #60A5FA)" r="3.12353" />
              <circle cx="4.12353" cy="4.12353" r="3.62353" stroke="var(--stroke-0, #60A5FA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[5/5] left-[88.82%] right-[9.41%] top-[29.97px]">
        <div className="absolute inset-[-16.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <g id="Ellipse 3">
              <circle cx="4.12353" cy="4.12353" fill="var(--fill-0, #60A5FA)" r="3.12353" />
              <circle cx="4.12353" cy="4.12353" r="3.62353" stroke="var(--stroke-0, #60A5FA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[5/5] left-[31.47%] right-[66.76%] top-[49.97px]">
        <div className="absolute inset-[-16.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <g id="Ellipse 3">
              <circle cx="4.12353" cy="4.12353" fill="var(--fill-0, #60A5FA)" r="3.12353" />
              <circle cx="4.12353" cy="4.12353" r="3.62353" stroke="var(--stroke-0, #60A5FA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[5/5] left-[42.94%] right-[55.29%] top-[10.97px]">
        <div className="absolute inset-[-16.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <g id="Ellipse 3">
              <circle cx="4.12353" cy="4.12353" fill="var(--fill-0, #60A5FA)" r="3.12353" />
              <circle cx="4.12353" cy="4.12353" r="3.62353" stroke="var(--stroke-0, #60A5FA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[5/5] left-[20%] right-[78.24%] top-[29.97px]">
        <div className="absolute inset-[-16.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <g id="Ellipse 3">
              <circle cx="4.12353" cy="4.12353" fill="var(--fill-0, #60A5FA)" r="3.12353" />
              <circle cx="4.12353" cy="4.12353" r="3.62353" stroke="var(--stroke-0, #60A5FA)" strokeOpacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[177px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group20 />
      <Group25 />
      <Group16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[177px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon8 />
    </div>
  );
}

function BentoCard5() {
  return (
    <div className="absolute bg-[#fffbf5] content-stretch flex flex-col gap-[16px] h-[307px] items-start left-0 pb-px pt-[21px] px-[21px] rounded-[24px] top-0 w-[396px]" data-name="BentoCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.8)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)]" />
      <Insights8 />
      <Container19 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
    </div>
  );
}

function Insights9() {
  return <div className="absolute bg-[rgba(96,165,250,0.1)] blur-3xl filter left-[-42px] rounded-[3.35544e+07px] size-[192px] top-[156px]" data-name="Insights" />;
}

function Frame24() {
  return (
    <div className="h-[307px] relative shrink-0 w-full">
      <BentoCard5 />
      <Insights9 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[687px] items-end relative shrink-0 w-[397px]">
      <Frame40 />
      <Frame24 />
    </div>
  );
}

function Insights10() {
  return <div className="absolute bg-[rgba(194,122,255,0.15)] blur-3xl filter left-[198px] rounded-[3.35544e+07px] size-[192px] top-[-4px]" data-name="Insights" />;
}

function Heading8() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#3e3830] text-[18px] text-nowrap top-[-1px]">Habit Consistency</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[20.8px] left-0 text-[13px] text-[rgba(62,56,48,0.6)] text-nowrap top-0">Monthly tracking</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[49.984px] relative shrink-0 w-[141.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading8 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[26.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[11px] text-[rgba(62,56,48,0.36)] text-nowrap top-[-1px]">Week</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[16.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#ad46ff] text-[11px] text-nowrap top-[-1px]">Month</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[22.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[11px] text-[rgba(62,56,48,0.36)] text-nowrap top-[-1px]">Year</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[91.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Text7 />
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[49.984px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[37.484px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[48px] left-0 not-italic text-[#ad46ff] text-[32px] text-nowrap top-[-1px] tracking-[-0.64px]">53</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Text10 />
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#ad46ff] text-[16px] text-nowrap">%</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[18px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[18px] left-[35px] text-[#3e3830] text-[12px] text-center text-nowrap top-0 translate-x-[-50%]">vs last month</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[18px] items-center justify-center relative shrink-0 w-[70px]" data-name="Container">
      <Text11 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[calc(50%-0.51px)] top-[125px] translate-x-[-50%] w-[105.984px]">
      <Frame10 />
      <Container23 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[24px] translate-x-[-50%]">
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[43.46%_0.31%_55.26%_96.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d={svgPaths.p3cbc7900} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1246" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[40.85%_0.67%_57.73%_96.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d={svgPaths.p267a3000} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1247" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[37.52%_1.35%_60.89%_95.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2c5d9a00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1248" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[34.88%_2.05%_63.39%_95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.paafee00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1249" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[31.93%_3.03%_66.2%_94.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7">
            <path d={svgPaths.p2c634c70} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1250" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[29.26%_4.11%_68.74%_92.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7">
            <path d={svgPaths.p16eb1e40} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1251" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[26.62%_5.35%_71.25%_91.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path d={svgPaths.p8a984f0} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1252" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[23.97%_6.81%_73.78%_90.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path d={svgPaths.p2c0ed600} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1253" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[21.44%_8.41%_76.2%_88.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path d={svgPaths.p515a500} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1254" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[19%_10.17%_78.55%_87.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
            <path d={svgPaths.p23bead00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1255" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[16.65%_12.1%_79.84%_84.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p1f667bf0} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1256" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[14.49%_14.11%_80.9%_81.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p9dcb4c0} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1257" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[12.45%_16.26%_81.38%_78.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
            <path d={svgPaths.p30aa8800} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1258" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[10.5%_18.58%_81.65%_74.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 27">
            <path d={svgPaths.p34d11f00} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1259" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[8.74%_20.96%_81.83%_72.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 33">
            <path d={svgPaths.p25a15680} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1260" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[7.17%_23.37%_82.08%_69.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 37">
            <path d={svgPaths.p18857800} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1261" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[5.67%_26.02%_82.08%_66.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 42">
            <path d={svgPaths.pce8b700} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1262" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[4.42%_28.56%_81.87%_64.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 47">
            <path d={svgPaths.p2a454000} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1263" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[3.19%_31.51%_84.02%_62.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 44">
            <path d={svgPaths.p301b3fc0} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1264" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[2.2%_34.4%_86.4%_61.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 39">
            <path d={svgPaths.p28c7fd00} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1265" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[1.44%_37.15%_88.64%_59.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 34">
            <path d={svgPaths.p196e6b00} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1266" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[0.8%_40.15%_90.72%_57.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 29">
            <path d={svgPaths.p16f82b00} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1267" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[0.33%_43.28%_92.73%_54.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 24">
            <path d={svgPaths.paa86c00} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1268" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[0.09%_46.07%_94.39%_52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 19">
            <path d={svgPaths.p4244900} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1269" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[0_49.19%_95.94%_49.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 14">
            <path d={svgPaths.p11a73f00} fill="var(--fill-0, #7F22FE)" fillOpacity="0.5" id="Ellipse 1270" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[0.03%_51.75%_97.04%_47.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
            <path d={svgPaths.pd8bb980} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1271" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[0.25%_54.69%_96.78%_44.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 11">
            <path d={svgPaths.p3cd52400} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1272" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[0.63%_57.47%_96.36%_41.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 11">
            <path d={svgPaths.p28409000} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1273" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[1.17%_60.15%_95.8%_38.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.pac85600} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1274" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[2%_63.2%_94.96%_35.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p34a57b80} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1275" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[2.88%_65.75%_94.09%_32.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path d={svgPaths.pf5dda80} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1276" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[3.89%_68.23%_93.08%_29.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path d={svgPaths.pa6aa000} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1277" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[5.12%_70.77%_91.87%_27.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
            <path d={svgPaths.p1a8e5300} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1278" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[6.53%_73.29%_90.49%_24.44%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
            <path d={svgPaths.p33094e00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1279" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[8.1%_75.71%_88.97%_21.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
            <path d={svgPaths.p35f76a70} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1280" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[9.49%_77.62%_87.62%_19.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
            <path d={svgPaths.pb575e00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1281" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[11.51%_80.07%_85.67%_17.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
            <path d={svgPaths.p3d94d980} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1282" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[13.51%_82.21%_83.75%_15.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p10a53200} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1283" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[15.75%_84.32%_81.6%_12.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p2f55cdf0} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1284" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[17.78%_86.03%_79.65%_11.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
            <path d={svgPaths.p20319e00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1285" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[19.93%_87.64%_77.6%_9.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
            <path d={svgPaths.p32e67b00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1286" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[22.38%_89.27%_75.25%_7.79%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
            <path d={svgPaths.p188e0400} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1287" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[24.96%_90.78%_72.79%_6.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
            <path d={svgPaths.p36de8000} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1288" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[27.1%_91.88%_70.76%_5.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
            <path d={svgPaths.p7ea4460} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1289" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[30.17%_93.25%_67.84%_3.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
            <path d={svgPaths.p34e6ce00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1290" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[32.83%_94.25%_65.31%_2.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
            <path d={svgPaths.pe68c480} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1291" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[35.49%_95.09%_62.79%_1.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
            <path d={svgPaths.p2ba25b00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1292" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[37.92%_95.72%_60.49%_1.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
            <path d={svgPaths.p10824470} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1293" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[41.04%_96.35%_57.53%_0.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 5">
            <path d={svgPaths.p8867fa0} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1294" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[9px] size-[340px] top-[24px]">
        <div className="absolute inset-[43.73%_96.74%_55%_0.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 5">
            <path d={svgPaths.p27ab4e00} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.3" id="Ellipse 1295" />
          </svg>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[126px] size-[12px] top-[177.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full">
      <Group9 />
      <Icon9 />
    </div>
  );
}

function Insights11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[317.984px] items-center left-1/2 top-[21px] translate-x-[-50%] w-[359px]" data-name="Insights">
      <Container22 />
      <Frame12 />
    </div>
  );
}

function BentoCard6() {
  return (
    <div className="bg-[#fffbf5] h-[359.984px] relative rounded-[24px] shrink-0 w-full" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights10 />
        <Insights11 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.8)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <BentoCard6 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Insights12() {
  return <div className="absolute bg-[rgba(194,122,255,0.15)] blur-2xl filter left-[113.5px] rounded-[3.35544e+07px] size-[80px] top-[0.98px]" data-name="Insights" />;
}

function Text12() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[67.781px]" data-name="Text">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(62,56,48,0.6)] text-nowrap top-px">Focus Score</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[24px] left-0 top-[27.5px] w-[152.5px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#3e3830] text-[16px] text-nowrap top-[-1px]">1048</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[23.75%_3.27%_12.5%_3.27%]" data-name="Group">
      <div className="absolute inset-[23.75%_3.27%_12.5%_3.27%]" data-name="recharts-area-:r2d:">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 26">
          <path d={svgPaths.p2db4d80} fill="url(#paint0_linear_30_846)" fillOpacity="0.6" id="recharts-area-:r2d:" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_846" x1="0" x2="0" y1="0" y2="25.5">
              <stop offset="0.05" stopColor="#A78BFA" stopOpacity="0.25" />
              <stop offset="0.95" stopColor="#A78BFA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[23.75%_3.27%_61.25%_3.27%]" data-name="Vector">
        <div className="absolute inset-[-16.64%_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 8">
            <path d={svgPaths.p13395200} id="Vector" stroke="var(--stroke-0, #A78BFA)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[23.75%_3.27%_12.5%_3.27%]" data-name="Group">
      <Group35 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group36 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-0 top-[59.5px] w-[153px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[103.5px] w-[28.328px]" data-name="Text">
      <p className="absolute font-['Urbanist:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#00c950] text-[11px] text-nowrap top-[-1px]">● 22%</p>
    </div>
  );
}

function Insights13() {
  return (
    <div className="absolute h-[120px] left-[21px] top-[20.98px] w-[152.5px]" data-name="Insights">
      <Text12 />
      <Heading9 />
      <Container24 />
      <Text13 />
    </div>
  );
}

function BentoCard7() {
  return (
    <div className="bg-[rgba(255,251,245,0.95)] h-[150px] relative rounded-[24px] shrink-0 w-[184.5px]" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights12 />
        <Insights13 />
        <div className="absolute aspect-[4.81283/4.81283] left-[55.08%] right-[42.51%] top-[91px]">
          <div className="absolute inset-[-22.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <g id="Ellipse 3">
                <circle cx="3.21992" cy="3.21992" fill="var(--fill-0, #A78BFA)" r="2.21992" />
                <circle cx="3.21992" cy="3.21992" r="2.71992" stroke="var(--stroke-0, #A78BFA)" strokeOpacity="0.4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.8)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Insights14() {
  return <div className="absolute bg-[rgba(166,132,255,0.15)] blur-2xl filter left-[113.5px] rounded-[3.35544e+07px] size-[80px] top-[0.98px]" data-name="Insights" />;
}

function Text14() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[70.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(62,56,48,0.6)] text-nowrap top-px">Weekly Goal</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[11px] text-[rgba(62,56,48,0.3)] text-nowrap top-[-1px]">Ideal</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-center justify-between left-0 top-0 w-[152.5px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[41.734px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#3e3830] text-[20px] text-nowrap top-0 tracking-[-0.2px]">33.5</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="Group 11">
          <path d={svgPaths.p25c500} fill="var(--fill-0, #A78BFA)" fillOpacity="0.4" id="Ellipse 1247" />
          <path d={svgPaths.p1ab07700} fill="var(--fill-0, #A78BFA)" fillOpacity="0.1" id="Ellipse 1248" />
          <path d={svgPaths.p34d78b00} fill="var(--fill-0, #A78BFA)" id="Ellipse 1245" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group12 />
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group13 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-center justify-between left-0 top-[27.02px] w-[152px]" data-name="Container">
      <Heading10 />
      <Group15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[17px] left-0 top-[105px] w-[38px]" data-name="Text">
      <p className="absolute font-['Urbanist:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#00c950] text-[11px] text-nowrap top-[-1px]">● +0.4</p>
    </div>
  );
}

function Insights15() {
  return (
    <div className="absolute h-[124px] left-[calc(50%+0.25px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[153px]" data-name="Insights">
      <Container25 />
      <Container26 />
      <Text16 />
    </div>
  );
}

function BentoCard8() {
  return (
    <div className="bg-[rgba(255,251,245,0.95)] h-[150px] relative rounded-[24px] shrink-0 w-[184.5px]" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights14 />
        <Insights15 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.8)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <BentoCard7 />
      <BentoCard8 />
    </div>
  );
}

function Insights16() {
  return <div className="absolute bg-[rgba(255,100,103,0.15)] blur-2xl filter left-[113.5px] rounded-[3.35544e+07px] size-[80px] top-[0.98px]" data-name="Insights" />;
}

function Text17() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[85.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(62,56,48,0.6)] text-nowrap top-px">Morning Habits</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[18.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[11px] text-[rgba(255,100,103,0.7)] text-nowrap top-[-1px]">Risk</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[19.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#3e3830] text-[16px] text-nowrap top-[-1px]">37.6</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[18.52%_3.27%_16.67%_3.27%]" data-name="Group">
      <div className="absolute inset-[18.52%_3.27%_16.67%_3.27%]" data-name="recharts-area-:r2e:">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 20">
          <path d={svgPaths.p264ad600} fill="url(#paint0_linear_30_1051)" fillOpacity="0.6" id="recharts-area-:r2e:" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_30_1051" x1="0" x2="0" y1="0" y2="19.444">
              <stop offset="0.05" stopColor="#EF4444" stopOpacity="0.25" />
              <stop offset="0.95" stopColor="#EF4444" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[18.52%_3.27%_53.7%_3.27%]" data-name="Vector">
        <div className="absolute inset-[-8.82%_-0.1%_-8.91%_-0.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 10">
            <path d={svgPaths.p15626e00} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[18.52%_3.27%_16.67%_3.27%]" data-name="Group">
      <Group37 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group38 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[120px] items-start left-[calc(50%+1px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[153px]">
      <Container27 />
      <Heading11 />
      <Container28 />
      <p className="font-['Urbanist:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#ff6467] text-[11px] w-full">● 0.0%</p>
    </div>
  );
}

function BentoCard9() {
  return (
    <div className="bg-[rgba(255,251,245,0.95)] h-[161px] relative rounded-[24px] shrink-0 w-[185px]" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights16 />
        <Frame20 />
        <div className="absolute aspect-[4.81283/4.81283] left-[44.39%] right-[53.2%] top-[92px]">
          <div className="absolute inset-[-22.46%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <g id="Ellipse 3">
                <circle cx="3.22594" cy="3.22594" fill="var(--fill-0, #EF4444)" r="2.22594" />
                <circle cx="3.22594" cy="3.22594" r="2.72594" stroke="var(--stroke-0, #EF4444)" strokeOpacity="0.4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.8)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Insights17() {
  return <div className="absolute bg-[rgba(5,223,114,0.15)] blur-2xl filter left-[113.5px] rounded-[3.35544e+07px] size-[80px] top-[0.98px]" data-name="Insights" />;
}

function Text19() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[56.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(62,56,48,0.6)] text-nowrap top-px">Habit Age</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[42.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[11px] text-[rgba(5,223,114,0.7)] text-nowrap top-[-1px]">Excellent</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[19.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[42.797px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[36px] left-0 not-italic text-[#3e3830] text-[36px] text-nowrap top-0 tracking-[-0.72px]">28</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[19.5px] left-[50.8px] top-[17px] w-[27.313px]" data-name="Text">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(62,56,48,0.36)] text-nowrap top-px">days</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[36.5px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Text21 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <div className="bg-[#a78bfa] h-[23px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#a78bfa] h-[20px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#a78bfa] h-[12px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#a78bfa] h-[28px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#a78bfa] h-[25px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[#a78bfa] h-[31px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.6)] h-[33px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.6)] h-[35px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.6)] h-[26px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.6)] h-[31px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.3)] h-[26px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.3)] h-[31px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.3)] h-[26px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.3)] h-[31px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.3)] h-[26px] rounded-[2px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(167,139,250,0.3)] h-[31px] rounded-[2px] shrink-0 w-[3px]" />
    </div>
  );
}

function Insights18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[125px] items-start left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[152px]" data-name="Insights">
      <Container29 />
      <Container30 />
      <Frame8 />
    </div>
  );
}

function BentoCard10() {
  return (
    <div className="bg-[rgba(255,251,245,0.95)] h-[161px] relative rounded-[24px] shrink-0 w-[184px]" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Insights17 />
        <Insights18 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.8)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[161px] items-center relative shrink-0 w-full">
      <BentoCard9 />
      <BentoCard10 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[319px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[687px] items-end relative shrink-0 w-[383px]">
      <Frame19 />
      <Frame23 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[687px] items-start relative shrink-0">
      <Frame27 />
      <Frame26 />
    </div>
  );
}

function AddHabit() {
  return <div className="absolute bg-[rgba(194,122,255,0.3)] blur-2xl filter left-[254px] rounded-[3.35544e+07px] size-[128px] top-[1.41px]" data-name="AddHabit" />;
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_30_796)" id="Icon">
          <path d={svgPaths.pca5b500} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_30_796">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon12 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#1f2937] text-[18px] text-nowrap top-[-1px]">AI Suggestions</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[20.8px] left-0 text-[13px] text-[rgba(31,41,55,0.8)] text-nowrap top-0">Popular habits based on your goals</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[49.984px] relative shrink-0 w-[198px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading12 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[12px] h-[49.984px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Button() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] place-self-stretch relative rounded-[36px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-[13px] text-[#1f2937] text-[13px] text-nowrap top-[14px]">Morning Walk</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.4)] place-self-stretch relative rounded-[36px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-[13px] text-[#1f2937] text-[13px] text-nowrap top-[14px]">Drink 8 Glasses of Water</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:2_/_1] bg-[rgba(255,255,255,0.4)] place-self-stretch relative rounded-[36px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-[13px] text-[#1f2937] text-[13px] text-nowrap top-[14px]">Read for 20 Minutes</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:2_/_2] bg-[rgba(255,255,255,0.4)] place-self-stretch relative rounded-[36px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-[13px] text-[#1f2937] text-[13px] text-nowrap top-[14px]">Practice Gratitude</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="[grid-area:3_/_1] bg-[rgba(255,255,255,0.4)] place-self-stretch relative rounded-[36px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-[13px] text-[#1f2937] text-[13px] text-nowrap top-[14px]">Journal Daily</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="[grid-area:3_/_2] bg-[rgba(255,255,255,0.4)] place-self-stretch relative rounded-[36px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-[13px] text-[#1f2937] text-[13px] text-nowrap top-[14px]">Stretch Routine</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[152.5px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function AddHabit1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[214.484px] items-center justify-center left-1/2 top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%] w-[341px]" data-name="AddHabit">
      <Container33 />
      <Container34 />
    </div>
  );
}

function BentoCard11() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[256px] relative rounded-[32px] shrink-0 w-full" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <AddHabit />
        <AddHabit1 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function AddHabit2() {
  return <div className="absolute bg-[rgba(194,122,255,0.3)] blur-2xl filter left-[254px] rounded-[3.35544e+07px] size-[128px] top-[1.41px]" data-name="AddHabit" />;
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_30_796)" id="Icon">
          <path d={svgPaths.pca5b500} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_30_796">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon13 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#1f2937] text-[18px] text-nowrap top-[-1px]">AI Coach</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3e3830] text-[15px] text-nowrap top-0">{` AI habit companion`}</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[49.984px] relative shrink-0 w-[198px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading13 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[12px] h-[49.984px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-[calc(50%+0.5px)] text-[13px] text-[rgba(62,56,48,0.7)] text-center text-nowrap top-0 translate-x-[-50%]">Quick actions</p>
    </div>
  );
}

function AiChat() {
  return (
    <div className="h-[21px] relative shrink-0 w-[102.641px]" data-name="AIChat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#3e3830] text-[14px] text-nowrap top-[-1px]">How am I doing?</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.2)] place-self-stretch relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.6)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-px pr-[1.016px] py-px relative size-full">
          <AiChat />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function AiChat1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[77.734px]" data-name="AIChat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#3e3830] text-[14px] text-nowrap top-[-1px]">Motivate me</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.2)] place-self-stretch relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.6)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-px pr-[1.016px] py-px relative size-full">
          <AiChat1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function AiChat2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[120.813px]" data-name="AIChat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#3e3830] text-[14px] text-nowrap top-[-1px]">Suggest new habits</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="[grid-area:2_/_1] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center p-px place-self-stretch relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.6)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <AiChat2 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function AiChat3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[103px]" data-name="AIChat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#3e3830] text-[14px] text-nowrap top-[-1px]">Review my week</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="[grid-area:2_/_2] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center p-px place-self-stretch relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.6)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <AiChat3 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[116px] relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[147px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Container38 />
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-[rgba(255,251,245,0.4)] h-[50px] left-0 rounded-[20px] top-[-0.5px] w-[313px]" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[12px] text-[rgba(62,56,48,0.7)] text-nowrap">Ask me anything about your habits...</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,251,245,0.6)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function HugeIconCommunicationOutlineSentFast() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Huge-icon/communication/outline/sent-fast">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Huge-icon/communication/outline/sent-fast">
          <path d={svgPaths.p2ba77f00} id="Vector" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center left-[318px] p-[24px] rounded-[20px] size-[48px] top-[0.5px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <HugeIconCommunicationOutlineSentFast />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[50px] relative shrink-0 w-[366px]" data-name="Container">
      <TextArea />
      <Frame4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-center justify-between relative shrink-0 w-full">
      <Container39 />
      <Container40 />
    </div>
  );
}

function AddHabit3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[233px] items-center justify-center left-1/2 top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[341px]" data-name="AddHabit">
      <Container37 />
      <Frame13 />
    </div>
  );
}

function BentoCard12() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[423px] relative rounded-[32px] shrink-0 w-full" data-name="BentoCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <AddHabit2 />
        <AddHabit3 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[687px] items-start relative shrink-0 w-[383px]">
      <BentoCard11 />
      <BentoCard12 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] h-[687px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame25 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[822px] items-start relative shrink-0 w-[1184px]">
      <Frame30 />
      <Frame29 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3b7be120} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1f3d9f80} id="Vector_2" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[126px]" data-name="Heading 3">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#1f2937] text-[18px] text-nowrap top-[-1px]">Daily Reminder</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon14 />
      <Heading14 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[20.8px] left-0 text-[13px] text-[rgba(31,41,55,0.7)] top-[-1.19px] w-[120px]">Get notified to complete your habit</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-end left-0 top-0 w-[158px]">
      <Frame33 />
      <Paragraph6 />
    </div>
  );
}

function Container41() {
  return <div className="bg-white h-[20px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(139,92,246,0.15)] content-stretch flex flex-col h-[28px] items-start left-[165px] pb-0 pl-[4px] pr-[24px] pt-[4px] rounded-[3.35544e+07px] top-1/2 translate-y-[-50%] w-[48px]" data-name="Button">
      <Container41 />
    </div>
  );
}

function AddHabit4() {
  return (
    <div className="h-[90px] relative shrink-0 w-[214px]" data-name="AddHabit">
      <Frame34 />
      <Button10 />
    </div>
  );
}

function BentoCard13() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[127px] relative rounded-[32px] shrink-0 w-full" data-name="BentoCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[12px] py-[21px] relative size-full">
          <AddHabit4 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function HugeIconHealthOutlineHeart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="huge-icon/health/outline/heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="huge-icon/health/outline/heart">
          <path d={svgPaths.p3f408f00} id="Vector" stroke="var(--stroke-3, #AD46FF)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[51.578px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#1f2937] text-[18px] text-nowrap top-[-1px]">Health</p>
      </div>
    </div>
  );
}

function Onboarding() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] h-[93px] items-center justify-center left-[calc(50%-1px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[124px]" data-name="Onboarding">
      <HugeIconHealthOutlineHeart />
      <Heading15 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(167,139,250,0.15)] h-[127px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <Onboarding />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function HugeIconBusinessOutlineTarget() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Huge-icon/business/outline/target">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Huge-icon/business/outline/target">
          <circle cx="12" cy="12" fill="var(--fill-0, #EF4444)" id="Ellipse 405" r="2" />
          <path d={svgPaths.pf274600} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[25px] relative shrink-0 w-[44px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#1f2937] text-[18px] text-nowrap top-[-1px]">Focus</p>
      </div>
    </div>
  );
}

function Onboarding1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] h-[93px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[124px]" data-name="Onboarding">
      <HugeIconBusinessOutlineTarget />
      <Heading16 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[127px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <Onboarding1 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 18V5" id="Vector" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p11c39380} id="Vector_2" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p2e947480} id="Vector_3" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p3d7a0320} id="Vector_4" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p2c99ddc0} id="Vector_5" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p1d3ae070} id="Vector_6" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p157a9000} id="Vector_7" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p25258198} id="Vector_8" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[25px] relative shrink-0 w-[68px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#1f2937] text-[18px] text-nowrap top-[-1px]">Learning</p>
      </div>
    </div>
  );
}

function Onboarding2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] h-[93px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[124px]" data-name="Onboarding">
      <Icon15 />
      <Heading17 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[127px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <Onboarding2 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function HugeIconHealthOutlineHealthCare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="huge-icon/health/outline/health care">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="huge-icon/health/outline/health care">
          <path d={svgPaths.p28bea380} id="Vector" stroke="var(--stroke-3, #AD46FF)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p19978a00} id="Vector 2068" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p27c00800} fill="var(--stroke-0, #AD46FF)" id="Vector 2069" />
        </g>
      </svg>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[25px] relative shrink-0 w-[56px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#1f2937] text-[18px] text-nowrap top-[-1px]">Fitness</p>
      </div>
    </div>
  );
}

function Onboarding3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] h-[93px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[124px]" data-name="Onboarding">
      <HugeIconHealthOutlineHealthCare />
      <Heading18 />
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[rgba(167,139,250,0.1)] h-[127px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <Onboarding3 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Button13 />
      <Button14 />
    </div>
  );
}

function HugeIconDeviceOutlineDigitalHealth() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Huge-icon/device/outline/digital health">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Huge-icon/device/outline/digital health">
          <path d={svgPaths.p27c20e70} id="Ellipse 1147" stroke="var(--stroke-0, #2B7FFF)" strokeWidth="1.5" />
          <path d={svgPaths.p235d8c00} id="Vector 251" stroke="var(--stroke-10, #2B7FFF)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[25px] relative shrink-0 w-[96px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[25.2px] left-0 text-[#1f2937] text-[18px] text-nowrap top-[-1px]">Mindfulness</p>
      </div>
    </div>
  );
}

function Onboarding4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] h-[93px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[124px]" data-name="Onboarding">
      <HugeIconDeviceOutlineDigitalHealth />
      <Heading19 />
    </div>
  );
}

function Button15() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.2)] grow h-[139px] min-h-px min-w-px relative rounded-[32px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]" />
      <Onboarding4 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[139px] items-start relative rounded-[32px] shrink-0 w-full">
      <Button15 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[822px] items-start relative shrink-0 w-[236px]" data-name="Container">
      <BentoCard13 />
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-1/2 top-[133px] translate-x-[-50%]">
      <Frame31 />
      <Container42 />
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Star">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p37fdaf00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14b60df0} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Onboarding5() {
  return (
    <div className="bg-[rgba(173,70,255,0.3)] relative rounded-[20px] size-[64px]" data-name="Onboarding">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Star />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[53px] relative shrink-0 w-[110px]">
      <p className="absolute bg-clip-text font-['Urbanist:Regular',sans-serif] font-normal leading-[52.8px] left-0 text-[26px] text-nowrap top-0 tracking-[-0.96px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(175.746deg, rgba(194, 122, 255, 0.2) 27.033%, rgb(173, 70, 255) 68.943%)" }}>
        FlowTrack.
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-0 top-0">
      <div className="flex items-center justify-center relative shrink-0 size-[65.107px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[179deg]">
          <Onboarding5 />
        </div>
      </div>
      <Frame37 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[65.107px] relative shrink-0 w-[180.107px]">
      <Frame35 />
    </div>
  );
}

function HugeIconInterfaceOutlineHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Huge-icon/interface/outline/home 04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Huge-icon/interface/outline/home 04">
          <path d={svgPaths.p2e75c980} id="Vector 300" stroke="var(--stroke-1, #3E3830)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 18H14" id="Vector 2520" stroke="var(--stroke-0, #3E3830)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[37.719px]" data-name="Text">
      <p className="absolute font-['Urbanist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[13px] text-[rgba(31,41,55,0.7)] text-nowrap top-px">Home</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] h-[48px] items-center justify-center p-[24px] relative rounded-[14px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HugeIconInterfaceOutlineHome />
      <Text22 />
    </div>
  );
}

function HugeIconBusinessOutlineBarChart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Huge-icon/business/outline/bar chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Huge-icon/business/outline/bar chart">
          <g id="Vector">
            <path d={svgPaths.p38f93680} stroke="var(--stroke-0, #28303F)" strokeWidth="1.5" />
            <path d={svgPaths.p205ee080} stroke="var(--stroke-0, #28303F)" strokeWidth="1.5" />
            <path d={svgPaths.p2c74e500} stroke="var(--stroke-0, #28303F)" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Star">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p8a0e280} fill="var(--fill-0, #3E3830)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1eb38ef2} fill="var(--fill-0, #3E3830)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HugeIconInterfaceOutlineUser() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Huge-icon/interface/outline/user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Huge-icon/interface/outline/user">
          <path d={svgPaths.p10074b00} fill="var(--stroke-0, #28303F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[36px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame7 />
      <HugeIconBusinessOutlineBarChart />
      <Star1 />
      <HugeIconInterfaceOutlineUser />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[873.719px]">
      <Frame36 />
      <Frame3 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #3E3830)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #3E3830)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex h-[48px] items-center justify-center ml-0 mt-0 relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-[49px]" data-name="Button">
      <Icon16 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button16 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex h-[48px] items-center justify-center p-[24px] relative rounded-[20px] shrink-0 w-[49px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Group1 />
    </div>
  );
}

function HugeIconInterfaceOutlineNotification() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Huge-icon/interface/outline/notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Huge-icon/interface/outline/notification">
          <path d={svgPaths.pb449800} fill="var(--stroke-0, #3E3830)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] content-stretch flex h-[48px] items-center justify-center ml-0 mt-0 p-[25px] relative rounded-[20px] w-[49px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <HugeIconInterfaceOutlineNotification />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button17 />
      <div className="[grid-area:1_/_1] ml-[41.39px] mt-[0.73px] relative size-[9.608px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="4.80384" cy="4.80384" fill="var(--fill-0, #AD46FF)" id="Ellipse 1" r="4.80384" />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-[106px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Frame6 />
        <Group2 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3.35544e+07px] size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Urbanist:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#666] text-[12px] tracking-[0.24px]">Good Morning,</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1a1a1a] text-[16px] text-nowrap">Alice Hederson</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[48px] relative shrink-0 w-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-[303px]" data-name="Container">
      <Frame5 />
      <Container45 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[calc(50%+0.19px)] top-[34.69px] translate-x-[-50%] w-[1428.384px]">
      <Frame38 />
      <Container46 />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-[#f0f4f8] relative size-full" data-name="Dashboard">
      <Container />
      <Container1 />
      <Frame32 />
      <Frame39 />
    </div>
  );
}