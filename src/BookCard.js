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

  console.log("imageLinks,", imageLinks);
  return (
    <div className="book-card">
      <div className="card-title-container">
        <h1>{title}</h1>
      </div>
      <div className="card-image-list-container">
        <img src={imageLinks ? imageLinks.thumbnail : null} alt={title} />

        <ul>
          <li>
            <b>Author:</b>{" "}
            {authors
              ? authors.length > 1
                ? authors.join(", ")
                : authors
              : null}{" "}
          </li>
          <li>
            <b>Published:</b> {publishedDate}
          </li>
          <li>
            <b>Categories:</b> {categories}
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <a href={infoLink} target="_blank">
          <button>More Info</button>
        </a>
      </div>
    </div>
  );
}
