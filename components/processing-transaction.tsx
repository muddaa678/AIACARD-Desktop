import type { NextPage } from "next";

export type ProcessingTransactionType = {
  className?: string;
};

const ProcessingTransaction: NextPage<ProcessingTransactionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-gray-200 box-border flex flex-row items-start justify-between py-[1.312rem] pr-[2.312rem] pl-[2.375rem] max-w-full gap-[1.25rem] z-[1] text-left text-[0.75rem] text-white font-montserrat border-[0px] border-solid border-gray-200 mq700:flex-wrap ${className}`}
    >
      <img
        className="h-[5.313rem] w-[44.063rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-17.svg"
      />
      <div className="w-[13.688rem] flex flex-row items-start justify-start py-[0rem] pr-[2.062rem] pl-[0rem] box-border gap-[3.125rem]">
        <img
          className="h-[2.688rem] w-[2.625rem] relative object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/screenshot-20240713-at-84107pm-1@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="relative font-medium inline-block min-w-[5.813rem] z-[2]">
              99,997.23 USDT
            </div>
            <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[2]">
              13-07-2024 16:05:23
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-goldenrod">
        <div className="relative inline-block min-w-[4.125rem] z-[2]">
          Processing
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
        <div className="relative font-medium inline-block min-w-[5.313rem] z-[2]">
          - 100,000 EUR
        </div>
      </div>
    </div>
  );
};

export default ProcessingTransaction;
