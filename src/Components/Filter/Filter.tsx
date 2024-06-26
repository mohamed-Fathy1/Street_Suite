import { useEffect, useState } from "react";
import SearchIcon from "../../assets/svg/SearchIcon";
import "./Filter.css";
import RadioButtons from "../RadioButtons/RadioButtons";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import WheelPicker from "../WheelPicker/WheelPicker";
import classNames from "classnames";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const industries = [
  { name: "Healthcare", id: 1, img: "https://via.placeholder.com/150" },
  { name: "Materials", id: 2, img: "https://via.placeholder.com/150" },
  { name: "Energy", id: 3, img: "https://via.placeholder.com/150" },
  {
    name: "Consumer Discretionary",
    id: 4,
    img: "https://via.placeholder.com/150",
  },
  { name: "Consumer Staples", id: 5, img: "https://via.placeholder.com/150" },
  { name: "Real Estate", id: 6, img: "https://via.placeholder.com/150" },
  { name: "IT", id: 7, img: "https://via.placeholder.com/150" },
  { name: "Industrials", id: 8, img: "https://via.placeholder.com/150" },
  { name: "Utilities", id: 9, img: "https://via.placeholder.com/150" },
  { name: "Financials", id: 10, img: "https://via.placeholder.com/150" },
];

function Filter({ isOpen, setOpen }: any) {
  const [selectedIndustries, setSelectedIndustries] = useState<any>([]);

  const handleIndustryChange = (e: any) => {
    const checked = e.target.checked;
    const value = e.target.nextSibling.textContent;
    if (checked) {
      setSelectedIndustries([...selectedIndustries, value]);
    } else {
      setSelectedIndustries(
        selectedIndustries.filter((industry: any) => industry !== value)
      );
    }
  };

  useEffect(() => {
    // close filter when clicked outside
    const handleClickOutside = (e: any) => {
      if (e.target.classList.contains("filter__backdrop")) {
        console.log("clicked outside");
        setOpen();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: "#181818" }}
      className="relative flex-col justify-center rounded-lg lg:rounded-l-lg py-4 px-7  lg:flex lg:w-[20rem] xl:w-[27rem] filter__container"
    >
      <button
        className={classNames(
          "absolute top-4 right-4 focus:outline-none",
          isOpen ? "block" : "hidden"
        )}
        onClick={() => setOpen()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-2xl text-center font-bold">Filter</h2>
      <div className="flex flex-col items-center gap-1 mt-2">
        <div className="flex gap-5 w-full justify-between px-1">
          <span className="text-[0.875rem] font-bold">Filters Applied</span>
          <span className="text-[0.875rem] font-bold">Clear All</span>
        </div>
        <div className="flex flex-wrap gap-2 min-h-10 max-h-20 rounded-lg bg-neutral-800 px-2 py-1 w-full overflow-auto">
          {selectedIndustries.length > 0 ? (
            selectedIndustries.map((industry: any) => (
              <div
                key={industry}
                className="flex items-center gap-2 bg-blue-400 py-0.5 px-1 rounded h-fit text-neutral-800"
                onClick={() => {
                  const inputElement = document.querySelector(
                    `input[value=${industry.replace(" ", "")}`
                  ) as HTMLInputElement;
                  inputElement?.click();
                  setSelectedIndustries(
                    selectedIndustries.filter(
                      (selectedIndustry: any) => selectedIndustry !== industry
                    )
                  );
                }}
              >
                <span className="text-xs">{industry}</span>
                <button className="focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <span className="text-[0.875rem] p-1 text-neutral-500">
              No filters applied
            </span>
          )}
        </div>
      </div>
      <div
        style={{ backgroundColor: "#202020" }}
        className="flex flex-col gap-1 mt-4 rounded-lg px-4 py-2"
      >
        <header>
          <h3 className="text-base font-bold ml-[-5px]">Stocks</h3>
        </header>

        <div>
          <div
            style={{ backgroundColor: "#313131" }}
            className="flex items-center gap-2 bg-transparent py-1 px-3 rounded-md w-full"
          >
            <input
              type="text"
              placeholder="$ TICKER"
              className="bg-transparent text-white placeholder:text-neutral-500  focus:outline-none w-full"
            />
            <div className="shrink-0">
              <SearchIcon />
            </div>
          </div>
          <div className="mt-4">
            <details open>
              <summary className="text-[0.875rem] font-bold">
                <h3 className="inline-block">Industry</h3>
              </summary>
              <div className="mt-1 flex flex-col flex-wrap max-h-36 gap-x-1">
                {industries.map((industry) => (
                  <div className="lg:border-l-2 py-0.5 border-white pl-1">
                    <div
                      key={industry.id}
                      className="flex items-center gap-2 relative"
                    >
                      <input
                        type="checkbox"
                        className="absolute opacity-0 h-full w-full"
                        value={industry.name.replace(" ", "")}
                        onChange={handleIndustryChange}
                      />
                      <span className="text-xs">{industry.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          </div>
          <div className="flex justify-around mt-4">
            <details open>
              <summary className="text-[0.875rem] font-bold">
                <h3 className="inline-block">Market Cap</h3>
              </summary>
              <div className="mt-1">
                <div className="flex flex-col gap-2">
                  <RadioButtons group="marketCap">Micro</RadioButtons>
                  <RadioButtons group="marketCap">Small</RadioButtons>
                  <RadioButtons group="marketCap">Large</RadioButtons>
                </div>
              </div>
            </details>
            <details open>
              <summary className="text-[0.875rem] font-bold">
                <h3 className="inline-block">Risk Level</h3>
              </summary>
              <div className="mt-1">
                <div className="flex flex-col gap-2">
                  <RadioButtons group="dividendYield">Low Risk</RadioButtons>
                  <RadioButtons group="dividendYield">Med Risk</RadioButtons>
                  <RadioButtons group="dividendYield">High Risk</RadioButtons>
                </div>
              </div>
            </details>
          </div>

          <div className="flex justify-around gap-2 mt-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-[0.875rem] text-center font-bold">
                strategy
              </h3>
              <WheelPicker
                list={["Big Option Buys", "Merger Arbitrage", "Short Reports"]}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[0.875rem] text-center font-bold">asset</h3>
              <WheelPicker list={["Stocks", "Options", "Futures"]} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <ButtonSecondary size="lg" py="5px" px="1.5rem">
          Save Filter
        </ButtonSecondary>
        <ButtonPrimary size="lg" py="5px" px="3rem">
          Apply
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default Filter;
