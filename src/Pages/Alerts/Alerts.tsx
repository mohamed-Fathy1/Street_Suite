import { useCallback, useState } from "react";
import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import Filter from "../../Components/Filter/Filter";
import HeaderTitle from "../../Components/HeaderTitle";
import SearchBar from "../../Components/SearchBar/SearchBar";
import StockDataContainer from "../../Components/StockDataContainer/StockDataContainer";
import NotificationBellIcon from "../../assets/svg/Desktop/NotificationBellIcon";
import "./Alerts.css";
import classNames from "classnames";
import { debounce } from "lodash";

function Alerts() {
  const [openFilter, setOpenFilter] = useState(false);

  const [search, setSearch] = useState("");

  const searchHandler = (value: string) => {
    setSearch(value);
  };

  const debouncedSearchHandler = useCallback(debounce(searchHandler, 300), []);

  return (
    <div className=" pl-3 pt-7 flex gap-5 flex-1 h-dvh">
      <div className="flex-1">
        <header className="flex  items-center gap-1 md:gap-3">
          <HeaderTitle color="white" sideColor="#53ACFF">
            Alerts
          </HeaderTitle>
          <SearchBar setSearch={debouncedSearchHandler} />
          <div
            className="block mr-1 lg:hidden"
            onClick={() => setOpenFilter(true)}
          >
            <ButtonPrimary size="sm" px={"23px"} py={"4px"}>
              Filter
            </ButtonPrimary>
          </div>
          <div className="hidden lg:block">
            <NotificationBellIcon />
          </div>
        </header>
        <main className="mt-5 pr-2 overflow-auto main">
          <StockDataContainer searchReasult={search} />
        </main>
      </div>
      <div
        className={classNames(
          "absolute backdrop-blur-xl z-50 inset-0 lg:relative lg:ml-auto flex justify-center items-center filter__backdrop lg:flex",
          openFilter ? "flex" : "hidden"
        )}
      >
        <Filter
          isOpen={openFilter}
          setOpen={() => setOpenFilter((prev) => !prev)}
        />
      </div>
    </div>
  );
}

export default Alerts;
