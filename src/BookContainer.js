import React from "react";
import BookCard from "./BookCard";

export default function BookContainer({ library }) {
  let id = 0;
  const idGen = () => {
    return id++;
  };
  return (
    <div className="book-container">
      {library.map((book) => {
        return <BookCard id={idGen()} key={id} book={book} />;
      })}
    </div>
  );
}
