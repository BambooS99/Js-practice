import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useDebounce } from "./helpers/debounce";

export default function SearchResultsComponent({}: {}) {
  const [searchInput, setSearchInput] = useState("");
  const debouncedValue = useDebounce(searchInput, 500);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="type to seach..."></input>
        <button> Search!</button>
      </div>
    </>
  );
}
