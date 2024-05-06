import { useEffect, useState } from "react";
import StockDataCard from "../StockDataCard/StockDataCard";
import { stockData } from "./StockData";
import "./StockDataContainer.css";

export function StockDataContainer({
  searchReasult,
}: {
  searchReasult: string;
}) {
  const [SD, setStockData] = useState(stockData);

  useEffect(() => {
    // filter the stock data based on the search result
    setStockData(
      stockData.filter((stock) =>
        stock.symbol.includes(searchReasult.toUpperCase())
      )
    );
  }, [searchReasult]);

  return (
    <>
      {SD ? (
        <div className="flex flex-col gap-3">
          {SD &&
            SD.length > 0 &&
            SD.map((stock, index) => (
              <details key={index}>
                <summary className="list-none">
                  <StockDataCard key={index} stock={stock} />
                </summary>
                <div className="flex flex-col justify-center gap-2 bg-neutral-900 py-4 px-5 rounded-b-md">
                  <h2 className="text-white text-xs sm:text-sm md:text-base">
                    <b>$TSLA</b> just announced an acquisition of <b>$NFLX</b>{" "}
                    at <b>$200</b> B.{" "}
                  </h2>
                  <p className="text-white text-xs sm:text-sm md:text-base">
                    This is an <a href="#">arbitrage opportunity</a>, with the
                    max gain being %X if the deal closes, but the possible risk
                    is %Y  if the deal fails, If the deal success is % and
                    therefore the recommended play is <a href="#">long/short</a>{" "}
                    $ABC
                  </p>
                </div>
              </details>
            ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-72">
          <p className="text-white text-lg">No data available</p>
        </div>
      )}
    </>
  );
}

export default StockDataContainer;
