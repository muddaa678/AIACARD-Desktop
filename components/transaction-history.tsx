import type { NextPage } from "next";

export type TransactionHistoryType = {
  className?: string;
};

const TransactionHistory: NextPage<TransactionHistoryType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[38.75rem] flex flex-col items-start justify-start gap-[1.937rem] max-w-full text-left text-[0.75rem] text-white font-montserrat mq700:gap-[0.938rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq700:flex-wrap">
        <div className="w-[12.688rem] flex flex-row items-start justify-start py-[0rem] pr-[1.062rem] pl-[0rem] box-border gap-[3.125rem]">
          <img
            className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/screenshot-20240713-at-84107pm-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                99.23 AIAT
              </div>
              <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                13-07-2024 16:05:23
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] text-lime">
          <div className="relative inline-block min-w-[4.25rem] z-[1]">
            Completed
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] text-right">
          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
            - 6.90 EUR
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
        <div className="w-[11.625rem] flex flex-row items-end justify-start gap-[3.125rem]">
          <img
            className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/screenshot-20240713-at-84107pm-1@2x.png"
          />
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
            <div className="flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="relative font-medium inline-block min-w-[5.875rem] z-[1]">
                100,000.00 BTC
              </div>
              <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                13-07-2024 16:05:23
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[0.875rem] pl-[0rem] text-salmon">
          <div className="relative inline-block min-w-[2.313rem] z-[1]">
            Failed
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
            - 6.90 EUR
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
