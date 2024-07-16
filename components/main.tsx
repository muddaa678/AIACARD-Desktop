import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MainType = {
  className?: string;
  name1?: string;
  prop?: string;

  /** Style props */
  topPadding?: CSSProperties["padding"];
};

const Main: NextPage<MainType> = ({
  className = "",
  name1,
  prop,
  topPadding,
}) => {
  const mainStyle: CSSProperties = useMemo(() => {
    return {
      padding: topPadding,
    };
  }, [topPadding]);

  return (
    <div
      className={`w-[14.75rem] flex flex-col items-start justify-start pt-[9.687rem] px-[1.062rem] pb-[1.937rem] box-border relative gap-[9.812rem] text-left text-[0.75rem] text-white font-montserrat mq700:pt-[6.313rem] mq700:pb-[1.25rem] mq700:box-border mq950:hidden ${className}`}
      style={mainStyle}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[1.5rem]">
        <button className="cursor-pointer [border:none] py-[0.312rem] px-[0.25rem] bg-goldenrod self-stretch rounded-3xs flex flex-row items-start justify-start gap-[0.875rem] z-[1]">
          <div className="h-[2.813rem] w-[12.375rem] relative rounded-3xs bg-goldenrod hidden" />
          <div className="h-[2.188rem] w-[2.188rem] relative">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full z-[2]" />
            <img
              className="absolute top-[0.625rem] left-[0.625rem] w-[1rem] h-[0.938rem] object-contain z-[3]"
              alt=""
              src="/square@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <a className="[text-decoration:none] relative text-[0.75rem] font-bold font-montserrat text-black text-left inline-block min-w-[2.375rem] z-[2]">
              Home
            </a>
          </div>
        </button>
        <div className="flex flex-row items-start justify-end py-[0rem] px-[2.187rem]">
          <div className="flex flex-col items-start justify-start gap-[2.5rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
              <b className="relative inline-block min-w-[4.438rem] z-[1]">
                Buy Crypto
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
              <b className="relative inline-block min-w-[5.625rem] z-[1]">
                Manage Cards
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
              <b className="relative inline-block min-w-[4.625rem] z-[1]">
                Transaction
              </b>
            </div>
            <b className="relative inline-block min-w-[5.125rem] z-[1]">
              Beneficiaries
            </b>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem] text-black">
              <b className="relative inline-block min-w-[4.938rem] z-[1]">
                ATM Locator
              </b>
            </div>
            <b className="relative inline-block min-w-[6.813rem] z-[1]">
              Account Settings
            </b>
            <b className="relative inline-block min-w-[4.563rem] z-[1]">
              Need Help?
            </b>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-[0.562rem] px-[3.625rem] pb-[0.625rem] bg-orangered self-stretch rounded-8xs flex flex-row items-start justify-start gap-[0.625rem] z-[1]">
        <div className="h-[2.5rem] w-[12.375rem] relative rounded-8xs bg-orangered hidden" />
        <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
          <b className="relative text-[0.75rem] inline-block font-montserrat text-white text-left min-w-[2.813rem] z-[1]">
            Logout
          </b>
        </div>
        <img
          className="h-[1.313rem] w-[1.375rem] relative object-contain min-h-[1.313rem] z-[1]"
          alt=""
          src="/untitled-design-50-1@2x.png"
        />
      </button>
      <div className="w-full h-[174.563rem] absolute !m-[0] right-[0rem] bottom-[-124.75rem] left-[0rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-black box-border w-full h-full border-r-[2px] border-solid border-gray-200" />
        <img
          className="absolute top-[2.5rem] left-[1.063rem] w-[12.375rem] h-[3.313rem] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/ai-analysis-logo-13-1@2x.png"
        />
        <div className="absolute top-[23.625rem] left-[1.313rem] w-[2.313rem] h-[2.313rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
          <img
            className="absolute top-[0.8rem] left-[0.719rem] w-[0.875rem] h-[0.719rem] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={name1}
          />
        </div>
        <div className="absolute top-[20.188rem] left-[1.313rem] w-[2.313rem] h-[2.313rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
          <img
            className="absolute top-[0.719rem] left-[0.719rem] w-[0.956rem] h-[0.956rem] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={prop}
          />
        </div>
        <div className="absolute top-[13.313rem] left-[1.313rem] w-[2.344rem] h-[2.344rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full z-[1]" />
          <img
            className="absolute top-[0.688rem] left-[0.688rem] w-[0.938rem] h-[1rem] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/muddashir-siddique-10-1@2x.png"
          />
        </div>
        <div className="absolute top-[16.75rem] left-[1.313rem] w-[2.344rem] h-[2.344rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
          <img
            className="absolute top-[0.806rem] left-[0.725rem] w-[0.969rem] h-[0.806rem] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/32@2x.png"
          />
        </div>
        <div className="absolute top-[27.063rem] left-[1.313rem] w-[2.313rem] h-[2.313rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full z-[1]" />
          <img
            className="absolute top-[0.688rem] left-[0.813rem] w-[0.688rem] h-[1rem] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/muddashir-siddique-22-1@2x.png"
          />
        </div>
        <div className="absolute top-[33.938rem] left-[1.313rem] w-[2.313rem] h-[2.313rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
          <img
            className="absolute top-[0.719rem] left-[0.638rem] w-[1.038rem] h-[0.956rem] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/36@2x.png"
          />
        </div>
        <div className="absolute top-[30.5rem] left-[1.313rem] w-[2.313rem] h-[2.313rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full" />
          <img
            className="absolute top-[0.638rem] left-[0.638rem] w-[1.038rem] h-[1.038rem] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/35@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
