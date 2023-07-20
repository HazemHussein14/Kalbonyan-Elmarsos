import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../../hooks/http";
import ErrorModal from '../UI/ErrorModal'
const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [enetredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, clear, sendRequest } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enetredFilter === inputRef.current.value) {
        const query =
          enetredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enetredFilter}"`;
        sendRequest(
          "https://react-hooks-update-89b6b-default-rtdb.firebaseio.com/ingredients.json" +
            query,
          "GET"
        );
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [enetredFilter, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            ref={inputRef}
            type="text"
            value={enetredFilter}
            onChange={(e) => setEnteredFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
