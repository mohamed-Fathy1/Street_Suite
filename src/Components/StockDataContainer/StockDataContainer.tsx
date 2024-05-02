import StockDataCard from "../StockDataCard/StockDataCard";
import { stockData } from "./StockData";

export function StockDataContainer() {
  return (
    <>
      {stockData ? (
        <div className="flex flex-col gap-3">
          {stockData.map((stock, index) => (
            <StockDataCard key={index} stock={stock} />
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
