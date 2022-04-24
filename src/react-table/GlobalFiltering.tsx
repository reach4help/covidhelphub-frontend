import React from 'react';
import Style from './tableStyle.module.css';

export default function GlobalFiltering({
  filter,
  setFilter,
}: {
  filter: any;
  setFilter: any;
}) {
  return (
    <div className={Style.searchWrapper}>
      <input
        className={Style.searchInput}
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search here..."
      />
    </div>
  );
}
