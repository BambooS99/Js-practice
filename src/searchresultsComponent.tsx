import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useDebounce } from "./helpers/debounce";
import { useMockData } from "./api/API";
import Dropdown from "./Dropdown";

export default function SearchResultsComponent({}: {}) {
  const [searchInput, setSearchInput] = useState("");
  const debouncedValue = useDebounce(searchInput, 0);
  const [showSearchResults, setShowSearchResults] = useState(true);
  const { data } = useMockData();
  const options = data?.flatMap((stores) =>
    stores.inventory.map((items) => items.name.toLowerCase()),
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="type to seach..."
          value={debouncedValue}></input>
        <button> Search!</button>
        {showSearchResults ? (
          <Dropdown options={options} debouncedValue={debouncedValue} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
