import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import HeaderTitle from "../../Components/HeaderTitle";
import SearchBar from "../../Components/SearchBar/SearchBar";
import StockDataContainer from "../../Components/StockDataContainer/StockDataContainer";
import NotificationBellIcon from "../../assets/svg/Desktop/NotificationBellIcon";
import "./Alerts.css";

function Alerts() {
  return (
    <div className="@container px-3 pt-7 flex-1 lg:max-w-2xl max-h-dvh">
      <header className="flex  items-center @[31em]:gap-5">
        <HeaderTitle color="white" sideColor="#53ACFF">
          Alerts
        </HeaderTitle>
        <SearchBar />
        <div className="block @[31em]:hidden">
          <ButtonPrimary size="sm" px={"23px"} py={"4px"}>
            Filter
          </ButtonPrimary>
        </div>
        <div className="hidden @[31em]:block">
          <NotificationBellIcon />
        </div>
      </header>
      <main className="mt-5 pr-2 overflow-auto main">
        <StockDataContainer />
      </main>
    </div>
  );
}

export default Alerts;
