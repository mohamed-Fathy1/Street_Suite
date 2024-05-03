import ChangeIconMin from "../../assets/svg/mobile/ChangeIconMin";
import PriceIconMin from "../../assets/svg/mobile/PriceIconMin";
import RiskIconMin from "../../assets/svg/mobile/RiskIconMin";
import SymbolIconMin from "../../assets/svg/mobile/SymbolIconMin";
import StockDataCardSeparator from "../StockDataContainer/StockDataCardSeparator";

function StockDataCard({ stock }: { stock: any }) {
  return (
    <div className="@container flex items-center justify-evenly  gap-2 bg-zinc-800 p-4 rounded-md transition-colors duration-200 ease-in-out group">
      <div className="flex items-center gap-1 md:gap-3 w-[20%] @md:px-[2vw] @lg:px-[5vw] md:px-[2vw]">
        <div>
          <SymbolIconMin />
        </div>
        <p className="text-white text-xs md:text-sm">{stock.symbol}</p>
      </div>

      <StockDataCardSeparator />

      <div className="flex items-center gap-1 md:gap-3 w-[20%] px-[1vw] @xs:px-[2vw] @md:px-[2vw] @lg:px-[5vw] md:px-[3vw]">
        <div>
          <PriceIconMin />
        </div>
        <p className="text-white text-xs md:text-sm">{stock.latestPrice}</p>
      </div>

      <StockDataCardSeparator />

      <div className="flex items-center gap-1 md:gap-3 w-[20%] @md:px-[2vw] @lg:px-[5vw] md:px-[2vw]">
        <div>
          <ChangeIconMin />
        </div>
        <div
          className="text-white text-xs md:text-sm font-bold whitespace-nowrap"
          style={{ color: stock.change > 0 ? "#118F4B" : "#D94111" }}
        >
          {stock.changePercent} %
        </div>
      </div>

      <StockDataCardSeparator />

      <div className="flex items-center gap-1 md:gap-3 w-[20%] @md:px-[1vw] @lg:px-[3vw] md:px-[1vw]">
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
