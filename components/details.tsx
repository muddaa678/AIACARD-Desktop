import type { NextPage } from "next";

export type DetailsType = {
  className?: string;
};

const Details: NextPage<DetailsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-gray-200 box-border flex flex-row items-start justify-between pt-[1.375rem] pb-[1.318rem] pr-[2.25rem] pl-[2.375rem] max-w-full gap-[1.25rem] z-[1] text-left text-[0.75rem] text-white font-montserrat border-[0px] border-solid border-gray-200 mq700:flex-wrap ${className}`}
    >
      <img
        className="h-[5.313rem] w-[44.063rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-17.svg"
      />
      <img
        className="h-[2.619rem] w-[2.619rem] relative object-cover min-h-[2.625rem] z-[2]"
        loading="lazy"
        alt=""
        src="/screenshot-20240713-at-64039pm-1@2x.png"
      />
      <div className="w-[16.056rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
          <div className="relative font-medium z-[2]">
            CAPITAL CLUB LIMITED DXB ARE
          </div>
          <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[2]">
            13-07-2024 16:05:23
          </div>
        </div>
      </div>
      <div className="w-[5.931rem] flex flex-col items-start justify-start pt-[0.812rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-goldenrod">
        <div className="relative inline-block min-w-[4.125rem] z-[2]">
          Processing
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.312rem] text-right">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
          <div className="relative font-medium inline-block min-w-[5.313rem] z-[2]">
            - 100,000 EUR
          </div>
        </div>
        <div className="rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[2] text-[0.625rem] border-[0px] border-solid border-gray-200">
          <img
            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
            alt=""
            src="/rectangle-18.svg"
          />
          <div className="relative font-light inline-block min-w-[3.938rem] z-[3]">
            367,000 AED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
