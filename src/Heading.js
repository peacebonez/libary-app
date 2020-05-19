import React from "react";

export default function Heading({ userQuery, handleQuery, handleSubmit }) {
  return (
    <div className="heading-container">
      <h1>Virtual Library</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search the collection..."
          value={userQuery}
          onChange={handleQuery}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
