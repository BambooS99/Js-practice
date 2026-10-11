import { useDebounce } from "./helpers/debounce";

export default function Dropdown({
  options,
  debouncedValue,
}: {
  options: string[] | undefined;
  debouncedValue: string;
}) {
  const searchResults = options?.filter((item) =>
    item.toLowerCase().includes(debouncedValue.toLowerCase()),
  );
  const debouncedSearchResults = useDebounce(searchResults, 300);

  return (
    <>
      <ul>
        {debouncedSearchResults?.map((debouncedSearchResults, index) => (
          <li key={index}>
            <button>{debouncedSearchResults}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
