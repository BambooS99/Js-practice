export default function SearchResultsComponent({
  handledInputFromSearch,
}: {
  handledInputFromSearch: string;
}) {
  return (
    <>
      <div>{handledInputFromSearch}</div>
    </>
  );
}
