import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: center;
gap: .5em;
color: #888;
`;

function SearchInput({
  globalFilter,
  setGlobalFilter,
}) {
  const [ value, setValue ] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return(
    <Wrapper>
      <label htmlFor='searchInput'>Search :</label>
      <input
        id='search-input'
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        style={{
          fontSize: '1.1rem',
        }}
      />
    </Wrapper>
  );
};

export default SearchInput;
