import type { NextPage } from "next";
import Main from "../components/main";
import Welcome from "../components/welcome";
import Item from "../components/item";
import ProcessingTransaction from "../components/processing-transaction";
import TransactionHistory from "../components/transaction-history";

const DesktopHome3: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[1.75rem] leading-[normal] tracking-[normal] mq950:pl-[1.25rem] mq950:box-border">
      <Main
        name1="/341@2x.png"
        prop="/331@2x.png"
        topPadding="9.687rem 1.062rem 1.937rem"
      />
      <section className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_264px)] text-center text-[0.75rem] text-white font-montserrat mq950:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
          <Welcome />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.375rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[2.187rem] max-w-full mq700:gap-[1.063rem] mq950:flex-wrap">
              <Item screenshot20240713At551001="/screenshot-20240713-at-55100pm-11@2x.png" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.187rem] min-w-[28.625rem] max-w-full mq700:min-w-full">
                <div className="w-[14.688rem] flex flex-row items-start justify-start gap-[0.562rem]">
                  <div className="flex-1 rounded-8xs bg-gray-200 flex flex-row items-start justify-start pt-[0.375rem] px-[0.812rem] pb-[0.5rem] border-[1px] border-solid border-gray-200">
                    <div className="h-[2.063rem] w-[7.063rem] relative rounded-8xs bg-gray-200 box-border hidden border-[1px] border-solid border-gray-200" />
                    <a className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[5.313rem] z-[1]">
                      Transactions
                    </a>
                  </div>
                  <button className="cursor-pointer pt-[0.375rem] pb-[0.5rem] pr-[1.5rem] pl-[1.562rem] bg-goldenrod flex-[0.7294] rounded-8xs flex flex-row items-start justify-start border-[1px] border-solid border-goldenrod hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100">
                    <div className="h-[2.063rem] w-[7.063rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
                    <a className="[text-decoration:none] flex-1 relative text-[0.75rem] font-bold font-montserrat text-black text-center inline-block min-w-[3.875rem] z-[1]">
                      Recharge
                    </a>
                  </button>
                </div>
                <div className="self-stretch rounded-3xs box-border flex flex-col items-end justify-start pt-[0.125rem] px-[0rem] pb-[1.375rem] gap-[0.937rem] max-w-full text-left border-[0px] border-solid border-gray-200">
                  <img
                    className="self-stretch h-[29.063rem] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/rectangle-13.svg"
                  />
                  <ProcessingTransaction />
                  <div className="w-[43.063rem] flex flex-row items-start justify-end py-[0rem] px-[1.375rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] max-w-full mq700:gap-[1.063rem]">
                      <TransactionHistory />
                      <div className="w-[38.75rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq450:flex-wrap">
                        <div className="w-[12.188rem] flex flex-row items-start justify-start py-[0rem] pr-[0.562rem] pl-[0rem] box-border gap-[3.125rem]">
                          <img
                            className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/screenshot-20240713-at-84107pm-1@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                            <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                              <div className="relative font-medium inline-block min-w-[5.25rem] z-[1]">
                                99,997.23 ETH
                              </div>
                              <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                                13-07-2024 16:05:23
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] text-lightgray">
                          <div className="relative inline-block min-w-[3.75rem] z-[1]">
                            Refunded
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                      </div>
                      <div className="w-[38.688rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq450:flex-wrap">
                        <div className="w-[12.75rem] flex flex-row items-start justify-start py-[0rem] pr-[1.062rem] pl-[0rem] box-border gap-[3.125rem]">
                          <img
                            className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/screenshot-20240713-at-84107pm-1@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                            <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                              <div className="relative font-medium inline-block min-w-[5.938rem] z-[1]">
                                99,997.23 USDC
                              </div>
                              <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                                13-07-2024 16:05:23
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] text-lime">
                          <div className="relative inline-block min-w-[4.25rem] z-[1]">
                            Completed
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-end">
                        <button className="cursor-pointer pt-[0.375rem] px-[1.75rem] pb-[0.687rem] bg-[transparent] w-[7.063rem] rounded-8xs box-border flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-goldenrod hover:bg-darkgoldenrod-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100">
                          <div className="h-[2.063rem] w-[7.063rem] relative rounded-8xs box-border hidden border-[1px] border-solid border-goldenrod" />
                          <b className="flex-1 relative text-[0.625rem] font-montserrat text-white text-center z-[2]">
                            View All
                          </b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[6rem] relative">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-3xs w-full h-full"
                alt=""
                src="/rectangle-27.svg"
              />
              <img
                className="absolute top-[1.125rem] left-[1.75rem] w-[67.5rem] h-[3.625rem] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/untitled-design-53-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopHome3;
