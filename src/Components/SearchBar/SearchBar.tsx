import SearchIcon from "../../assets/svg/SearchIcon";

function SearchBar() {
  return (
    <div className="@container flex-1">
      <div className="flex items-center justify-end @xs:justify-between gap-2 bg-transparent p-2 rounded-md @xs:bg-zinc-800">
        <input
          type="text"
          placeholder="Search By..."
          className="bg-transparent hidden @xs:block text-white placeholder:text-white flex-1 focus:outline-none"
        />
        <div className="shrink-0">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
