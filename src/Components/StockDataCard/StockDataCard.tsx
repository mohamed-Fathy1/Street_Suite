import ChangeIconMin from "../../assets/svg/mobile/ChangeIconMin";
import PriceIconMin from "../../assets/svg/mobile/PriceIconMin";
import RiskIconMin from "../../assets/svg/mobile/RiskIconMin";
import SymbolIconMin from "../../assets/svg/mobile/SymbolIconMin";
import StockDataCardSeparator from "../StockDataContainer/StockDataCardSeparator";

function StockDataCard({ stock }: { stock: any }) {
  return (
    <div className="flex items-center justify-evenly  gap-2 bg-zinc-800 p-4 rounded-md hover:bg-blue-500 transition-colors duration-200 ease-in-out group">
      <div className="flex items-center gap-1 md:gap-3 w-[20%] md:px-[5%]">
        <div>
          <SymbolIconMin />
        </div>
        <p className="text-white text-xs md:text-sm">{stock.symbol}</p>
      </div>

      <StockDataCardSeparator />

      <div className="flex items-center gap-1 md:gap-3 w-[20%] md:px-[5%]">
        <div>
          <PriceIconMin />
        </div>
        <p className="text-white text-xs md:text-sm">{stock.latestPrice}</p>
      </div>

      <StockDataCardSeparator />

      <div className="flex items-center gap-1 md:gap-3 w-[20%] md:px-[5%]">
        <div>
          <ChangeIconMin />
        </div>
        <div
          className="text-white text-xs md:text-sm font-bold whitespace-nowrap"
          style={{ color: stock.change > 0 ? "#00FF00" : "#FF0000" }}
        >
          {stock.changePercent} %
        </div>
      </div>

      <StockDataCardSeparator />

      <div className="flex items-center gap-1 md:gap-3 w-[20%] md:px-[5%]">
        <div>
          <RiskIconMin />
        </div>
        <p className="text-white text-xs md:text-sm whitespace-nowrap ">
          {stock.riskLevel}
        </p>
      </div>
    </div>
  );
}

export default StockDataCard;
