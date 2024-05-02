import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import Filter from "../../Components/Filter/Filter";
import HeaderTitle from "../../Components/HeaderTitle";
import SearchBar from "../../Components/SearchBar/SearchBar";
import StockDataContainer from "../../Components/StockDataContainer/StockDataContainer";
import NotificationBellIcon from "../../assets/svg/Desktop/NotificationBellIcon";
import "./Alerts.css";

function Alerts() {
  return (
    <div className="@container pl-3 pt-7 flex gap-5 flex-1 max-h-dvh">
      <div className="flex-1">
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
      <div className="h-full ml-auto flex items-center">
        <Filter />
      </div>
    </div>
  );
}

export default Alerts;
