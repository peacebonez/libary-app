import React from "react";
import { useState } from "react";
import Heading from "./Heading";
import "./App.css";
import BookContainer from "./BookContainer";
import Axios from "axios";
import ReactLoading from "react-loading";
import Error from "./Error";

export default function App() {
  const [userQuery, setUserQuery] = useState("");
  const [library, setLibrary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let url = `https://www.googleapis.com/books/v1/volumes?q=${userQuery}&maxResults=40`;

  const handleQuery = (e) => {
    setUserQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userQuery === "") return;
    getBook();
    setUserQuery("");
  };

  const getBook = async () => {
    setIsError(false);
    setIsLoading(true);
    let results = await Axios.get(url);
    // console.log("results:", results);
    console.log(results.data.totalItems);
    if (results.data.totalItems === 0) {
      setIsLoading(false);
      setIsError(true);
      return;
    } else {
      setIsLoading(false);
      setIsError(false);
      setLibrary([...results.data.items]);
    }
  };

  // console.log("library:", library);
  return (
    <div className="container">
      <Heading
        userQuery={userQuery}
        handleQuery={handleQuery}
        handleSubmit={handleSubmit}
      />
      {isLoading && <ReactLoading type="spin" color="#2c4b58" />}
      {isError && <Error />}
      <BookContainer library={library} />

      {/* {isLoading ? (
        <div className="loader">
          <ReactLoading type="spin" color="#2c4b58" />
        </div>
      ) : isError ? (
        <Error />
      ) : (
        <BookContainer library={library} />
      )} */}
    </div>
  );
}
