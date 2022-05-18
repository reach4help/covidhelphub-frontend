import React from 'react';
import { SearchWrapper } from './TableStyledComponents';

export default function GlobalFiltering({
  filter,
  setFilter,
}: {
  filter: any;
  setFilter: any;
}) {
  return (
    <SearchWrapper>
      <input
        type="text"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search here..."
      />
    </SearchWrapper>
  );
}
