import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

function SearchInput({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [ value, setValue ] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return(
    <div>
      <label htmlFor='searchInput'>Search : </label>
      <input
        id='search-input'
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
        }}
      />
    </div>
  );
};

export default SearchInput;
