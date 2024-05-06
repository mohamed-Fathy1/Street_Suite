import SearchIcon from "../../assets/svg/SearchIcon";
import { useState } from "react";

function SearchBar({ setSearch }: { setSearch: (value: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <div className="@container flex-1">
      <div className="flex items-center justify-end @xs:justify-between gap-2 bg-transparent p-2 rounded-md @xs:bg-zinc-800 @xs:px-4">
        <input
          type="text"
          placeholder="Search By..."
          className="bg-transparent hidden @xs:block text-white placeholder:text-white flex-1 focus:outline-none"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(event.target.value);
            setValue(event.target.value);
          }}
        />
        <div className="shrink-0">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
