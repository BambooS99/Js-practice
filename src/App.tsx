import { useState, type ChangeEvent } from "react";
import "./App.css";
import { useMockData } from "./api/API";

function App() {
  const { data } = useMockData();
  const [text, setText] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [isOnSale, setIsOnSale] = useState(false);
  const [isTaxed, setIsTaxed] = useState(false);
  const [isCurrencyConverted, setIsCurrencyConverted] = useState(false);
  const [itemSearchedFor, setItemSearchedFor] = useState("");
  const [findAnyItem, setFindAnyItem] = useState(false);

  const query = text.toLowerCase().trim();

  const matchingStores = query
    ? data?.filter((store) =>
        store.inventory.some((item) => item.name.toLowerCase().includes(query)),
      )
    : [];

  const sortedList = isSorted
    ? data?.filter((store) => store.distance < 10)
    : [];

  const firstStoreSale = isOnSale
    ? data?.[0]?.inventory.map((item) => ({
        ...item,
        salePrice: item.price * 0.8,
      }))
    : [];

  const taxedData = isTaxed
    ? data?.map((store) => ({
        ...store,
        inventory: store.inventory.map((item) => ({
          ...item,
          taxedPrice: item.price * 1.07,
        })),
      }))
    : [];

  // golden rule : if its an object, use .map to enter, else if its an array use map
  const currencyConverted = isCurrencyConverted
    ? data?.map((store) =>
        store.inventory.map((item) => ({
          ...item,
          convertedCurrency: item.price * 0.5,
        })),
      )
    : [];

  const itemSearchResults = findAnyItem
    ? data?.flatMap((item) =>
        item.inventory.filter((x) =>
          x.name.toLowerCase().includes(itemSearchedFor.toLocaleLowerCase()),
        ),
      )
    : [];

  //
  //
  //
  //
  //
  //

  function handleDistance() {
    isSorted ? setIsSorted(false) : setIsSorted(true);
  }

  function handleCurrencyConversion() {
    isCurrencyConverted
      ? setIsCurrencyConverted(false)
      : setIsCurrencyConverted(true);
  }

  function handleAnyItemClick() {
    findAnyItem ? setFindAnyItem(false) : setFindAnyItem(true);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemSearchedFor(event.target.value);
  };
  //
  //
  //
  //
  //
  //
  return (
    <>
      <div>
        <h1>Search for your item: </h1>
        <input type="text" value={text} onChange={handleChange}></input>
        <button>Go</button>
      </div>
      <ul>
        {matchingStores?.map((stores) => (
          <li key={stores.id}>{stores.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={handleDistance}>Sort by distance</button>
        {sortedList?.map((stores) => (
          <li key={stores.id}>{stores.name}</li>
        ))}
      </div>
      <h1> Sorted Stores</h1>
      <ul>
        <button
          onClick={() => (isOnSale ? setIsOnSale(false) : setIsOnSale(true))}>
          Show sale prices
        </button>

        {firstStoreSale?.map((item) => (
          <li key={item.id}>
            {item.name + ""}
            {item.salePrice}
          </li>
        ))}
      </ul>
      <h1>Prices with converted Currency: </h1>
      <button onClick={handleCurrencyConversion}> show</button>
      <ul>
        {currencyConverted?.map((item) =>
          item.map((x) => (
            <li key={x.id}>
              {x.name} {x.convertedCurrency}
            </li>
          )),
        )}
      </ul>
      <h1>Find any item</h1>
      <input
        type="text"
        value={itemSearchedFor}
        onChange={handleSearchChange}></input>{" "}
      <button onClick={handleAnyItemClick}>Go!</button>
      <ul>
        {itemSearchResults?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
