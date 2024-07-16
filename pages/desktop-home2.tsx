import type { NextPage } from "next";
import Main from "../components/main";
import Item from "../components/item";
import Details from "../components/details";

const DesktopHome2: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[1.75rem] leading-[normal] tracking-[normal] mq950:pl-[1.25rem] mq950:box-border">
      <Main
        name1="/341@2x.png"
        prop="/331@2x.png"
        topPadding="9.687rem 1.062rem 1.937rem"
      />
      <section className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_264px)] text-left text-[2rem] text-white font-montserrat mq950:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq950:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
              <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq950:text-[1.625rem] mq450:text-[1.188rem]">
                <span>{`Welcome back, `}</span>
                <span className="text-goldenrod">Muddashir!</span>
              </h1>
              <h2 className="m-0 relative text-[1rem] font-normal font-inherit whitespace-pre-wrap">{`Apply, recharge, transfer, and manage your AIA Cards - all in one place!  `}</h2>
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.375rem] max-w-full text-center text-[0.75rem] text-black">
            <div className="self-stretch flex flex-row items-start justify-start gap-[2.187rem] max-w-full mq700:gap-[1.063rem] mq950:flex-wrap">
              <Item screenshot20240713At551001="/screenshot-20240713-at-55100pm-11@2x.png" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.187rem] min-w-[28.625rem] max-w-full mq700:min-w-full">
                <div className="w-[14.688rem] flex flex-row items-start justify-start gap-[0.562rem]">
                  <div className="flex-1 rounded-8xs bg-goldenrod flex flex-row items-start justify-start pt-[0.375rem] px-[0.812rem] pb-[0.5rem] border-[1px] border-solid border-goldenrod">
                    <div className="h-[2.063rem] w-[7.063rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
                    <b className="flex-1 relative inline-block min-w-[5.313rem] z-[1]">
                      Transactions
                    </b>
                  </div>
                  <button className="cursor-pointer pt-[0.375rem] pb-[0.5rem] pr-[1.5rem] pl-[1.562rem] bg-gray-200 flex-[0.7294] rounded-8xs flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
                    <div className="h-[2.063rem] w-[7.063rem] relative rounded-8xs bg-gray-200 box-border hidden border-[1px] border-solid border-gray-200" />
                    <a className="[text-decoration:none] flex-1 relative text-[0.75rem] font-montserrat text-white text-center inline-block min-w-[3.875rem] z-[1]">
                      Recharge
                    </a>
                  </button>
                </div>
                <div className="self-stretch rounded-3xs box-border flex flex-col items-end justify-start pt-[0.125rem] px-[0rem] pb-[1.318rem] gap-[1.875rem] max-w-full text-left text-white border-[0px] border-solid border-gray-200">
                  <img
                    className="self-stretch h-[29.063rem] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/rectangle-13.svg"
                  />
                  <Details />
                  <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.75rem] pl-[1.5rem] box-border max-w-full text-center text-[1.563rem]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[1.812rem] max-w-full mq700:flex-wrap">
                      <div className="flex flex-col items-end justify-start gap-[1.187rem] min-w-[16rem] mq700:flex-1">
                        <div className="flex flex-row items-end justify-start gap-[1.562rem]">
                          <img
                            className="h-[3.813rem] w-[3.688rem] relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/muddashir-siddique-16-2@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                            <b className="relative z-[1] mq450:text-[1.25rem]">
                              100,000 EUR
                            </b>
                            <h1 className="m-0 relative text-[1.25rem] font-normal font-inherit text-left inline-block min-w-[7.063rem] z-[1] mq450:text-[1rem]">
                              Completed
                            </h1>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[0.812rem] text-left text-[0.938rem]">
                          <div className="rounded-8xs flex flex-row items-start justify-start pt-[0.625rem] pb-[0.812rem] pr-[1rem] pl-[1.125rem] gap-[1.375rem] z-[1] border-[2px] border-solid border-gray-200">
                            <div className="h-[3.25rem] w-[16rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray-200" />
                            <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                              <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[5.563rem] z-[2]">
                                Need help?
                              </h3>
                            </div>
                            <div className="rounded-8xs bg-goldenrod flex flex-row items-start justify-start pt-[0.25rem] px-[0.562rem] pb-[0.187rem] whitespace-nowrap z-[2] text-[0.625rem] text-black border-[1px] border-solid border-goldenrod">
                              <div className="h-[1.438rem] w-[6.688rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
                              <b className="relative inline-block min-w-[5.438rem] z-[3]">
                                Contact Support
                              </b>
                            </div>
                          </div>
                          <div className="w-[5.313rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border">
                            <button className="cursor-pointer py-[0.187rem] px-[0.562rem] bg-[transparent] flex-1 rounded-8xs flex flex-row items-start justify-start gap-[0.625rem] z-[2] border-[2px] border-solid border-gray-200">
                              <div className="h-[1.188rem] w-[1.188rem] relative">
                                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-200 w-full h-full z-[3]" />
                                <img
                                  className="absolute top-[0.438rem] left-[0.313rem] w-[0.563rem] h-[0.375rem] object-contain z-[4]"
                                  alt=""
                                  src="/muddashir-siddique-15-2@2x.png"
                                />
                              </div>
                              <div className="h-[1.938rem] w-[5.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray-200" />
                              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                                <div className="relative text-[0.75rem] font-medium font-montserrat text-white text-right inline-block min-w-[1.938rem] z-[1]">
                                  Back
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 rounded-3xs bg-gray-200 box-border flex flex-row items-start justify-between pt-[1rem] pb-[0.937rem] pr-[0.937rem] pl-[1rem] min-w-[14.938rem] max-w-full gap-[1.25rem] z-[1] text-left text-[0.625rem] text-silver border-[0px] border-solid border-gray-200 mq450:flex-wrap">
                        <img
                          className="h-[11rem] w-[23rem] relative rounded-3xs hidden max-w-full"
                          alt=""
                          src="/rectangle-35.svg"
                        />
                        <div className="flex flex-col items-start justify-start gap-[0.637rem] min-w-[5.375rem] mq450:flex-1">
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.437rem] pl-[0.062rem]">
                            <div className="relative inline-block min-w-[4.875rem] z-[2]">
                              Business Name
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                            <div className="relative inline-block min-w-[1.5rem] z-[2]">
                              Type
                            </div>
                          </div>
                          <div className="relative inline-block min-w-[2.875rem] z-[2]">
                            Currency
                          </div>
                          <div className="relative inline-block min-w-[4.813rem] z-[2]">
                            Billing Amount
                          </div>
                          <div className="relative inline-block min-w-[5.125rem] z-[2]">
                            Conversion Rate
                          </div>
                          <div className="relative inline-block min-w-[4.5rem] z-[2]">
                            Transaction ID
                          </div>
                          <div className="relative inline-block min-w-[5.375rem] z-[2]">
                            Transaction Time
                          </div>
                        </div>
                        <div className="h-[9.063rem] flex flex-col items-end justify-start gap-[0.437rem] min-w-[10.563rem] text-right text-white mq450:flex-1">
                          <div className="relative font-medium z-[2]">
                            CAPITAL CLUB LIMITED DXB ARE
                          </div>
                          <div className="relative font-medium inline-block min-w-[2.938rem] z-[2]">
                            Payment
                          </div>
                          <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem]">
                            <div className="relative font-medium inline-block min-w-[1.375rem] z-[2]">
                              EUR
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-end pt-[0rem] px-[0.062rem] pb-[0.25rem]">
                            <div className="relative font-medium inline-block min-w-[0.938rem] z-[2]">
                              6.9
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem]">
                            <div className="relative font-medium inline-block min-w-[5.688rem] z-[2]">
                              1 AED = 0.252 EUR
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem]">
                            <div className="flex flex-row items-start justify-start gap-[0.437rem]">
                              <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                                <div className="relative font-medium inline-block min-w-[7.125rem] z-[2]">
                                  1260942952960757760
                                </div>
                              </div>
                              <div className="h-[1.313rem] w-[1.313rem] relative z-[2]">
                                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-black w-full h-full" />
                                <img
                                  className="absolute top-[0.375rem] left-[0.375rem] w-[0.563rem] h-[0.625rem] object-contain z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/muddashir-siddique-11-1@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem]">
                            <div className="relative font-medium inline-block min-w-[5.938rem] whitespace-nowrap z-[2]">
                              13-07-2024 16:05:23
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[0.256rem] pr-[2.25rem] pl-[2.375rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <img
                        className="h-[2.619rem] w-[2.619rem] relative object-cover min-h-[2.625rem] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/screenshot-20240713-at-64039pm-1@2x.png"
                      />
                      <div className="w-[16.056rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="relative font-medium z-[1]">
                            CAPITAL CLUB LIMITED DXB ARE
                          </div>
                          <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                            13-07-2024 16:05:23
                          </div>
                        </div>
                      </div>
                      <div className="w-[5.931rem] flex flex-col items-start justify-start pt-[0.812rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lime">
                        <div className="relative inline-block min-w-[4.25rem] z-[1]">
                          Completed
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray-200">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.187rem] pl-[2.375rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[2.619rem] h-[2.619rem] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/screenshot-20240713-at-64039pm-1@2x.png"
                        />
                      </div>
                      <div className="w-[16.056rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="relative font-medium z-[1]">
                            CAPITAL CLUB LIMITED DXB ARE
                          </div>
                          <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                            13-07-2024 16:05:23
                          </div>
                        </div>
                      </div>
                      <div className="w-[5.994rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-salmon">
                        <div className="relative inline-block min-w-[2.313rem] z-[1]">
                          Failed
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray-200">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
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

export default DesktopHome2;
