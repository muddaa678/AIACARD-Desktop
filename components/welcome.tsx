import type { NextPage } from "next";

export type WelcomeType = {
  className?: string;
};

const Welcome: NextPage<WelcomeType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[2rem] text-white font-montserrat mq950:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq950:text-[1.625rem] mq450:text-[1.188rem]">
          <span>{`Welcome back, `}</span>
          <span className="text-goldenrod">Muddashir!</span>
        </h1>
        <div className="relative text-[1rem] whitespace-pre-wrap">{`Apply, recharge, transfer, and manage your AIA Cards - all in one place!  `}</div>
      </div>
      <div className="w-[12.313rem] rounded-3xs box-border flex flex-row items-start justify-start pt-[0.25rem] px-[0.812rem] pb-[0.437rem] gap-[0.812rem] text-[1.563rem] text-gray-200 border-[2px] border-solid border-gray-200">
        <div className="h-[4.313rem] w-[12.313rem] relative rounded-3xs box-border hidden border-[2px] border-solid border-gray-200" />
        <div className="h-[3.25rem] w-[3.25rem] relative">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-goldenrod box-border w-full h-full z-[1] border-[0px] border-solid border-gray-200" />
          <a className="[text-decoration:none] absolute top-[0.688rem] left-[0.875rem] font-bold text-[inherit] inline-block w-[2.188rem] h-[2.5rem] z-[2] mq450:text-[1.25rem]">
            M
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] text-[0.875rem] text-white">
          <div className="flex flex-row items-start justify-start gap-[0.187rem]">
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[4.938rem] z-[1]">
                Muddashir
              </a>
            </div>
            <img
              className="h-[1.125rem] w-[1.063rem] relative object-cover min-h-[1.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/muddashir-siddique-2-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
