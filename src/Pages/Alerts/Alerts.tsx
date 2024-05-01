import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import HeaderTitle from "../../Components/HeaderTitle";
import SearchBar from "../../Components/SearchBar/SearchBar";
import NotificationBellIcon from "../../assets/svg/Desktop/NotificationBellIcon";

function Alerts() {
  return (
    <div className="@container px-3 pt-7 flex-1">
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
    </div>
  );
}

export default Alerts;
