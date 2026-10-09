const credentials = [
  { label: "Accreditation", value: "LAM Registered Architect" },
  { label: "Membership",    value: "PAM Corporate Member" },
  { label: "Award",         value: "PAM Silver Award Project" },
  { label: "Experience",    value: "10+ Years" },
  { label: "Location",      value: "Johor Bahru" },
];

// Below xl the strip is a grid (2 columns on phones, 3 + 2 on tablets) so every item is readable without scrolling;
// gap-px over the border colour draws the dividers. From xl it is the single row it always was.
const spanClass = (i: number) => {
  const last = i === credentials.length - 1;
  return `${last ? "col-span-2" : "col-span-1"} ${i < 3 ? "md:col-span-2" : "md:col-span-3"}`;
};

const CredentialsBar = () => {
  return (
    <div className="relative w-full bg-[#0a0a0a] border-y border-[#2a2a2a] xl:overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      
      {/* 右侧渐变遮罩：暗示右侧有内容可以滚动 */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-r from-transparent to-[#0a0a0a] z-10 hidden xl:block" />

      <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-[#2e2e2e] xl:bg-transparent xl:gap-0 xl:flex xl:items-stretch xl:w-max xl:min-w-full xl:justify-center xl:mx-auto">
        {credentials.map((item, i) => (
          <div
            key={i}
            className={`${spanClass(i)} bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4 py-4 md:px-8 md:py-5 xl:px-10 xl:py-6 ${
              i === 0 ? "xl:pl-8" : ""
            } ${
              i < credentials.length - 1 ? "xl:border-r xl:border-[#2e2e2e]" : ""
            }`}
          >
            <span className="font-futura text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-[#888] mb-1.5 md:mb-2">
              {item.label}
            </span>
            <span className="font-futura text-[11px] md:text-[12px] lg:text-[13px] tracking-[0.15em] uppercase text-[#e8e8e8] xl:whitespace-nowrap font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CredentialsBar;
