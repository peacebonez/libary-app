import React from "react";

export default function BookCard({ book }) {
  const {
    volumeInfo: {
      title,
      imageLinks,
      authors,
      publishedDate,
      categories,
      infoLink,
    },
  } = book;
  return (
    <div className="book-card">
      <div className="card-title-container">
        <h1>{title}</h1>
      </div>
      <div className="card-image-list-container">
        <img src={imageLinks.thumbnail} alt="book" />

        <ul>
          <li>
            <b>
              Author:{" "}
              {authors
                ? authors.length > 1
                  ? authors.join(", ")
                  : authors
                : null}{" "}
            </b>
          </li>
          <li>
            <b>Published: {publishedDate}</b>
          </li>
          <li>
            <b>Categories: {categories}</b>
          </li>
          <li>
            <a href={infoLink} target="_blank">
              <button>More Info</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
