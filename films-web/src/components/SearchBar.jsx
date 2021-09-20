import styles from "./SearchBar.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function SearchBar() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Find your films..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          <BiSearchAlt size={37} />
        </button>
      </div>
    </form>
  );
}
