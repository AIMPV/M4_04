import React from 'react';

const Search = ({ search, onChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search episodes..."
        className="form-control"
        value={search}
        onChange={onChange}
      />
    </>
  );
};

export default Search;
