import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
gap: .5em;
color: #888;
`;

const ShowSelect = function({ pageSize, setPageSize }) {

  const pageSizeOptions = [ 10, 20, 50, 100 ];

  return (
    <Wrapper>
      <label htmlFor='show'>Show</label>
      <select
        id='show'
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value));
        }}
      >
        {pageSizeOptions.map(pageSize => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
    </select>
    <span>entries</span>
    </Wrapper>
  );
};

export default ShowSelect;
