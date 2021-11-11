const ShowSelect = function({ pageSize, setPageSize }) {

  const pageSizeOptions = [ 10, 20, 50 ];

  return (
    <>
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
    </>
  );
};

export default ShowSelect;
