import { useContext } from "react";
import DataContext from "../context/DataContext";

const SearchBox = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <main className="search-box">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          placeholder="Search Products here...."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </main>
  );
};

export default SearchBox;
