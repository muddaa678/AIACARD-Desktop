import type { NextPage } from "next";

export type ItemType = {
  className?: string;
  screenshot20240713At551001?: string;
};

const Item: NextPage<ItemType> = ({
  className = "",
  screenshot20240713At551001,
}) => {
  return (
    <div
      className={`w-[24.75rem] rounded-3xs box-border flex flex-col items-end justify-start pt-[2.062rem] px-[2.375rem] pb-[2.068rem] gap-[1.587rem] min-w-[24.75rem] max-w-full z-[2] text-left text-[0.75rem] text-black font-montserrat border-[0px] border-solid border-gray-200 mq700:pt-[1.313rem] mq700:pb-[1.375rem] mq700:box-border mq700:min-w-full mq950:flex-1 ${className}`}
    >
      <img
        className="w-[24.75rem] h-[32.313rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-12.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.325rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.125rem]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[1rem] mq450:flex-wrap">
            <div className="rounded-8xs bg-goldenrod flex flex-row items-start justify-start py-[0.437rem] pr-[0.625rem] pl-[0.687rem] gap-[0.562rem] z-[3] border-[1px] border-solid border-goldenrod">
              <div className="h-[2.063rem] w-[10.813rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
              <b className="relative inline-block min-w-[7.875rem] z-[1]">
                Muddashir Personal
              </b>
              <div className="w-[0.938rem] rounded-6xl bg-black flex flex-row items-start justify-start py-[0.062rem] px-[0.25rem] box-border z-[1] text-[0.688rem] text-goldenrod">
                <div className="h-[0.938rem] w-[0.938rem] relative rounded-6xl bg-black hidden" />
                <b className="relative [transform:_rotate(-180deg)] z-[1]">^</b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem] text-white">
              <div className="flex flex-row items-start justify-start relative">
                <input
                  className="[outline:none] bg-[transparent] h-[2.063rem] w-[8.5rem] absolute !m-[0] top-[calc(50%_-_16.5px)] left-[calc(50%_-_68px)] rounded-8xs box-border border-[2px] border-solid border-gray-200"
                  type="text"
                />
                <div className="relative font-light inline-block min-w-[7.5rem] z-[1]">
                  + Add New AIA Card
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-[12.438rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/14@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.687rem] pl-[1.062rem] text-center text-[0.625rem] text-white">
          <div className="flex-1 flex flex-row items-start justify-start gap-[1.643rem] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-end justify-start gap-[0.475rem] min-w-[5rem]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                <div className="h-[2.938rem] w-[2.938rem] relative z-[3]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
                  <img
                    className="absolute top-[0.95rem] left-[0.95rem] w-[1.031rem] h-[1.113rem] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/screenshot-20240713-at-55100pm@2x.png"
                  />
                </div>
                <div className="h-[2.781rem] w-[2.781rem] relative z-[3]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
                  <img
                    className="absolute top-[0.875rem] left-[0.875rem] w-[1.113rem] h-[1.031rem] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src={screenshot20240713At551001}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1.681rem]">
                <b className="flex-1 relative inline-block min-w-[3.256rem] shrink-0 z-[3]">
                  Recharge
                </b>
                <b className="flex-1 relative inline-block min-w-[2.781rem] shrink-0 z-[3]">
                  Transfer
                </b>
              </div>
            </div>
            <div className="w-[3.175rem] flex flex-col items-start justify-start gap-[0.631rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.187rem]">
                <div className="h-[2.781rem] w-[2.781rem] relative shrink-0 z-[3]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
                  <img
                    className="absolute top-[0.875rem] left-[0.794rem] w-[1.269rem] h-[1.031rem] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/screenshot-20240713-at-55104pm@2x.png"
                  />
                </div>
              </div>
              <b className="self-stretch relative inline-block min-w-[3.175rem] shrink-0 z-[3]">
                View Pin
              </b>
            </div>
            <div className="w-[3.969rem] flex flex-col items-end justify-start gap-[0.631rem]">
              <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.562rem] pl-[0.625rem]">
                <div className="h-[2.781rem] w-[2.781rem] relative shrink-0 z-[3]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
                  <img
                    className="absolute top-[0.875rem] left-[0.875rem] w-[1.113rem] h-[1.031rem] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/screenshot-20240713-at-55110pm@2x.png"
                  />
                </div>
              </div>
              <b className="self-stretch relative inline-block min-w-[3.969rem] shrink-0 z-[3]">
                Report Loss
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.125rem] pl-[0.375rem] text-center text-white">
        <div className="flex-1 rounded-8xs bg-gray-200 flex flex-col items-end justify-start pt-[1.243rem] px-[0.937rem] pb-[1.343rem] gap-[1.125rem] z-[3]">
          <div className="w-[19.45rem] h-[5.238rem] relative rounded-8xs bg-gray-200 hidden" />
          <div className="self-stretch flex flex-row items-start justify-between min-h-[1rem] gap-[1.25rem] mq450:flex-wrap">
            <b className="relative inline-block min-w-[5.5rem] z-[4]">
              Monthly Limit
            </b>
            <div className="relative text-right inline-block min-w-[7.125rem] z-[4]">
              <span>€23,456/</span>
              <b>€100,000</b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.25rem] pl-[0rem]">
            <div className="h-[0.556rem] flex-1 relative rounded-31xl bg-darkslategray-100 box-border z-[4] border-[1px] border-solid border-gray-100">
              <div className="absolute top-[0rem] left-[0rem] rounded-31xl bg-darkslategray-100 box-border w-full h-full hidden z-[4] border-[1px] border-solid border-gray-100" />
              <div className="absolute top-[0.081rem] left-[0.081rem] rounded-31xl bg-goldenrod w-[6.569rem] h-[0.4rem] z-[5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
