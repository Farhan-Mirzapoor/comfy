import "./Search.css";
function Search() {
  return (
    <form id="ddgSearch" action="https://duckduckgo.com/">
      <input name="q" placeholder="Search…" autoFocus />
    </form>
  );
}

export default Search;
